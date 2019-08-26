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
var BtrieveIndexAttributes = /** @class */ (function (_super) {
    __extends(BtrieveIndexAttributes, _super);
    // #endregion
    // #region Instance
    /**
    * Private constructor
    *
    * Since instanciation of native objects will be Asynchronous,
    * instanciating with `new` shoud never be done in javascript.
    * This should only be called by the cordova callback
    *
    * Use @see BtrieveIndexAttributes.Create instead
    */
    function BtrieveIndexAttributes(refId, refHashCode, _check) {
        return _super.call(this, refId, refHashCode, _check) || this;
    }
    // #region Static
    /**
    * Asynchronous constructor
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveIndexAttributes.Create = function (success, fail) {
        var HASH_CODE_PREFIX = "" + BtrieveCordova_1.HASH_PREFIX + BtrieveIndexAttributes.name;
        var SECRET = HASH_CODE_PREFIX + "@" + BtrieveCordova_1.TERCES;
        cordova.exec(function (result) {
            var instance = new BtrieveIndexAttributes(result._refId, result._hashCode, SECRET);
            if (success && typeof success === 'function') {
                success(instance);
            }
        }, fail, 'CDV' + BtrieveIndexAttributes.name, 'Create', []);
    };
    // #region API
    /**
    * Add a key segment
    *
    * Index attributes have no key segments initially.
    *
    * @param btrieveKeySegment The key segment
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveIndexAttributes.prototype.AddKeySegment = function (btrieveKeySegment, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'AddKeySegment', [this, btrieveKeySegment]);
    };
    return BtrieveIndexAttributes;
}(BtrieveCordova_1.BtrieveCordova));
module.exports = BtrieveIndexAttributes;
