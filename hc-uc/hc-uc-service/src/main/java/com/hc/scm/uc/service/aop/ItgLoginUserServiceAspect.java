package com.hc.scm.uc.service.aop;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.hc.scm.common.aop.Validation;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.uc.dao.entity.ItgLoginUser;
import com.hc.scm.uc.service.ItgLoginUserService;

/**
 * Description: tgLoginUserService操作验证
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wugy
 * Createdate:  2015-3-12下午6:34:04
 */

@Aspect
@Component
public class ItgLoginUserServiceAspect implements Validation {
	private static Logger logger = LoggerFactory.getLogger(ItgLoginUserServiceAspect.class);
	@Resource
	private ItgLoginUserService itgLoginUserService;
	
	@Override
	@Before("execution(* com.hc.scm.uc.service.impl.ItgLoginUserServiceImpl.addWithValid(..))")
	public void doAddBefore(JoinPoint jp) throws ServiceException {
		
		// 调用方法名称  
        String methodName = jp.getSignature().getName();  
        //获取进入的类名  
        String className = jp.getSignature().getDeclaringTypeName();  
        logger.debug("前置验证:["
				+ className + "."
				+ methodName+ "("
				+ AspectUtils.getJoinPointParams(jp) + "]"); 
        if (jp.getArgs().length == 0) {
			return;
		}
		//拦截的实体类
    	ItgLoginUser user=new ItgLoginUser();
		//Object target = jp.getTarget();
		for (Object obj : jp.getArgs()) {
			//logger.debug("args:"+obj);
			if (obj instanceof ItgLoginUser) {
				user = (ItgLoginUser) obj;
				break;
			}
		}
        if (StringUtils.isEmpty(user.getUserCode()) || StringUtils.isEmpty(user.getUserName())) {
			throw new ServiceException("必填参数错误");
		}
        Map<String,Object> p=new HashMap<String,Object>(0);
        p.put("userCode", user.getUserCode());
        ItgLoginUser u=itgLoginUserService.findByParams(p);
        if(u!=null){
        	throw new ServiceException("属性[userCode:"+user.getUserCode()+"]的记录已存在 。");
        }
	}

	@Override
	public void doDeleteBefore(JoinPoint jp) throws ServiceException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void doSaveBefore(JoinPoint jp) throws ServiceException {
		// TODO Auto-generated method stub
		
	}
}