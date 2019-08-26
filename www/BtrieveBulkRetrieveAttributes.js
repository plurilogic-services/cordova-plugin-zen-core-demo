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
var BtrieveBulkRetrieveAttributes = /** @class */ (function (_super) {
    __extends(BtrieveBulkRetrieveAttributes, _super);
    // #endregion
    // #region Instance
    /**
    * Private constructor
    *
    * Since instanciation of native objects will be Asynchronous,
    * instanciating with `new` shoud never be done in javascript.
    * This should only be called by the cordova callback
    *
    * Use @see BtrieveBulkRetrieveAttributes.Create instead
    */
    function BtrieveBulkRetrieveAttributes(refUuid, refHashCode, _check) {
        return _super.call(this, refUuid, refHashCode, _check) || this;
    }
    // #region Static
    /**
    * Asynchronous constructor
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveBulkRetrieveAttributes.Create = function (success, fail) {
        var HASH_CODE_PREFIX = "" + BtrieveCordova_1.HASH_PREFIX + BtrieveBulkRetrieveAttributes.name;
        var SECRET = HASH_CODE_PREFIX + "@" + BtrieveCordova_1.TERCES;
        cordova.exec(function (result) {
            var instance = new BtrieveBulkRetrieveAttributes(result._refId, result._hashCode, SECRET);
            if (success && typeof success === 'function') {
                success(instance);
            }
        }, fail, 'CDV' + BtrieveBulkRetrieveAttributes.name, 'Create', []);
    };
    // #region API
    /**
    * Add a field
    *
    * Get bulk attributes have no fields initially. Offset plus length is limited to `Btrieve.MAXIMUM_RECORD_LENGTH`.
    *
    * @param offset The offset. Offset must be less than `Btrieve.MAXIMUM_RECORD_LENGTH`.
    * @param length The length. Length is limited to `Btrieve.MAXIMUM_RECORD_LENGTH`.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveBulkRetrieveAttributes.prototype.AddField = function (offset, length, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'AddField', [this, offset, length]);
    };
    /**
    * Add a filter
    *
    * Get bulk attributes have no filters initially.
    *
    * @param btrieveFilter The filter.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveBulkRetrieveAttributes.prototype.AddFilter = function (btrieveFilter, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'AddFilter', [this, btrieveFilter]);
    };
    /**
    * Set the maximum record count
    *
    * Maximum record count defaults to zero.
    *
    * @param maximumRecordCount The maximum record count. The maximum record count must be greater than 0 and less than 65536.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveBulkRetrieveAttributes.prototype.SetMaximumRecordCount = function (maximumRecordCount, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'SetMaximumRecordCount', [this, maximumRecordCount]);
    };
    /**
    * Set the maximum reject count
    *
    * Maximum reject count defaults to the PSQL defined value
    *
    * @param maximumRejectCount The maximum reject count. The maximum reject count must be greater than or equal to 0 and less than 65536. A value of zero sets the maximum reject count to the PSQL defined value.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveBulkRetrieveAttributes.prototype.SetMaximumRejectCount = function (maximumRejectCount, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'SetMaximumRejectCount', [this, maximumRejectCount]);
    };
    /**
    * Set skip current record
    *
    * Skip current record is disabled by default.
    *
    * @param skipCurrentRecord Skip current record?
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveBulkRetrieveAttributes.prototype.SetSkipCurrentRecord = function (skipCurrentRecord, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'SetSkipCurrentRecord', [this, skipCurrentRecord]);
    };
    return BtrieveBulkRetrieveAttributes;
}(BtrieveCordova_1.BtrieveCordova));
module.exports = BtrieveBulkRetrieveAttributes;
