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
var BtrieveKeySegment = /** @class */ (function (_super) {
    __extends(BtrieveKeySegment, _super);
    // #endregion
    // #region Instance
    /**
    * Private constructor
    *
    * Since instanciation of native objects will be Asynchronous,
    * instanciating with `new` shoud never be done in javascript.
    * This should only be called by the cordova callback
    *
    * Use @see BtrieveKeySegment.Create instead
    */
    function BtrieveKeySegment(refUuid, refHashCode, _check) {
        return _super.call(this, refUuid, refHashCode, _check) || this;
    }
    // #region Static
    /**
    * Asynchronous constructor
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.Create = function (success, fail) {
        var HASH_CODE_PREFIX = "" + BtrieveCordova_1.HASH_PREFIX + BtrieveKeySegment.name;
        var SECRET = HASH_CODE_PREFIX + "@" + BtrieveCordova_1.TERCES;
        cordova.exec(function (result) {
            var instance = new BtrieveKeySegment(result._refId, result._hashCode, SECRET);
            if (success && typeof success === 'function') {
                success(instance);
            }
        }, fail, 'CDV' + BtrieveKeySegment.name, 'Create', []);
    };
    // #region API
    /**
    * Get the alternate collation sequence mode.
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.GetACSMode = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the alternate collation sequence number
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.GetACSNumber = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the data type
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.GetDataType = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get descending sort order
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.GetDescendingSortOrder = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the duplicate mode
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.GetDuplicateMode = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the index
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.GetIndex = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get key continues
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.GetKeyContinues = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the last status code
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.GetLastStatusCode = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLastStatusCode', [this]);
    };
    /**
    * Get the length
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.GetLength = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get modifiable
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.GetModifiable = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the null key mode
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.GetNullKeyMode = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the null value
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.GetNullValue = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the offset
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.GetOffset = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Get the unique value count
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.GetUniqueValueCount = function (success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Set descending sort order
    *
    * Descending sort order is disabled by default.
    *
    * @param setDescendingSortOrder Enable descending sort order?
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.SetDescendingSortOrder = function (setDescendingSortOrder, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Set the field
    *
    * Key segments have no field initially. Offset plus length is limited to `Btrieve.MAXIMUM_RECORD_LENGTH`.
    *
    * @param offset The offset. Offset must be less than `Btrieve.MAXIMUM_RECORD_LENGTH`.
    * @param length The length. Length is limited to `Btrieve.MAXIMUM_RECORD_LENGTH`.
    * @param dataType The data type.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.SetField = function (offset, length, dataType, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'SetField', [this, offset, length, dataType]);
    };
    /**
    * Set the null key mode
    *
    * Null key mode defaults to `Btrieve.NullKeyMode.NULL_KEY_MODE_NONE`.
    *
    * @param nullKeyMode The null key mode
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.SetNullKeyMode = function (nullKeyMode, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Set the null value
    *
    * @param nullValue The null value
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveKeySegment.prototype.SetNullValue = function (nullValue, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    return BtrieveKeySegment;
}(BtrieveCordova_1.BtrieveCordova));
module.exports = BtrieveKeySegment;
