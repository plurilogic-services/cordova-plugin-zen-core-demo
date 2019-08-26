package com.actian.zen.cordova.plugin;

import android.util.Log;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;

import org.json.JSONArray;
import org.json.JSONException;

import com.actian.zen.db.Btrieve;

/**
 * This class echoes a string called from JavaScript.
 */
public class CDVBtrieve extends CordovaPlugin {

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        Log.i("ActianZen", "Initializing CDVBtrieve.");
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Log.i("ActianZen", String.format("Execute: %s", action));
        switch(action) {
            case "ACSModeToString":
                return ACSModeToString(args, callbackContext);
            case "DataTypeToString":
                return DataTypeToString(args, callbackContext);
            case "DuplicateModeToString":
                return DuplicateModeToString(args, callbackContext);
            case "FileVersionToString":
                return FileVersionToString(args, callbackContext);
            case "FreeSpaceThresholdToString":
                return FreeSpaceThresholdToString(args, callbackContext);
            case "IndexToString":
                return IndexToString(args, callbackContext);
            case "LockModeToString":
                return LockModeToString(args, callbackContext);
            case "NullKeyModeToString":
                return NullKeyModeToString(args, callbackContext);
            case "OwnerModeToString":
                return OwnerModeToString(args, callbackContext);
            case "PageLockTypeToString":
                return PageLockTypeToString(args, callbackContext);
            case "PageSizeToString":
                return PageSizeToString(args, callbackContext);
            case "RecordCompressionModeToString":
                return RecordCompressionModeToString(args, callbackContext);
            case "StatusCodeToString":
                return StatusCodeToString(args, callbackContext);
            case "SystemDataModeToString":
                return SystemDataModeToString(args, callbackContext);
            case "VariableLengthRecordsModeToString":
                return VariableLengthRecordsModeToString(args, callbackContext);
            case "VersionTypeToString":
                return VersionTypeToString(args, callbackContext);
            case "UnixEpochMicrosecondsToTimestamp":
                // return UnixEpochMicrosecondsToTimestamp(args, callbackContext);
            case "TimestampToUnixEpochMicroseconds":
                // return TimestampToUnixEpochMicroseconds(args, callbackContext);
            default:
                String msg = String.format("No implementation for : CDVBtrieve::%s", action);
                Log.i("ActianZen", msg);
                callbackContext.error(msg);
                return false;
        }
    }

    private boolean ACSModeToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.ACSMode enumValue = Btrieve.ACSMode.swigToEnum(enumIndex);
        String enumString = Btrieve.ACSModeToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean DataTypeToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.DataType enumValue = Btrieve.DataType.swigToEnum(enumIndex);
        String enumString = Btrieve.DataTypeToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean DuplicateModeToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.DuplicateMode enumValue = Btrieve.DuplicateMode.swigToEnum(enumIndex);
        String enumString = Btrieve.DuplicateModeToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean FileVersionToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.FileVersion enumValue = Btrieve.FileVersion.swigToEnum(enumIndex);
        String enumString = Btrieve.FileVersionToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean FreeSpaceThresholdToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.FreeSpaceThreshold enumValue = Btrieve.FreeSpaceThreshold.swigToEnum(enumIndex);
        String enumString = Btrieve.FreeSpaceThresholdToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean IndexToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.Index enumValue = Btrieve.Index.swigToEnum(enumIndex);
        String enumString = Btrieve.IndexToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean LockModeToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.LockMode enumValue = Btrieve.LockMode.swigToEnum(enumIndex);
        String enumString = Btrieve.LockModeToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean NullKeyModeToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.NullKeyMode enumValue = Btrieve.NullKeyMode.swigToEnum(enumIndex);
        String enumString = Btrieve.NullKeyModeToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean OwnerModeToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.OwnerMode enumValue = Btrieve.OwnerMode.swigToEnum(enumIndex);
        String enumString = Btrieve.OwnerModeToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean PageLockTypeToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.PageLockType enumValue = Btrieve.PageLockType.swigToEnum(enumIndex);
        String enumString = Btrieve.PageLockTypeToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean PageSizeToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.PageSize enumValue = Btrieve.PageSize.swigToEnum(enumIndex);
        String enumString = Btrieve.PageSizeToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean RecordCompressionModeToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.RecordCompressionMode enumValue = Btrieve.RecordCompressionMode.swigToEnum(enumIndex);
        String enumString = Btrieve.RecordCompressionModeToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean StatusCodeToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.StatusCode enumValue = Btrieve.StatusCode.swigToEnum(enumIndex);
        String enumString = Btrieve.StatusCodeToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean SystemDataModeToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.SystemDataMode enumValue = Btrieve.SystemDataMode.swigToEnum(enumIndex);
        String enumString = Btrieve.SystemDataModeToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean VariableLengthRecordsModeToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.VariableLengthRecordsMode enumValue = Btrieve.VariableLengthRecordsMode.swigToEnum(enumIndex);
        String enumString = Btrieve.VariableLengthRecordsModeToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean VersionTypeToString(JSONArray args, CallbackContext callbackContext) throws JSONException {
        int enumIndex = args.getInt(0);
        Btrieve.VersionType enumValue = Btrieve.VersionType.swigToEnum(enumIndex);
        String enumString = Btrieve.VersionTypeToString(enumValue);
        callbackContext.success(enumString);
        return true;
    }

    private boolean UnixEpochMicrosecondsToTimestamp(JSONArray args, CallbackContext callbackContext) throws JSONException {
        return false;
    }

    private boolean TimestampToUnixEpochMicroseconds(JSONArray args, CallbackContext callbackContext) throws JSONException {
        return false;
    }

    static {
        System.loadLibrary("btrievecppjni");
    }
}
