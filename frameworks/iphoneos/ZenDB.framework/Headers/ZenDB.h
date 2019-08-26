////////////////////////////////////////////////////////////
//
// Copyright (c) 2018 Actian Corporation
//
////////////////////////////////////////////////////////////

#ifndef ZENDB_H
#define ZENDB_H

#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

#ifndef ZDB_IMPORT
    #if (defined(__GNUC__) && (__GNUC__ >= 4)) || defined(__clang__)
        #define ZDB_IMPORT __attribute__ ((visibility ("default")))
    #endif
    #ifdef _MSC_VER
        #define ZDB_IMPORT __declspec(dllimport)
    #endif
#endif

uint32_t ZDB_IMPORT ZenDbInit(const char *path);
uint32_t ZDB_IMPORT ZenDbDeInit();

#ifdef __cplusplus
}
#endif 

#endif // ZENDB_H
