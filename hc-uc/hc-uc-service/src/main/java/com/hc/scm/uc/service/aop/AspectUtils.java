package com.hc.scm.uc.service.aop;

import org.apache.commons.lang3.StringUtils;
import org.aspectj.lang.JoinPoint;

/**
 * Description: Aop工具类
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wugy
 * Createdate:  2015-3-12下午6:34:04
 */

public class AspectUtils {
	
	/**
	 * 返回AOP切点的参数字符串以”,“分隔
	 * @param pjp
	 * @return
	 * @throws Throwable
	 */
    public static String getJoinPointParams(JoinPoint pjp){  
        int argsLen=pjp.getArgs().length;
        String[] simpleParams = new String[argsLen];
        int i=0;
        for (Object obj : pjp.getArgs()) {
			simpleParams[i++] =obj.getClass().getSimpleName();
		}
        return StringUtils.join(simpleParams, ",");  
    }  
}