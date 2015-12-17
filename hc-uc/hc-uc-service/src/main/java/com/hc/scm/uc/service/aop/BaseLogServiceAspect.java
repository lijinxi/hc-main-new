package com.hc.scm.uc.service.aop;

import java.util.Date;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;

import org.apache.commons.lang3.time.StopWatch;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.alibaba.fastjson.JSON;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.SessionUtils;
import com.hc.scm.uc.dao.entity.ItgCommonLog;
import com.hc.scm.uc.service.ItgCommonLogService;


/**
 *
 * Description: 拦截UC下面所有Service类的执行方法，记录操作日志到DB
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      zhu.liang
 * Createdate:  2015-3-23下午4:06:44
 *
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 * 2015-3-23     	zhu.liang
 */

@Aspect
@Component
public class BaseLogServiceAspect {
	private static Logger logger = LoggerFactory.getLogger(BaseLogServiceAspect.class);
	
	@Resource
	private ItgCommonLogService itgCommonLogService;
	
	@Around("execution(* com.hc.scm.common.base.dal.BaseCrudDaoImpl.deleteById(..)) " +
			"|| execution(* com.hc.scm.common.base.dal.BaseCrudDaoImpl.add(..)) " +
			"|| execution(* com.hc.scm.common.base.dal.BaseCrudDaoImpl.modifyById(..)) " +
			"|| execution(* com.hc.scm.common.base.dal.BaseCrudDaoImpl.save(..)) " +
			"|| execution(* com.hc.scm.uc.dao.dal.impl..*.deleteById(..))" + 
			"|| execution(* com.hc.scm.uc.dao.dal.impl..*.add(..))" + 
			"|| execution(* com.hc.scm.uc.dao.dal.impl..*.modifyById(..))" +
			"|| execution(* com.hc.scm.uc.dao.dal.impl..*.save(..))")  
    public Object writeBaseLog(ProceedingJoinPoint pjp) throws Throwable {  
		//1.执行业务方法
		Object retVal = pjp.proceed();
		
		//2.记录操作日志
		try{
			 StopWatch clock = new StopWatch();
		     clock.start(); // 计时开始 
		     ItgCommonLog log = new ItgCommonLog();
		     // 调用方法名称  
		     String methodName = pjp.getSignature().getName(); 
		     //获取进入的类名  
		     String className = pjp.getSignature().getDeclaringTypeName();
		     SystemUser loginUser=SessionUtils.getCurrentLoginUser();
		     
		     String logModelType = "";
		     String paramJsonStr = "";
		     Object[] args = pjp.getArgs();
		     if(args != null && args.length > 0){
		    	 Object arg = args[0];
		    	 if(arg != null){
		    		 if(Map.class.isAssignableFrom(arg.getClass())){
		    			 Map map = (Map)arg;
		    			 for(Object key : map.keySet()){
		    				 Object val = map.get(key);
		    				 if(val != null){
		    					 if(List.class.isAssignableFrom(val.getClass())){
			    					 List list = (List)val;
			    					 Object modelType = list.get(0);
			    					 if(modelType != null){
			    						 logModelType = modelType.getClass().getName();
			    						 break;
			    					 }
			    				 }
		    				 }
		    				 
		    			 }
		    			 
		    		 }else{
		    			 logModelType = arg.getClass().getName();
		    		 }	
		    		 
		    	 }
		    	 paramJsonStr = JSON.toJSONString(args);
		     }
		     
		     int index = logModelType.lastIndexOf(".");
		     log.setLogContent(paramJsonStr);
		     log.setLogModelType(logModelType.substring(index + 1));
		     log.setLogTime(new Date());
		     //log.setLogUser(loginUser != null ? loginUser.getUserName() : "");
		     log.setLogUser(loginUser != null ? loginUser.getUserCode() : "");
		     itgCommonLogService.addLog(log);
		     
		     logger.debug(String.format("BaseLogServiceAspect aspected methodName: %s, className: %s, userName: %s, params: %s, ModelType: %s", methodName,className,loginUser != null ? loginUser.getUserName() : "",paramJsonStr, logModelType));
		     logger.debug(String.format("记录操作日志耗时：%s ms.", clock.getTime()));
		     
		}catch(Exception e){
			//catch异常为了不影响业务方法的执行
			logger.error("记录操作日志出错...", e);
		}
		
		return retVal;
	}

}
