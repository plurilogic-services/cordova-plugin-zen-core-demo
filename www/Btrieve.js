/*! © 2019 Actian Corporation, All Rights Reserved. */
/// <reference path="../node_modules/@types/cordova/index.d.ts" />
var BTRIEVE_MAXIMUM_KEY_LENGTH = 255;
var BTRIEVE_MAXIMUM_RECORD_LENGTH = 61440;
var Btrieve;
(function (Btrieve) {
    /**
     * The Btrieve maximum key segment length.
     */
    Btrieve.MAXIMUM_KEY_LENGTH = BTRIEVE_MAXIMUM_KEY_LENGTH;
    /**
     * The Btrieve maximum record length.
     */
    Btrieve.MAXIMUM_RECORD_LENGTH = BTRIEVE_MAXIMUM_RECORD_LENGTH;
    // #region Enums
    /**
     * The Btrieve alternate collation sequence modes.
     */
    var ACSMode;
    (function (ACSMode) {
        ACSMode[ACSMode["ACS_MODE_NONE"] = 0] = "ACS_MODE_NONE";
        ACSMode[ACSMode["ACS_MODE_NAMED"] = 1] = "ACS_MODE_NAMED";
        ACSMode[ACSMode["ACS_MODE_NUMBERED"] = 2] = "ACS_MODE_NUMBERED";
        ACSMode[ACSMode["ACS_MODE_CASE_INSENSITIVE"] = 3] = "ACS_MODE_CASE_INSENSITIVE";
        ACSMode[ACSMode["ACS_MODE_DEFAULT"] = 4] = "ACS_MODE_DEFAULT";
        ACSMode[ACSMode["ACS_MODE_UNKNOWN"] = -7] = "ACS_MODE_UNKNOWN";
    })(ACSMode = Btrieve.ACSMode || (Btrieve.ACSMode = {}));
    /**
     * The Btrieve comparisons.
     */
    var Comparison;
    (function (Comparison) {
        Comparison[Comparison["COMPARISON_NONE"] = 0] = "COMPARISON_NONE";
        Comparison[Comparison["COMPARISON_EQUAL"] = 1] = "COMPARISON_EQUAL";
        Comparison[Comparison["COMPARISON_GREATER_THAN"] = 2] = "COMPARISON_GREATER_THAN";
        Comparison[Comparison["COMPARISON_LESS_THAN"] = 3] = "COMPARISON_LESS_THAN";
        Comparison[Comparison["COMPARISON_NOT_EQUAL"] = 4] = "COMPARISON_NOT_EQUAL";
        Comparison[Comparison["COMPARISON_GREATER_THAN_OR_EQUAL"] = 5] = "COMPARISON_GREATER_THAN_OR_EQUAL";
        Comparison[Comparison["COMPARISON_LESS_THAN_OR_EQUAL"] = 6] = "COMPARISON_LESS_THAN_OR_EQUAL";
        Comparison[Comparison["COMPARISON_LIKE"] = 7] = "COMPARISON_LIKE";
        Comparison[Comparison["COMPARISON_NOT_LIKE"] = 8] = "COMPARISON_NOT_LIKE";
        Comparison[Comparison["COMPARISON_UNKNOWN"] = -7] = "COMPARISON_UNKNOWN";
    })(Comparison = Btrieve.Comparison || (Btrieve.Comparison = {}));
    /**
     * The Btrieve connectors.
     */
    var Connector;
    (function (Connector) {
        Connector[Connector["CONNECTOR_LAST"] = 0] = "CONNECTOR_LAST";
        Connector[Connector["CONNECTOR_AND"] = 1] = "CONNECTOR_AND";
        Connector[Connector["CONNECTOR_OR"] = 2] = "CONNECTOR_OR";
        Connector[Connector["CONNECTOR_UNKNOWN"] = -7] = "CONNECTOR_UNKNOWN";
    })(Connector = Btrieve.Connector || (Btrieve.Connector = {}));
    /**
     * The Btrieve create modes.
     */
    var CreateMode;
    (function (CreateMode) {
        CreateMode[CreateMode["CREATE_MODE_OVERWRITE"] = 0] = "CREATE_MODE_OVERWRITE";
        CreateMode[CreateMode["CREATE_MODE_NO_OVERWRITE"] = 1] = "CREATE_MODE_NO_OVERWRITE";
        CreateMode[CreateMode["CREATE_MODE_UNKNOWN"] = -7] = "CREATE_MODE_UNKNOWN";
    })(CreateMode = Btrieve.CreateMode || (Btrieve.CreateMode = {}));
    /**
     * The Btrieve data types.
     */
    var DataType;
    (function (DataType) {
        DataType[DataType["DATA_TYPE_CHAR"] = 0] = "DATA_TYPE_CHAR";
        DataType[DataType["DATA_TYPE_ZSTRING"] = 1] = "DATA_TYPE_ZSTRING";
        DataType[DataType["DATA_TYPE_INTEGER"] = 2] = "DATA_TYPE_INTEGER";
        DataType[DataType["DATA_TYPE_UNSIGNED_BINARY"] = 3] = "DATA_TYPE_UNSIGNED_BINARY";
        DataType[DataType["DATA_TYPE_FLOAT"] = 4] = "DATA_TYPE_FLOAT";
        DataType[DataType["DATA_TYPE_AUTOINCREMENT"] = 5] = "DATA_TYPE_AUTOINCREMENT";
        DataType[DataType["DATA_TYPE_DATE"] = 6] = "DATA_TYPE_DATE";
        DataType[DataType["DATA_TYPE_NUMERICSTS"] = 7] = "DATA_TYPE_NUMERICSTS";
        DataType[DataType["DATA_TYPE_TIME"] = 8] = "DATA_TYPE_TIME";
        DataType[DataType["DATA_TYPE_NUMERICSA"] = 9] = "DATA_TYPE_NUMERICSA";
        DataType[DataType["DATA_TYPE_DECIMAL"] = 10] = "DATA_TYPE_DECIMAL";
        DataType[DataType["DATA_TYPE_CURRENCY"] = 11] = "DATA_TYPE_CURRENCY";
        DataType[DataType["DATA_TYPE_MONEY"] = 12] = "DATA_TYPE_MONEY";
        DataType[DataType["DATA_TYPE_TIMESTAMP"] = 13] = "DATA_TYPE_TIMESTAMP";
        DataType[DataType["DATA_TYPE_LOGICAL"] = 14] = "DATA_TYPE_LOGICAL";
        DataType[DataType["DATA_TYPE_WSTRING"] = 15] = "DATA_TYPE_WSTRING";
        DataType[DataType["DATA_TYPE_NUMERIC"] = 16] = "DATA_TYPE_NUMERIC";
        DataType[DataType["DATA_TYPE_WZSTRING"] = 17] = "DATA_TYPE_WZSTRING";
        DataType[DataType["DATA_TYPE_BFLOAT"] = 18] = "DATA_TYPE_BFLOAT";
        DataType[DataType["DATA_TYPE_GUID"] = 19] = "DATA_TYPE_GUID";
        DataType[DataType["DATA_TYPE_LSTRING"] = 20] = "DATA_TYPE_LSTRING";
        DataType[DataType["DATA_TYPE_NULL_INDICATOR_SEGMENT"] = 21] = "DATA_TYPE_NULL_INDICATOR_SEGMENT";
        DataType[DataType["DATA_TYPE_LEGACY_STRING"] = 22] = "DATA_TYPE_LEGACY_STRING";
        DataType[DataType["DATA_TYPE_LEGACY_BINARY"] = 23] = "DATA_TYPE_LEGACY_BINARY";
        DataType[DataType["DATA_TYPE_UNKNOWN"] = -7] = "DATA_TYPE_UNKNOWN";
    })(DataType = Btrieve.DataType || (Btrieve.DataType = {}));
    /**
     * The Btrieve disk drives.
     */
    var DiskDrive;
    (function (DiskDrive) {
        DiskDrive[DiskDrive["DISK_DRIVE_A"] = 0] = "DISK_DRIVE_A";
        DiskDrive[DiskDrive["DISK_DRIVE_B"] = 1] = "DISK_DRIVE_B";
        DiskDrive[DiskDrive["DISK_DRIVE_C"] = 2] = "DISK_DRIVE_C";
        DiskDrive[DiskDrive["DISK_DRIVE_D"] = 3] = "DISK_DRIVE_D";
        DiskDrive[DiskDrive["DISK_DRIVE_E"] = 4] = "DISK_DRIVE_E";
        DiskDrive[DiskDrive["DISK_DRIVE_F"] = 5] = "DISK_DRIVE_F";
        DiskDrive[DiskDrive["DISK_DRIVE_G"] = 6] = "DISK_DRIVE_G";
        DiskDrive[DiskDrive["DISK_DRIVE_H"] = 7] = "DISK_DRIVE_H";
        DiskDrive[DiskDrive["DISK_DRIVE_I"] = 8] = "DISK_DRIVE_I";
        DiskDrive[DiskDrive["DISK_DRIVE_J"] = 9] = "DISK_DRIVE_J";
        DiskDrive[DiskDrive["DISK_DRIVE_K"] = 10] = "DISK_DRIVE_K";
        DiskDrive[DiskDrive["DISK_DRIVE_L"] = 11] = "DISK_DRIVE_L";
        DiskDrive[DiskDrive["DISK_DRIVE_M"] = 12] = "DISK_DRIVE_M";
        DiskDrive[DiskDrive["DISK_DRIVE_N"] = 13] = "DISK_DRIVE_N";
        DiskDrive[DiskDrive["DISK_DRIVE_O"] = 14] = "DISK_DRIVE_O";
        DiskDrive[DiskDrive["DISK_DRIVE_P"] = 15] = "DISK_DRIVE_P";
        DiskDrive[DiskDrive["DISK_DRIVE_Q"] = 16] = "DISK_DRIVE_Q";
        DiskDrive[DiskDrive["DISK_DRIVE_R"] = 17] = "DISK_DRIVE_R";
        DiskDrive[DiskDrive["DISK_DRIVE_S"] = 18] = "DISK_DRIVE_S";
        DiskDrive[DiskDrive["DISK_DRIVE_T"] = 19] = "DISK_DRIVE_T";
        DiskDrive[DiskDrive["DISK_DRIVE_U"] = 20] = "DISK_DRIVE_U";
        DiskDrive[DiskDrive["DISK_DRIVE_V"] = 21] = "DISK_DRIVE_V";
        DiskDrive[DiskDrive["DISK_DRIVE_W"] = 22] = "DISK_DRIVE_W";
        DiskDrive[DiskDrive["DISK_DRIVE_X"] = 23] = "DISK_DRIVE_X";
        DiskDrive[DiskDrive["DISK_DRIVE_Y"] = 24] = "DISK_DRIVE_Y";
        DiskDrive[DiskDrive["DISK_DRIVE_Z"] = 25] = "DISK_DRIVE_Z";
        DiskDrive[DiskDrive["DISK_DRIVE_DEFAULT"] = 26] = "DISK_DRIVE_DEFAULT";
        DiskDrive[DiskDrive["DISK_DRIVE_UNKNOWN"] = -7] = "DISK_DRIVE_UNKNOWN";
    })(DiskDrive = Btrieve.DiskDrive || (Btrieve.DiskDrive = {}));
    /**
     * The Btrieve duplicate modes.
     */
    var DuplicateMode;
    (function (DuplicateMode) {
        DuplicateMode[DuplicateMode["DUPLICATE_MODE_NOT_ALLOWED"] = 0] = "DUPLICATE_MODE_NOT_ALLOWED";
        DuplicateMode[DuplicateMode["DUPLICATE_MODE_ALLOWED_NONREPEATING"] = 1] = "DUPLICATE_MODE_ALLOWED_NONREPEATING";
        DuplicateMode[DuplicateMode["DUPLICATE_MODE_ALLOWED_REPEATING"] = 2] = "DUPLICATE_MODE_ALLOWED_REPEATING";
        DuplicateMode[DuplicateMode["DUPLICATE_MODE_UNKNOWN"] = -7] = "DUPLICATE_MODE_UNKNOWN";
    })(DuplicateMode = Btrieve.DuplicateMode || (Btrieve.DuplicateMode = {}));
    /**
     * The Btrieve file versions.
     */
    var FileVersion;
    (function (FileVersion) {
        FileVersion[FileVersion["FILE_VERSION_6_0"] = 0] = "FILE_VERSION_6_0";
        FileVersion[FileVersion["FILE_VERSION_6_1"] = 1] = "FILE_VERSION_6_1";
        FileVersion[FileVersion["FILE_VERSION_7_0"] = 2] = "FILE_VERSION_7_0";
        FileVersion[FileVersion["FILE_VERSION_8_0"] = 3] = "FILE_VERSION_8_0";
        FileVersion[FileVersion["FILE_VERSION_9_0"] = 4] = "FILE_VERSION_9_0";
        FileVersion[FileVersion["FILE_VERSION_9_5"] = 5] = "FILE_VERSION_9_5";
        FileVersion[FileVersion["FILE_VERSION_DEFAULT"] = 6] = "FILE_VERSION_DEFAULT";
        FileVersion[FileVersion["FILE_VERSION_13_0"] = 7] = "FILE_VERSION_13_0";
        FileVersion[FileVersion["FILE_VERSION_UNKNOWN"] = -7] = "FILE_VERSION_UNKNOWN";
    })(FileVersion = Btrieve.FileVersion || (Btrieve.FileVersion = {}));
    /**
     * The Btrieve free space thresholds.
     */
    var FreeSpaceThreshold;
    (function (FreeSpaceThreshold) {
        FreeSpaceThreshold[FreeSpaceThreshold["FREE_SPACE_THRESHOLD_10_PERCENT"] = 0] = "FREE_SPACE_THRESHOLD_10_PERCENT";
        FreeSpaceThreshold[FreeSpaceThreshold["FREE_SPACE_THRESHOLD_20_PERCENT"] = 1] = "FREE_SPACE_THRESHOLD_20_PERCENT";
        FreeSpaceThreshold[FreeSpaceThreshold["FREE_SPACE_THRESHOLD_30_PERCENT"] = 2] = "FREE_SPACE_THRESHOLD_30_PERCENT";
        FreeSpaceThreshold[FreeSpaceThreshold["FREE_SPACE_THRESHOLD_DEFAULT"] = 3] = "FREE_SPACE_THRESHOLD_DEFAULT";
        FreeSpaceThreshold[FreeSpaceThreshold["FREE_SPACE_THRESHOLD_UNKNOWN"] = -7] = "FREE_SPACE_THRESHOLD_UNKNOWN";
    })(FreeSpaceThreshold = Btrieve.FreeSpaceThreshold || (Btrieve.FreeSpaceThreshold = {}));
    /**
     * The Btrieve indexes.
     */
    var Index;
    (function (Index) {
        Index[Index["INDEX_1"] = 0] = "INDEX_1";
        Index[Index["INDEX_2"] = 1] = "INDEX_2";
        Index[Index["INDEX_3"] = 2] = "INDEX_3";
        Index[Index["INDEX_4"] = 3] = "INDEX_4";
        Index[Index["INDEX_5"] = 4] = "INDEX_5";
        Index[Index["INDEX_6"] = 5] = "INDEX_6";
        Index[Index["INDEX_7"] = 6] = "INDEX_7";
        Index[Index["INDEX_8"] = 7] = "INDEX_8";
        Index[Index["INDEX_9"] = 8] = "INDEX_9";
        Index[Index["INDEX_10"] = 9] = "INDEX_10";
        Index[Index["INDEX_11"] = 10] = "INDEX_11";
        Index[Index["INDEX_12"] = 11] = "INDEX_12";
        Index[Index["INDEX_13"] = 12] = "INDEX_13";
        Index[Index["INDEX_14"] = 13] = "INDEX_14";
        Index[Index["INDEX_15"] = 14] = "INDEX_15";
        Index[Index["INDEX_16"] = 15] = "INDEX_16";
        Index[Index["INDEX_17"] = 16] = "INDEX_17";
        Index[Index["INDEX_18"] = 17] = "INDEX_18";
        Index[Index["INDEX_19"] = 18] = "INDEX_19";
        Index[Index["INDEX_20"] = 19] = "INDEX_20";
        Index[Index["INDEX_21"] = 20] = "INDEX_21";
        Index[Index["INDEX_22"] = 21] = "INDEX_22";
        Index[Index["INDEX_23"] = 22] = "INDEX_23";
        Index[Index["INDEX_24"] = 23] = "INDEX_24";
        Index[Index["INDEX_25"] = 24] = "INDEX_25";
        Index[Index["INDEX_26"] = 25] = "INDEX_26";
        Index[Index["INDEX_27"] = 26] = "INDEX_27";
        Index[Index["INDEX_28"] = 27] = "INDEX_28";
        Index[Index["INDEX_29"] = 28] = "INDEX_29";
        Index[Index["INDEX_30"] = 29] = "INDEX_30";
        Index[Index["INDEX_31"] = 30] = "INDEX_31";
        Index[Index["INDEX_32"] = 31] = "INDEX_32";
        Index[Index["INDEX_33"] = 32] = "INDEX_33";
        Index[Index["INDEX_34"] = 33] = "INDEX_34";
        Index[Index["INDEX_35"] = 34] = "INDEX_35";
        Index[Index["INDEX_36"] = 35] = "INDEX_36";
        Index[Index["INDEX_37"] = 36] = "INDEX_37";
        Index[Index["INDEX_38"] = 37] = "INDEX_38";
        Index[Index["INDEX_39"] = 38] = "INDEX_39";
        Index[Index["INDEX_40"] = 39] = "INDEX_40";
        Index[Index["INDEX_41"] = 40] = "INDEX_41";
        Index[Index["INDEX_42"] = 41] = "INDEX_42";
        Index[Index["INDEX_43"] = 42] = "INDEX_43";
        Index[Index["INDEX_44"] = 43] = "INDEX_44";
        Index[Index["INDEX_45"] = 44] = "INDEX_45";
        Index[Index["INDEX_46"] = 45] = "INDEX_46";
        Index[Index["INDEX_47"] = 46] = "INDEX_47";
        Index[Index["INDEX_48"] = 47] = "INDEX_48";
        Index[Index["INDEX_49"] = 48] = "INDEX_49";
        Index[Index["INDEX_50"] = 49] = "INDEX_50";
        Index[Index["INDEX_51"] = 50] = "INDEX_51";
        Index[Index["INDEX_52"] = 51] = "INDEX_52";
        Index[Index["INDEX_53"] = 52] = "INDEX_53";
        Index[Index["INDEX_54"] = 53] = "INDEX_54";
        Index[Index["INDEX_55"] = 54] = "INDEX_55";
        Index[Index["INDEX_56"] = 55] = "INDEX_56";
        Index[Index["INDEX_57"] = 56] = "INDEX_57";
        Index[Index["INDEX_58"] = 57] = "INDEX_58";
        Index[Index["INDEX_59"] = 58] = "INDEX_59";
        Index[Index["INDEX_60"] = 59] = "INDEX_60";
        Index[Index["INDEX_61"] = 60] = "INDEX_61";
        Index[Index["INDEX_62"] = 61] = "INDEX_62";
        Index[Index["INDEX_63"] = 62] = "INDEX_63";
        Index[Index["INDEX_64"] = 63] = "INDEX_64";
        Index[Index["INDEX_65"] = 64] = "INDEX_65";
        Index[Index["INDEX_66"] = 65] = "INDEX_66";
        Index[Index["INDEX_67"] = 66] = "INDEX_67";
        Index[Index["INDEX_68"] = 67] = "INDEX_68";
        Index[Index["INDEX_69"] = 68] = "INDEX_69";
        Index[Index["INDEX_70"] = 69] = "INDEX_70";
        Index[Index["INDEX_71"] = 70] = "INDEX_71";
        Index[Index["INDEX_72"] = 71] = "INDEX_72";
        Index[Index["INDEX_73"] = 72] = "INDEX_73";
        Index[Index["INDEX_74"] = 73] = "INDEX_74";
        Index[Index["INDEX_75"] = 74] = "INDEX_75";
        Index[Index["INDEX_76"] = 75] = "INDEX_76";
        Index[Index["INDEX_77"] = 76] = "INDEX_77";
        Index[Index["INDEX_78"] = 77] = "INDEX_78";
        Index[Index["INDEX_79"] = 78] = "INDEX_79";
        Index[Index["INDEX_80"] = 79] = "INDEX_80";
        Index[Index["INDEX_81"] = 80] = "INDEX_81";
        Index[Index["INDEX_82"] = 81] = "INDEX_82";
        Index[Index["INDEX_83"] = 82] = "INDEX_83";
        Index[Index["INDEX_84"] = 83] = "INDEX_84";
        Index[Index["INDEX_85"] = 84] = "INDEX_85";
        Index[Index["INDEX_86"] = 85] = "INDEX_86";
        Index[Index["INDEX_87"] = 86] = "INDEX_87";
        Index[Index["INDEX_88"] = 87] = "INDEX_88";
        Index[Index["INDEX_89"] = 88] = "INDEX_89";
        Index[Index["INDEX_90"] = 89] = "INDEX_90";
        Index[Index["INDEX_91"] = 90] = "INDEX_91";
        Index[Index["INDEX_92"] = 91] = "INDEX_92";
        Index[Index["INDEX_93"] = 92] = "INDEX_93";
        Index[Index["INDEX_94"] = 93] = "INDEX_94";
        Index[Index["INDEX_95"] = 94] = "INDEX_95";
        Index[Index["INDEX_96"] = 95] = "INDEX_96";
        Index[Index["INDEX_97"] = 96] = "INDEX_97";
        Index[Index["INDEX_98"] = 97] = "INDEX_98";
        Index[Index["INDEX_99"] = 98] = "INDEX_99";
        Index[Index["INDEX_100"] = 99] = "INDEX_100";
        Index[Index["INDEX_101"] = 100] = "INDEX_101";
        Index[Index["INDEX_102"] = 101] = "INDEX_102";
        Index[Index["INDEX_103"] = 102] = "INDEX_103";
        Index[Index["INDEX_104"] = 103] = "INDEX_104";
        Index[Index["INDEX_105"] = 104] = "INDEX_105";
        Index[Index["INDEX_106"] = 105] = "INDEX_106";
        Index[Index["INDEX_107"] = 106] = "INDEX_107";
        Index[Index["INDEX_108"] = 107] = "INDEX_108";
        Index[Index["INDEX_109"] = 108] = "INDEX_109";
        Index[Index["INDEX_110"] = 109] = "INDEX_110";
        Index[Index["INDEX_111"] = 110] = "INDEX_111";
        Index[Index["INDEX_112"] = 111] = "INDEX_112";
        Index[Index["INDEX_113"] = 112] = "INDEX_113";
        Index[Index["INDEX_114"] = 113] = "INDEX_114";
        Index[Index["INDEX_115"] = 114] = "INDEX_115";
        Index[Index["INDEX_116"] = 115] = "INDEX_116";
        Index[Index["INDEX_117"] = 116] = "INDEX_117";
        Index[Index["INDEX_118"] = 117] = "INDEX_118";
        Index[Index["INDEX_119"] = 118] = "INDEX_119";
        Index[Index["INDEX_SYSTEM"] = 125] = "INDEX_SYSTEM";
        Index[Index["INDEX_NONE"] = -1] = "INDEX_NONE";
        Index[Index["INDEX_UNKNOWN"] = -7] = "INDEX_UNKNOWN";
    })(Index = Btrieve.Index || (Btrieve.Index = {}));
    /**
     * The Btrieve location modes.
     */
    var LocationMode;
    (function (LocationMode) {
        LocationMode[LocationMode["LOCATION_MODE_NO_PREFERENCE"] = 0] = "LOCATION_MODE_NO_PREFERENCE";
        LocationMode[LocationMode["LOCATION_MODE_FORCE_LOCAL"] = 1] = "LOCATION_MODE_FORCE_LOCAL";
        LocationMode[LocationMode["LOCATION_MODE_FORCE_REMOTE"] = 2] = "LOCATION_MODE_FORCE_REMOTE";
        LocationMode[LocationMode["LOCATION_MODE_UNKNOWN"] = -7] = "LOCATION_MODE_UNKNOWN";
    })(LocationMode = Btrieve.LocationMode || (Btrieve.LocationMode = {}));
    /**
     * The Btrieve lock modes.
     */
    var LockMode;
    (function (LockMode) {
        LockMode[LockMode["LOCK_MODE_NONE"] = 0] = "LOCK_MODE_NONE";
        LockMode[LockMode["LOCK_MODE_SINGLE_WAIT"] = 1] = "LOCK_MODE_SINGLE_WAIT";
        LockMode[LockMode["LOCK_MODE_SINGLE_NO_WAIT"] = 2] = "LOCK_MODE_SINGLE_NO_WAIT";
        LockMode[LockMode["LOCK_MODE_MULTIPLE_WAIT"] = 3] = "LOCK_MODE_MULTIPLE_WAIT";
        LockMode[LockMode["LOCK_MODE_MULTIPLE_NO_WAIT"] = 4] = "LOCK_MODE_MULTIPLE_NO_WAIT";
        LockMode[LockMode["LOCK_MODE_UNKNOWN"] = -7] = "LOCK_MODE_UNKNOWN";
    })(LockMode = Btrieve.LockMode || (Btrieve.LockMode = {}));
    /**
     * The Btrieve null key modes.
     */
    var NullKeyMode;
    (function (NullKeyMode) {
        NullKeyMode[NullKeyMode["NULL_KEY_MODE_ALL_SEGMENTS"] = 0] = "NULL_KEY_MODE_ALL_SEGMENTS";
        NullKeyMode[NullKeyMode["NULL_KEY_MODE_ANY_SEGMENTS"] = 1] = "NULL_KEY_MODE_ANY_SEGMENTS";
        NullKeyMode[NullKeyMode["NULL_KEY_MODE_NONE"] = 2] = "NULL_KEY_MODE_NONE";
        NullKeyMode[NullKeyMode["NULL_KEY_MODE_UNKNOWN"] = -7] = "NULL_KEY_MODE_UNKNOWN";
    })(NullKeyMode = Btrieve.NullKeyMode || (Btrieve.NullKeyMode = {}));
    /**
     * The Btrieve open modes.
     */
    var OpenMode;
    (function (OpenMode) {
        OpenMode[OpenMode["OPEN_MODE_NORMAL"] = 0] = "OPEN_MODE_NORMAL";
        OpenMode[OpenMode["OPEN_MODE_ACCELERATED"] = 1] = "OPEN_MODE_ACCELERATED";
        OpenMode[OpenMode["OPEN_MODE_READ_ONLY"] = 2] = "OPEN_MODE_READ_ONLY";
        OpenMode[OpenMode["OPEN_MODE_EXCLUSIVE"] = 3] = "OPEN_MODE_EXCLUSIVE";
        OpenMode[OpenMode["OPEN_MODE_UNKNOWN"] = -7] = "OPEN_MODE_UNKNOWN";
    })(OpenMode = Btrieve.OpenMode || (Btrieve.OpenMode = {}));
    /**
     * The Btrieve file owner modes.
     */
    var OwnerMode;
    (function (OwnerMode) {
        OwnerMode[OwnerMode["OWNER_MODE_NONE"] = 0] = "OWNER_MODE_NONE";
        OwnerMode[OwnerMode["OWNER_MODE_NO_ENCRYPTION_NO_READ_ALLOWED"] = 1] = "OWNER_MODE_NO_ENCRYPTION_NO_READ_ALLOWED";
        OwnerMode[OwnerMode["OWNER_MODE_NO_ENCRYPTION_READ_ALLOWED"] = 2] = "OWNER_MODE_NO_ENCRYPTION_READ_ALLOWED";
        OwnerMode[OwnerMode["OWNER_MODE_ENCRYPTION_NO_READ_ALLOWED"] = 3] = "OWNER_MODE_ENCRYPTION_NO_READ_ALLOWED";
        OwnerMode[OwnerMode["OWNER_MODE_ENCRYPTION_READ_ALLOWED"] = 4] = "OWNER_MODE_ENCRYPTION_READ_ALLOWED";
        OwnerMode[OwnerMode["OWNER_MODE_UNKNOWN"] = -7] = "OWNER_MODE_UNKNOWN";
    })(OwnerMode = Btrieve.OwnerMode || (Btrieve.OwnerMode = {}));
    /**
     * The Btrieve page lock type.
     */
    var PageLockType;
    (function (PageLockType) {
        PageLockType[PageLockType["PAGE_LOCK_TYPE_NONE"] = 0] = "PAGE_LOCK_TYPE_NONE";
        PageLockType[PageLockType["PAGE_LOCK_TYPE_DATA_PAGE"] = 1] = "PAGE_LOCK_TYPE_DATA_PAGE";
        PageLockType[PageLockType["PAGE_LOCK_TYPE_INDEX_PAGE"] = 2] = "PAGE_LOCK_TYPE_INDEX_PAGE";
        PageLockType[PageLockType["PAGE_LOCK_TYPE_VARIABLE_PAGE"] = 3] = "PAGE_LOCK_TYPE_VARIABLE_PAGE";
        PageLockType[PageLockType["PAGE_LOCK_TYPE_UNKNOWN"] = -7] = "PAGE_LOCK_TYPE_UNKNOWN";
    })(PageLockType = Btrieve.PageLockType || (Btrieve.PageLockType = {}));
    /**
     * The Btrieve page sizes.
     */
    var PageSize;
    (function (PageSize) {
        PageSize[PageSize["PAGE_SIZE_512"] = 0] = "PAGE_SIZE_512";
        PageSize[PageSize["PAGE_SIZE_1024"] = 1] = "PAGE_SIZE_1024";
        PageSize[PageSize["PAGE_SIZE_1536"] = 2] = "PAGE_SIZE_1536";
        PageSize[PageSize["PAGE_SIZE_2048"] = 3] = "PAGE_SIZE_2048";
        PageSize[PageSize["PAGE_SIZE_3072"] = 4] = "PAGE_SIZE_3072";
        PageSize[PageSize["PAGE_SIZE_3584"] = 5] = "PAGE_SIZE_3584";
        PageSize[PageSize["PAGE_SIZE_4096"] = 6] = "PAGE_SIZE_4096";
        PageSize[PageSize["PAGE_SIZE_8192"] = 7] = "PAGE_SIZE_8192";
        PageSize[PageSize["PAGE_SIZE_16384"] = 8] = "PAGE_SIZE_16384";
        PageSize[PageSize["PAGE_SIZE_DEFAULT"] = 9] = "PAGE_SIZE_DEFAULT";
        PageSize[PageSize["PAGE_SIZE_UNKNOWN"] = -7] = "PAGE_SIZE_UNKNOWN";
    })(PageSize = Btrieve.PageSize || (Btrieve.PageSize = {}));
    /**
     * The Btrieve record compression modes.
     */
    var RecordCompressionMode;
    (function (RecordCompressionMode) {
        RecordCompressionMode[RecordCompressionMode["RECORD_COMPRESSION_MODE_NONE"] = 0] = "RECORD_COMPRESSION_MODE_NONE";
        RecordCompressionMode[RecordCompressionMode["RECORD_COMPRESSION_MODE_BLANK_TRUNCATION"] = 1] = "RECORD_COMPRESSION_MODE_BLANK_TRUNCATION";
        RecordCompressionMode[RecordCompressionMode["RECORD_COMPRESSION_MODE_RUN_LENGTH_ENCODING"] = 2] = "RECORD_COMPRESSION_MODE_RUN_LENGTH_ENCODING";
        RecordCompressionMode[RecordCompressionMode["RECORD_COMPRESSION_MODE_UNKNOWN"] = -7] = "RECORD_COMPRESSION_MODE_UNKNOWN";
    })(RecordCompressionMode = Btrieve.RecordCompressionMode || (Btrieve.RecordCompressionMode = {}));
    /**
     * The Btrieve status codes.
     */
    var StatusCode;
    (function (StatusCode) {
        StatusCode[StatusCode["STATUS_CODE_NO_ERROR"] = 0] = "STATUS_CODE_NO_ERROR";
        StatusCode[StatusCode["STATUS_CODE_INVALID_FUNCTION"] = 1] = "STATUS_CODE_INVALID_FUNCTION";
        StatusCode[StatusCode["STATUS_CODE_IO_ERROR"] = 2] = "STATUS_CODE_IO_ERROR";
        StatusCode[StatusCode["STATUS_CODE_FILE_NOT_OPEN"] = 3] = "STATUS_CODE_FILE_NOT_OPEN";
        StatusCode[StatusCode["STATUS_CODE_KEY_VALUE_NOT_FOUND"] = 4] = "STATUS_CODE_KEY_VALUE_NOT_FOUND";
        StatusCode[StatusCode["STATUS_CODE_DUPLICATE_KEY_VALUE"] = 5] = "STATUS_CODE_DUPLICATE_KEY_VALUE";
        StatusCode[StatusCode["STATUS_CODE_INVALID_INDEX_NUMBER"] = 6] = "STATUS_CODE_INVALID_INDEX_NUMBER";
        StatusCode[StatusCode["STATUS_CODE_DIFFERENT_INDEX_NUMBER"] = 7] = "STATUS_CODE_DIFFERENT_INDEX_NUMBER";
        StatusCode[StatusCode["STATUS_CODE_POSITION_NOT_SET"] = 8] = "STATUS_CODE_POSITION_NOT_SET";
        StatusCode[StatusCode["STATUS_CODE_END_OF_FILE"] = 9] = "STATUS_CODE_END_OF_FILE";
        StatusCode[StatusCode["STATUS_CODE_MODIFIABLE_KEYVALUE_ERROR"] = 10] = "STATUS_CODE_MODIFIABLE_KEYVALUE_ERROR";
        StatusCode[StatusCode["STATUS_CODE_FILENAME_BAD"] = 11] = "STATUS_CODE_FILENAME_BAD";
        StatusCode[StatusCode["STATUS_CODE_FILE_NOT_FOUND"] = 12] = "STATUS_CODE_FILE_NOT_FOUND";
        StatusCode[StatusCode["STATUS_CODE_EXTENDED_FILE_ERROR"] = 13] = "STATUS_CODE_EXTENDED_FILE_ERROR";
        StatusCode[StatusCode["STATUS_CODE_PREIMAGE_OPEN_ERROR"] = 14] = "STATUS_CODE_PREIMAGE_OPEN_ERROR";
        StatusCode[StatusCode["STATUS_CODE_PREIMAGE_IO_ERROR"] = 15] = "STATUS_CODE_PREIMAGE_IO_ERROR";
        StatusCode[StatusCode["STATUS_CODE_EXPANSION_ERROR"] = 16] = "STATUS_CODE_EXPANSION_ERROR";
        StatusCode[StatusCode["STATUS_CODE_CLOSE_ERROR"] = 17] = "STATUS_CODE_CLOSE_ERROR";
        StatusCode[StatusCode["STATUS_CODE_DISKFULL"] = 18] = "STATUS_CODE_DISKFULL";
        StatusCode[StatusCode["STATUS_CODE_UNRECOVERABLE_ERROR"] = 19] = "STATUS_CODE_UNRECOVERABLE_ERROR";
        StatusCode[StatusCode["STATUS_CODE_RECORD_MANAGER_INACTIVE"] = 20] = "STATUS_CODE_RECORD_MANAGER_INACTIVE";
        StatusCode[StatusCode["STATUS_CODE_KEYBUFFER_TOO_SHORT"] = 21] = "STATUS_CODE_KEYBUFFER_TOO_SHORT";
        StatusCode[StatusCode["STATUS_CODE_DATALENGTH_ERROR"] = 22] = "STATUS_CODE_DATALENGTH_ERROR";
        StatusCode[StatusCode["STATUS_CODE_POSITIONBLOCK_LENGTH"] = 23] = "STATUS_CODE_POSITIONBLOCK_LENGTH";
        StatusCode[StatusCode["STATUS_CODE_PAGE_SIZE_ERROR"] = 24] = "STATUS_CODE_PAGE_SIZE_ERROR";
        StatusCode[StatusCode["STATUS_CODE_CREATE_IO_ERROR"] = 25] = "STATUS_CODE_CREATE_IO_ERROR";
        StatusCode[StatusCode["STATUS_CODE_NUMBER_OF_INDEXES"] = 26] = "STATUS_CODE_NUMBER_OF_INDEXES";
        StatusCode[StatusCode["STATUS_CODE_INVALID_KEY_POSITION"] = 27] = "STATUS_CODE_INVALID_KEY_POSITION";
        StatusCode[StatusCode["STATUS_CODE_INVALID_RECORD_LENGTH"] = 28] = "STATUS_CODE_INVALID_RECORD_LENGTH";
        StatusCode[StatusCode["STATUS_CODE_INVALID_KEYLENGTH"] = 29] = "STATUS_CODE_INVALID_KEYLENGTH";
        StatusCode[StatusCode["STATUS_CODE_NOT_A_FILE"] = 30] = "STATUS_CODE_NOT_A_FILE";
        StatusCode[StatusCode["STATUS_CODE_FILE_ALREADY_EXTENDED"] = 31] = "STATUS_CODE_FILE_ALREADY_EXTENDED";
        StatusCode[StatusCode["STATUS_CODE_EXTEND_IO_ERROR"] = 32] = "STATUS_CODE_EXTEND_IO_ERROR";
        StatusCode[StatusCode["STATUS_CODE_BTR_CANNOT_UNLOAD"] = 33] = "STATUS_CODE_BTR_CANNOT_UNLOAD";
        StatusCode[StatusCode["STATUS_CODE_INVALID_EXTENSION_NAME"] = 34] = "STATUS_CODE_INVALID_EXTENSION_NAME";
        StatusCode[StatusCode["STATUS_CODE_DIRECTORY_ERROR"] = 35] = "STATUS_CODE_DIRECTORY_ERROR";
        StatusCode[StatusCode["STATUS_CODE_TRANSACTION_ERROR"] = 36] = "STATUS_CODE_TRANSACTION_ERROR";
        StatusCode[StatusCode["STATUS_CODE_TRANSACTION_IS_ACTIVE"] = 37] = "STATUS_CODE_TRANSACTION_IS_ACTIVE";
        StatusCode[StatusCode["STATUS_CODE_TRANSACTION_FILE_IO_ERROR"] = 38] = "STATUS_CODE_TRANSACTION_FILE_IO_ERROR";
        StatusCode[StatusCode["STATUS_CODE_END_TRANSACTION_ERROR"] = 39] = "STATUS_CODE_END_TRANSACTION_ERROR";
        StatusCode[StatusCode["STATUS_CODE_TRANSACTION_MAX_FILES"] = 40] = "STATUS_CODE_TRANSACTION_MAX_FILES";
        StatusCode[StatusCode["STATUS_CODE_OPERATION_NOT_ALLOWED"] = 41] = "STATUS_CODE_OPERATION_NOT_ALLOWED";
        StatusCode[StatusCode["STATUS_CODE_INCOMPLETE_ACCEL_ACCESS"] = 42] = "STATUS_CODE_INCOMPLETE_ACCEL_ACCESS";
        StatusCode[StatusCode["STATUS_CODE_INVALID_RECORD_ADDRESS"] = 43] = "STATUS_CODE_INVALID_RECORD_ADDRESS";
        StatusCode[StatusCode["STATUS_CODE_NULL_KEYPATH"] = 44] = "STATUS_CODE_NULL_KEYPATH";
        StatusCode[StatusCode["STATUS_CODE_INCONSISTENT_KEY_FLAGS"] = 45] = "STATUS_CODE_INCONSISTENT_KEY_FLAGS";
        StatusCode[StatusCode["STATUS_CODE_ACCESS_TO_FILE_DENIED"] = 46] = "STATUS_CODE_ACCESS_TO_FILE_DENIED";
        StatusCode[StatusCode["STATUS_CODE_MAXIMUM_OPEN_FILES"] = 47] = "STATUS_CODE_MAXIMUM_OPEN_FILES";
        StatusCode[StatusCode["STATUS_CODE_INVALID_ALT_SEQUENCE_DEF"] = 48] = "STATUS_CODE_INVALID_ALT_SEQUENCE_DEF";
        StatusCode[StatusCode["STATUS_CODE_KEY_TYPE_ERROR"] = 49] = "STATUS_CODE_KEY_TYPE_ERROR";
        StatusCode[StatusCode["STATUS_CODE_OWNER_ALREADY_SET"] = 50] = "STATUS_CODE_OWNER_ALREADY_SET";
        StatusCode[StatusCode["STATUS_CODE_INVALID_OWNER"] = 51] = "STATUS_CODE_INVALID_OWNER";
        StatusCode[StatusCode["STATUS_CODE_ERROR_WRITING_CACHE"] = 52] = "STATUS_CODE_ERROR_WRITING_CACHE";
        StatusCode[StatusCode["STATUS_CODE_INVALID_INTERFACE"] = 53] = "STATUS_CODE_INVALID_INTERFACE";
        StatusCode[StatusCode["STATUS_CODE_VARIABLE_PAGE_ERROR"] = 54] = "STATUS_CODE_VARIABLE_PAGE_ERROR";
        StatusCode[StatusCode["STATUS_CODE_AUTOINCREMENT_ERROR"] = 55] = "STATUS_CODE_AUTOINCREMENT_ERROR";
        StatusCode[StatusCode["STATUS_CODE_INCOMPLETE_INDEX"] = 56] = "STATUS_CODE_INCOMPLETE_INDEX";
        StatusCode[StatusCode["STATUS_CODE_EXPANED_MEM_ERROR"] = 57] = "STATUS_CODE_EXPANED_MEM_ERROR";
        StatusCode[StatusCode["STATUS_CODE_COMPRESS_BUFFER_TOO_SHORT"] = 58] = "STATUS_CODE_COMPRESS_BUFFER_TOO_SHORT";
        StatusCode[StatusCode["STATUS_CODE_FILE_ALREADY_EXISTS"] = 59] = "STATUS_CODE_FILE_ALREADY_EXISTS";
        StatusCode[StatusCode["STATUS_CODE_REJECT_COUNT_REACHED"] = 60] = "STATUS_CODE_REJECT_COUNT_REACHED";
        StatusCode[StatusCode["STATUS_CODE_SMALL_EX_GET_BUFFER_ERROR"] = 61] = "STATUS_CODE_SMALL_EX_GET_BUFFER_ERROR";
        StatusCode[StatusCode["STATUS_CODE_INVALID_GET_EXPRESSION"] = 62] = "STATUS_CODE_INVALID_GET_EXPRESSION";
        StatusCode[StatusCode["STATUS_CODE_INVALID_EXT_INSERT_BUFF"] = 63] = "STATUS_CODE_INVALID_EXT_INSERT_BUFF";
        StatusCode[StatusCode["STATUS_CODE_OPTIMIZE_LIMIT_REACHED"] = 64] = "STATUS_CODE_OPTIMIZE_LIMIT_REACHED";
        StatusCode[StatusCode["STATUS_CODE_INVALID_EXTRACTOR"] = 65] = "STATUS_CODE_INVALID_EXTRACTOR";
        StatusCode[StatusCode["STATUS_CODE_RI_TOO_MANY_DATABASES"] = 66] = "STATUS_CODE_RI_TOO_MANY_DATABASES";
        StatusCode[StatusCode["STATUS_CODE_RIDDF_CANNOT_OPEN"] = 67] = "STATUS_CODE_RIDDF_CANNOT_OPEN";
        StatusCode[StatusCode["STATUS_CODE_RI_CASCADE_TOO_DEEP"] = 68] = "STATUS_CODE_RI_CASCADE_TOO_DEEP";
        StatusCode[StatusCode["STATUS_CODE_RI_CASCADE_ERROR"] = 69] = "STATUS_CODE_RI_CASCADE_ERROR";
        StatusCode[StatusCode["STATUS_CODE_RI_VIOLATION"] = 71] = "STATUS_CODE_RI_VIOLATION";
        StatusCode[StatusCode["STATUS_CODE_RI_REFERENCED_FILE_CANNOT_OPEN"] = 72] = "STATUS_CODE_RI_REFERENCED_FILE_CANNOT_OPEN";
        StatusCode[StatusCode["STATUS_CODE_RI_OUT_OF_SYNC"] = 73] = "STATUS_CODE_RI_OUT_OF_SYNC";
        StatusCode[StatusCode["STATUS_CODE_END_CHANGED_TO_ABORT"] = 74] = "STATUS_CODE_END_CHANGED_TO_ABORT";
        StatusCode[StatusCode["STATUS_CODE_RI_CONFLICT"] = 76] = "STATUS_CODE_RI_CONFLICT";
        StatusCode[StatusCode["STATUS_CODE_CANT_LOOP_IN_SERVER"] = 77] = "STATUS_CODE_CANT_LOOP_IN_SERVER";
        StatusCode[StatusCode["STATUS_CODE_DEAD_LOCK"] = 78] = "STATUS_CODE_DEAD_LOCK";
        StatusCode[StatusCode["STATUS_CODE_PROGRAMMING_ERROR"] = 79] = "STATUS_CODE_PROGRAMMING_ERROR";
        StatusCode[StatusCode["STATUS_CODE_CONFLICT"] = 80] = "STATUS_CODE_CONFLICT";
        StatusCode[StatusCode["STATUS_CODE_LOCKERROR"] = 81] = "STATUS_CODE_LOCKERROR";
        StatusCode[StatusCode["STATUS_CODE_LOST_POSITION"] = 82] = "STATUS_CODE_LOST_POSITION";
        StatusCode[StatusCode["STATUS_CODE_READ_OUTSIDE_TRANSACTION"] = 83] = "STATUS_CODE_READ_OUTSIDE_TRANSACTION";
        StatusCode[StatusCode["STATUS_CODE_RECORD_INUSE"] = 84] = "STATUS_CODE_RECORD_INUSE";
        StatusCode[StatusCode["STATUS_CODE_FILE_INUSE"] = 85] = "STATUS_CODE_FILE_INUSE";
        StatusCode[StatusCode["STATUS_CODE_FILE_TABLE_FULL"] = 86] = "STATUS_CODE_FILE_TABLE_FULL";
        StatusCode[StatusCode["STATUS_CODE_NOHANDLES_AVAILABLE"] = 87] = "STATUS_CODE_NOHANDLES_AVAILABLE";
        StatusCode[StatusCode["STATUS_CODE_INCOMPATIBLE_MODE_ERROR"] = 88] = "STATUS_CODE_INCOMPATIBLE_MODE_ERROR";
        StatusCode[StatusCode["STATUS_CODE_DEVICE_TABLE_FULL"] = 90] = "STATUS_CODE_DEVICE_TABLE_FULL";
        StatusCode[StatusCode["STATUS_CODE_SERVER_ERROR"] = 91] = "STATUS_CODE_SERVER_ERROR";
        StatusCode[StatusCode["STATUS_CODE_TRANSACTION_TABLE_FULL"] = 92] = "STATUS_CODE_TRANSACTION_TABLE_FULL";
        StatusCode[StatusCode["STATUS_CODE_INCOMPATIBLE_LOCK_TYPE"] = 93] = "STATUS_CODE_INCOMPATIBLE_LOCK_TYPE";
        StatusCode[StatusCode["STATUS_CODE_PERMISSION_ERROR"] = 94] = "STATUS_CODE_PERMISSION_ERROR";
        StatusCode[StatusCode["STATUS_CODE_SESSION_NO_LONGER_VALID"] = 95] = "STATUS_CODE_SESSION_NO_LONGER_VALID";
        StatusCode[StatusCode["STATUS_CODE_COMMUNICATIONS_ERROR"] = 96] = "STATUS_CODE_COMMUNICATIONS_ERROR";
        StatusCode[StatusCode["STATUS_CODE_DATA_MESSAGE_TOO_SMALL"] = 97] = "STATUS_CODE_DATA_MESSAGE_TOO_SMALL";
        StatusCode[StatusCode["STATUS_CODE_INTERNAL_TRANSACTION_ERROR"] = 98] = "STATUS_CODE_INTERNAL_TRANSACTION_ERROR";
        StatusCode[StatusCode["STATUS_CODE_REQUESTER_CANT_ACCESS_RUNTIME"] = 99] = "STATUS_CODE_REQUESTER_CANT_ACCESS_RUNTIME";
        StatusCode[StatusCode["STATUS_CODE_NO_CACHE_BUFFERS_AVAIL"] = 100] = "STATUS_CODE_NO_CACHE_BUFFERS_AVAIL";
        StatusCode[StatusCode["STATUS_CODE_NO_OS_MEMORY_AVAIL"] = 101] = "STATUS_CODE_NO_OS_MEMORY_AVAIL";
        StatusCode[StatusCode["STATUS_CODE_NO_STACK_AVAIL"] = 102] = "STATUS_CODE_NO_STACK_AVAIL";
        StatusCode[StatusCode["STATUS_CODE_CHUNK_OFFSET_TOO_LONG"] = 103] = "STATUS_CODE_CHUNK_OFFSET_TOO_LONG";
        StatusCode[StatusCode["STATUS_CODE_LOCALE_ERROR"] = 104] = "STATUS_CODE_LOCALE_ERROR";
        StatusCode[StatusCode["STATUS_CODE_CANNOT_CREATE_WITH_VAT"] = 105] = "STATUS_CODE_CANNOT_CREATE_WITH_VAT";
        StatusCode[StatusCode["STATUS_CODE_CHUNK_CANNOT_GET_NEXT"] = 106] = "STATUS_CODE_CHUNK_CANNOT_GET_NEXT";
        StatusCode[StatusCode["STATUS_CODE_CHUNK_INCOMPATIBLE_FILE"] = 107] = "STATUS_CODE_CHUNK_INCOMPATIBLE_FILE";
        StatusCode[StatusCode["STATUS_CODE_TRANSACTION_TOO_COMPLEX"] = 109] = "STATUS_CODE_TRANSACTION_TOO_COMPLEX";
        StatusCode[StatusCode["STATUS_CODE_ARCH_BLOG_OPEN_ERROR"] = 110] = "STATUS_CODE_ARCH_BLOG_OPEN_ERROR";
        StatusCode[StatusCode["STATUS_CODE_ARCH_FILE_NOT_LOGGED"] = 111] = "STATUS_CODE_ARCH_FILE_NOT_LOGGED";
        StatusCode[StatusCode["STATUS_CODE_ARCH_FILE_IN_USE"] = 112] = "STATUS_CODE_ARCH_FILE_IN_USE";
        StatusCode[StatusCode["STATUS_CODE_ARCH_LOGFILE_NOT_FOUND"] = 113] = "STATUS_CODE_ARCH_LOGFILE_NOT_FOUND";
        StatusCode[StatusCode["STATUS_CODE_ARCH_LOGFILE_INVALID"] = 114] = "STATUS_CODE_ARCH_LOGFILE_INVALID";
        StatusCode[StatusCode["STATUS_CODE_ARCH_DUMPFILE_ACCESS_ERROR"] = 115] = "STATUS_CODE_ARCH_DUMPFILE_ACCESS_ERROR";
        StatusCode[StatusCode["STATUS_CODE_LOCATOR_FILE_INDICATOR"] = 116] = "STATUS_CODE_LOCATOR_FILE_INDICATOR";
        StatusCode[StatusCode["STATUS_CODE_NO_SYSTEM_LOCKS_AVAILABLE"] = 130] = "STATUS_CODE_NO_SYSTEM_LOCKS_AVAILABLE";
        StatusCode[StatusCode["STATUS_CODE_FILE_FULL"] = 132] = "STATUS_CODE_FILE_FULL";
        StatusCode[StatusCode["STATUS_CODE_MORE_THAN_5_CONCURRENT_USERS"] = 133] = "STATUS_CODE_MORE_THAN_5_CONCURRENT_USERS";
        StatusCode[StatusCode["STATUS_CODE_ISR_NOT_FOUND"] = 134] = "STATUS_CODE_ISR_NOT_FOUND";
        StatusCode[StatusCode["STATUS_CODE_ISR_INVALID"] = 135] = "STATUS_CODE_ISR_INVALID";
        StatusCode[StatusCode["STATUS_CODE_ACS_NOT_FOUND"] = 136] = "STATUS_CODE_ACS_NOT_FOUND";
        StatusCode[StatusCode["STATUS_CODE_CANNOT_CONVERT_RP"] = 137] = "STATUS_CODE_CANNOT_CONVERT_RP";
        StatusCode[StatusCode["STATUS_CODE_INVALID_NULL_INDICATOR"] = 138] = "STATUS_CODE_INVALID_NULL_INDICATOR";
        StatusCode[StatusCode["STATUS_CODE_INVALID_KEY_OPTION"] = 139] = "STATUS_CODE_INVALID_KEY_OPTION";
        StatusCode[StatusCode["STATUS_CODE_INCOMPATIBLE_CLOSE"] = 140] = "STATUS_CODE_INCOMPATIBLE_CLOSE";
        StatusCode[StatusCode["STATUS_CODE_INVALID_USERNAME"] = 141] = "STATUS_CODE_INVALID_USERNAME";
        StatusCode[StatusCode["STATUS_CODE_INVALID_DATABASE"] = 142] = "STATUS_CODE_INVALID_DATABASE";
        StatusCode[StatusCode["STATUS_CODE_NO_SSQL_RIGHTS"] = 143] = "STATUS_CODE_NO_SSQL_RIGHTS";
        StatusCode[StatusCode["STATUS_CODE_ALREADY_LOGGED_IN"] = 144] = "STATUS_CODE_ALREADY_LOGGED_IN";
        StatusCode[StatusCode["STATUS_CODE_NO_DATABASE_SERVICES"] = 145] = "STATUS_CODE_NO_DATABASE_SERVICES";
        StatusCode[StatusCode["STATUS_CODE_DUPLICATE_SYSTEM_KEY"] = 146] = "STATUS_CODE_DUPLICATE_SYSTEM_KEY";
        StatusCode[StatusCode["STATUS_CODE_LOG_SEGMENT_MISSING"] = 147] = "STATUS_CODE_LOG_SEGMENT_MISSING";
        StatusCode[StatusCode["STATUS_CODE_ROLL_FORWARD_ERROR"] = 148] = "STATUS_CODE_ROLL_FORWARD_ERROR";
        StatusCode[StatusCode["STATUS_CODE_SYSTEM_KEY_INTERNAL"] = 149] = "STATUS_CODE_SYSTEM_KEY_INTERNAL";
        StatusCode[StatusCode["STATUS_CODE_DBS_INTERNAL_ERROR"] = 150] = "STATUS_CODE_DBS_INTERNAL_ERROR";
        StatusCode[StatusCode["STATUS_CODE_NESTING_DEPTH_ERROR"] = 151] = "STATUS_CODE_NESTING_DEPTH_ERROR";
        StatusCode[StatusCode["STATUS_CODE_INVALID_PARAMETER_TO_MKDE"] = 160] = "STATUS_CODE_INVALID_PARAMETER_TO_MKDE";
        StatusCode[StatusCode["STATUS_CODE_USER_COUNT_LIMIT_EXCEEDED"] = 161] = "STATUS_CODE_USER_COUNT_LIMIT_EXCEEDED";
        StatusCode[StatusCode["STATUS_CODE_CLIENT_TABLE_FULL"] = 162] = "STATUS_CODE_CLIENT_TABLE_FULL";
        StatusCode[StatusCode["STATUS_CODE_LAST_SEGMENT_ERROR"] = 163] = "STATUS_CODE_LAST_SEGMENT_ERROR";
        StatusCode[StatusCode["STATUS_CODE_LOGIN_FAILED_BAD_USERNAME"] = 170] = "STATUS_CODE_LOGIN_FAILED_BAD_USERNAME";
        StatusCode[StatusCode["STATUS_CODE_LOGIN_FAILED_BAD_PASSWORD"] = 171] = "STATUS_CODE_LOGIN_FAILED_BAD_PASSWORD";
        StatusCode[StatusCode["STATUS_CODE_LOGIN_FAILED_BAD_DATABASE"] = 172] = "STATUS_CODE_LOGIN_FAILED_BAD_DATABASE";
        StatusCode[StatusCode["STATUS_CODE_LOGIN_ALREADY_LOGGED_IN"] = 173] = "STATUS_CODE_LOGIN_ALREADY_LOGGED_IN";
        StatusCode[StatusCode["STATUS_CODE_LOGIN_LOGOUT_FAILED"] = 174] = "STATUS_CODE_LOGIN_LOGOUT_FAILED";
        StatusCode[StatusCode["STATUS_CODE_LOGIN_WRONG_URI_FORMAT"] = 175] = "STATUS_CODE_LOGIN_WRONG_URI_FORMAT";
        StatusCode[StatusCode["STATUS_CODE_LOGIN_FILE_AND_TABLE_NOT_FOUND"] = 176] = "STATUS_CODE_LOGIN_FILE_AND_TABLE_NOT_FOUND";
        StatusCode[StatusCode["STATUS_CODE_LOGIN_TABLE_NOT_IN_DATABASE"] = 177] = "STATUS_CODE_LOGIN_TABLE_NOT_IN_DATABASE";
        StatusCode[StatusCode["STATUS_CODE_LOGIN_DIRECTORY_NOT_IN_DATABASE"] = 178] = "STATUS_CODE_LOGIN_DIRECTORY_NOT_IN_DATABASE";
        StatusCode[StatusCode["STATUS_CODE_LOCK_PARM_OUTOFRANGE"] = 1001] = "STATUS_CODE_LOCK_PARM_OUTOFRANGE";
        StatusCode[StatusCode["STATUS_CODE_MEM_ALLOCATION_ERR"] = 1002] = "STATUS_CODE_MEM_ALLOCATION_ERR";
        StatusCode[StatusCode["STATUS_CODE_MEM_PARM_TOO_SMALL"] = 1003] = "STATUS_CODE_MEM_PARM_TOO_SMALL";
        StatusCode[StatusCode["STATUS_CODE_PAGE_SIZE_PARM_OUTOFRANGE"] = 1004] = "STATUS_CODE_PAGE_SIZE_PARM_OUTOFRANGE";
        StatusCode[StatusCode["STATUS_CODE_INVALID_PREIMAGE_PARM"] = 1005] = "STATUS_CODE_INVALID_PREIMAGE_PARM";
        StatusCode[StatusCode["STATUS_CODE_PREIMAGE_BUF_PARM_OUTOFRANGE"] = 1006] = "STATUS_CODE_PREIMAGE_BUF_PARM_OUTOFRANGE";
        StatusCode[StatusCode["STATUS_CODE_FILES_PARM_OUTOFRANGE"] = 1007] = "STATUS_CODE_FILES_PARM_OUTOFRANGE";
        StatusCode[StatusCode["STATUS_CODE_INVALID_INIT_PARM"] = 1008] = "STATUS_CODE_INVALID_INIT_PARM";
        StatusCode[StatusCode["STATUS_CODE_INVALID_TRANS_PARM"] = 1009] = "STATUS_CODE_INVALID_TRANS_PARM";
        StatusCode[StatusCode["STATUS_CODE_ERROR_ACC_TRANS_CONTROL_FILE"] = 1010] = "STATUS_CODE_ERROR_ACC_TRANS_CONTROL_FILE";
        StatusCode[StatusCode["STATUS_CODE_COMPRESSION_BUF_PARM_OUTOFRANGE"] = 1011] = "STATUS_CODE_COMPRESSION_BUF_PARM_OUTOFRANGE";
        StatusCode[StatusCode["STATUS_CODE_INV_N_OPTION"] = 1012] = "STATUS_CODE_INV_N_OPTION";
        StatusCode[StatusCode["STATUS_CODE_TASK_LIST_FULL"] = 1013] = "STATUS_CODE_TASK_LIST_FULL";
        StatusCode[StatusCode["STATUS_CODE_STOP_WARNING"] = 1014] = "STATUS_CODE_STOP_WARNING";
        StatusCode[StatusCode["STATUS_CODE_POINTER_PARM_INVALID"] = 1015] = "STATUS_CODE_POINTER_PARM_INVALID";
        StatusCode[StatusCode["STATUS_CODE_ALREADY_INITIALIZED"] = 1016] = "STATUS_CODE_ALREADY_INITIALIZED";
        StatusCode[StatusCode["STATUS_CODE_REQ_CANT_FIND_RES_DLL"] = 1017] = "STATUS_CODE_REQ_CANT_FIND_RES_DLL";
        StatusCode[StatusCode["STATUS_CODE_ALREADY_INSIDE_BTR_FUNCTION"] = 1018] = "STATUS_CODE_ALREADY_INSIDE_BTR_FUNCTION";
        StatusCode[StatusCode["STATUS_CODE_CALLBACK_ABORT"] = 1019] = "STATUS_CODE_CALLBACK_ABORT";
        StatusCode[StatusCode["STATUS_CODE_INTF_COMM_ERROR"] = 1020] = "STATUS_CODE_INTF_COMM_ERROR";
        StatusCode[StatusCode["STATUS_CODE_FAILED_TO_INITIALIZE"] = 1021] = "STATUS_CODE_FAILED_TO_INITIALIZE";
        StatusCode[StatusCode["STATUS_CODE_MKDE_SHUTTING_DOWN"] = 1022] = "STATUS_CODE_MKDE_SHUTTING_DOWN";
        StatusCode[StatusCode["STATUS_CODE_INTERNAL_ERROR"] = 2000] = "STATUS_CODE_INTERNAL_ERROR";
        StatusCode[StatusCode["STATUS_CODE_INSUFFICIENT_MEM_ALLOC"] = 2001] = "STATUS_CODE_INSUFFICIENT_MEM_ALLOC";
        StatusCode[StatusCode["STATUS_CODE_INVALID_OPTION"] = 2002] = "STATUS_CODE_INVALID_OPTION";
        StatusCode[StatusCode["STATUS_CODE_NO_LOCAL_ACCESS_ALLOWED"] = 2003] = "STATUS_CODE_NO_LOCAL_ACCESS_ALLOWED";
        StatusCode[StatusCode["STATUS_CODE_SPX_NOT_INSTALLED"] = 2004] = "STATUS_CODE_SPX_NOT_INSTALLED";
        StatusCode[StatusCode["STATUS_CODE_INCORRECT_SPX_VERSION"] = 2005] = "STATUS_CODE_INCORRECT_SPX_VERSION";
        StatusCode[StatusCode["STATUS_CODE_NO_AVAIL_SPX_CONNECTION"] = 2006] = "STATUS_CODE_NO_AVAIL_SPX_CONNECTION";
        StatusCode[StatusCode["STATUS_CODE_INVALID_PTR_PARM"] = 2007] = "STATUS_CODE_INVALID_PTR_PARM";
        StatusCode[StatusCode["STATUS_CODE_CANT_CONNECT_TO_615"] = 2008] = "STATUS_CODE_CANT_CONNECT_TO_615";
        StatusCode[StatusCode["STATUS_CODE_CANT_LOAD_MKDE_ROUTER"] = 2009] = "STATUS_CODE_CANT_LOAD_MKDE_ROUTER";
        StatusCode[StatusCode["STATUS_CODE_UT_THUNK_NOT_LOADED"] = 2010] = "STATUS_CODE_UT_THUNK_NOT_LOADED";
        StatusCode[StatusCode["STATUS_CODE_NO_RESOURCE_DLL"] = 2011] = "STATUS_CODE_NO_RESOURCE_DLL";
        StatusCode[StatusCode["STATUS_CODE_OS_ERROR"] = 2012] = "STATUS_CODE_OS_ERROR";
        StatusCode[StatusCode["STATUS_CODE_MK_ROUTER_MEM_ERROR"] = 3000] = "STATUS_CODE_MK_ROUTER_MEM_ERROR";
        StatusCode[StatusCode["STATUS_CODE_MK_NO_LOCAL_ACCESS_ALLOWED"] = 3001] = "STATUS_CODE_MK_NO_LOCAL_ACCESS_ALLOWED";
        StatusCode[StatusCode["STATUS_CODE_MK_NO_RESOURCE_DLL"] = 3002] = "STATUS_CODE_MK_NO_RESOURCE_DLL";
        StatusCode[StatusCode["STATUS_CODE_MK_INCOMPAT_COMPONENT"] = 3003] = "STATUS_CODE_MK_INCOMPAT_COMPONENT";
        StatusCode[StatusCode["STATUS_CODE_MK_TIMEOUT_ERROR"] = 3004] = "STATUS_CODE_MK_TIMEOUT_ERROR";
        StatusCode[StatusCode["STATUS_CODE_MK_OS_ERROR"] = 3005] = "STATUS_CODE_MK_OS_ERROR";
        StatusCode[StatusCode["STATUS_CODE_MK_INVALID_SESSION"] = 3006] = "STATUS_CODE_MK_INVALID_SESSION";
        StatusCode[StatusCode["STATUS_CODE_MK_SERVER_NOT_FOUND"] = 3007] = "STATUS_CODE_MK_SERVER_NOT_FOUND";
        StatusCode[StatusCode["STATUS_CODE_MK_INVALID_CONFIG"] = 3008] = "STATUS_CODE_MK_INVALID_CONFIG";
        StatusCode[StatusCode["STATUS_CODE_MK_NETAPI_NOT_LOADED"] = 3009] = "STATUS_CODE_MK_NETAPI_NOT_LOADED";
        StatusCode[StatusCode["STATUS_CODE_MK_NWAPI_NOT_LOADED"] = 3010] = "STATUS_CODE_MK_NWAPI_NOT_LOADED";
        StatusCode[StatusCode["STATUS_CODE_MK_THUNK_NOT_LOADED"] = 3011] = "STATUS_CODE_MK_THUNK_NOT_LOADED";
        StatusCode[StatusCode["STATUS_CODE_MK_LOCAL_NOT_LOADED"] = 3012] = "STATUS_CODE_MK_LOCAL_NOT_LOADED";
        StatusCode[StatusCode["STATUS_CODE_MK_PNSL_NOT_LOADED"] = 3013] = "STATUS_CODE_MK_PNSL_NOT_LOADED";
        StatusCode[StatusCode["STATUS_CODE_MK_CANT_FIND_ENGINE"] = 3014] = "STATUS_CODE_MK_CANT_FIND_ENGINE";
        StatusCode[StatusCode["STATUS_CODE_MK_INIT_ERROR"] = 3015] = "STATUS_CODE_MK_INIT_ERROR";
        StatusCode[StatusCode["STATUS_CODE_MK_INTERNAL_ERROR"] = 3016] = "STATUS_CODE_MK_INTERNAL_ERROR";
        StatusCode[StatusCode["STATUS_CODE_MK_LOCAL_MKDE_DATABUF_TOO_SMALL"] = 3017] = "STATUS_CODE_MK_LOCAL_MKDE_DATABUF_TOO_SMALL";
        StatusCode[StatusCode["STATUS_CODE_MK_CLOSED_ERROR"] = 3018] = "STATUS_CODE_MK_CLOSED_ERROR";
        StatusCode[StatusCode["STATUS_CODE_MK_SEMAPHORE_ERROR"] = 3019] = "STATUS_CODE_MK_SEMAPHORE_ERROR";
        StatusCode[StatusCode["STATUS_CODE_MK_LOADING_ERROR"] = 3020] = "STATUS_CODE_MK_LOADING_ERROR";
        StatusCode[StatusCode["STATUS_CODE_MK_BAD_SRB_FORMAT"] = 3021] = "STATUS_CODE_MK_BAD_SRB_FORMAT";
        StatusCode[StatusCode["STATUS_CODE_MK_DATABUF_LEN_TOO_LARGE"] = 3022] = "STATUS_CODE_MK_DATABUF_LEN_TOO_LARGE";
        StatusCode[StatusCode["STATUS_CODE_MK_TASK_TABLE_FULL"] = 3023] = "STATUS_CODE_MK_TASK_TABLE_FULL";
        StatusCode[StatusCode["STATUS_CODE_MK_INVALID_OP_ON_REMOTE"] = 3024] = "STATUS_CODE_MK_INVALID_OP_ON_REMOTE";
        StatusCode[StatusCode["STATUS_CODE_MK_PIDS_NOT_LOADED"] = 3025] = "STATUS_CODE_MK_PIDS_NOT_LOADED";
        StatusCode[StatusCode["STATUS_CODE_MK_BAD_PIDS"] = 3026] = "STATUS_CODE_MK_BAD_PIDS";
        StatusCode[StatusCode["STATUS_CODE_MK_IDS_CONNECT_FAILURE"] = 3027] = "STATUS_CODE_MK_IDS_CONNECT_FAILURE";
        StatusCode[StatusCode["STATUS_CODE_MK_IDS_LOGIN_FAILURE"] = 3028] = "STATUS_CODE_MK_IDS_LOGIN_FAILURE";
        StatusCode[StatusCode["STATUS_CODE_NL_FAILURE"] = 3101] = "STATUS_CODE_NL_FAILURE";
        StatusCode[StatusCode["STATUS_CODE_NL_NOT_INITIALIZED"] = 3102] = "STATUS_CODE_NL_NOT_INITIALIZED";
        StatusCode[StatusCode["STATUS_CODE_NL_NAME_NOT_FOUND"] = 3103] = "STATUS_CODE_NL_NAME_NOT_FOUND";
        StatusCode[StatusCode["STATUS_CODE_NL_PERMISSION_ERROR"] = 3104] = "STATUS_CODE_NL_PERMISSION_ERROR";
        StatusCode[StatusCode["STATUS_CODE_NL_NO_AVAILABLE_TRANSPORT"] = 3105] = "STATUS_CODE_NL_NO_AVAILABLE_TRANSPORT";
        StatusCode[StatusCode["STATUS_CODE_NL_CONNECTION_FAILURE"] = 3106] = "STATUS_CODE_NL_CONNECTION_FAILURE";
        StatusCode[StatusCode["STATUS_CODE_NL_OUT_OF_MEMORY"] = 3107] = "STATUS_CODE_NL_OUT_OF_MEMORY";
        StatusCode[StatusCode["STATUS_CODE_NL_INVALID_SESSION"] = 3108] = "STATUS_CODE_NL_INVALID_SESSION";
        StatusCode[StatusCode["STATUS_CODE_NL_MORE_DATA"] = 3109] = "STATUS_CODE_NL_MORE_DATA";
        StatusCode[StatusCode["STATUS_CODE_NL_NOT_CONNECTED"] = 3110] = "STATUS_CODE_NL_NOT_CONNECTED";
        StatusCode[StatusCode["STATUS_CODE_NL_SEND_FAILURE"] = 3111] = "STATUS_CODE_NL_SEND_FAILURE";
        StatusCode[StatusCode["STATUS_CODE_NL_RECEIVE_FAILURE"] = 3112] = "STATUS_CODE_NL_RECEIVE_FAILURE";
        StatusCode[StatusCode["STATUS_CODE_NL_INVALID_SERVER_TYPE"] = 3113] = "STATUS_CODE_NL_INVALID_SERVER_TYPE";
        StatusCode[StatusCode["STATUS_CODE_NL_SRT_FULL"] = 3114] = "STATUS_CODE_NL_SRT_FULL";
        StatusCode[StatusCode["STATUS_CODE_NL_TRANSPORT_FAILURE"] = 3115] = "STATUS_CODE_NL_TRANSPORT_FAILURE";
        StatusCode[StatusCode["STATUS_CODE_NL_RCV_DATA_OVERFLOW"] = 3116] = "STATUS_CODE_NL_RCV_DATA_OVERFLOW";
        StatusCode[StatusCode["STATUS_CODE_NL_CST_FULL"] = 3117] = "STATUS_CODE_NL_CST_FULL";
        StatusCode[StatusCode["STATUS_CODE_NL_INVALID_ADDRESS_FAMILY"] = 3118] = "STATUS_CODE_NL_INVALID_ADDRESS_FAMILY";
        StatusCode[StatusCode["STATUS_CODE_NL_NO_AUTH_CONTEXT_AVAILABLE"] = 3119] = "STATUS_CODE_NL_NO_AUTH_CONTEXT_AVAILABLE";
        StatusCode[StatusCode["STATUS_CODE_NL_INVALID_AUTH_TYPE"] = 3120] = "STATUS_CODE_NL_INVALID_AUTH_TYPE";
        StatusCode[StatusCode["STATUS_CODE_NL_INVALID_AUTH_OBJECT"] = 3121] = "STATUS_CODE_NL_INVALID_AUTH_OBJECT";
        StatusCode[StatusCode["STATUS_CODE_NL_AUTH_LEN_TOO_SMALL"] = 3122] = "STATUS_CODE_NL_AUTH_LEN_TOO_SMALL";
        StatusCode[StatusCode["STATUS_CODE_NL_INVALID_SESSION_LEVEL_PARM"] = 3123] = "STATUS_CODE_NL_INVALID_SESSION_LEVEL_PARM";
        StatusCode[StatusCode["STATUS_CODE_NL_TASK_TABLE_FULL"] = 3124] = "STATUS_CODE_NL_TASK_TABLE_FULL";
        StatusCode[StatusCode["STATUS_CODE_NL_NDS_NAME_RESOLUTION_ERROR"] = 3125] = "STATUS_CODE_NL_NDS_NAME_RESOLUTION_ERROR";
        StatusCode[StatusCode["STATUS_CODE_NL_FILE_NAME_RESOLUTION_ERROR"] = 3126] = "STATUS_CODE_NL_FILE_NAME_RESOLUTION_ERROR";
        StatusCode[StatusCode["STATUS_CODE_NL_IDS_SEND_FAILURE"] = 3127] = "STATUS_CODE_NL_IDS_SEND_FAILURE";
        StatusCode[StatusCode["STATUS_CODE_NL_IDS_RCV_FAILURE"] = 3128] = "STATUS_CODE_NL_IDS_RCV_FAILURE";
        StatusCode[StatusCode["STATUS_CODE_UNKNOWN"] = -7] = "STATUS_CODE_UNKNOWN";
    })(StatusCode = Btrieve.StatusCode || (Btrieve.StatusCode = {}));
    /**
     * The Btrieve system data modes.
     */
    var SystemDataMode;
    (function (SystemDataMode) {
        SystemDataMode[SystemDataMode["SYSTEM_DATA_MODE_YES"] = 0] = "SYSTEM_DATA_MODE_YES";
        SystemDataMode[SystemDataMode["SYSTEM_DATA_MODE_NO"] = 1] = "SYSTEM_DATA_MODE_NO";
        SystemDataMode[SystemDataMode["SYSTEM_DATA_MODE_DEFAULT"] = 2] = "SYSTEM_DATA_MODE_DEFAULT";
        SystemDataMode[SystemDataMode["SYSTEM_DATA_MODE_UNKNOWN"] = -7] = "SYSTEM_DATA_MODE_UNKNOWN";
    })(SystemDataMode = Btrieve.SystemDataMode || (Btrieve.SystemDataMode = {}));
    /**
     * The Btrieve transaction modes.
     */
    var TransactionMode;
    (function (TransactionMode) {
        TransactionMode[TransactionMode["TRANSACTION_MODE_EXCLUSIVE"] = 0] = "TRANSACTION_MODE_EXCLUSIVE";
        TransactionMode[TransactionMode["TRANSACTION_MODE_CONCURRENT_WRITE_WAIT"] = 1] = "TRANSACTION_MODE_CONCURRENT_WRITE_WAIT";
        TransactionMode[TransactionMode["TRANSACTION_MODE_CONCURRENT_NO_WRITE_WAIT"] = 2] = "TRANSACTION_MODE_CONCURRENT_NO_WRITE_WAIT";
        TransactionMode[TransactionMode["TRANSACTION_MODE_UNKNOWN"] = -7] = "TRANSACTION_MODE_UNKNOWN";
    })(TransactionMode = Btrieve.TransactionMode || (Btrieve.TransactionMode = {}));
    /**
     * The Btrieve unlock modes.
     */
    var UnlockMode;
    (function (UnlockMode) {
        UnlockMode[UnlockMode["UNLOCK_MODE_SINGLE"] = 0] = "UNLOCK_MODE_SINGLE";
        UnlockMode[UnlockMode["UNLOCK_MODE_MULTIPLE"] = 1] = "UNLOCK_MODE_MULTIPLE";
        UnlockMode[UnlockMode["UNLOCK_MODE_UNKNOWN"] = -7] = "UNLOCK_MODE_UNKNOWN";
    })(UnlockMode = Btrieve.UnlockMode || (Btrieve.UnlockMode = {}));
    /**
     * The Btrieve variable length records modes.
     */
    var VariableLengthRecordsMode;
    (function (VariableLengthRecordsMode) {
        VariableLengthRecordsMode[VariableLengthRecordsMode["VARIABLE_LENGTH_RECORDS_MODE_NO"] = 0] = "VARIABLE_LENGTH_RECORDS_MODE_NO";
        VariableLengthRecordsMode[VariableLengthRecordsMode["VARIABLE_LENGTH_RECORDS_MODE_YES"] = 1] = "VARIABLE_LENGTH_RECORDS_MODE_YES";
        VariableLengthRecordsMode[VariableLengthRecordsMode["VARIABLE_LENGTH_RECORDS_MODE_YES_VARIABLE_ALLOCATION_TAILS"] = 2] = "VARIABLE_LENGTH_RECORDS_MODE_YES_VARIABLE_ALLOCATION_TAILS";
        VariableLengthRecordsMode[VariableLengthRecordsMode["VARIABLE_LENGTH_RECORDS_MODE_UNKNOWN"] = -7] = "VARIABLE_LENGTH_RECORDS_MODE_UNKNOWN";
    })(VariableLengthRecordsMode = Btrieve.VariableLengthRecordsMode || (Btrieve.VariableLengthRecordsMode = {}));
    /**
     * The Btrieve version types.
     */
    var VersionType;
    (function (VersionType) {
        VersionType[VersionType["VERSION_TYPE_NONE"] = 0] = "VERSION_TYPE_NONE";
        VersionType[VersionType["VERSION_TYPE_ENGINE"] = 1] = "VERSION_TYPE_ENGINE";
        VersionType[VersionType["VERSION_TYPE_WORKGROUP_ENGINE"] = 2] = "VERSION_TYPE_WORKGROUP_ENGINE";
        VersionType[VersionType["VERSION_TYPE_DOS_WORKSTATION"] = 3] = "VERSION_TYPE_DOS_WORKSTATION";
        VersionType[VersionType["VERSION_TYPE_CLIENT_REQUESTOR"] = 4] = "VERSION_TYPE_CLIENT_REQUESTOR";
        VersionType[VersionType["VERSION_TYPE_WINDOWS_SERVER_ENGINE"] = 5] = "VERSION_TYPE_WINDOWS_SERVER_ENGINE";
        VersionType[VersionType["VERSION_TYPE_UNIX"] = 6] = "VERSION_TYPE_UNIX";
        VersionType[VersionType["VERSION_TYPE_CLIENT_ENGINE"] = 7] = "VERSION_TYPE_CLIENT_ENGINE";
        VersionType[VersionType["VERSION_TYPE_UNKNOWN"] = -7] = "VERSION_TYPE_UNKNOWN";
    })(VersionType = Btrieve.VersionType || (Btrieve.VersionType = {}));
    // #endregion
    // #region EnumToString Methods
    /**
     * Return an alternate collation sequence mode as a string.
     *
     * @param acsMode The alternate collation sequence mode.
     * @param success The success callback
     * @param fail Error callback
     */
    function ACSModeToString(acsMode, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'ACSModeToString', [acsMode]);
    }
    Btrieve.ACSModeToString = ACSModeToString;
    /**
     * Return a data type as a string.
     *
     * @param dataType The data type.
     * @param success The success callback
     * @param fail Error callback
     */
    function DataTypeToString(dataType, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'DataTypeToString', [dataType]);
    }
    Btrieve.DataTypeToString = DataTypeToString;
    /**
     * Return a duplicate mode as a string.
     *
     * @param duplicateMode The duplicate mode.
     * @param success The success callback
     * @param fail Error callback
     */
    function DuplicateModeToString(duplicateMode, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'DuplicateModeToString', [duplicateMode]);
    }
    Btrieve.DuplicateModeToString = DuplicateModeToString;
    /**
     * Return a file version as a string.
     *
     * @param fileVersion The file version.
     * @param success The success callback
     * @param fail Error callback
     */
    function FileVersionToString(fileVersion, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'FileVersionToString', [fileVersion]);
    }
    Btrieve.FileVersionToString = FileVersionToString;
    /**
     * Return a free space threshold as a string.
     *
     * @param freeSpaceThreshold The free space threshold.
     * @param success The success callback
     * @param fail Error callback
     */
    function FreeSpaceThresholdToString(freeSpaceThreshold, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'FreeSpaceThresholdToString', [freeSpaceThreshold]);
    }
    Btrieve.FreeSpaceThresholdToString = FreeSpaceThresholdToString;
    /**
     * Return an index as a string.
     *
     * @param index The index.
     * @param success The success callback
     * @param fail Error callback
     */
    function IndexToString(index, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'IndexToString', [index]);
    }
    Btrieve.IndexToString = IndexToString;
    /**
     * Return a lock mode as a string.
     *
     * @param lockMode The lock mode.
     * @param success The success callback
     * @param fail Error callback
     */
    function LockModeToString(lockMode, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'LockModeToString', [lockMode]);
    }
    Btrieve.LockModeToString = LockModeToString;
    /**
     * Return a null key mode as a string.
     *
     * @param nullKeyMode The null key mode.
     * @param success The success callback
     * @param fail Error callback
     */
    function NullKeyModeToString(nullKeyMode, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'NullKeyModeToString', [nullKeyMode]);
    }
    Btrieve.NullKeyModeToString = NullKeyModeToString;
    /**
     * Return an owner mode as a string.
     *
     * @param ownerMode The owner mode.
     * @param success The success callback
     * @param fail Error callback
     */
    function OwnerModeToString(ownerMode, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'OwnerModeToString', [ownerMode]);
    }
    Btrieve.OwnerModeToString = OwnerModeToString;
    /**
     * Return a page lock type as a string.
     *
     * @param pageLockType The page lock type.
     * @param success The success callback
     * @param fail Error callback
     */
    function PageLockTypeToString(pageLockType, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'PageLockTypeToString', [pageLockType]);
    }
    Btrieve.PageLockTypeToString = PageLockTypeToString;
    /**
     * Return a page size as a string.
     *
     * @param pageSize The page size.
     * @param success The success callback
     * @param fail Error callback
     */
    function PageSizeToString(pageSize, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'PageSizeToString', [pageSize]);
    }
    Btrieve.PageSizeToString = PageSizeToString;
    /**
     * Return an record compression mode as a string.
     *
     * @param recordCompressionMode The record compression mode.
     * @param success The success callback
     * @param fail Error callback
     */
    function RecordCompressionModeToString(recordCompressionMode, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'RecordCompressionModeToString', [recordCompressionMode]);
    }
    Btrieve.RecordCompressionModeToString = RecordCompressionModeToString;
    /**
     * Return a status code as a string.
     *
     * @param statusCode The status code.
     * @param success The success callback
     * @param fail Error callback
     */
    function StatusCodeToString(statusCode, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'StatusCodeToString', [statusCode]);
    }
    Btrieve.StatusCodeToString = StatusCodeToString;
    /**
     * Return a system data mode as a string.
     *
     * @param systemDataMode The system data mode.
     * @param success The success callback
     * @param fail Error callback
     */
    function SystemDataModeToString(systemDataMode, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'SystemDataModeToString', [systemDataMode]);
    }
    Btrieve.SystemDataModeToString = SystemDataModeToString;
    /**
     * Return a variable length records mode as a string.
     *
     * @param variableLengthRecordsMode The variable length records mode.
     * @param success The success callback
     * @param fail Error callback
     */
    function VariableLengthRecordsModeToString(variableLengthRecordsMode, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'VariableLengthRecordsModeToString', [variableLengthRecordsMode]);
    }
    Btrieve.VariableLengthRecordsModeToString = VariableLengthRecordsModeToString;
    /**
     * Return a version type as a string.
     *
     * @param versionType The version type.
     * @param success The success callback
     * @param fail Error callback
     */
    function VersionTypeToString(versionType, success, fail) {
        cordova.exec(success, fail, 'CDVBtrieve', 'VersionTypeToString', [versionType]);
    }
    Btrieve.VersionTypeToString = VersionTypeToString;
    // #endregion
    // #region Timestamp Helpers
    /**
     * Convert a `Btrieve` TIMESTAMP to a Unix Epoch timestamp in microseconds.
     *
     * @param timestamp timestamp.
     * @param success The success callback
     * @param fail The error callback
     */
    function TimestampToUnixEpochMicroseconds(timestamp, success, fail) {
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result[0]); }, fail, 'CDVBtrieve', 'TimestampToUnixEpochMicroseconds', [timestamp]);
    }
    Btrieve.TimestampToUnixEpochMicroseconds = TimestampToUnixEpochMicroseconds;
    /**
     * Convert a Unix Epoch timestamp in microseconds to a `Btrieve` TIMESTAMP.
     *
     * @param microseconds timestamp.
     * @param success The success callback
     * @param fail The error callback
     */
    function UnixEpochMicrosecondsToTimestamp(microseconds, success, fail) {
        if (!success || typeof success !== 'function') {
            success = function () { };
        }
        cordova.exec(function (result) { return success(result[0]); }, fail, 'CDVBtrieve', 'UnixEpochMicrosecondsToTimestamp', [microseconds]);
    }
    Btrieve.UnixEpochMicrosecondsToTimestamp = UnixEpochMicrosecondsToTimestamp;
    // #endregion
})(Btrieve || (Btrieve = {}));
module.exports = Btrieve;
