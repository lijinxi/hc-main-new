package com.hc.scm.uc.dao.model;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

public class RoleRightModel {
	/**
     * 角色模块联合id
     */
    private Integer roleRightId;

    /**
     * 角色id
     */
    private Integer roleId;

    /**
     * 角色表模块编号
     */
    private Integer moduleNo;

    /**
     * 权限值
     */
    private Integer rightValue;

    /**
     * 建档人
     */
    private String creator;

    /**
     * 建档时间
     */
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date createTime;
    
    /**
     * 模块表模块编号
     */
    private Integer t2_moduleNo;
    
    /**
     * 模块编码(启动命令)
     */
    private String moduleCode;

    /**
     * 模块名称
     */
    private String moduleName;

    /**
     * 所属应用编号
     */
    private Integer appNo;

    /**
     * 所属项目编码
     */
    private String projectCode;

    /**
     * 模块相对路径url
     */
    private String moduleUrl;

    /**
     * 权限值
     */
    private Integer t2_rightValue;

	public Integer getRoleRightId() {
		return roleRightId;
	}

	public void setRoleRightId(Integer roleRightId) {
		this.roleRightId = roleRightId;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public Integer getModuleNo() {
		return moduleNo;
	}

	public void setModuleNo(Integer moduleNo) {
		this.moduleNo = moduleNo;
	}

	public Integer getRightValue() {
		return rightValue;
	}

	public void setRightValue(Integer rightValue) {
		this.rightValue = rightValue;
	}

	public String getCreator() {
		return creator;
	}

	public void setCreator(String creator) {
		this.creator = creator;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public String getModuleCode() {
		return moduleCode;
	}

	public void setModuleCode(String moduleCode) {
		this.moduleCode = moduleCode;
	}

	public String getModuleName() {
		return moduleName;
	}

	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}

	public Integer getAppNo() {
		return appNo;
	}

	public void setAppNo(Integer appNo) {
		this.appNo = appNo;
	}

	public String getProjectCode() {
		return projectCode;
	}

	public void setProjectCode(String projectCode) {
		this.projectCode = projectCode;
	}

	public String getModuleUrl() {
		return moduleUrl;
	}

	public void setModuleUrl(String moduleUrl) {
		this.moduleUrl = moduleUrl;
	}

	public Integer getT2_rightValue() {
		return t2_rightValue;
	}

	public void setT2_rightValue(Integer t2_rightValue) {
		this.t2_rightValue = t2_rightValue;
	}

	public Integer getT2_moduleNo() {
		return t2_moduleNo;
	}

	public void setT2_moduleNo(Integer t2_moduleNo) {
		this.t2_moduleNo = t2_moduleNo;
	}
	
    
    

	
    
    

}
