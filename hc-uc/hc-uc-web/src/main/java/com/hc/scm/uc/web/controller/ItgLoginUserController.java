package com.hc.scm.uc.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.uc.dao.entity.ItgLoginUser;
import com.hc.scm.uc.dao.model.DepartmentTreeModel;
import com.hc.scm.uc.service.ItgLoginUserService;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-07 13:30:53
 * @version 1.0.0
 */
@Controller
@RequestMapping("/itg_login_user")
public class ItgLoginUserController extends BaseCrudController<ItgLoginUser> {
	private static Logger logger = LoggerFactory.getLogger(ItgLoginUserController.class);
    @Resource
    private ItgLoginUserService itgLoginUserService;

    @Override
    public BaseCrudService init() {
        return itgLoginUserService;
    }
    
    /**
	 * 添加
	 * @param modelType
	 * @return
	 */
    @RequestMapping("/add.json")
    @ResponseBody
    @Override
    public Map<String,Object> add(ItgLoginUser modelType) {
    	Map<String, Object> resultMap =new HashMap<String, Object>();
    	ResultModel resultModel =new ResultModel();
        try {
			if (modelType==null) {
				resultModel.setResultCode("9003");
				resultModel.setMsg("参数数错误");
            }
			
			if ("0".equals(resultModel.getResultCode())) {
				itgLoginUserService.addWithValid(modelType);
			}
		} catch (Exception e) {
			resultModel.setResultCode("9009");
			resultModel.setMsg("错误提示:"+e.getMessage());
			logger.error("error:", e);
		}
		
		resultMap.put("result", resultModel);
        return resultMap;
    }
    
    @RequestMapping("/getDeptTree.json")
    @ResponseBody
    public Map<String,Object> getDeptTree(){
    	int deptNo = 0;
    	List<DepartmentTreeModel> tree = itgLoginUserService.getDeptTreeByParDeptNo(deptNo);
    	Map<String ,Object> map = new HashMap<String,Object>();
    	map.put("list", tree);
    	return map;
    }
    
    @RequestMapping("/changePassword.json")
    @ResponseBody
    public Map<String,Object> changePassword(HttpServletRequest req, ItgLoginUser model) {
    	Map<String, Object> resultMap =new HashMap<String, Object>();
    	ResultModel resultModel =new ResultModel();
    	SystemUser user = this.getCurrentUser(req);
		if (model==null) {
			resultModel.setResultCode("9003");
			resultModel.setMsg("参数错误");
        }
		
		if ("0".equals(resultModel.getResultCode())) {
			itgLoginUserService.changePassword(model, user);
		}

		resultMap.put("result", resultModel);
        return resultMap;
    }
}