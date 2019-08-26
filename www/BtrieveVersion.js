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
var BtrieveVersion = /** @class */ (function (_super) {
    __extends(BtrieveVersion, _super);
    // #endregion
    // #region Instance
    /**
     * Private constructor
     *
     * Since instanciation of native objects will be Asynchronous,
     * instanciating with `new` shoud never be done in javascript.
     * This should only be called by the cordova callback
     *
     * Use @see BtrieveVersion.Create instead in javascript
     */
    function BtrieveVersion(refUuid, refHashCode, _check) {
        return _super.call(this, refUuid, refHashCode, _check) || this;
    }
    // #region Static
    /**
     * Asynchronous constructor
     *
     * @param success The success callback
     * @param fail The error callback
     */
    BtrieveVersion.Create = function (success, fail) {
        var HASH_CODE_PREFIX = "" + BtrieveCordova_1.HASH_PREFIX + BtrieveVersion.name;
        var SECRET = HASH_CODE_PREFIX + "@" + BtrieveCordova_1.TERCES;
        cordova.exec(function (result) {
            var instance = new BtrieveVersion(result._refId, result._hashCode, SECRET);
            if (success && typeof success === 'function') {
                success(instance);
            }
        }, fail, 'CDV' + BtrieveVersion.name, 'Create', []);
    };
    // #region API
    /**
     * Get the client revision number.
     *
     * @param success The success callback is implied.
     * @param fail The error callback
     */
    BtrieveVersion.prototype.GetClientRevisionNumber = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetClientRevisionNumber', [this]);
    };
    /**
     * Get the client version number.
     *
     * @param success The success callback is implied.
     * @param fail The error callback
     */
    BtrieveVersion.prototype.GetClientVersionNumber = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetClientVersionNumber', [this]);
    };
    /**
     * Get the client version type.
     *
     * @param success The success callback is implied.
     * @param fail The error callback
     */
    BtrieveVersion.prototype.GetClientVersionType = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetClientVersionType', [this]);
    };
    /**
     * Get the last status code.
     *
     * @param success The success callback
     * @param fail The error callback
     */
    BtrieveVersion.prototype.GetLastStatusCode = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLastStatusCode', [this]);
    };
    /**
     * Get the local revision number.
     *
     * @param success The success callback is implied.
     * @param fail The error callback
     */
    BtrieveVersion.prototype.GetLocalRevisionNumber = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLocalRevisionNumber', [this]);
    };
    /**
     * Get the local version number.
     *
     * @param success The success callback is implied.
     * @param fail The error callback
     */
    BtrieveVersion.prototype.GetLocalVersionNumber = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLocalVersionNumber', [this]);
    };
    /**
     * Get the local version type.
     *
     * @param success The success callback is implied.
     * @param fail The error callback
     */
    BtrieveVersion.prototype.GetLocalVersionType = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetLocalVersionType', [this]);
    };
    /**
     * Get the remote revision number.
     *
     * @param success The success callback is implied.
     * @param fail The error callback
     */
    BtrieveVersion.prototype.GetRemoteRevisionNumber = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetRemoteRevisionNumber', [this]);
    };
    /**
     * Get the remote version number.
     *
     * @param success The success callback is implied.
     * @param fail The error callback
     */
    BtrieveVersion.prototype.GetRemoteVersionNumber = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetRemoteVersionNumber', [this]);
    };
    /**
     * Get the remote version type.
     *
     * @param success The success callback is implied.
     * @param fail The error callback
     */
    BtrieveVersion.prototype.GetRemoteVersionType = function (success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'GetRemoteVersionType', [this]);
    };
    return BtrieveVersion;
}(BtrieveCordova_1.BtrieveCordova));
module.exports = BtrieveVersion;
