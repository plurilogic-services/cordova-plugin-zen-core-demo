package com.actian.zen.cordova.plugin;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.actian.zen.db.Btrieve;
import com.actian.zen.db.BtrieveIndexAttributes;
import com.actian.zen.db.BtrieveKeySegment;

public class CDVBtrieveIndexAttributes extends CDVBtrieveCordova<BtrieveIndexAttributes> {
    
    private static CDVBtrieveIndexAttributes _instance;
    protected static BtrieveIndexAttributes getBtrieveInstance(JSONObject args) throws JSONException {
        return _instance.getInstance(args);
    }

    protected static JSONObject createBtrieveObject() throws JSONException {
        return _instance.addInstance(_instance.create());
    }
    
    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        if(_instance == null) {
            _instance = this;
        }
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

    protected boolean cdvActionAddKeySegment(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveIndexAttributes instance = getInstance(args);
        BtrieveKeySegment btrieveKeySegment = CDVBtrieveKeySegment.getBtrieveInstance(args.getJSONObject(1));

        if(instance != null) {
            Btrieve.StatusCode status = instance.AddKeySegment(btrieveKeySegment);
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
    // #endregion

    // #region Helpers
    @Override
    protected BtrieveIndexAttributes create(JSONArray args) {
        return create();
    }

    protected BtrieveIndexAttributes create() {
        return new BtrieveIndexAttributes();
    }

    @Override
    protected void delete(BtrieveIndexAttributes instance) {
        instance.delete();
    }
    // #endregion

}