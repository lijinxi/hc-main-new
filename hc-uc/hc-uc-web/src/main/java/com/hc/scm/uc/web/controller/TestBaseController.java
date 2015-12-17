package com.hc.scm.uc.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.uc.dao.entity.ItgApplication;
import com.hc.scm.uc.service.TestBaseService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

@Controller
@RequestMapping("/test_base")
public class TestBaseController {
	
	@Resource
	private TestBaseService testBaseService;
	
	    @ResponseBody
	    public Map<String,Object> getlist(HttpServletRequest req, Model model,String appCode) {
	        Map<String, Object> resultMap =new HashMap<String, Object>();
	    	ResultModel resultModel = new ResultModel();
	    	String resultMsg = "",resultCode = "0";
	        try {
	
				if ("0".equals(resultCode)) {
					int pageNum = StringUtils.isEmpty(req.getParameter("pageNum")) ? 1 : Integer.parseInt(req.getParameter("pageNum"));
					int pageSize = StringUtils.isEmpty(req.getParameter("pageSize")) ? 10 : Integer.parseInt(req.getParameter("pageSize"));
					PageHelper.startPage(pageNum, pageSize);
					List<ItgApplication> list = this.testBaseService.getList(appCode);
					resultMap.put("totalCount",((Page)list).getTotal());
					resultMap.put("list",list);
				}
			} catch (ServiceException e) {
				resultCode = "9009";
				resultMsg = "系统异常";
			}
			resultModel.setResultCode(resultCode);
			resultModel.setMsg(resultMsg);
			resultMap.put("result", resultModel);
	        return resultMap;
	    }
	    
	    @RequestMapping("/updateRedis.json")
	    @ResponseBody
	    public Map<String,Object> updateRedis(HttpServletRequest req, Model model,String appCode) {
	        Map<String, Object> resultMap =new HashMap<String, Object>();
	    	ResultModel resultModel = new ResultModel();
	    	String resultMsg = "",resultCode = "0";
	        try {
		
				if ("0".equals(resultCode)) {
					int pageNum = StringUtils.isEmpty(req.getParameter("pageNum")) ? 1 : Integer.parseInt(req.getParameter("pageNum"));
					int pageSize = StringUtils.isEmpty(req.getParameter("pageSize")) ? 10 : Integer.parseInt(req.getParameter("pageSize"));
					List<ItgApplication> list = this.testBaseService.updateRedis(appCode);
					resultMap.put("totalCount",((Page)list).getTotal());
					resultMap.put("list",list);
				}
			} catch (ServiceException e) {
				resultCode = "9009";
				resultMsg = "系统异常";
			}
			resultModel.setResultCode(resultCode);
			resultModel.setMsg(resultMsg);
			resultMap.put("result", resultModel);
	        return resultMap;
	    }
	    
	    @RequestMapping("/removeredis.json")
	    @ResponseBody
	    public Map<String,Object> removeredis(HttpServletRequest req, Model model,String appCode) {
	        Map<String, Object> resultMap =new HashMap<String, Object>();
	    	ResultModel resultModel = new ResultModel();
	    	String resultMsg = "",resultCode = "0";
	        try {
	        	testBaseService.removeRedis(appCode);
				
			
			} catch (ServiceException e) {
				resultCode = "9009";
				resultMsg = "系统异常";
			}
			resultModel.setResultCode(resultCode);
			resultModel.setMsg(resultMsg);
			resultMap.put("result", resultModel);
	        return resultMap;
	    }

}
