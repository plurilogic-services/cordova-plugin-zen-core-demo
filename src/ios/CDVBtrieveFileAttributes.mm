#import "CDVBtrieveFileAttributes.h"

// #region NSBtrieve Class Wrapper
@implementation NSBtrieveFileAttributes

- (instancetype)init {
    self = [self initWithBtrieveInstance:new BtrieveFileAttributes()];
    return self;
}
- (instancetype)initWithBtrieveInstance:(BtrieveFileAttributes*)btrieveInstance {
    _btrieveInstance = btrieveInstance;
    return self;
}
- (void)dealloc {
    delete _btrieveInstance;
}

@end
// #endregion

static CDVBtrieveFileAttributes* _instance;

// #region Plugin Class
@implementation CDVBtrieveFileAttributes

+ (NSBtrieveFileAttributes*)getBtrieveInstance:(NSDictionary *)arg {
    return [_instance getInstance:arg];
}

+ (NSDictionary*)createBtrieveObject {
    return [_instance addInstance:[_instance create]];
}

- (void)pluginInitialize {
    [super pluginInitialize];
    NSLog(@"ActianZen: Initializing %@.", NSStringFromClass([self class]));
    if(_instance == nil) {
        _instance = self;
    }
}

// #region Actions
- (void)SetFixedRecordLength:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveFileAttributes* instance = [self getInstance:command.arguments atIndex:0];
    int fixedRecordLength = [[command.arguments objectAtIndex:1] intValue];
    
    if(instance != nil) {
        Btrieve::StatusCode result = instance.btrieveInstance->SetFixedRecordLength(fixedRecordLength);
        if(result == Btrieve::StatusCode::STATUS_CODE_NO_ERROR) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:static_cast<int>(result)];
        } else {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsInt:static_cast<int>(result)];
        }
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:NO_INSTANCE];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}
// #endregion

// #region Helpers
- (NSBtrieveFileAttributes*)create:(NSArray *)args {
    return [self create];
}

- (NSBtrieveFileAttributes*)create {
    return [[NSBtrieveFileAttributes alloc] init];
}

- (void)delete:(NSBtrieveFileAttributes*)instance {
    instance = nil;
}
// #endregion

@end
// #endregion
