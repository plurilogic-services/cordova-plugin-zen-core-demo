#import "CDVBtrieveFile.h"
#import "CDVBtrieveBulkCreatePayload.h"
#import "CDVBtrieveBulkCreateResult.h"
#import "CDVBtrieveBulkRetrieveResult.h"
#import "CDVBtrieveBulkRetrieveAttributes.h"
#import "CDVBtrieveFileInformation.h"
#import "CDVBtrieveIndexAttributes.h"

// #region NSBtrieve Class Wrapper
@implementation NSBtrieveFile

- (instancetype)init {
    _btrieveInstance = new BtrieveFile();
    return self;
}
- (instancetype)initWithBtrieveInstance:(BtrieveFile*)btrieveInstance {
    _btrieveInstance = btrieveInstance;
    return self;
}
- (void)dealloc {
    delete _btrieveInstance;
}

@end
// #endregion

static CDVBtrieveFile* _instance;

// #region Plugin Class
@implementation CDVBtrieveFile

+ (NSBtrieveFile*)getBtrieveInstance:(NSDictionary *)arg {
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
- (void)GetLastStatusCode:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveFile* instance = [self getInstance:command.arguments atIndex:0];

    if(instance != nil) {
        Btrieve::StatusCode result = instance.btrieveInstance->GetLastStatusCode();
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:static_cast<int>(result)];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:NO_INSTANCE];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)IndexCreate:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveFile* instance = [self getInstance:command.arguments atIndex:0];

    if(instance != nil) {
        NSBtrieveIndexAttributes* attributes = [CDVBtrieveIndexAttributes getBtrieveInstance:[command.arguments objectAtIndex:1]];

        Btrieve::StatusCode result = instance.btrieveInstance->IndexCreate(attributes.btrieveInstance);
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

- (void)RecordCreate:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveFile* instance = [self getInstance:command.arguments atIndex:0];

    if(instance != nil) {
        NSData* record = [command.arguments objectAtIndex:1];

        Btrieve::StatusCode result = instance.btrieveInstance->RecordCreate((char*)[record bytes], (int)[record length]);
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

- (void)RecordDelete:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveFile* instance = [self getInstance:command.arguments atIndex:0];

    if(instance != nil) {
        Btrieve::StatusCode result = instance.btrieveInstance->RecordDelete();
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

- (void)RecordRetrieve:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveFile* instance = [self getInstance:command.arguments atIndex:0];

    if(instance != nil) {
        int enumIndex = [[command.arguments objectAtIndex:1] intValue];
        Btrieve::Comparison comparison = static_cast<Btrieve::Comparison>(enumIndex);
        enumIndex = [[command.arguments objectAtIndex:2] intValue];
        Btrieve::Index index = static_cast<Btrieve::Index>(enumIndex);
        NSData* key = [command.arguments objectAtIndex:3];
        int recordSize = [[command.arguments objectAtIndex:4] intValue];
        enumIndex = [[command.arguments objectAtIndex:5] intValue];
        Btrieve::LockMode lockMode = static_cast<Btrieve::LockMode>(enumIndex);

        char* c_record = new char[recordSize];

        int result = instance.btrieveInstance->RecordRetrieve(comparison, index, (char*)[key bytes], (int)[key length], c_record, recordSize, lockMode);
        if(result >= 0) {
            NSData* record = [NSData dataWithBytes:(const void*)c_record length:recordSize];
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsArrayBuffer:record];
        } else {
            Btrieve::StatusCode status = instance.btrieveInstance->GetLastStatusCode();
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsInt:static_cast<int>(status)];
        }

        delete[] c_record;
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:NO_INSTANCE];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)RecordRetrieveByCursorPosition:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveFile* instance = [self getInstance:command.arguments atIndex:0];

    if(instance != nil) {
        int enumIndex = [[command.arguments objectAtIndex:1] intValue];
        Btrieve::Index index = static_cast<Btrieve::Index>(enumIndex);
        long long cursorPosition = [[command.arguments objectAtIndex:3] longLongValue];
        int recordSize = [[command.arguments objectAtIndex:4] intValue];
        enumIndex = [[command.arguments objectAtIndex:5] intValue];
        Btrieve::LockMode lockMode = static_cast<Btrieve::LockMode>(enumIndex);

        char* c_record = new char[recordSize];

        int result = instance.btrieveInstance->RecordRetrieveByCursorPosition(index, cursorPosition, c_record, recordSize, lockMode);
        if(result >= 0) {
            NSData* record = [NSData dataWithBytes:(const void*)c_record length:recordSize];
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsArrayBuffer:record];
        } else {
            Btrieve::StatusCode status = instance.btrieveInstance->GetLastStatusCode();
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsInt:static_cast<int>(status)];
        }

        delete[] c_record;
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:NO_INSTANCE];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)RecordRetrieveFirst:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveFile* instance = [self getInstance:command.arguments atIndex:0];

    if(instance != nil) {
        int enumIndex = [[command.arguments objectAtIndex:1] intValue];
        Btrieve::Index index = static_cast<Btrieve::Index>(enumIndex);
        int recordSize = [[command.arguments objectAtIndex:2] intValue];
        enumIndex = [[command.arguments objectAtIndex:3] intValue];
        Btrieve::LockMode lockMode = static_cast<Btrieve::LockMode>(enumIndex);

        char* c_record = new char[recordSize];

        int result = instance.btrieveInstance->RecordRetrieveFirst(index, c_record, recordSize, lockMode);
        if(result >= 0) {
            NSData* record = [NSData dataWithBytes:(const void*)c_record length:recordSize];
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsArrayBuffer:record];
        } else {
            Btrieve::StatusCode status = instance.btrieveInstance->GetLastStatusCode();
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsInt:static_cast<int>(status)];
        }

        delete[] c_record;
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:NO_INSTANCE];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)RecordRetrieveNext:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSBtrieveFile* instance = [self getInstance:command.arguments atIndex:0];

    if(instance != nil) {
        int recordSize = [[command.arguments objectAtIndex:1] intValue];
        int enumIndex = [[command.arguments objectAtIndex:2] intValue];
        Btrieve::LockMode lockMode = static_cast<Btrieve::LockMode>(enumIndex);

        char* c_record = new char[recordSize];

        int result = instance.btrieveInstance->RecordRetrieveNext(c_record, recordSize, lockMode);
        if(result >= 0) {
            NSData* record = [NSData dataWithBytes:(const void*)c_record length:recordSize];
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsArrayBuffer:record];
        } else {
            Btrieve::StatusCode status = instance.btrieveInstance->GetLastStatusCode();
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsInt:static_cast<int>(status)];
        }

        delete[] c_record;
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:NO_INSTANCE];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}
// #endregion

// #region Helpers
- (NSBtrieveFile*)create:(NSArray *)args {
    return [self create];
}

- (NSBtrieveFile*)create {
    return [[NSBtrieveFile alloc] init];
}

- (void)delete:(NSBtrieveFile*)instance {
    instance = nil;
}
// #endregion

@end
// #endregion
