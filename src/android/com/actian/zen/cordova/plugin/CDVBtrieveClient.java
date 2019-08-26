package com.actian.zen.cordova.plugin;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.actian.zen.db.Btrieve;
import com.actian.zen.db.BtrieveClient;
import com.actian.zen.db.BtrieveFile;
import com.actian.zen.db.BtrieveFileAttributes;
import com.actian.zen.db.BtrieveIndexAttributes;
import com.actian.zen.db.BtrieveVersion;

import java.io.File;

public class CDVBtrieveClient extends CDVBtrieveCordova<BtrieveClient> {
    
    private static CDVBtrieveClient _instance;
    protected static BtrieveClient getBtrieveInstance(JSONObject args) throws JSONException {
        return _instance.getInstance(args);
    }
    
    protected static JSONObject createBtrieveObject(int serviceAgentIdentifier, int clientIdentifier) throws JSONException {
        JSONArray args = new JSONArray();
        args.put(serviceAgentIdentifier);
        args.put(clientIdentifier);
        return _instance.addInstance(_instance.create(args));
    }
    
    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        if(_instance == null) {
            _instance = this;
        }
//        getInstance("","")
    }

    // #region Actions
    @Override
    protected boolean cdvActionCreate(JSONArray args, CallbackContext callbackContext) throws JSONException {
        return super.cdvActionCreate(args, callbackContext);
    }

    @Override
    protected boolean cdvActionDestroy(JSONArray args, CallbackContext callbackContext) throws JSONException {
        return super.cdvActionDestroy(args, callbackContext);
    }
    
    protected boolean cdvActionFileClose(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveClient instance = getInstance(args);
        
        if(instance != null) {
            BtrieveFile file = CDVBtrieveFile.getBtrieveInstance(args.getJSONObject(1));

            Btrieve.StatusCode status = instance.FileClose(file);
            if(status != Btrieve.StatusCode.STATUS_CODE_NO_ERROR) {
                callbackContext.error(status.swigValue());
                return false;
            }
            callbackContext.success(status.swigValue());
            return true;
        }
    
        callbackContext.error(NO_INSTANCE);
        return false;
    }

    protected boolean cdvActionFileCreate(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveClient instance = getInstance(args);
        
        if(instance != null) {
            Btrieve.StatusCode status;
            File filesDir = cordova.getActivity().getApplicationContext().getFilesDir();
            if(args.length() == 5) {
                BtrieveFileAttributes attributes = CDVBtrieveFileAttributes.getBtrieveInstance(args.getJSONObject(1));
                String fileName = new File(filesDir, args.getString(2)).getAbsolutePath();
                int enumIndex = args.getInt(3);
                Btrieve.CreateMode createMode = Btrieve.CreateMode.swigToEnum(enumIndex);
                enumIndex = args.getInt(4);
                Btrieve.LocationMode locationMode = Btrieve.LocationMode.swigToEnum(enumIndex);

                status = instance.FileCreate(attributes, fileName, createMode, locationMode);
            } else {
                BtrieveFileAttributes attributes = CDVBtrieveFileAttributes.getBtrieveInstance(args.getJSONObject(1));
                BtrieveIndexAttributes indexAttributes = CDVBtrieveIndexAttributes.getBtrieveInstance(args.getJSONObject(2));
                String fileName = new File(filesDir, args.getString(3)).getAbsolutePath();
                int enumIndex = args.getInt(4);
                Btrieve.CreateMode createMode = Btrieve.CreateMode.swigToEnum(enumIndex);
                enumIndex = args.getInt(5);
                Btrieve.LocationMode locationMode = Btrieve.LocationMode.swigToEnum(enumIndex);

                status = instance.FileCreate(attributes, fileName, createMode, locationMode);
            }


            if(status != Btrieve.StatusCode.STATUS_CODE_NO_ERROR) {
                callbackContext.error(status.swigValue());
                return false;
            }
            callbackContext.success(status.swigValue());
            return true;
        }
    
        callbackContext.error(NO_INSTANCE);
        return false;
    }

    protected boolean cdvActionFileOpen(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveClient instance = getInstance(args);
        
        if(instance != null) {
            JSONObject result = CDVBtrieveFile.createBtrieveObject();

            BtrieveFile file = CDVBtrieveFile.getBtrieveInstance(result);
            File filesDir = cordova.getActivity().getApplicationContext().getFilesDir();
            String fileName = new File(filesDir, args.getString(1)).getAbsolutePath();
            String ownerName = args.getString(2);
            int enumIndex = args.getInt(3);
            Btrieve.OpenMode openMode = Btrieve.OpenMode.swigToEnum(enumIndex);
            enumIndex = args.getInt(4);
            Btrieve.LocationMode locationMode = Btrieve.LocationMode.swigToEnum(enumIndex);

            Btrieve.StatusCode status = instance.FileOpen(file, fileName, ownerName, openMode, locationMode);
            if(status != Btrieve.StatusCode.STATUS_CODE_NO_ERROR) {
                callbackContext.error(status.swigValue());
                return false;
            }
            callbackContext.success(result);
            return true;
        }
    
        callbackContext.error(NO_INSTANCE);
        return false;
    }

    protected boolean cdvActionGetLastStatusCode(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveClient instance = getInstance(args);
        
        if(instance != null) {
            Btrieve.StatusCode result = instance.GetLastStatusCode();
            callbackContext.success(result.swigValue());
            return true;
        }
    
        callbackContext.error(NO_INSTANCE);
        return false;
    }
    // #endregion

    // #region Helpers
    @Override
    protected BtrieveClient create(JSONArray args) throws JSONException {
        int serviceAgentIdentifier = args.getInt(0);
        int clientIdentifier = args.getInt(1);
        return new BtrieveClient(serviceAgentIdentifier, clientIdentifier);
    }

    @Override
    protected void delete(BtrieveClient instance) {
        instance.delete();
    }
    // #endregion

}