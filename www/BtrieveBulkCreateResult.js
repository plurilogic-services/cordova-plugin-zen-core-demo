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
var BtrieveBulkCreateResult = /** @class */ (function (_super) {
    __extends(BtrieveBulkCreateResult, _super);
    // #endregion
    // #region Instance
    /**
    * Private constructor
    *
    * Since instanciation of native objects will be Asynchronous,
    * instanciating with `new` shoud never be done in javascript.
    * This should only be called by the cordova callback
    *
    * Use @see BtrieveBulkCreateResult.Create instead
    */
    function BtrieveBulkCreateResult(refUuid, refHashCode, _check) {
        return _super.call(this, refUuid, refHashCode, _check) || this;
    }
    // #region Static
    /**
    * Asynchronous constructor
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveBulkCreateResult.Create = function (success, fail) {
        var HASH_CODE_PREFIX = "" + BtrieveCordova_1.HASH_PREFIX + BtrieveBulkCreateResult.name;
        var SECRET = HASH_CODE_PREFIX + "@" + BtrieveCordova_1.TERCES;
        cordova.exec(function (result) {
            var instance = new BtrieveBulkCreateResult(result._refId, result._hashCode, SECRET);
            if (success && typeof success === 'function') {
                success(instance);
            }
        }, fail, 'CDV' + BtrieveBulkCreateResult.name, 'Create', []);
    };
    // #region API
    /**
     * Get the last status code.
     *
     * @param success The success callback is implied.
     * @param fail The error callback
     */
    BtrieveBulkCreateResult.prototype.GetLastStatusCode = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLastStatusCode', [this]);
    };
    /**
    * Get the record count
    *
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveBulkCreateResult.prototype.GetRecordCount = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetRecordCount', [this]);
    };
    /**
    * Get the record cursor position
    *
    * @param recordNumber The record number
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveBulkCreateResult.prototype.GetRecordCursorPosition = function (recordNumber, success, fail) {
        var _this = this;
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(function (result) { return success(_this.unpackLong(result)); }, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetRecordCursorPosition', [this, recordNumber]);
    };
    return BtrieveBulkCreateResult;
}(BtrieveCordova_1.BtrieveCordova));
module.exports = BtrieveBulkCreateResult;
