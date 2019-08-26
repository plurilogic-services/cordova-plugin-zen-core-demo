#import "CDVBtrieveKeySegment.h"

// #region NSBtrieve Class Wrapper
@implementation NSBtrieveKeySegment

- (instancetype)init {
    self = [self initWithBtrieveInstance:new BtrieveKeySegment()];
    return self;
}
- (instancetype)initWithBtrieveInstance:(BtrieveKeySegment*)btrieveInstance {
    _btrieveInstance = btrieveInstance;
    return self;
}
- (void)dealloc {
    delete _btrieveInstance;
}

@end
// #endregion

static CDVBtrieveKeySegment* _instance;

// #region Plugin Class
@implementation CDVBtrieveKeySegment

+ (NSBtrieveKeySegment*)getBtrieveInstance:(NSDictionary *)arg {
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
- (void)SetField:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveKeySegment* instance = [self getInstance:command.arguments atIndex:0];
    int offset = [[command.arguments objectAtIndex:1] intValue];
    int length = [[command.arguments objectAtIndex:2] intValue];
    int enumIndex = [[command.arguments objectAtIndex:3] intValue];
    Btrieve::DataType dataType = static_cast<Btrieve::DataType>(enumIndex);

    if(instance != nil) {
        Btrieve::StatusCode result = instance.btrieveInstance->SetField(offset, length, dataType);
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
- (NSBtrieveKeySegment*)create:(NSArray *)args {
    return [self create];
}

- (NSBtrieveKeySegment*)create {
    return [[NSBtrieveKeySegment alloc] init];
}

- (void)delete:(NSBtrieveKeySegment*)instance {
    instance = nil;
}
// #endregion

@end
// #endregion
