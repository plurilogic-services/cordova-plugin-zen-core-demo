package com.actian.zen.cordova.plugin;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.actian.zen.db.Btrieve;
import com.actian.zen.db.BtrieveKeySegment;

public class CDVBtrieveKeySegment extends CDVBtrieveCordova<BtrieveKeySegment> {

    private static CDVBtrieveKeySegment _instance;
    protected static BtrieveKeySegment getBtrieveInstance(JSONObject args) throws JSONException {
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
    
    protected boolean cdvActionSetField(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveKeySegment instance = getInstance(args);
        int offset = args.getInt(1);
        int length = args.getInt(2);
        int enumIndex = args.getInt(3);
        Btrieve.DataType dataType = Btrieve.DataType.swigToEnum(enumIndex);

        if(instance != null) {
            Btrieve.StatusCode status = instance.SetField(offset, length, dataType);
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
    protected BtrieveKeySegment create(JSONArray args) {
        return create();
    }

    protected BtrieveKeySegment create() {
        return new BtrieveKeySegment();
    }

    @Override
    protected void delete(BtrieveKeySegment instance) {
        instance.delete();
    }
    // #endregion

}