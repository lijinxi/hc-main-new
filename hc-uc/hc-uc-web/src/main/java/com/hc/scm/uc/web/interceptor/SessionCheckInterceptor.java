package com.hc.scm.uc.web.interceptor;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSON;
import com.hc.scm.common.constans.SysConstans;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.common.utils.SessionUtils;

/**
 * Session验证
 * Description: 
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wugy
 * Createdate:  2015-3-14下午1:45:44
 */
public class SessionCheckInterceptor extends AnnotationBasedIgnoreableInterceptor {
    private static Logger logger = LoggerFactory.getLogger(SessionCheckInterceptor.class);
    private String sessionKey;
    private String redirectUrl;
    private String excludeUrls;
    

	/**
     *  (non-Javadoc)
     * {@inheritDoc}
     */
    @Override
    protected boolean preHandleInternal(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
    	//String path=redirectUrl;
    	String url=request.getRequestURI();
    	
    	SystemUser user = (SystemUser) request.getSession().getAttribute(sessionKey);
    	if(user!=null){
    		SessionUtils.set(SysConstans.SESSION_USER,user);
    	}
    	
    	if(checkExcludeUrls(url)){
    		return true;
    	}
    	if(null==request.getSession()){
    		//response.sendRedirect(path);
    		responseOutJson(response, getLoginOutResult());
    	}else{
    		//安全验证   redirectUrl其中设置为 /login
            if(null==request.getSession().getAttribute(sessionKey)){
            	//response.sendRedirect(path);
            	responseOutJson(response, getLoginOutResult());
            }else{
            	
            	return true;
            }
    	}
        
        response.flushBuffer();

        return false;
    }
    
    /**
     * 返回TimeOut
     * @return
     */
    private Map<String,Object> getLoginOutResult(){
    	Map<String, Object> resultMap =new HashMap<String, Object>();
    	ResultModel resultModel = new ResultModel();
    	resultModel.setResultCode("timeout");
    	resultModel.setMsg("登录超时，请重新登录。");
    	resultMap.put("result", resultModel);
		return resultMap;
    }
    
    /** 
     * 以JSON格式输出 
     * @param response 
     */  
    protected void responseOutJson(HttpServletResponse response, Object responseObject) {  
        response.setCharacterEncoding("UTF-8");  
        response.setContentType("application/json; charset=utf-8");  
        PrintWriter out = null;  
        try {  
            out = response.getWriter();  
            out.append(JSON.toJSONString(responseObject));  
        } catch (IOException e) {
        	logger.error("error:",e);  
        } finally {  
            if (out != null) {  
                out.close();  
            }  
        }  
    }  
    
    @Override
    protected void postHandleInternal(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
    }

    @Override
    protected void afterCompletionInternal(HttpServletRequest request, HttpServletResponse response, Object handler,
            Exception ex) throws Exception {
    }
    
    private boolean checkExcludeUrls(String url) {
        if (StringUtils.isNotEmpty(this.excludeUrls)) {
            for (String excludeUrl : this.excludeUrls.split(",")) {
                if (excludeUrl.equals(url)) {
                    return true;
                }
            }
        }
        return false;
    }

    public String getSessionKey() {
		return sessionKey;
	}

	public void setSessionKey(String sessionKey) {
		this.sessionKey = sessionKey;
	}

	public String getRedirectUrl() {
		return redirectUrl;
	}

	public void setRedirectUrl(String redirectUrl) {
		this.redirectUrl = redirectUrl;
	}

	public String getExcludeUrls() {
		return excludeUrls;
	}

	public void setExcludeUrls(String excludeUrls) {
		this.excludeUrls = excludeUrls;
	}
}
