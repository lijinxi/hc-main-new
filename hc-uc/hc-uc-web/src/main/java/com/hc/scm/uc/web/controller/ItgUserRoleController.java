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

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.TreeModel;
import com.hc.scm.common.utils.CommonUtil;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.uc.dao.entity.ItgRoleList;
import com.hc.scm.uc.dao.entity.ItgUserRole;
import com.hc.scm.uc.dao.model.UserRoleModel;
import com.hc.scm.uc.service.ItgUserRoleService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-06 16:45:38
 * @version 1.0.0
 */
@Controller
@RequestMapping("/itg_user_role")
public class ItgUserRoleController extends BaseCrudController<ItgUserRole> {
	@Resource
	private ItgUserRoleService itgUserRoleService;

	@Override
	public BaseCrudService init() {
		return itgUserRoleService;
	}


	@SuppressWarnings("rawtypes")
	@RequestMapping("/getRole.json")
	@ResponseBody
	public Object getRoleListByUserId(HttpServletRequest req,Model model){
		Map<String, Object> resultMap =new HashMap<String, Object>();
		ResultModel resultModel = new ResultModel();
		String resultMsg = "",resultCode = "0";
		try {

			if ("0".equals(resultCode)) {
				int pageNum = StringUtils.isEmpty(req.getParameter("pageNum")) ? 1 : Integer.parseInt(req.getParameter("pageNum"));
				int pageSize = StringUtils.isEmpty(req.getParameter("pageSize")) ? 10 : Integer.parseInt(req.getParameter("pageSize"));
				String sortColumn = StringUtils.isEmpty(req.getParameter("sort")) ? "" : String.valueOf(req.getParameter("sort"));
				String sortOrder = StringUtils.isEmpty(req.getParameter("order")) ? "" : String.valueOf(req.getParameter("order"));
				Map<String, Object> params = builderParams(req, model);

				if(params.containsKey("isExist")){
					if(params.get("isExist").equals("true")){
						PageHelper.startPage(pageNum, pageSize);
						List<UserRoleModel> list = itgUserRoleService.getRoleListByUserId(null, CommonUtil.convertJaveBeanStrToUnderLine(sortColumn), sortOrder, params);
						resultMap.put("totalCount",((Page)list).getTotal());
						resultMap.put("list",list);
					}
					else if (params.get("isExist").equals("false")){
						PageHelper.startPage(pageNum, pageSize);
						List<UserRoleModel> list = itgUserRoleService.getNoExistRoleListByUserId(null, CommonUtil.convertJaveBeanStrToUnderLine(sortColumn), sortOrder, params);
						resultMap.put("totalCount",((Page)list).getTotal());
						resultMap.put("list",list);
					}
				}
			}
		} catch (ServiceException e) {
			resultCode = "9009";
			resultMsg = "系统异常";
			//logger.error("error:", e);
		}
		resultModel.setResultCode(resultCode);
		resultModel.setMsg(resultMsg);
		resultMap.put("result", resultModel);
		return resultMap;
	}
	
	@RequestMapping("/getDeptTree.json")
	@ResponseBody
	public Object getDeptTree(HttpServletRequest req,Model model){
		int deptNo = 0;
		List<TreeModel> tree = itgUserRoleService.getDeptTree(deptNo);
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("children", tree);
		return map;
	}
	
	@RequestMapping("/getNodeByDeptNo.json")
	@ResponseBody
	public Object getNodeByDeptNo(int id){
		List<TreeModel> tree = itgUserRoleService.getNodeByDeptNo(id);
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("children", tree);
		return map;
	}
}