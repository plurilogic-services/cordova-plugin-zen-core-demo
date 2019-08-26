package com.actian.zen.cordova.plugin;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.actian.zen.db.Btrieve;
import com.actian.zen.db.BtrieveFileAttributes;

public class CDVBtrieveFileAttributes extends CDVBtrieveCordova<BtrieveFileAttributes> {
    
    private static CDVBtrieveFileAttributes _instance;
    protected static BtrieveFileAttributes getBtrieveInstance(JSONObject args) throws JSONException {
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
    
    protected boolean cdvActionSetFixedRecordLength(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveFileAttributes instance = getInstance(args);
        int fixedRecordLength = args.getInt(1);

        if(instance != null) {
            Btrieve.StatusCode status = instance.SetFixedRecordLength(fixedRecordLength);
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
    protected BtrieveFileAttributes create(JSONArray args) {
        return create();
    }

    protected BtrieveFileAttributes create() {
        return new BtrieveFileAttributes();
    }

    @Override
    protected void delete(BtrieveFileAttributes instance) {
        instance.delete();
    }
    // #endregion

}