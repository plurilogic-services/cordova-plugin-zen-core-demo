#import "CDVBtrieveCordova.h"
#import <ZenDBClientAPI/btrieveCpp.h>

// #region NSBtrieve Class Wrapper
@interface NSBtrieveFile: NSObject

@property (nonatomic, assign) BtrieveFile* btrieveInstance;

- (instancetype)init;
- (instancetype)initWithBtrieveInstance:(BtrieveFile*)btrieveInstance;
- (void)dealloc;

@end
// #endregion

// #region Plugin Class
@interface CDVBtrieveFile : CDVBtrieveCordova<NSBtrieveFile*>

+ (NSBtrieveFile*)getBtrieveInstance:(NSObject*)args;
+ (NSDictionary*)createBtrieveObject;

- (void)pluginInitialize;

// #region Actions
- (void)GetLastStatusCode:(CDVInvokedUrlCommand*)command;
- (void)IndexCreate:(CDVInvokedUrlCommand*)command;
- (void)RecordCreate:(CDVInvokedUrlCommand*)command;
- (void)RecordDelete:(CDVInvokedUrlCommand*)command;
- (void)RecordRetrieve:(CDVInvokedUrlCommand*)command;
- (void)RecordRetrieveByCursorPosition:(CDVInvokedUrlCommand*)command;
- (void)RecordRetrieveFirst:(CDVInvokedUrlCommand*)command;
- (void)RecordRetrieveNext:(CDVInvokedUrlCommand*)command;
// #endregion

// #region Helpers
- (NSBtrieveFile*)create;
- (NSBtrieveFile*)create:(NSArray*)args;
- (void)delete:(NSBtrieveFile*)instance;
// #endregion

@end
// #endregion
