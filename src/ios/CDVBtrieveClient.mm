#import "CDVBtrieveClient.h"
#import <ZenDBClientAPI/btrieveCpp.h>
#import <Foundation/Foundation.h>
#import "CDVBtrieveFile.h"
#import "CDVBtrieveFileAttributes.h"
#import "CDVBtrieveIndexAttributes.h"
#import "CDVBtrieveVersion.h"

// #region NSBtrieve Class Wrapper
@implementation NSBtrieveClient

- (instancetype)initWithServiceAgentIdentifier:(NSNumber*)serviceAgentIdentifier clientIdentifier:(NSNumber*)clientIdentifier {
    _btrieveInstance = new BtrieveClient([serviceAgentIdentifier intValue], [clientIdentifier intValue]);
    return self;
}
- (instancetype)initWithBtrieveInstance:(BtrieveClient*)btrieveInstance {
    _btrieveInstance = btrieveInstance;
    return self;
}
- (void)dealloc {
    delete _btrieveInstance;
}

@end
// #endregion

static CDVBtrieveClient* _instance;

// #region Plugin Class
@implementation CDVBtrieveClient

+ (NSBtrieveClient*)getBtrieveInstance:(NSDictionary *)arg {
    return [_instance getInstance:arg];
}

+ (NSDictionary*)createBtrieveObject:(NSNumber*)serviceAgentIdentifier clientIdentifier:(NSNumber*)clientIdentifier {
    NSArray* args = @[
        serviceAgentIdentifier,
        clientIdentifier
    ];
    return [_instance addInstance:[_instance create:args]];
}

- (void)pluginInitialize {
    [super pluginInitialize];
    NSLog(@"ActianZen: Initializing %@.", NSStringFromClass([self class]));
    if(_instance == nil) {
        _instance = self;
    }
}

// #region Actions
- (void)FileClose:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveClient* instance = [self getInstance:command.arguments atIndex:0];
    
    if(instance != nil) {
        NSBtrieveFile* file = [CDVBtrieveFile getBtrieveInstance:[command.arguments objectAtIndex:1]];

        Btrieve::StatusCode result = instance.btrieveInstance->FileClose(file.btrieveInstance);
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

- (void)FileCreate:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveClient* instance = [self getInstance:command.arguments atIndex:0];
    
    if(instance != nil) {
        Btrieve::StatusCode result;
        NSString* fileDir = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) objectAtIndex:0];
        if([command.arguments count] == 5) {
            NSBtrieveFileAttributes* attributes = [CDVBtrieveFileAttributes getBtrieveInstance:[command.arguments objectAtIndex:1]];
            NSString* fileName = [fileDir stringByAppendingPathComponent:[command.arguments objectAtIndex:2]];
            int enumIndex = [[command.arguments objectAtIndex:3] intValue];
            Btrieve::CreateMode createMode = static_cast<Btrieve::CreateMode>(enumIndex);
            enumIndex = [[command.arguments objectAtIndex:4] intValue];
            Btrieve::LocationMode locationMode = static_cast<Btrieve::LocationMode>(enumIndex);
            
            result = instance.btrieveInstance->FileCreate(attributes.btrieveInstance, [fileName UTF8String], createMode, locationMode);
        } else {
            NSBtrieveFileAttributes* attributes = [CDVBtrieveFileAttributes getBtrieveInstance:[command.arguments objectAtIndex:1]];
            NSBtrieveIndexAttributes* indexAttributes = [CDVBtrieveIndexAttributes getBtrieveInstance:[command.arguments objectAtIndex:2]];
            NSString* fileName = [fileDir stringByAppendingPathComponent:[command.arguments objectAtIndex:3]];
            int enumIndex = [[command.arguments objectAtIndex:4] intValue];
            Btrieve::CreateMode createMode = static_cast<Btrieve::CreateMode>(enumIndex);
            enumIndex = [[command.arguments objectAtIndex:5] intValue];
            Btrieve::LocationMode locationMode = static_cast<Btrieve::LocationMode>(enumIndex);
            
            result = instance.btrieveInstance->FileCreate(attributes.btrieveInstance, indexAttributes.btrieveInstance, [fileName UTF8String], createMode, locationMode);
        }

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

- (void)FileOpen:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveClient* instance = [self getInstance:command.arguments atIndex:0];
    
    if(instance != nil) {
        NSDictionary* result = [CDVBtrieveFile createBtrieveObject];
        NSBtrieveFile* file = [CDVBtrieveFile getBtrieveInstance:result];
        NSString* fileDir = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) objectAtIndex:0];
        
        NSString* fileName = [fileDir stringByAppendingPathComponent:[command.arguments objectAtIndex:1]];
        NSString* ownerName = [command.arguments objectAtIndex:2];
        BOOL isOwnerNameNull = (NSNull*)ownerName == [NSNull null];
        int enumIndex = [[command.arguments objectAtIndex:3] intValue];
        Btrieve::OpenMode openMode = static_cast<Btrieve::OpenMode>(enumIndex);
        enumIndex = [[command.arguments objectAtIndex:4] intValue];
        Btrieve::LocationMode locationMode = static_cast<Btrieve::LocationMode>(enumIndex);

        Btrieve::StatusCode status = instance.btrieveInstance->FileOpen(file.btrieveInstance, [fileName UTF8String], (isOwnerNameNull ? NULL : [ownerName UTF8String]), openMode, locationMode);
        if(status == Btrieve::StatusCode::STATUS_CODE_NO_ERROR) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:result];
        } else {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsInt:static_cast<int>(status)];
        }
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:NO_INSTANCE];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)GetLastStatusCode:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveClient* instance = [self getInstance:command.arguments atIndex:0];
    
    if(instance != nil) {
        Btrieve::StatusCode result = instance.btrieveInstance->GetLastStatusCode();
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:static_cast<int>(result)];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:NO_INSTANCE];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}
// #endregion

// #region Helpers
- (NSBtrieveClient*)create:(NSArray *)args {
    NSNumber* serviceAgentIdentifier = [args objectAtIndex:0];
    NSNumber* clientIdentifier = [args objectAtIndex:1];
    NSBtrieveClient* client = [[NSBtrieveClient alloc] initWithServiceAgentIdentifier:serviceAgentIdentifier clientIdentifier:clientIdentifier];
    return client;
}

- (void)delete:(NSBtrieveClient*)instance {
    instance = nil;
}
// #endregion

@end
// #endregion
