package com.hc.scm.uc.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 模块管理
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-06 13:42:42
 * @version 1.0.0
 */
public class ItgModuleList {
    /**
     * 模块编号
     */
    private Integer moduleNo;

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
     * 启用状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

    /**
     * 模块类型(0=模块 1=报表)
     */
    private Integer isReport;

    /**
     * 模块相对路径url
     */
    private String moduleUrl;

    /**
     * 权限值
     */
    private Integer rightValue;

    /**
     * 热点信息
     */
    private String hint;

    /**
     * 建档人
     */
    private String creator;

    /**
     * 建档时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    /**
     * 修改人
     */
    private String modifier;

    /**
     * 修改时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #moduleNo}
     *
     * @return the value of itg_module_list.module_no
     */
    public Integer getModuleNo() {
        return moduleNo;
    }

    /**
     * 
     * {@linkplain #moduleNo}
     * @param moduleNo the value for itg_module_list.module_no
     */
    public void setModuleNo(Integer moduleNo) {
        this.moduleNo = moduleNo;
    }

    /**
     * 
     * {@linkplain #moduleCode}
     *
     * @return the value of itg_module_list.module_code
     */
    public String getModuleCode() {
        return moduleCode;
    }

    /**
     * 
     * {@linkplain #moduleCode}
     * @param moduleCode the value for itg_module_list.module_code
     */
    public void setModuleCode(String moduleCode) {
        this.moduleCode = moduleCode;
    }

    /**
     * 
     * {@linkplain #moduleName}
     *
     * @return the value of itg_module_list.module_name
     */
    public String getModuleName() {
        return moduleName;
    }

    /**
     * 
     * {@linkplain #moduleName}
     * @param moduleName the value for itg_module_list.module_name
     */
    public void setModuleName(String moduleName) {
        this.moduleName = moduleName;
    }

    /**
     * 
     * {@linkplain #appNo}
     *
     * @return the value of itg_module_list.app_no
     */
    public Integer getAppNo() {
        return appNo;
    }

    /**
     * 
     * {@linkplain #appNo}
     * @param appNo the value for itg_module_list.app_no
     */
    public void setAppNo(Integer appNo) {
        this.appNo = appNo;
    }

    /**
     * 
     * {@linkplain #projectCode}
     *
     * @return the value of itg_module_list.project_code
     */
    public String getProjectCode() {
        return projectCode;
    }

    /**
     * 
     * {@linkplain #projectCode}
     * @param projectCode the value for itg_module_list.project_code
     */
    public void setProjectCode(String projectCode) {
        this.projectCode = projectCode;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of itg_module_list.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for itg_module_list.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #isReport}
     *
     * @return the value of itg_module_list.is_report
     */
    public Integer getIsReport() {
        return isReport;
    }

    /**
     * 
     * {@linkplain #isReport}
     * @param isReport the value for itg_module_list.is_report
     */
    public void setIsReport(Integer isReport) {
        this.isReport = isReport;
    }

    /**
     * 
     * {@linkplain #moduleUrl}
     *
     * @return the value of itg_module_list.module_url
     */
    public String getModuleUrl() {
        return moduleUrl;
    }

    /**
     * 
     * {@linkplain #moduleUrl}
     * @param moduleUrl the value for itg_module_list.module_url
     */
    public void setModuleUrl(String moduleUrl) {
        this.moduleUrl = moduleUrl;
    }

    /**
     * 
     * {@linkplain #rightValue}
     *
     * @return the value of itg_module_list.right_value
     */
    public Integer getRightValue() {
        return rightValue;
    }

    /**
     * 
     * {@linkplain #rightValue}
     * @param rightValue the value for itg_module_list.right_value
     */
    public void setRightValue(Integer rightValue) {
        this.rightValue = rightValue;
    }

    /**
     * 
     * {@linkplain #hint}
     *
     * @return the value of itg_module_list.hint
     */
    public String getHint() {
        return hint;
    }

    /**
     * 
     * {@linkplain #hint}
     * @param hint the value for itg_module_list.hint
     */
    public void setHint(String hint) {
        this.hint = hint;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of itg_module_list.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for itg_module_list.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of itg_module_list.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for itg_module_list.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of itg_module_list.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for itg_module_list.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of itg_module_list.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for itg_module_list.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of itg_module_list.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for itg_module_list.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}