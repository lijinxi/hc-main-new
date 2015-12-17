package com.hc.scm.uc.dao.model;

import java.io.Serializable;

import com.hc.scm.common.model.BaseTreeModel;

/**
 * Description: 
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      liu.tao
 * Createdate:  2015-1-28下午2:56:53
 *
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 * 2015-1-28     	liu.tao
 */
public class UserMenuTreeModel extends BaseTreeModel<UserMenuTreeModel> implements Serializable{
	
	private static final long serialVersionUID = 1L;
	private Integer menuNo;
	private String menuName;
	private Integer parentMenuNo;
	private Integer moduleNo;
	private Integer rightValue;//模块的权限值
	private String url;
	private String appUrl;
	private String moduleUrl;
	private String moduleCode; //模块启动命令
	private String jsUrl;
	private Integer rights;//用户所有的权限值
	private String appCode;
	
	public Integer getMenuNo() {
		return menuNo;
	}
	public void setMenuNo(Integer menuNo) {
		super.setId(String.valueOf(menuNo));
		this.menuNo = menuNo;
	}
	public String getMenuName() {
		return menuName;
	}
	public void setMenuName(String menuName) {
		super.setText(menuName);
		this.menuName = menuName;
	}
	public Integer getParentMenuNo() {
		return parentMenuNo;
	}
	public void setParentMenuNo(Integer parentMenuNo) {
		super.setParentId(String.valueOf(parentMenuNo));
		this.parentMenuNo = parentMenuNo;
	}
	public Integer getModuleNo() {
		return moduleNo;
	}
	public void setModuleNo(Integer moduleNo) {
		this.moduleNo = moduleNo;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Integer getRightValue() {
		return rightValue;
	}
	public void setRightValue(Integer rightValue) {
		this.rightValue = rightValue;
	}
	public String getJsUrl() {
		return jsUrl;
	}
	public void setJsUrl(String jsUrl) {
		this.jsUrl = jsUrl;
	}
	public String getAppUrl() {
		return appUrl;
	}
	public void setAppUrl(String appUrl) {
		this.appUrl = appUrl;
	}
	public String getModuleUrl() {
		return moduleUrl;
	}
	public void setModuleUrl(String moduleUrl) {
		this.moduleUrl = moduleUrl;
	}
	public String getModuleCode() {
		return moduleCode;
	}
	public void setModuleCode(String moduleCode) {
		this.moduleCode = moduleCode;
	}
	public Integer getRights() {
		return rights;
	}
	public void setRights(Integer rights) {
		this.rights = rights;
	}
	public String getAppCode() {
		return appCode;
	}
	public void setAppCode(String appCode) {
		this.appCode = appCode;
	}
}
