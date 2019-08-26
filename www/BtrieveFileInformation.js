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
var BtrieveKeySegment = require("./BtrieveKeySegment");
var BtrieveFileInformation = /** @class */ (function (_super) {
    __extends(BtrieveFileInformation, _super);
    // #endregion
    // #region Instance
    /**
    * Private constructor
    *
    * Since instanciation of native objects will be Asynchronous,
    * instanciating with `new` shoud never be done in javascript.
    * This should only be called by the cordova callback
    *
    * Use @see BtrieveFileInformation.Create instead
    */
    function BtrieveFileInformation(refId, refHashCode, _check) {
        return _super.call(this, refId, refHashCode, _check) || this;
    }
    // #region Static
    /**
    * Asynchronous constructor
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.Create = function (success, fail) {
        var HASH_CODE_PREFIX = "" + BtrieveCordova_1.HASH_PREFIX + BtrieveFileInformation.name;
        var SECRET = HASH_CODE_PREFIX + "@" + BtrieveCordova_1.TERCES;
        cordova.exec(function (result) {
            var instance = new BtrieveFileInformation(result._refId, result._hashCode, SECRET);
            if (success && typeof success === 'function') {
                success(instance);
            }
        }, fail, 'CDV' + BtrieveFileInformation.name, 'Create', []);
    };
    // #region API
    /**
    * Get balanced indexes.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetBalancedIndexes = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetBalancedIndexes', [this]);
    };
    /**
    * Get client transactions
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetClientTransactions = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetClientTransactions', [this]);
    };
    /**
    * Get continuous operation.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetContinuousOperation = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetContinuousOperation', [this]);
    };
    /**
    * Get the duplicate record conflict cursor position
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetDuplicateRecordConflictCursorPosition = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetDuplicateRecordConflictCursorPosition', [this]);
    };
    /**
    * Get the duplicate record conflict index.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetDuplicateRecordConflictIndex = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetDuplicateRecordConflictIndex', [this]);
    };
    /**
    * Get explicit locks
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetExplicitLocks = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetExplicitLocks', [this]);
    };
    /**
    * Get the file version
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetFileVersion = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetFileVersion', [this]);
    };
    /**
    * Get the fixed record length.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetFixedRecordLength = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetFixedRecordLength', [this]);
    };
    /**
    * Get the free space threshold.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetFreeSpaceThreshold = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetFreeSpaceThreshold', [this]);
    };
    /**
    * Get the gateway major version
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetGatewayMajorVersion = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetGatewayMajorVersion', [this]);
    };
    /**
    * Get the gateway minor version.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetGatewayMinorVersion = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetGatewayMinorVersion', [this]);
    };
    /**
    * Get the gateway name.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetGatewayName = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetGatewayName', [this]);
    };
    /**
    * Get the gateway patch level.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetGatewayPatchLevel = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetGatewayPatchLevel', [this]);
    };
    /**
    * Get the gateway platform.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetGatewayPlatform = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetGatewayPlatform', [this]);
    };
    /**
    * Get the handle cound
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetHandleCount = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetHandleCount', [this]);
    };
    /**
    * Get the identifier
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetIdentifier = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetIdentifier', [this]);
    };
    /**
    * Get the index count
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetIndexCount = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetIndexCount', [this]);
    };
    /**
    * Get key only.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetKeyOnly = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetKeyOnly', [this]);
    };
    /**
    * Get a key segment
    *
    * @param keySegmentNumber The key segment number. The number is one-based.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetKeySegment = function (keySegmentNumber, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) {
            var instance = Object.create(BtrieveKeySegment.prototype, {
                _refId: { value: result._refId, writable: false },
                _hashCode: { value: result._hashCode, writable: false }
            });
            success(instance);
        }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetKeySegment', [this, keySegmentNumber]);
    };
    /**
    * Get the last status code
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLastStatusCode = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLastStatusCode', [this]);
    };
    /**
    * Get the lock owner client identifier
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLockOwnerClientIdentifier = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLockOwnerClientIdentifier', [this]);
    };
    /**
    * Get the lock owner explicit lock mode
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLockOwnerExplicitLockMode = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLockOwnerExplicitLockMode', [this]);
    };
    /**
    * Get lock owner file lock
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLockOwnerFileLock = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLockOwnerFileLock', [this]);
    };
    /**
    * Get lock owner implicit lock
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLockOwnerImplicitLock = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLockOwnerImplicitLock', [this]);
    };
    /**
    * Get the lock owner index
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLockOwnerIndex = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLockOwnerIndex', [this]);
    };
    /**
    * Get the lock owner name.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLockOwnerName = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLockOwnerName', [this]);
    };
    /**
    * Get the lock owner page lock type
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLockOwnerPageLockType = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLockOwnerPageLockType', [this]);
    };
    /**
    * Get lock owner record lock
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLockOwnerRecordLock = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLockOwnerRecordLock', [this]);
    };
    /**
    * Get lock owner same process
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLockOwnerSameProcess = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLockOwnerSameProcess', [this]);
    };
    /**
    * Get the lock owner service agent identifier.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLockOwnerServiceAgentIdentifier = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLockOwnerServiceAgentIdentifier', [this]);
    };
    /**
    * Get the lock owner time in transaction.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLockOwnerTimeInTransaction = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLockOwnerTimeInTransaction', [this]);
    };
    /**
    * Get the lock owner transaction level.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLockOwnerTransactionLevel = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLockOwnerTransactionLevel', [this]);
    };
    /**
    * Get lock owner write hold.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLockOwnerWriteHold = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLockOwnerWriteHold', [this]);
    };
    /**
    * Get lock owner write no wait.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLockOwnerWriteNoWait = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLockOwnerWriteNoWait', [this]);
    };
    /**
    * Get loggable
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLoggable = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLoggable', [this]);
    };
    /**
    * Get the log index.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetLogIndex = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLogIndex', [this]);
    };
    /**
    * Get the open timestamp.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetOpenTimestamp = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetOpenTimestamp', [this]);
    };
    /**
    * Get the owner mode.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetOwnerMode = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetOwnerMode', [this]);
    };
    /**
    * Get page compression
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetPageCompression = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetPageCompression', [this]);
    };
    /**
    * Get page preallocation.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetPagePreallocation = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetPagePreallocation', [this]);
    };
    /**
    * Get the page size.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetPageSize = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetPageSize', [this]);
    };
    /**
    * Get read only.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetReadOnly = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetReadOnly', [this]);
    };
    /**
    * Get the record compression mode.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetRecordCompressionMode = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetRecordCompressionMode', [this]);
    };
    /**
    * Get the record count.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetRecordCount = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return _this.unpackLong(result); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetRecordCount', [this]);
    };
    /**
    * Get referential integrity constraints
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetReferentialIntegrityConstraints = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetReferentialIntegrityConstraints', [this]);
    };
    /**
    * Get the referential integrity cursor position.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetReferentialIntegrityCursorPosition = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return _this.unpackLong(result); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetReferentialIntegrityCursorPosition', [this]);
    };
    /**
    * Get the referential integrity file name.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetReferentialIntegrityFileName = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetReferentialIntegrityFileName', [this]);
    };
    /**
    * Get the referential integrity operation code.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetReferentialIntegrityOperationCode = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetReferentialIntegrityOperationCode', [this]);
    };
    /**
    * Get security current database authentication by database.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityCurrentDatabaseAuthenticationByDatabase = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityCurrentDatabaseAuthenticationByDatabase', [this]);
    };
    /**
    * Get security current database authentication by database.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityCurrentDatabaseAuthorizationByDatabase = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityCurrentDatabaseAuthorizationByDatabase', [this]);
    };
    /**
    * Get security current database Btpasswd.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityCurrentDatabaseBtpasswd = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityCurrentDatabaseBtpasswd', [this]);
    };
    /**
    * Get security current database explicit.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityCurrentDatabaseExplicit = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityCurrentDatabaseExplicit', [this]);
    };
    /**
    * Get security current database implicit.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityCurrentDatabaseImplicit = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityCurrentDatabaseImplicit', [this]);
    };
    /**
    * Get the security current database name.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityCurrentDatabaseName = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityCurrentDatabaseName', [this]);
    };
    /**
    * Get security current database PAM (Pluggable Authentication Module)
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityCurrentDatabasePAM = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityCurrentDatabasePAM', [this]);
    };
    /**
    * Get security current database RTSS (Runtime Server Support) complete.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityCurrentDatabaseRTSSComplete = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityCurrentDatabaseRTSSComplete', [this]);
    };
    /**
    * Get security current database RTSS (Runtime Server Support) disabled.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityCurrentDatabaseRTSSDisabled = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityCurrentDatabaseRTSSDisabled', [this]);
    };
    /**
    * Get security current database RTSS (Runtime Server Support) preauthorized.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityCurrentDatabaseRTSSPreauthorized = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityCurrentDatabaseRTSSPreauthorized', [this]);
    };
    /**
    * Get security current database trusted.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityCurrentDatabaseTrusted = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityCurrentDatabaseTrusted', [this]);
    };
    /**
    * Get security current database Windows named pipe.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityCurrentDatabaseWindowsNamedPipe = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityCurrentDatabaseWindowsNamedPipe', [this]);
    };
    /**
    * Get security current database workgroup.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityCurrentDatabaseWorkgroup = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityCurrentDatabaseWorkgroup', [this]);
    };
    /**
    * Get the security current user name.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityCurrentUserName = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityCurrentUserName', [this]);
    };
    /**
    * Get security handle authentication by database.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandleAuthenticationByDatabase = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandleAuthenticationByDatabase', [this]);
    };
    /**
    * Get security handle authorization by database.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandleAuthorizationByDatabase = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandleAuthorizationByDatabase', [this]);
    };
    /**
    * Get security handle Btpasswd.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandleBtpasswd = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandleBtpasswd', [this]);
    };
    /**
    * Get the security handle database name.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandleDatabaseName = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandleDatabaseName', [this]);
    };
    /**
    * Get security handle explicit.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandleExplicit = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandleExplicit', [this]);
    };
    /**
    * Get security handle implicit.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandleImplicit = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandleImplicit', [this]);
    };
    /**
    * Get security handle PAM (Pluggable Authentication Module).
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandlePAM = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandlePAM', [this]);
    };
    /**
    * Get security handle RTSS (Runtime Server Support) complete.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandleRTSSComplete = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandleRTSSComplete', [this]);
    };
    /**
    * Get security handle RTSS (Runtime Server Support) disabled.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandleRTSSDisabled = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandleRTSSDisabled', [this]);
    };
    /**
    * Get security handle RTSS (Runtime Server Support) preauthorized.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandleRTSSPreauthorized = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandleRTSSPreauthorized', [this]);
    };
    /**
    * Get the security handle table name.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandleTableName = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandleTableName', [this]);
    };
    /**
    * Get security handle trusted.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandleTrusted = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandleTrusted', [this]);
    };
    /**
    * Get the security handle user name.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandleUserName = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandleUserName', [this]);
    };
    /**
    * Get security handle Windows named pipe.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandleWindowsNamedPipe = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandleWindowsNamedPipe', [this]);
    };
    /**
    * Get security handle workgroup.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityHandleWorkgroup = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityHandleWorkgroup', [this]);
    };
    /**
    * Get security permission alter.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityPermissionAlter = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityPermissionAlter', [this]);
    };
    /**
    * Get security permission file create.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityPermissionCreateFile = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityPermissionCreateFile', [this]);
    };
    /**
    * Get security permission record create.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityPermissionCreateRecord = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityPermissionCreateRecord', [this]);
    };
    /**
    * Get security permission create stored procedure.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityPermissionCreateStoredProcedure = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityPermissionCreateStoredProcedure', [this]);
    };
    /**
    * Get security permission create view.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityPermissionCreateView = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityPermissionCreateView', [this]);
    };
    /**
    * Get security permission delete.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityPermissionDelete = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityPermissionDelete', [this]);
    };
    /**
    * Get security permission execute.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityPermissionExecute = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityPermissionExecute', [this]);
    };
    /**
    * Get security permission no rights.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityPermissionNoRights = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityPermissionNoRights', [this]);
    };
    /**
    * Get security permission open.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityPermissionOpen = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityPermissionOpen', [this]);
    };
    /**
    * Get security permission read.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityPermissionRead = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityPermissionRead', [this]);
    };
    /**
    * Get security permission refer.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityPermissionRefer = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityPermissionRefer', [this]);
    };
    /**
    * Get security permission update.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSecurityPermissionUpdate = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSecurityPermissionUpdate', [this]);
    };
    /**
    * Get the segment count.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSegmentCount = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSegmentCount', [this]);
    };
    /**
    * Get segmented.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSegmented = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSegmented', [this]);
    };
    /**
    * Get the segment file name
    *
    * @param segmentFileNumber The segment file number
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSegmentFileName = function (segmentFileNumber, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSegmentFileName', [this, segmentFileNumber]);
    };
    /**
    * Get the system data mode.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSystemDataMode = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSystemDataMode', [this]);
    };
    /**
    * Get system index present.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSystemIndexPresent = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSystemIndexPresent', [this]);
    };
    /**
    * Get the system index size.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSystemIndexSize = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSystemIndexSize', [this]);
    };
    /**
    * Get system index used.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSystemIndexUsed = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSystemIndexUsed', [this]);
    };
    /**
    * Get the system index version
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetSystemIndexVersion = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetSystemIndexVersion', [this]);
    };
    /**
    * Get the unused duplicate pointer count.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetUnusedDuplicatePointerCount = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetUnusedDuplicatePointerCount', [this]);
    };
    /**
    * Get the unused page count.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetUnusedPageCount = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetUnusedPageCount', [this]);
    };
    /**
    * Get the usage count.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetUsageCount = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetUsageCount', [this]);
    };
    /**
    * Get the variable length records mode.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetVariableLengthRecordsMode = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetVariableLengthRecordsMode', [this]);
    };
    /**
    * Get wrong owner.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileInformation.prototype.GetWrongOwner = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result > 0); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetWrongOwner', [this]);
    };
    return BtrieveFileInformation;
}(BtrieveCordova_1.BtrieveCordova));
module.exports = BtrieveFileInformation;
