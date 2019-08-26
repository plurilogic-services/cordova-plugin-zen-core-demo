package com.actian.zen.cordova.plugin;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.actian.zen.db.Btrieve;
import com.actian.zen.db.BtrieveBulkCreatePayload;
import com.actian.zen.db.BtrieveBulkCreateResult;
import com.actian.zen.db.BtrieveBulkRetrieveAttributes;
import com.actian.zen.db.BtrieveBulkRetrieveResult;
import com.actian.zen.db.BtrieveFile;
import com.actian.zen.db.BtrieveFileInformation;
import com.actian.zen.db.BtrieveIndexAttributes;

public class CDVBtrieveFile extends CDVBtrieveCordova<BtrieveFile> {
    
    private static CDVBtrieveFile _instance;
    protected static BtrieveFile getBtrieveInstance(JSONObject args) throws JSONException {
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
    
    protected boolean cdvActionGetLastStatusCode(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveFile instance = getInstance(args);
        
        if(instance != null) {
            Btrieve.StatusCode result = instance.GetLastStatusCode();
            callbackContext.success(result.swigValue());
            return true;
        }
    
        callbackContext.error(NO_INSTANCE);
        return false;
    }

    protected boolean cdvActionIndexCreate(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveFile instance = getInstance(args);
        
        if(instance != null) {
            BtrieveIndexAttributes attributes = CDVBtrieveIndexAttributes.getBtrieveInstance(args.getJSONObject(1));

            Btrieve.StatusCode status = instance.IndexCreate(attributes);
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

    protected boolean cdvActionRecordCreate(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveFile instance = getInstance(args);
        
        if(instance != null) {
            byte[] record = unpackByteArray(args.getJSONObject(1));

            Btrieve.StatusCode status = instance.RecordCreate(record);
            if(status != Btrieve.StatusCode.STATUS_CODE_NO_ERROR) {
                callbackContext.error(status.swigValue());
                return false;
            }
            callbackContext.success(record);
            return true;
        }
    
        callbackContext.error(NO_INSTANCE);
        return false;
    }

    protected boolean cdvActionRecordDelete(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveFile instance = getInstance(args);
        
        if(instance != null) {
            Btrieve.StatusCode status = instance.RecordDelete();
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

    protected boolean cdvActionRecordRetrieve(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveFile instance = getInstance(args);
        
        if(instance != null) {
            int enumIndex = args.getInt(1);
            Btrieve.Comparison comparison = Btrieve.Comparison.swigToEnum(enumIndex);
            enumIndex = args.getInt(2);
            Btrieve.Index index = Btrieve.Index.swigToEnum(enumIndex);
            byte[] key = unpackByteArray(args.getJSONObject(3));
            int recordSize = args.getInt(4);
            enumIndex = args.getInt(5);
            Btrieve.LockMode lockMode = Btrieve.LockMode.swigToEnum(enumIndex);

            byte[] record = new byte[recordSize];

            int result = instance.RecordRetrieve(comparison, index, key, record, lockMode);
            if(result < 0) {
                Btrieve.StatusCode status = instance.GetLastStatusCode();
                callbackContext.error(status.swigValue());
                return false;
            }
            callbackContext.success(record);
            return true;
        }
    
        callbackContext.error(NO_INSTANCE);
        return false;
    }

    protected boolean cdvActionRecordRetrieveByCursorPosition(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveFile instance = getInstance(args);
        
        if(instance != null) {
            int enumIndex = args.getInt(1);
            Btrieve.Index index = Btrieve.Index.swigToEnum(enumIndex);
            long cursorPosition = args.getLong(2);
            int recordSize = args.getInt(3);
            enumIndex = args.getInt(4);
            Btrieve.LockMode lockMode = Btrieve.LockMode.swigToEnum(enumIndex);

            byte[] record = new byte[recordSize];

            int result = instance.RecordRetrieveByCursorPosition(index, cursorPosition, record, lockMode);
            if(result < 0) {
                Btrieve.StatusCode status = instance.GetLastStatusCode();
                callbackContext.error(status.swigValue());
                return false;
            }
            callbackContext.success(record);
            return true;
        }
    
        callbackContext.error(NO_INSTANCE);
        return false;
    }

    protected boolean cdvActionRecordRetrieveFirst(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveFile instance = getInstance(args);
        
        if(instance != null) {
            int enumIndex = args.getInt(1);
            Btrieve.Index index = Btrieve.Index.swigToEnum(enumIndex);
            int recordSize = args.getInt(2);
            enumIndex = args.getInt(3);
            Btrieve.LockMode lockMode = Btrieve.LockMode.swigToEnum(enumIndex);

            byte[] record = new byte[recordSize];

            int result = instance.RecordRetrieveFirst(index, record, lockMode);
            if(result < 0) {
                Btrieve.StatusCode status = instance.GetLastStatusCode();
                callbackContext.error(status.swigValue());
                return false;
            }
            callbackContext.success(record);
            return true;
        }
    
        callbackContext.error(NO_INSTANCE);
        return false;
    }

    protected boolean cdvActionRecordRetrieveNext(JSONArray args, CallbackContext callbackContext) throws JSONException {
        BtrieveFile instance = getInstance(args);
        
        if(instance != null) {
            int recordSize = args.getInt(1);
            int enumIndex = args.getInt(2);
            Btrieve.LockMode lockMode = Btrieve.LockMode.swigToEnum(enumIndex);

            byte[] record = new byte[recordSize];

            int result = instance.RecordRetrieveNext(record, lockMode);
            if(result < 0) {
                Btrieve.StatusCode status = instance.GetLastStatusCode();
                callbackContext.error(status.swigValue());
                return false;
            }
            callbackContext.success(record);
            return true;
        }
    
        callbackContext.error(NO_INSTANCE);
        return false;
    }
    // #endregion

    // #region Helpers
    @Override
    protected BtrieveFile create(JSONArray args) {
        return create();
    }

    protected BtrieveFile create() {
        return new BtrieveFile();
    }

    @Override
    protected void delete(BtrieveFile instance) {
        instance.delete();
    }
    // #endregion

}