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
var BtrieveFilter = /** @class */ (function (_super) {
    __extends(BtrieveFilter, _super);
    // #endregion
    // #region Instance
    /**
    * Private constructor
    *
    * Since instanciation of native objects will be Asynchronous,
    * instanciating with `new` shoud never be done in javascript.
    * This should only be called by the cordova callback
    *
    * Use @see BtrieveFilter.Create instead
    */
    function BtrieveFilter(refUuid, refHashCode, _check) {
        return _super.call(this, refUuid, refHashCode, _check) || this;
    }
    // #region Static
    /**
    * Asynchronous constructor
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFilter.Create = function (success, fail) {
        var HASH_CODE_PREFIX = "" + BtrieveCordova_1.HASH_PREFIX + BtrieveFilter.name;
        var SECRET = HASH_CODE_PREFIX + "@" + BtrieveCordova_1.TERCES;
        cordova.exec(function (result) {
            var instance = new BtrieveFilter(result._refId, result._hashCode, SECRET);
            if (success && typeof success === 'function') {
                success(instance);
            }
        }, fail, 'CDV' + BtrieveFilter.name, 'Create', []);
    };
    // #region API
    /**
    * Set the alternate collation sequence mode
    *
    * Alternate collation sequence mode defaults to `Btrieve.ACSMode.ACS_MODE_NONE`.
    * To set the alternate collation sequence mode to `Btrieve.ACSMode.ACS_MODE_NAMED`
    * use `BtrieveFilter.SetACSName` or `BtrieveFilter.SetACSUserDefined`.
    * `Btrieve.ACSMode.ACS_MODE_NUMBERED` is unsupported.
    *
    * @param acsMode The alternate collation sequence mode
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFilter.prototype.SetACSMode = function (acsMode, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'SetACSMode', [this, acsMode]);
    };
    /**
    * Set the alternate collation sequence name
    *
    * Filters have no alternate collation sequence name initially. To reference an
    * alternate collation sequence name it must exist in the file. An alternate
    * collation sequence name may be added to a file when an index is created.
    *
    * @see BtrieveFile.IndexCreate
    *
    * @param name The name
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFilter.prototype.SetACSName = function (name, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'SetACSName', [this, name]);
    };
    /**
    * Set the user defined alternate collation sequence mode
    *
    * Filters have no user defined alternate collation sequence name initially. To
    * reference a user defined alternate collation sequence it must exist in the file.
    * A user defined alternate collation sequence may be added to a file when an index is created.
    *
    * @see BtrieveFile.IndexCreate
    *
    * @param name The name
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFilter.prototype.SetACSUserDefined = function (name, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'SetACSUserDefined', [this, name]);
    };
    /**
    * Set the comparison
    *
    * Comparison defaults to `Btrieve.Comparison.COMPARISON_NONE`.
    *
    * @param comparison `Btrieve.Comparison`
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFilter.prototype.SetComparison = function (comparison, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'SetComparison', [this, comparison]);
    };
    /**
    * Set the comparison constant
    *
    * Filters have no comparison constant initially.
    *
    * @param constant The comparison constant
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFilter.prototype.SetComparisonConstant = function (constant, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        var constantArg = cordova.platformId === 'ios' ? constant.buffer : constant;
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'SetComparisonConstant', [this, constantArg]);
    };
    /**
    * Set the comparison field
    *
    * @param offset The comparison field offset. Offset must be less than `Btrieve.MAXIMUM_RECORD_LENGTH`.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFilter.prototype.SetComparisonField = function (offset, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'SetComparisonField', [this, offset]);
    };
    /**
    * Set the field connector
    *
    * Field connector defaults to `Btrieve.Connector.CONNECTOR_LAST`.
    *
    * @param connector The connector
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFilter.prototype.SetConnector = function (connector, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'SetConnector', [this, connector]);
    };
    /**
    * Set the field
    *
    * Filters have no field initially. Offset plus length is limited to `Btrieve.MAXIMUM_RECORD_LENGTH`.
    *
    * @param offset The offset. Offset must be less than `Btrieve.MAXIMUM_RECORD_LENGTH`.
    * @param length The length. Length is limited to `Btrieve.MAXIMUM_RECORD_LENGTH`.
    * @param dataType are not supported.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFilter.prototype.SetField = function (offset, length, dataType, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'SetField', [this, offset, length, dataType]);
    };
    /**
    * Set the code page name to be used for the comparison types Like or Not Like
    *
    * Supply the name of the code page to be used for string comparisons for the
    * Like/Not Like comparisons. The comparison constant and data must use the
    * samecode page for accurate comparison.
    *
    * @param name The name of the code page
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFilter.prototype.SetLikeCodePageName = function (name, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'SetLikeCodePageName', [this, name]);
    };
    return BtrieveFilter;
}(BtrieveCordova_1.BtrieveCordova));
module.exports = BtrieveFilter;
