/*! © 2019 Actian Corporation, All Rights Reserved. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../node_modules/@types/cordova/index.d.ts" />
var BtrieveCordova_1 = require("./BtrieveCordova");
var Btrieve = require("./Btrieve");
var BtrieveFile = require("./BtrieveFile");
var BtrieveIndexAttributes = require("./BtrieveIndexAttributes");
var BtrieveClient = /** @class */ (function (_super) {
    __extends(BtrieveClient, _super);
    // #endregion
    // #region Instance
    /**
    * Private constructor
    *
    * Since instanciation of native objects will be Asynchronous,
    * instanciating with `new` shoud never be done in javascript.
    * This should only be called by the cordova callback
    *
    * Use @see BtrieveClient.Create instead
    */
    function BtrieveClient(refId, refHashCode, _check) {
        return _super.call(this, refId, refHashCode, _check) || this;
    }
    // #region Static
    /**
    * Asynchronous constructor
    *
    * @param serviceAgentIdentifier The service agent identifier.
    * @param clientIdentifier The client identifier.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.Create = function (serviceAgentIdentifier, clientIdentifier, success, fail) {
        var HASH_CODE_PREFIX = "" + BtrieveCordova_1.HASH_PREFIX + BtrieveClient.name;
        var SECRET = HASH_CODE_PREFIX + "@" + BtrieveCordova_1.TERCES;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) {
            var instance = new BtrieveClient(result._refId, result._hashCode, SECRET);
            if (success && typeof success === 'function') {
                success(instance);
            }
        }, fail, 'CDV' + BtrieveClient.name, 'Create', [serviceAgentIdentifier, clientIdentifier]);
    };
    // #region API
    /**
    * Begin continuous operation
    *
    * @param pathNames The path names
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.ContinuousOperationBegin = function (pathNames, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * End continuous operation
    *
    * @param pathNames The path names
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.ContinuousOperationEnd = function (pathNames, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Close a file
    *
    * @param btrieveFile The Btrieve file.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.FileClose = function (btrieveFile, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'FileClose', [this, btrieveFile]);
    };
    /**
    * Overloads implementation
    */
    BtrieveClient.prototype.FileCreate = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        var _this = this;
        var args = [];
        args.push(this);
        var success, fail;
        if (arg2 instanceof BtrieveIndexAttributes) {
            args.push(arg1); // btrieveFileAttributes
            args.push(arg2); // btrieveIndexAttributes
            args.push(arg3); // fileName
            args.push(arg4); // createMode 
            if (arg5 === undefined)
                arg4 = Btrieve.LocationMode.LOCATION_MODE_NO_PREFERENCE;
            args.push(arg5); // locationMode 
            success = arg6;
            fail = arg7;
        }
        else {
            args.push(arg1); // btrieveFileAttributes
            args.push(arg2); // fileName
            args.push(arg3); // createMode
            if (arg4 === undefined)
                arg4 = Btrieve.LocationMode.LOCATION_MODE_NO_PREFERENCE;
            args.push(arg4); // locationMode 
            success = arg5;
            fail = arg6;
        }
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'FileCreate', args);
    };
    /**
    * Delete a file.
    *
    * @param fileName The file name.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.FileDelete = function (fileName, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Open a file.
    *
    * @param fileName The file name.
    * @param ownerName The owner name.
    * @param openMode The open mode.
    * @param locationMode The location mode.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.FileOpen = function (fileName, ownerName, openMode, locationMode, success, fail) {
        var _this = this;
        if (locationMode === void 0) { locationMode = Btrieve.LocationMode.LOCATION_MODE_NO_PREFERENCE; }
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) {
            var instance = Object.create(BtrieveFile.prototype, {
                _refId: { value: result._refId, writable: false },
                _hashCode: { value: result._hashCode, writable: false }
            });
            success(instance);
        }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'FileOpen', [this, fileName, ownerName, openMode, locationMode]);
    };
    /**
    * Rename a file.
    *
    * @param existingFileName The existing file name.
    * @param newFileName The new file name.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.FileRename = function (existingFileName, newFileName, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the client identifier.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.GetClientIdentifier = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the current directory.
    *
    * @param diskDrive The disk drive. Non-Windows based systems must use `DISK_DRIVE_DEFAULT`.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.GetCurrentDirectory = function (diskDrive, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the last status code.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.GetLastStatusCode = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLastStatusCode', [this]);
    };
    /**
    * Get the service agent identifier.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.GetServiceAgentIdentifier = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the version
    *
    * @param btrieveFile The Btrieve file.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.GetVersion = function (btrieveFile, success, fail) {
        if (btrieveFile === void 0) { btrieveFile = null; }
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Login
    *
    * @param databaseURI The database uniform resource indicator.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.Login = function (databaseURI, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Logout
    *
    * @param databaseURI The database uniform resource indicator.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.Logout = function (databaseURI, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Reset.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.Reset = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Set the current directory.
    *
    * @param currentDirectory The current directory.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.SetCurrentDirectory = function (currentDirectory, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Stop.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.Stop = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Abort a transaction.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.TransactionAbort = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Begin a transaction.
    *
    * @param transactionMode The transaction mode.
    * @param lockMode The lock mode.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.TransactionBegin = function (transactionMode, lockMode, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * End a transaction.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveClient.prototype.TransactionEnd = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    return BtrieveClient;
}(BtrieveCordova_1.BtrieveCordova));
module.exports = BtrieveClient;
