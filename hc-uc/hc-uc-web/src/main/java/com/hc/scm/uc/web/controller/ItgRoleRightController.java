package com.hc.scm.uc.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.utils.CommonUtil;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.uc.dao.entity.ItgRoleRight;
import com.hc.scm.uc.dao.model.RoleRightModel;
import com.hc.scm.uc.service.ItgRoleRightService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-17 09:57:12
 * @version 1.0.0
 */
@Controller
@RequestMapping("/itg_role_right")
public class ItgRoleRightController extends BaseCrudController<ItgRoleRight> {
	
	private static Logger logger = LoggerFactory.getLogger(ItgRoleRightController.class);
	
    @Resource
    private ItgRoleRightService itgRoleRightService;

    @Override
    public BaseCrudService init() {
        return itgRoleRightService;
    }
    
    @SuppressWarnings("rawtypes")
	@RequestMapping("/getRoleRight.json")
    @ResponseBody
    public Object getRoleRight(HttpServletRequest req, Model model){
    	Map<String, Object> resultMap =new HashMap<String, Object>();
        ResultModel resultModel =new ResultModel();
        try {
			if (model==null) {
				resultModel.setResultCode("9003");
				resultModel.setMsg("参数数错误");
            }
			
			if ("0".equals(resultModel.getResultCode())) {
				int pageNum = StringUtils.isEmpty(req.getParameter("pageNum")) ? 1 : Integer.parseInt(req.getParameter("pageNum"));
				int pageSize = StringUtils.isEmpty(req.getParameter("pageSize")) ? 10 : Integer.parseInt(req.getParameter("pageSize"));
				String sortColumn = StringUtils.isEmpty(req.getParameter("sort")) ? "" : String.valueOf(req.getParameter("sort"));
				String sortOrder = StringUtils.isEmpty(req.getParameter("order")) ? "" : String.valueOf(req.getParameter("order"));
				Map<String, Object> params = builderParams(req, model);
				PageHelper.startPage(pageNum, pageSize);
				List<RoleRightModel> list = itgRoleRightService.getRoleRightModels(null, CommonUtil.convertJaveBeanStrToUnderLine(sortColumn), sortOrder, params);
				resultMap.put("totalCount",((Page)list).getTotal());
				resultMap.put("list",list);
			}
		} catch (ServiceException e) {
			resultModel.setResultCode("9009");
			resultModel.setMsg("系统异常");
			logger.error("error:", e);
		}
		resultMap.put("result", resultModel);
        return resultMap;
    }
}