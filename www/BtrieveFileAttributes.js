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
var BtrieveFileAttributes = /** @class */ (function (_super) {
    __extends(BtrieveFileAttributes, _super);
    // #endregion
    // #region Instance
    /**
    * Private constructor
    *
    * Since instanciation of native objects will be Asynchronous,
    * instanciating with `new` shoud never be done in javascript.
    * This should only be called by the cordova callback
    *
    * Use @see BtrieveFileAttributes.Create instead
    */
    function BtrieveFileAttributes(refId, refHashCode, _check) {
        return _super.call(this, refId, refHashCode, _check) || this;
    }
    // #region Static
    /**
    * Asynchronous constructor
    *
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveFileAttributes.Create = function (success, fail) {
        var HASH_CODE_PREFIX = "" + BtrieveCordova_1.HASH_PREFIX + BtrieveFileAttributes.name;
        var SECRET = HASH_CODE_PREFIX + "@" + BtrieveCordova_1.TERCES;
        cordova.exec(function (result) {
            var instance = new BtrieveFileAttributes(result._refId, result._hashCode, SECRET);
            if (success && typeof success === 'function') {
                success(instance);
            }
        }, fail, 'CDV' + BtrieveFileAttributes.name, 'Create', []);
    };
    // #region API
    /**
    * Set balanced indexes
    *
    * Balanced indexes are disabled by default.
    *
    * @param enableBalancedIndexes Enable balanced indexes?
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFileAttributes.prototype.SetBalancedIndexes = function (enableBalancedIndexes, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Set the file version
    *
    * File version defaults to `Btrieve.FileVersion.FILE_VERSION_DEFAULT`.
    * A file version of `Btrieve.FileVersion.FILE_VERSION_6_0` is mapped
    * to `Btrieve.FileVersion.FILE_VERSION_6_1`.
    *
    * @param fileVersion The file version.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFileAttributes.prototype.SetFileVersion = function (fileVersion, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Set the fixed record length.
    *
    * Fixed record length defaults to zero.
    *
    * @param fixedRecordLength The fixed record length. The fixed record length must be between 1 and `Btrieve.MAXIMUM_RECORD_LENGTH`, inclusive.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFileAttributes.prototype.SetFixedRecordLength = function (fixedRecordLength, success, fail) {
        var _this = this;
        if (!fail || typeof fail !== 'function') {
            fail = function () { };
        }
        cordova.exec(success, function (error) { return fail(_this.ErrorStatus(error)); }, 'CDV' + this.constructor.name, 'SetFixedRecordLength', [this, fixedRecordLength]);
    };
    /**
    * Set the free space threshold
    *
    * Free space threshold defaults to `Btrieve.FreeSpaceThreshold.FREE_SPACE_THRESHOLD_DEFAULT`.
    * The free space threshold setting is ignored unless variable length records are enabled.
    *
    * @param freeSpaceThreshold The free space threshold.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFileAttributes.prototype.SetFreeSpaceThreshold = function (freeSpaceThreshold, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Set key only
    *
    * Key only is disabled by default. Enabling key only will cause the system data mode to be ignored.
    *
    * @param enableKeyOnly Enable key only?
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFileAttributes.prototype.SetKeyOnly = function (enableKeyOnly, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Set the page size
    *
    * Page size defaults to `Btrieve.PageSize.PAGE_SIZE_4096`. Page compression is disabled
    * by default and requires file version `Btrieve.FileVersion.FILE_VERSION_9_5` or greater.
    * Not all page sizes are valid for all file versions. Pages sizes greater than 4096 require
    * file version `Btrieve.FileVersion.FILE_VERSION_9_0` or greater. Pages sizes which are
    * unsupported for a particular file version will be rounded up to the next supported size.
    *
    * @param pageSize The page size
    * @param enablePageCompression Enable page compression?
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFileAttributes.prototype.SetPageSize = function (pageSize, enablePageCompression, success, fail) {
        if (enablePageCompression === void 0) { enablePageCompression = false; }
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Set the preallocated page count.
    *
    * Preallocated page count defaults to zero.
    *
    * @param preallocatedPageCount The preallocated page count. The preallocated page count must be between 0 and 65535, inclusive.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFileAttributes.prototype.SetPreallocatedPageCount = function (preallocatedPageCount, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Set record compression mode.
    *
    * @param recordCompressionMode The record compression mode.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFileAttributes.prototype.SetRecordCompressionMode = function (recordCompressionMode, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Set the reserved duplicate pointer count.
    *
    * Reserved duplicate pointer count defaults to zero. The maximum reserved
    * duplicate pointer count may be less than 119 depending on file version and
    * page size. For example, a file version of `Btrieve.FileVersion.FILE_VERSION_9_0`
    * and page size of `Btrieve.PageSize.PAGE_SIZE_3584` allows for a maximum reserved
    * duplicate pointer count of 54.
    *
    * @param reservedDuplicatePointerCount The reserved duplicate pointer count. The reserved duplicate pointer count must be between 0 and 119, inclusive.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFileAttributes.prototype.SetReservedDuplicatePointerCount = function (reservedDuplicatePointerCount, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Set the system data mode.
    *
    * System data mode defaults to `Btrieve.SystemDataMode.SYSTEM_DATA_MODE_DEFAULT`.
    *
    * @param systemDataMode The system data mode.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFileAttributes.prototype.SetSystemDataMode = function (systemDataMode, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    /**
    * Set the variable length records mode.
    *
    * @param variableLengthRecordsMode The variable length records mode.
    * @param success The success callback is implied.
    * @param fail The error callback
    */
    BtrieveFileAttributes.prototype.SetVariableLengthRecordsMode = function (variableLengthRecordsMode, success, fail) {
        throw new Error("Method not implemented in demo plugin");
    };
    return BtrieveFileAttributes;
}(BtrieveCordova_1.BtrieveCordova));
module.exports = BtrieveFileAttributes;
