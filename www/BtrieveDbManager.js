/*! © 2019 Actian Corporation, All Rights Reserved. */
var BtrieveDbManager = /** @class */ (function () {
    function BtrieveDbManager() {
    }
    // #region API
    /**
    * Initialize
    *
    * @param fileName The config file name.
    * @param success The success callback
    * @param fail The error callback
    */
    BtrieveDbManager.Initialize = function (fileName, success, fail) {
        cordova.exec(success, fail, 'CDV' + this.constructor.name, 'InitializeLib', [fileName]);
    };
    return BtrieveDbManager;
}());
module.exports = BtrieveDbManager;
