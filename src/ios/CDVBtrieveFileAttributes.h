#import "CDVBtrieveCordova.h"
#import <ZenDBClientAPI/btrieveCpp.h>

// #region NSBtrieve Class Wrapper
@interface NSBtrieveFileAttributes: NSObject

@property (nonatomic, assign) BtrieveFileAttributes* btrieveInstance;

- (instancetype)init;
- (instancetype)initWithBtrieveInstance:(BtrieveFileAttributes*)btrieveInstance;
- (void)dealloc;

@end
// #endregion

// #region Plugin Class
@interface CDVBtrieveFileAttributes : CDVBtrieveCordova<NSBtrieveFileAttributes*>

+ (NSBtrieveFileAttributes*)getBtrieveInstance:(NSObject*)args;
+ (NSDictionary*)createBtrieveObject;

- (void)pluginInitialize;

// #region Actions
- (void)SetFixedRecordLength:(CDVInvokedUrlCommand*)command;
// #endregion

// #region Helpers
- (NSBtrieveFileAttributes*)create;
- (NSBtrieveFileAttributes*)create:(NSArray*)args;
- (void)delete:(NSBtrieveFileAttributes*)instance;
// #endregion

@end
// #endregion
