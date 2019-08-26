/*! © 2019 Actian Corporation, All Rights Reserved. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TERCES = "v3yhbmTr6RbR64cOakJfUmYGhuZTNX7NqwMKJ1WqveF7CTOXreSbKyeZuc16KwS";
exports.HASH_PREFIX = "com.actian.zen.db.";
var BtrieveCordova = /** @class */ (function () {
    // #region Constructor(s) / Destructor(s)
    function BtrieveCordova(refUuid, refHashCode, _check) {
        var HASH_CODE_PREFIX = "" + exports.HASH_PREFIX + this.constructor.name;
        var SECRET = HASH_CODE_PREFIX + "@" + exports.TERCES;
        if (!refUuid || !refHashCode || _check !== SECRET || refHashCode.indexOf(HASH_CODE_PREFIX)) {
            throw Error("Could not instanciate " + this.constructor.name + ", use " + this.constructor.name + ".Create() method instead.");
        }
        this._refId = refUuid;
        this._hashCode = refHashCode;
    }
    /**
     * Explicit Asynchronous destructor
     *
     * @param success The success callback
     * @param fail The error callback
     */
    BtrieveCordova.prototype.Destroy = function (success, fail) {
        var _this = this;
        this.RequireReference();
        cordova.exec(function (data) {
            delete _this._refId;
            delete _this._hashCode;
            if (success && typeof success === 'function') {
                success();
            }
        }, fail, "CDV" + this.constructor.name, 'Destroy', [this]);
    };
    // #endregion
    // #region Helpers
    BtrieveCordova.prototype.unpackLong = function (packed) {
        return packed[0];
    };
    BtrieveCordova.prototype.RequireReference = function () {
        if (!this._refId || !this._hashCode) {
            throw new Error("Native object reference is missing.");
        }
        ;
    };
    BtrieveCordova.prototype.ErrorStatus = function (error) {
        if (typeof error === 'string') {
            throw new Error(error);
        }
        return error;
    };
    // #endregion
    // #region Overrides
    /**
     * @ignore
     */
    BtrieveCordova.prototype.toJSON = function () {
        return {
            _refId: this._refId,
            _hashCode: this._hashCode
        };
    };
    return BtrieveCordova;
}());
exports.BtrieveCordova = BtrieveCordova;
