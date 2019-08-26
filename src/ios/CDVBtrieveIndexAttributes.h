#import "CDVBtrieveCordova.h"
#import <ZenDBClientAPI/btrieveCpp.h>

// #region NSBtrieve Class Wrapper
@interface NSBtrieveIndexAttributes: NSObject

@property (nonatomic, assign) BtrieveIndexAttributes* btrieveInstance;

- (instancetype)init;
- (instancetype)initWithBtrieveInstance:(BtrieveIndexAttributes*)btrieveInstance;
- (void)dealloc;

@end
// #endregion

// #region Plugin Class
@interface CDVBtrieveIndexAttributes : CDVBtrieveCordova<NSBtrieveIndexAttributes*>

+ (NSBtrieveIndexAttributes*)getBtrieveInstance:(NSObject*)args;
+ (NSDictionary*)createBtrieveObject;

- (void)pluginInitialize;

// #region Actions
- (void)AddKeySegment:(CDVInvokedUrlCommand*)command;

// #endregion

// #region Helpers
- (NSBtrieveIndexAttributes*)create;
- (NSBtrieveIndexAttributes*)create:(NSArray*)args;
- (void)delete:(NSBtrieveIndexAttributes*)instance;
// #endregion

@end
// #endregion
