package com.hc.scm.uc.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fr.json.JSONException;
import com.fr.json.JSONObject;
import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.constans.SysConstans;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.JsonUtils;
import com.hc.scm.uc.dao.entity.ItgMenuList;
import com.hc.scm.uc.dao.model.UserMenuTreeModel;
import com.hc.scm.uc.service.ItgMenuListService;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-03-06 15:42:11
 * @version 1.0.0
 */
@Controller
@RequestMapping("/itg_menu_list")
public class ItgMenuListController extends BaseCrudController<ItgMenuList> {
    @Resource
    private ItgMenuListService itgMenuListService;

    @Override
    public BaseCrudService init() {
        return itgMenuListService;
    }
    
    /**
     * 获取用户菜单，包括权限值，url
     * @param req
     * @param model
     * @return
     */
    @RequestMapping("/getusermenulist.json")
    @ResponseBody
    public Map<String, Object> getUserMenuList (HttpServletRequest req, Model model){
    	Map<String, Object> retMap = new HashMap<String, Object>();
    	String projectCode = req.getParameter("projectCode")==null ? SysConstans.DEF_PROJECT_CODE:req.getParameter("projectCode");
    	SystemUser user = this.getCurrentUser(req);
     	int userId = user.getUserId();
    	List<UserMenuTreeModel> list = itgMenuListService.getUserMenuList(user.getUserCode(),projectCode, userId);
   
    		System.out.println("JSON 转换成功");
    		for(int  i=0;i<list.size();i++){
    			 ObjectMapper mapper = new ObjectMapper();  
    			 String jsonStr = "";
    		      
    		  try {
				jsonStr =  mapper.writeValueAsString(list.get(i));
			} catch (JsonProcessingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
    		       
    			System.out.println(jsonStr);
    			System.out.println(list.get(i));
    		}
			
		
    	retMap.put("list", list);
    	return retMap;
    }
}