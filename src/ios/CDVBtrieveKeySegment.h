#import "CDVBtrieveCordova.h"
#import <ZenDBClientAPI/btrieveCpp.h>

// #region NSBtrieve Class Wrapper
@interface NSBtrieveKeySegment: NSObject

@property (nonatomic, assign) BtrieveKeySegment* btrieveInstance;

- (instancetype)init;
- (instancetype)initWithBtrieveInstance:(BtrieveKeySegment*)btrieveInstance;
- (void)dealloc;

@end
// #endregion

// #region Plugin Class
@interface CDVBtrieveKeySegment : CDVBtrieveCordova<NSBtrieveKeySegment*>

+ (NSBtrieveKeySegment*)getBtrieveInstance:(NSObject*)args;
+ (NSDictionary*)createBtrieveObject;

- (void)pluginInitialize;

// #region Actions
- (void)SetField:(CDVInvokedUrlCommand*)command;
// #endregion

// #region Helpers
- (NSBtrieveKeySegment*)create;
- (NSBtrieveKeySegment*)create:(NSArray*)args;
- (void)delete:(NSBtrieveKeySegment*)instance;
// #endregion

@end
// #endregion
