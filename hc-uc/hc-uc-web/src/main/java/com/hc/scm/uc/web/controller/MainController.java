package com.hc.scm.uc.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseLoginController;
import com.hc.scm.common.cache.RedisClient;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.uc.dao.entity.ItgLoginUser;
import com.hc.scm.uc.service.ItgLoginUserService;

/**
 * Description: 登录Controller
 * All rights Reserved, Designed By hcpyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wugy
 * Createdate:  2015-3-11下午1:44:06
 */
@Controller
public class MainController extends BaseLoginController<ItgLoginUser> {

	private static Logger logger = LoggerFactory.getLogger(MainController.class);
	
	@Resource
    private ItgLoginUserService itgLoginUserService;

    @Override
    public BaseCrudService init() {
        return itgLoginUserService;
    }
    
    @Resource
	private RedisClient redisClient;
    
    @RequestMapping("/redisClient.json")
    @ResponseBody
    public Map<String,Object> redisClient_json(HttpServletRequest req, HttpServletResponse response){
		Map<String, Object> resultMap =new HashMap<String, Object>();
		ResultModel resultModel = new ResultModel();
		try {
			String act=req.getParameter("act");
			String key=req.getParameter("key");
			//String val=req.getParameter("val");
			if (StringUtils.isEmpty(act) ||StringUtils.isEmpty(key)) {
				resultModel.setResultCode("9003");
				resultModel.setMsg("参数不能为空");
            }
			
			if ("0".equals(resultModel.getResultCode())) {
				if("del".equals(act)){
					long ret=redisClient.delete(key);
					resultModel.setMsg("删除缓存成功。["+ret+"]");
				}
			}
		} catch (Exception e) {
			resultModel.setResultCode("9009");
			resultModel.setMsg("系统异常");
			logger.error("error:", e);
		}
		resultMap.put("result", resultModel);
        return resultMap;
    }
    
}
