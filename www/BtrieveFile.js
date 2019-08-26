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
var BtrieveFile = /** @class */ (function (_super) {
    __extends(BtrieveFile, _super);
    // #endregion
    // #region Instance
    /**
    * Private constructor
    *
    * Since instanciation of native objects will be Asynchronous,
    * instanciating with `new` shoud never be done in javascript.
    * This should only be called by the cordova callback
    *
    * Use @see BtrieveFile.Create instead
    */
    function BtrieveFile(refId, refHashCode, _check) {
        return _super.call(this, refId, refHashCode, _check) || this;
    }
    // #region Static
    /**
    * Asynchronous constructor
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.Create = function (success, fail) {
        var HASH_CODE_PREFIX = "" + BtrieveCordova_1.HASH_PREFIX + BtrieveFile.name;
        var SECRET = HASH_CODE_PREFIX + "@" + BtrieveCordova_1.TERCES;
        cordova.exec(function (result) {
            var instance = new BtrieveFile(result._refId, result._hashCode, SECRET);
            if (success && typeof success === 'function') {
                success(instance);
            }
        }, fail, 'CDV' + BtrieveFile.name, 'Create', []);
    };
    // #region API
    /**
    * Bulk create.
    *
    * The cursor is unaffected. The current offset is unaffected.
    *
    * @param btrieveBulkCreatePayload The bulk create payload
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.BulkCreate = function (btrieveBulkCreatePayload, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Retrieve bulk next.
    *
    * The cursor must be established. The cursor is traversed forward to the last record examined. The current offset is destroyed.
    *
    * @param bulkRetrieveAttributes The bulk retrieve attributes.
    * @param lockMode The lock mode.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.BulkRetrieveNext = function (bulkRetrieveAttributes, lockMode, success, fail) {
        if (lockMode === void 0) { lockMode = Btrieve.LockMode.LOCK_MODE_NONE; }
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Retrieve bulk previous.
    *
    * The cursor must be established. The cursor is traversed backwards to the last record examined. The current offset is destroyed.
    *
    * @param bulkRetrieveAttributes The bulk retrieve attributes.
    * @param lockMode The lock mode.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.BulkRetrievePrevious = function (bulkRetrieveAttributes, lockMode, success, fail) {
        if (lockMode === void 0) { lockMode = Btrieve.LockMode.LOCK_MODE_NONE; }
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the cursor position.
    *
    * The cursor is unaffected but must be established. The current offset is unaffected.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.GetCursorPosition = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the file information.
    *
    * The cursor is unaffected. The current offset is unaffected.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.GetInformation = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the last status code.
    *
    * The cursor is unaffected. The current offset is unaffected.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.GetLastStatusCode = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLastStatusCode', [this]);
    };
    /**
     * Overloads implementation
     */
    BtrieveFile.prototype.GetNumerator = function (arg1, arg2, arg3, arg4, arg5) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Overloads implementation
    */
    BtrieveFile.prototype.GetPercentage = function (arg1, arg2, arg3, arg4) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Create an index.
    *
    * The cursor is unaffected. The current offset is unaffected.
    *
    * @param indexAttributes The index attributes.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.IndexCreate = function (indexAttributes, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'IndexCreate', [this, indexAttributes]);
    };
    /**
    * Drop an index.
    *
    * If the cursor index is dropped the cursor is destroyed. Otherwise, the cursor is unaffected. The current offset is unaffected.
    *
    * @param index The index.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.IndexDrop = function (index, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Retrieve a key using the given comparison, index, and key.
    *
    * The cursor is established. The current offset is destroyed.
    *
    * @param comparison isn't supported.
    * @param index The index.
    * @param keySize The key size.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.KeyRetrieve = function (comparison, index, keySize, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Retrieve the first key.
    *
    * The cursor is established. The current offset is destroyed.
    *
    * @param index The index.
    * @param keySize The key size.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.KeyRetrieveFirst = function (index, keySize, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Retrieve the last key.
    *
    * The cursor is established. The current offset is destroyed.
    *
    * @param index The index.
    * @param keySize The key size.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.KeyRetrieveLast = function (index, keySize, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Retrieve the next key.
    *
    * The cursor must be established. The cursor is traversed forward one key. The current offset is destroyed.
    *
    * @param keySize The key size.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.KeyRetrieveNext = function (keySize, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Retrieve the previous key.
    *
    * The cursor must be established. The cursor is traversed backward one key. The current offset is destroyed.
    *
    * @param keySize The key size.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.KeyRetrievePrevious = function (keySize, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Append a record chunk.
    *
    * The cursor is unaffected but must be established. The current offset is established at the end of the appended chunk.
    *
    * @param chunk The chunk.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.RecordAppendChunk = function (chunk, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Create a record
    *
    * The cursor is unaffected. The current offset is unaffected.
    *
    * @param record The record.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.RecordCreate = function (record, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        var recordArg = cordova.platformId === 'ios' ? record.buffer : record;
        cordova.exec(function (result) { return success(new Uint8Array(result)); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'RecordCreate', [this, recordArg]);
    };
    /**
    * Delete a record.
    *
    * The cursor is unaffected but must be established. The current offset is destroyed.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.RecordDelete = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'RecordDelete', [this]);
    };
    /**
    * Retrieve a record using the given comparison, index, and key.
    *
    * The cursor is established. The current offset is destroyed.
    *
    * @param comparison isn't supported.
    * @param index The index.
    * @param key The key.
    * @param recordSize The record size.
    * @param lockMode The lock mode.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.RecordRetrieve = function (comparison, index, key, recordSize, lockMode, success, fail) {
        var _this = this;
        if (lockMode === void 0) { lockMode = Btrieve.LockMode.LOCK_MODE_NONE; }
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        var keyArg = cordova.platformId === 'ios' ? key.buffer : key;
        cordova.exec(function (result) { return success(new Uint8Array(result)); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'RecordRetrieve', [this, comparison, index, keyArg, recordSize, lockMode]);
    };
    /**
    * Retrieve a record by cursor pointer.
    *
    * The cursor is established. The current offset is destroyed.
    *
    * @param index The index or `Btrieve.Index.INDEX_NONE`.
    * @param cursorPointer The cursor pointer.
    * @param recordSize The record size.
    * @param lockMode The lock mode.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.RecordRetrieveByCursorPosition = function (index, cursorPointer, recordSize, lockMode, success, fail) {
        var _this = this;
        if (lockMode === void 0) { lockMode = Btrieve.LockMode.LOCK_MODE_NONE; }
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(new Uint8Array(result)); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'RecordRetrieveByCursorPosition', [this, index, cursorPointer, recordSize, lockMode]);
    };
    /**
    * Retrieve a record by fraction.
    *
    * The cursor is established. The current offset is destroyed.
    *
    * @param index The index or `Btrieve.Index.INDEX_NONE`.
    * @param numerator The numerator.
    * @param denominator The denominator.
    * @param recordSize The record size.
    * @param lockMode The lock mode.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.RecordRetrieveByFraction = function (index, numerator, denominator, recordSize, lockMode, success, fail) {
        if (lockMode === void 0) { lockMode = Btrieve.LockMode.LOCK_MODE_NONE; }
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Retrieve a record by percentage.
    *
    * The cursor is established. The current offset is destroyed.
    *
    * @param index The index or `Btrieve.Index.INDEX_NONE`.
    * @param percentage The percentage given as 0 through 10,000, corresponding to 0% through 100.00%.
    * @param recordSize The record size.
    * @param lockMode The lock mode.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.RecordRetrieveByPercentage = function (index, percentage, recordSize, lockMode, success, fail) {
        if (lockMode === void 0) { lockMode = Btrieve.LockMode.LOCK_MODE_NONE; }
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Overloads implementation
    */
    BtrieveFile.prototype.RecordRetrieveChunk = function (arg1, arg2, arg3, arg4, arg5, arg6) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Retrieve the first record.
    *
    * The cursor is established. The current offset is destroyed.
    *
    * @param index The index or `Btrieve.Index.INDEX_NONE`.
    * @param recordSize The record size.
    * @param lockMode The lock mode.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.RecordRetrieveFirst = function (index, recordSize, lockMode, success, fail) {
        var _this = this;
        if (lockMode === void 0) { lockMode = Btrieve.LockMode.LOCK_MODE_NONE; }
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(new Uint8Array(result)); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'RecordRetrieveFirst', [this, index, recordSize, lockMode]);
    };
    /**
    * Retrieve the last record.
    *
    * The cursor is established. The current offset is destroyed.
    *
    * @param index The index or `Btrieve.Index.INDEX_NONE`.
    * @param recordSize The record size.
    * @param lockMode The lock mode.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.RecordRetrieveLast = function (index, recordSize, lockMode, success, fail) {
        if (lockMode === void 0) { lockMode = Btrieve.LockMode.LOCK_MODE_NONE; }
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Retrieve the next record.
    *
    * The cursor must be established. The cursor is traversed forward one record. The current offset is destroyed.
    *
    * @param recordSize The record size.
    * @param lockMode The lock mode.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.RecordRetrieveNext = function (recordSize, lockMode, success, fail) {
        var _this = this;
        if (lockMode === void 0) { lockMode = Btrieve.LockMode.LOCK_MODE_NONE; }
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(new Uint8Array(result)); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'RecordRetrieveNext', [this, recordSize, lockMode]);
    };
    /**
    * Retrieve the previous record.
    *
    * The cursor must be established. The cursor is traversed backward one record. The current offset is destroyed.
    *
    * @param recordSize The record size.
    * @param lockMode The lock mode.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.RecordRetrievePrevious = function (recordSize, lockMode, success, fail) {
        if (lockMode === void 0) { lockMode = Btrieve.LockMode.LOCK_MODE_NONE; }
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Overloads implementation
    */
    BtrieveFile.prototype.RecordTruncate = function (arg1, arg2, arg3) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Unlock a record or records.
    *
    * The cursor is unaffected. The current offset is unaffected.
    *
    * @param unlockMode The unlock mode.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.RecordUnlock = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Update a record.
    *
    * The cursor is unaffected but must be established. The current offset is unaffected.
    *
    * @param record in length.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.RecordUpdate = function (record, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Overloads implementation
    */
    BtrieveFile.prototype.RecordUpdateChunk = function (arg1, arg2, arg3, arg4) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Set the owner.
    *
    * Owner mode defaults to `Btrieve.OWNER_MODE_NONE`.
    *
    * The cursor is unaffected. The current offset is unaffected.
    *
    * @param ownerMode The owner mode.
    * @param ownerName The owner name.
    * @param ownerNameAgain The owner name (again).
    * @param useLongOwnerName Use a long owner name?
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.SetOwner = function (ownerMode, ownerName, ownerNameAgain, useLongOwnerName, success, fail) {
        if (ownerName === void 0) { ownerName = null; }
        if (ownerNameAgain === void 0) { ownerNameAgain = null; }
        if (useLongOwnerName === void 0) { useLongOwnerName = true; }
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Unlock the cursor position.
    *
    * The cursor is unaffected. The current offset is unaffected.
    *
    * @param cursorPosition The cursor position.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFile.prototype.UnlockCursorPosition = function (cursorPosition, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    return BtrieveFile;
}(BtrieveCordova_1.BtrieveCordova));
module.exports = BtrieveFile;
