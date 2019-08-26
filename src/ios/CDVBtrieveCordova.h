#import <Cordova/CDVPlugin.h>

@interface CDVBtrieveCordova<T> : CDVPlugin

extern NSString* const NO_INSTANCE;
extern NSString* const HASH_PREFIX;

@property NSMutableDictionary<NSString*, T>* instances;

- (void)pluginInitialize;

// #region API
- (void)Create:(CDVInvokedUrlCommand*)command;
- (void)Destroy:(CDVInvokedUrlCommand*)command;
// #endregion

// #region Helpers
// #region Instanciation & Reference
- (NSDictionary*)toNSDictionary:(NSString*)refId;
- (NSDictionary*)addInstance:(T)instance;
- (T)getInstance:(NSArray*)args atIndex:NSNumber;
- (T)getInstance:(NSDictionary*)arg;
- (T)getInstance:(NSString*)refId withHash:(NSString*)hash;
// #endregion

- (NSArray<NSNumber*>*)packLong:(long long)unpacked;
- (const char*)unpackByteArray:(NSData*)packed;
- (T)create:(NSArray*)args;
- (void)delete:(T)instance;
// #endregion

@end
