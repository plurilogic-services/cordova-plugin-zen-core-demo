package com.actian.zen.cordova.plugin;

import android.util.Log;
import android.content.res.AssetManager;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;

import org.json.JSONArray;
import org.json.JSONException;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import com.actian.zen.db.DbManager;

public class CDVDbManager extends CordovaPlugin {

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        Log.i("ActianZen", "CDVDbManager - Initializing DbManager.");
        super.initialize(cordova, webView);
        try {
            initializeLib("zendb.config");
        } catch (IOException ex){
            Log.e("ActianZen", ex.getMessage());
        }
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Log.i("CDVActianZen", String.format("Execute: CDVDbManager::%s", action));
        switch(action) {
            case "Initialize":
                return cdvActionInitialize(args, callbackContext);
            default:
                String msg = String.format("No implementation for : CDVDbManager:%s", action);
                Log.i("ActianZen", msg);
                callbackContext.error(msg);
                return false;
        }
    }

    private boolean cdvActionInitialize(JSONArray args, CallbackContext callbackContext) throws JSONException {
        String fileName = args.getString(0);

        try {
            initializeLib(fileName);
            callbackContext.success();
            return true;
        } catch (IOException ex) {
            callbackContext.error(ex.getMessage());
            return false;
        }
    }

    // #region Helpers
    private void initializeLib(String fileName) throws IOException {
        File filesDir = cordova.getActivity().getApplicationContext().getFilesDir();
        File outFilePath = new File(filesDir, fileName);
        if (!outFilePath.exists()) {
            Log.i("ActianZen", String.format("Did not find %s", fileName));
            // Extract zendb.config from assets and copy to files dir.
            Log.i("ActianZen", String.format("Extracting %s from assets", fileName));
            extractFileFromAssets(fileName, outFilePath);
            Log.i("ActianZen", String.format("Finished extracting %s from assets", fileName));
        }

        DbManager.Initialize(filesDir.getAbsolutePath());
    }
    private void extractFileFromAssets(String assetName, File outfilepath) throws IOException {
        AssetManager assetManager = cordova.getActivity().getApplicationContext().getAssets();
        InputStream infile = assetManager.open(assetName, AssetManager.ACCESS_BUFFER);
        FileOutputStream outfile = new FileOutputStream(outfilepath);
        byte[] buffer = new byte[4096];
        int nread = 0;
        while ((nread = infile.read(buffer)) != -1) {
            outfile.write(buffer, 0, nread);
        }
        infile.close();
        outfile.close();
    }
    // #endregion

    static {
        System.loadLibrary("btrievecppjni");
    }
}