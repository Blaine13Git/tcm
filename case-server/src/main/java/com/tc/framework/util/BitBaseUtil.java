package com.tc.framework.util;

/**
 *  *
 */
public class BitBaseUtil {
    public static long mergeLong(long high32, long low32) {
        return high32 << 32 | low32;
    }

    public static long getHigh32(long v) {
        return v >> 32;
    }

    public static long getLow32(long v) {
        return v & 0xffffffffL;
    }
}
