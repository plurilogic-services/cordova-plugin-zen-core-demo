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
var BtrieveBulkCreatePayload = /** @class */ (function (_super) {
    __extends(BtrieveBulkCreatePayload, _super);
    // #endregion
    /**
     * Private destructor
     *
     * Since instanciation of native objects will be Asynchronous,
     * instanciating with `new` shoud never be done in javascript.
     * This should only be called by the cordova callback
     *
     * Use @see BtrieveBulkCreatePayload.Create instead in javascript
     */
    function BtrieveBulkCreatePayload(refUuid, refHashCode, _check) {
        return _super.call(this, refUuid, refHashCode, _check) || this;
    }
    // #region Static
    /**
     * Asynchronous constructor
     *
     * @param success The success callback
     * @param fail The error callback
     */
    BtrieveBulkCreatePayload.Create = function (success, fail) {
        var HASH_CODE_PREFIX = "" + BtrieveCordova_1.HASH_PREFIX + BtrieveBulkCreatePayload.name;
        var SECRET = HASH_CODE_PREFIX + "@" + BtrieveCordova_1.TERCES;
        cordova.exec(function (result) {
            var instance = new BtrieveBulkCreatePayload(result._refId, result._hashCode, SECRET);
            if (success && typeof success === 'function') {
                success(instance);
            }
        }, fail, 'CDV' + BtrieveBulkCreatePayload.name, 'Create', []);
    };
    // #region Instance
    /**
    * Add a record
    *
    * Bulk create attributes have no records initially.
    *
    * @param record The record. Record length is limited to `Btrieve.MAXIMUM_RECORD_LENGTH`.
    * @param success The success callback is implied.
    * @param fail Error callback
    */
    BtrieveBulkCreatePayload.prototype.AddRecord = function (record, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        var recordArg = cordova.platformId === 'ios' ? record.buffer : record;
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'AddRecord', [this, recordArg]);
    };
    return BtrieveBulkCreatePayload;
}(BtrieveCordova_1.BtrieveCordova));
module.exports = BtrieveBulkCreatePayload;
