#import "CDVBtrieve.h"
#import <ZenDBClientAPI/btrieveCpp.h>

@implementation CDVBtrieve

- (void)ACSModeToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];

    Btrieve::ACSMode enumValue = static_cast<Btrieve::ACSMode>([enumIndex intValue]);
    const char* cs_value = Btrieve::ACSModeToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)DataTypeToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::DataType enumValue = static_cast<Btrieve::DataType>([enumIndex intValue]);
    const char* cs_value = Btrieve::DataTypeToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)DuplicateModeToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::DuplicateMode enumValue = static_cast<Btrieve::DuplicateMode>([enumIndex intValue]);
    const char* cs_value = Btrieve::DuplicateModeToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)FileVersionToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::FileVersion enumValue = static_cast<Btrieve::FileVersion>([enumIndex intValue]);
    const char* cs_value = Btrieve::FileVersionToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)FreeSpaceThresholdToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::FreeSpaceThreshold enumValue = static_cast<Btrieve::FreeSpaceThreshold>([enumIndex intValue]);
    const char* cs_value = Btrieve::FreeSpaceThresholdToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)IndexToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::Index enumValue = static_cast<Btrieve::Index>([enumIndex intValue]);
    const char* cs_value = Btrieve::IndexToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)LockModeToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::LockMode enumValue = static_cast<Btrieve::LockMode>([enumIndex intValue]);
    const char* cs_value = Btrieve::LockModeToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)NullKeyModeToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::NullKeyMode enumValue = static_cast<Btrieve::NullKeyMode>([enumIndex intValue]);
    const char* cs_value = Btrieve::NullKeyModeToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)OwnerModeToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::OwnerMode enumValue = static_cast<Btrieve::OwnerMode>([enumIndex intValue]);
    const char* cs_value = Btrieve::OwnerModeToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)PageLockTypeToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::PageLockType enumValue = static_cast<Btrieve::PageLockType>([enumIndex intValue]);
    const char* cs_value = Btrieve::PageLockTypeToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)PageSizeToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::PageSize enumValue = static_cast<Btrieve::PageSize>([enumIndex intValue]);
    const char* cs_value = Btrieve::PageSizeToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)RecordCompressionModeToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::RecordCompressionMode enumValue = static_cast<Btrieve::RecordCompressionMode>([enumIndex intValue]);
    const char* cs_value = Btrieve::RecordCompressionModeToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)StatusCodeToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::StatusCode enumValue = static_cast<Btrieve::StatusCode>([enumIndex intValue]);
    const char* cs_value = Btrieve::StatusCodeToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)SystemDataModeToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::SystemDataMode enumValue = static_cast<Btrieve::SystemDataMode>([enumIndex intValue]);
    const char* cs_value = Btrieve::SystemDataModeToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)VariableLengthRecordsModeToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::VariableLengthRecordsMode enumValue = static_cast<Btrieve::VariableLengthRecordsMode>([enumIndex intValue]);
    const char* cs_value = Btrieve::VariableLengthRecordsModeToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)VersionTypeToString:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* enumIndex = [command.arguments objectAtIndex:0];
    
    Btrieve::VersionType enumValue = static_cast<Btrieve::VersionType>([enumIndex intValue]);
    const char* cs_value = Btrieve::VersionTypeToString(enumValue);
    NSString* valueString = [[NSString alloc] initWithCString:cs_value encoding:NSUTF8StringEncoding];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:valueString];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)UnixEpochMicrosecondsToTimestamp:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* microseconds = [command.arguments objectAtIndex:0];
    
    long long timestamp = Btrieve::UnixEpochMicrosecondsToTimestamp([microseconds longLongValue]);
    NSArray* packedTimestamp = @[[NSNumber numberWithLongLong:timestamp]];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsArray:packedTimestamp];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)TimestampToUnixEpochMicroseconds:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSNumber* timestamps = [command.arguments objectAtIndex:0];
    
    long long microseconds = Btrieve::TimestampToUnixEpochMicroseconds([timestamps longLongValue]);
    NSArray* packedMicroseconds = @[[NSNumber numberWithLongLong:microseconds]];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsArray:packedMicroseconds];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
