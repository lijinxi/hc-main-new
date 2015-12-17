package com.hc.scm.uc.service.aop;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.StopWatch;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.SessionUtils;

/**
 * Description: BaseCrudService操作验证
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wugy
 * Createdate:  2015-3-12下午6:34:04
 */

@Aspect
@Component
public class BaseCrudServiceAspect {
	private static Logger logger = LoggerFactory.getLogger(BaseCrudServiceAspect.class);
	
	@Around("execution(* com.hc.scm.common.base.service.BaseCrudServiceImpl.*(..))")  
    public Object doBasicProfilingTime(ProceedingJoinPoint pjp) throws Throwable {  
		logger.debug("Takes: start...........  ");  
		// 调用方法名称  
        String methodName = pjp.getSignature().getName();  
        //获取进入的类名  
        String className = pjp.getSignature().getDeclaringTypeName();
        //className = className.substring(className.lastIndexOf(".") + 1).trim(); 
        //SessionUtils.get(SysConstans.SESSION_USER)!=null
        SystemUser loginUser=SessionUtils.getCurrentLoginUser();
        if(loginUser!=null){
        	logger.debug("loginUser:[" + loginUser.getUserCode()+","+loginUser.getUserName()+"]");
        }
        StopWatch clock = new StopWatch();
        clock.start(); // 计时开始 
        Object retVal = pjp.proceed();  
        clock.stop(); // 计时结束         
        int argsLen=pjp.getArgs().length;
        String[] simpleParams = new String[argsLen];
        int i=0;
        for (Object obj : pjp.getArgs()) {
        	if(obj!=null){
        		simpleParams[i++] =obj.getClass().getSimpleName();
        	}
		}
        logger.debug("Takes:" + clock.getTime() + " ms  ["
				+ className + "."
				+ methodName+ "("
				+ StringUtils.join(simpleParams, ",") + "]"); 
        return retVal;  
    }  
	
}