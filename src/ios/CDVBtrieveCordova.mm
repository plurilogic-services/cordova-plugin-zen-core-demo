#import "CDVBtrieveCordova.h"

@implementation CDVBtrieveCordova

NSString* const NO_INSTANCE = @"Native instance not found";
NSString* const HASH_PREFIX = @"com.actian.zen.db.";

- (void)pluginInitialize {
    [super pluginInitialize];
    NSLog(@"ActianZen: Initializing %@.", NSStringFromClass([self class]));
    if(_instances == nil) {
        _instances = [[NSMutableDictionary<NSString*, id> alloc] init];
    }
}

// #region API
- (void)Create:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSDictionary* result = [self addInstance:[self create:command.arguments]];
    
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:result];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)Destroy:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSString* refId = [[command.arguments objectAtIndex:0] objectForKey:@"_refId"];
    NSString* hash = [[command.arguments objectAtIndex:0] objectForKey:@"_hashCode"];
    NSDictionary* instance = [self getInstance:refId withHash:hash];
    
    if(instance) {
        [self delete:instance];
        [_instances removeObjectForKey:refId];
        
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:NO_INSTANCE];
    }
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}
// #endregion

// #region Helpers
// #region Instanciation & Reference
- (NSDictionary<NSString*, NSString*>*)toNSDictionary:(NSString*)refId {
    return @{
        @"_refId": refId,
        @"_hashCode": [HASH_PREFIX stringByAppendingString:[NSStringFromClass([self classForCoder]) stringByReplacingOccurrencesOfString:@"CDV" withString:@""]]
    };
}

- (NSDictionary *)addInstance:(id)instance {
    NSString* refId;
    do {
        refId = [[NSUUID UUID] UUIDString];
    } while([[_instances allKeys] containsObject:refId]);
    
    [_instances setObject:instance forKey:refId];
    
    return [self toNSDictionary:refId];
}

- (id)getInstance:(NSArray *)args atIndex:(NSNumber*)index {
    
    return [self getInstance:[args objectAtIndex:[index intValue]]];
}

- (id)getInstance:(NSDictionary *)arg {
    if([[arg allKeys] containsObject:@"_refId"] && [[arg allKeys] containsObject:@"_hashCode"]) {
        return [self getInstance:[arg objectForKey:@"_refId"] withHash:[arg objectForKey:@"_hashCode"]];
    }
    
    return nil;
}

- (id)getInstance:(NSString*)refId withHash:(NSString*)hash {
    BOOL hashCheck = [hash isEqualToString:[HASH_PREFIX stringByAppendingString:[NSStringFromClass([self classForCoder]) stringByReplacingOccurrencesOfString:@"CDV" withString:@""]]];
    if(hashCheck && [[_instances allKeys] containsObject:refId]) {
        return [_instances objectForKey:refId];
    }
    
    return nil;
}
// #endregion

- (NSArray<NSNumber*>*)packLong:(long long)unpacked {
    return @[[NSNumber numberWithLongLong:unpacked]];
}

- (const char*)unpackByteArray:(NSData *)packed {
    return (char*)[packed bytes];
}

- (id)create:(NSArray *)args {
    @throw [NSException exceptionWithName:NSInternalInconsistencyException reason:[NSString stringWithFormat:@"You must override %@ in a subclass", NSStringFromSelector(_cmd)] userInfo:nil];
}

- (void)delete:(id)instance {
    @throw [NSException exceptionWithName:NSInternalInconsistencyException reason:[NSString stringWithFormat:@"You must override %@ in a subclass", NSStringFromSelector(_cmd)] userInfo:nil];
}
// #endregion

@end
