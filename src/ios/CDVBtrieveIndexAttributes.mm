#import "CDVBtrieveIndexAttributes.h"
#import "CDVBtrieveKeySegment.h"

// #region NSBtrieve Class Wrapper
@implementation NSBtrieveIndexAttributes

- (instancetype)init {
    self = [self initWithBtrieveInstance:new BtrieveIndexAttributes()];
    return self;
}
- (instancetype)initWithBtrieveInstance:(BtrieveIndexAttributes*)btrieveInstance {
    _btrieveInstance = btrieveInstance;
    return self;
}
- (void)dealloc {
    delete _btrieveInstance;
}

@end
// #endregion

static CDVBtrieveIndexAttributes* _instance;

// #region Plugin Class
@implementation CDVBtrieveIndexAttributes

+ (NSBtrieveIndexAttributes*)getBtrieveInstance:(NSDictionary *)arg {
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
- (void)AddKeySegment:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveIndexAttributes* instance = [self getInstance:command.arguments atIndex:0];
    NSBtrieveKeySegment* keySegment = [CDVBtrieveKeySegment getBtrieveInstance:[command.arguments objectAtIndex:1]];

    if(instance != nil) {
        Btrieve::StatusCode result = instance.btrieveInstance->AddKeySegment(keySegment.btrieveInstance);
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
- (NSBtrieveIndexAttributes*)create:(NSArray *)args {
    return [self create];
}

- (NSBtrieveIndexAttributes*)create {
    return [[NSBtrieveIndexAttributes alloc] init];
}

- (void)delete:(NSBtrieveIndexAttributes*)instance {
    instance = nil;
}
// #endregion

@end
// #endregion
