#import "CDVDbManager.h"
#import <ZenDB/ZenDB.h>

// #region Plugin Class
@implementation CDVDbManager

- (void)pluginInitialize {
    [super pluginInitialize];
    NSLog(@"ActianZen: Initializing %@.", NSStringFromClass([self class]));
    NSString* fileDir = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) objectAtIndex:0];
    [self initializeLib:fileDir];//[fileDir stringByAppendingPathComponent:@"zendb.config"]];
}

// #region Actions
- (void)Initialize:(CDVInvokedUrlCommand *)command {
    NSString* fileDir = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) objectAtIndex:0];
    [self initializeLib:[fileDir stringByAppendingPathComponent:[command.arguments objectAtIndex:2]]];
}
// #endregion

// #region Helpers
- (void)initializeLib:(NSString*)fileName {
    ZenDbInit([fileName UTF8String]);
}

//- (void)extractFileFromAssets:(NSString)assetName withTargetFile:(NSString)targetFile {
//    
//}
// #endregion

@end
// #endregion
