#import <Cordova/CDVPlugin.h>

@interface CDVBtrieve : CDVPlugin

- (void)ACSModeToString:(CDVInvokedUrlCommand*)command;
- (void)DataTypeToString:(CDVInvokedUrlCommand*)command;
- (void)DuplicateModeToString:(CDVInvokedUrlCommand*)command;
- (void)FileVersionToString:(CDVInvokedUrlCommand*)command;
- (void)FreeSpaceThresholdToString:(CDVInvokedUrlCommand*)command;
- (void)IndexToString:(CDVInvokedUrlCommand*)command;
- (void)LockModeToString:(CDVInvokedUrlCommand*)command;
- (void)NullKeyModeToString:(CDVInvokedUrlCommand*)command;
- (void)OwnerModeToString:(CDVInvokedUrlCommand*)command;
- (void)PageLockTypeToString:(CDVInvokedUrlCommand*)command;
- (void)PageSizeToString:(CDVInvokedUrlCommand*)command;
- (void)RecordCompressionModeToString:(CDVInvokedUrlCommand*)command;
- (void)StatusCodeToString:(CDVInvokedUrlCommand*)command;
- (void)SystemDataModeToString:(CDVInvokedUrlCommand*)command;
- (void)VariableLengthRecordsModeToString:(CDVInvokedUrlCommand*)command;
- (void)VersionTypeToString:(CDVInvokedUrlCommand*)command;
- (void)UnixEpochMicrosecondsToTimestamp:(CDVInvokedUrlCommand*)command;
- (void)TimestampToUnixEpochMicroseconds:(CDVInvokedUrlCommand*)command;

@end
