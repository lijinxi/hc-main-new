package com.hc.scm.uc.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-05 09:59:34
 * @version 1.0.0
 */
public class ItgApplication {
    /**
     * 应用编号
     */
    private Integer appNo;

    /**
     * 应用编码
     */
    private String appCode;

    /**
     * 应用名称
     */
    private String appName;

    /**
     * 所属项目编码
     */
    private String projectCode;

    /**
     * 启用状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

    /**
     * 应用url
     */
    private String appUrl;

    /**
     * 图标路径
     */
    private String imageUrl;

    /**
     * 图标名称
     */
    private String imageName;

    /**
     * 排列序号
     */
    private Integer orderNo;

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
     * 修改人
     */
    private String modifier;

    /**
     * 修改时间
     */
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;
    
    /**
     * jsurl
     */
    private String jsUrl;

    /**
     * 
     * {@linkplain #appNo}
     *
     * @return the value of itg_application.app_no
     */
    public Integer getAppNo() {
        return appNo;
    }

    /**
     * 
     * {@linkplain #appNo}
     * @param appNo the value for itg_application.app_no
     */
    public void setAppNo(Integer appNo) {
        this.appNo = appNo;
    }

    /**
     * 
     * {@linkplain #appCode}
     *
     * @return the value of itg_application.app_code
     */
    public String getAppCode() {
        return appCode;
    }

    /**
     * 
     * {@linkplain #appCode}
     * @param appCode the value for itg_application.app_code
     */
    public void setAppCode(String appCode) {
        this.appCode = appCode;
    }

    /**
     * 
     * {@linkplain #appName}
     *
     * @return the value of itg_application.app_name
     */
    public String getAppName() {
        return appName;
    }

    /**
     * 
     * {@linkplain #appName}
     * @param appName the value for itg_application.app_name
     */
    public void setAppName(String appName) {
        this.appName = appName;
    }

    /**
     * 
     * {@linkplain #projectCode}
     *
     * @return the value of itg_application.project_code
     */
    public String getProjectCode() {
        return projectCode;
    }

    /**
     * 
     * {@linkplain #projectCode}
     * @param projectCode the value for itg_application.project_code
     */
    public void setProjectCode(String projectCode) {
        this.projectCode = projectCode;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of itg_application.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for itg_application.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #appUrl}
     *
     * @return the value of itg_application.app_url
     */
    public String getAppUrl() {
        return appUrl;
    }

    /**
     * 
     * {@linkplain #appUrl}
     * @param appUrl the value for itg_application.app_url
     */
    public void setAppUrl(String appUrl) {
        this.appUrl = appUrl;
    }

    /**
     * 
     * {@linkplain #imageUrl}
     *
     * @return the value of itg_application.image_url
     */
    public String getImageUrl() {
        return imageUrl;
    }

    /**
     * 
     * {@linkplain #imageUrl}
     * @param imageUrl the value for itg_application.image_url
     */
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    /**
     * 
     * {@linkplain #imageName}
     *
     * @return the value of itg_application.image_name
     */
    public String getImageName() {
        return imageName;
    }

    /**
     * 
     * {@linkplain #imageName}
     * @param imageName the value for itg_application.image_name
     */
    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of itg_application.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for itg_application.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of itg_application.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for itg_application.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of itg_application.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for itg_application.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of itg_application.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for itg_application.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of itg_application.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for itg_application.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of itg_application.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for itg_application.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

	public String getJsUrl() {
		return jsUrl;
	}

	public void setJsUrl(String jsUrl) {
		this.jsUrl = jsUrl;
	}
}