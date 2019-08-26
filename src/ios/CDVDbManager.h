#import <Cordova/CDVPlugin.h>
#import <ZenDB/ZenDB.h>

// #region Plugin Class
@interface CDVDbManager : CDVPlugin

- (void)pluginInitialize;

// #region Actions
- (void)Initialize:(CDVInvokedUrlCommand*)command;
// #endregion

// #region Helpers
// #endregion

@end
// #endregion