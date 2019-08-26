#import "CDVBtrieveCordova.h"
#import <Cordova/CDVPlugin.h>
#import <Foundation/Foundation.h>
#import <ZenDBClientAPI/btrieveCpp.h>

// #region NSBtrieve Class Wrapper
@interface NSBtrieveClient: NSObject

@property (nonatomic, assign) BtrieveClient* btrieveInstance;

- (instancetype)initWithServiceAgentIdentifier:(NSNumber*)serviceAgentIdentifier clientIdentifier:(NSNumber*)clientIdentifier;
- (instancetype)initWithBtrieveInstance:(BtrieveClient*)btrieveInstance;
- (void)dealloc;

@end
// #endregion

// #region Plugin Class
@interface CDVBtrieveClient : CDVBtrieveCordova<NSBtrieveClient*>

+ (NSBtrieveClient*)getBtrieveInstance:(NSObject*)args;
+ (NSDictionary*)createBtrieveObject:(NSNumber*)serviceAgentIdentifier clientIdentifier:(NSNumber*)clientIdentifier;

- (void)pluginInitialize;

// #region Actions
- (void)FileClose:(CDVInvokedUrlCommand*)command;
- (void)FileCreate:(CDVInvokedUrlCommand*)command;
- (void)FileOpen:(CDVInvokedUrlCommand*)command;
- (void)GetLastStatusCode:(CDVInvokedUrlCommand*)command;
// #endregion

// #region Helpers
- (NSBtrieveClient*)create:(NSArray*)args;
- (void)delete:(NSBtrieveClient*)instance;
// #endregion

@end
// #endregion
