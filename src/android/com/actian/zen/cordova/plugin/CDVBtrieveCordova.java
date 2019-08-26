package com.actian.zen.cordova.plugin;

import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.UUID;


public abstract class CDVBtrieveCordova<T> extends CordovaPlugin {
    
    // #region Static
    protected static final String NO_INSTANCE = "Native instance not found";
    // #endregion

    protected HashMap<String, T> instances;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        Log.i("ActianZen", String.format("Initializing %s.", this.getClass().getName()));
        if(instances == null){
            instances = new HashMap<String, T>();
        }
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        try {
            Method method = this.getClass().getDeclaredMethod("cdvAction" + action, JSONArray.class, CallbackContext.class);
            return (boolean)method.invoke(this, args, callbackContext);
        } catch (NoSuchMethodException ex) {
            String msg = String.format("No implementation for %s::%s()", this.getClass().getName(), action);
            Log.i("ActianZen", msg);
            Log.i("ActianZen", ex.getMessage());
            callbackContext.error(msg);
            return false;
        } catch (InvocationTargetException ex) {
            String msg = String.format("Error invoking %s::%s()", this.getClass().getName(), action);
            Log.i("ActianZen", msg);
            if(ex.getMessage() != null) {
                Log.i("ActianZen", ex.getMessage());
            }
            if(ex.getTargetException() != null && ex.getTargetException().getMessage() != null) {
                Log.i("ActianZen", ex.getTargetException().getMessage());
                if(ex.getTargetException() instanceof IllegalArgumentException || ex.getTargetException() instanceof JSONException) {
                    msg += " caused by " + ex.getTargetException().getClass().getName() + " " + ex.getTargetException().getMessage();
                }
            }
            callbackContext.error(msg);
            return false;
        } catch (IllegalAccessException ex) {
            String msg = String.format("Illegal access for %s::%s()", this.getClass().getName(), action);
            Log.i("ActianZen", msg);
            callbackContext.error(msg);
            return false;
        }
    }

    // #region API
    protected boolean cdvActionCreate(JSONArray args, CallbackContext callbackContext) throws JSONException {
        JSONObject result = this.addInstance(create(args));

        callbackContext.success(result);
        return true;
    }

    protected boolean cdvActionDestroy(JSONArray args, CallbackContext callbackContext) throws JSONException {
        JSONObject obj = args.getJSONObject(0);

        String refId = obj.getString("_refId");
        String hash = obj.getString("_hashCode");
        T instance = getInstance(refId, hash);

        if(instance != null) {
            delete(instance);
            instances.remove(refId);
            callbackContext.success();
            return true;
        }

        callbackContext.error(NO_INSTANCE);
        return false;
    }
    // #endregion

    // #region Helpers
    // #region Instantiation & Reference
    protected JSONObject toJSON(String refId) throws JSONException {
        JSONObject result = new JSONObject();

        result.put("_refId", refId);
        result.put("_hashCode", instances.get(refId));

        return result;
    }

    protected JSONObject addInstance(T instance) throws JSONException {
        String refId;
        do {
            refId = UUID.randomUUID().toString();
        } while(instances.containsKey(refId));

        instances.put(refId, instance);

        JSONObject result = this.toJSON(refId);

        return result;
    }

    protected T getInstance(JSONArray args) throws JSONException {
        return getInstance(args.getJSONObject(0));
    }

    protected T getInstance(JSONObject obj) throws JSONException {
        if(!obj.has("_refId") || !obj.has("_hashCode")) {
            return null;
        }
        String refId = obj.getString("_refId");
        String hashCode = obj.getString("_hashCode");

        return getInstance(refId, hashCode);
    }

    protected T getInstance(String refId, String hash) {
        if( instances.containsKey(refId) ) {
            T instance = instances.get(refId);
            if(instance.toString().equals(hash)) {
                return instance;
            }
        }

        return null;
    }
    // #endregion

    protected JSONArray packLong(long unpacked) {
        JSONArray packed = new JSONArray();
        packed.put(unpacked);
        return packed;
    }

    protected byte[] unpackByteArray(JSONObject packed) throws JSONException {
        int length = packed.length();
        byte[] record = new byte[length];

        for(int i = 0; i < length; i++) {
            record[i] = (byte)packed.getInt(""+i);
        }

        return record;
    }

    protected abstract T create(JSONArray args) throws JSONException;

    protected abstract void delete(T instance);
    // #endregion

    static {
        System.loadLibrary("btrievecppjni");
    }
}