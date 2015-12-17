package com.hc.scm.uc.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-09 10:55:02
 * @version 1.0.0
 */
public class ItgConfig {
    /**
     * 系统参数id
     */
    private Integer configId;

    /**
     * 系统参数编码
     */
    private String configCode;

    /**
     * 所属应用编号
     */
    private Integer appNo;

    /**
     * 系统参数名
     */
    private String configName;

    /**
     * 系统参数值
     */
    private String configValue;

    /**
     * 启用状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

    /**
     * 参数分类
     */
    private String configType;

    /**
     * 参数级别(0=系统级 1=客户级)
     */
    private Integer configLevel;

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
     * 
     * {@linkplain #configId}
     *
     * @return the value of itg_config.config_id
     */
    public Integer getConfigId() {
        return configId;
    }

    /**
     * 
     * {@linkplain #configId}
     * @param configId the value for itg_config.config_id
     */
    public void setConfigId(Integer configId) {
        this.configId = configId;
    }

    /**
     * 
     * {@linkplain #configCode}
     *
     * @return the value of itg_config.config_code
     */
    public String getConfigCode() {
        return configCode;
    }

    /**
     * 
     * {@linkplain #configCode}
     * @param configCode the value for itg_config.config_code
     */
    public void setConfigCode(String configCode) {
        this.configCode = configCode;
    }

    /**
     * 
     * {@linkplain #appNo}
     *
     * @return the value of itg_config.app_no
     */
    public Integer getAppNo() {
        return appNo;
    }

    /**
     * 
     * {@linkplain #appNo}
     * @param appNo the value for itg_config.app_no
     */
    public void setAppNo(Integer appNo) {
        this.appNo = appNo;
    }

    /**
     * 
     * {@linkplain #configName}
     *
     * @return the value of itg_config.config_name
     */
    public String getConfigName() {
        return configName;
    }

    /**
     * 
     * {@linkplain #configName}
     * @param configName the value for itg_config.config_name
     */
    public void setConfigName(String configName) {
        this.configName = configName;
    }

    /**
     * 
     * {@linkplain #configValue}
     *
     * @return the value of itg_config.config_value
     */
    public String getConfigValue() {
        return configValue;
    }

    /**
     * 
     * {@linkplain #configValue}
     * @param configValue the value for itg_config.config_value
     */
    public void setConfigValue(String configValue) {
        this.configValue = configValue;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of itg_config.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for itg_config.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #configType}
     *
     * @return the value of itg_config.config_type
     */
    public String getConfigType() {
        return configType;
    }

    /**
     * 
     * {@linkplain #configType}
     * @param configType the value for itg_config.config_type
     */
    public void setConfigType(String configType) {
        this.configType = configType;
    }

    /**
     * 
     * {@linkplain #configLevel}
     *
     * @return the value of itg_config.config_level
     */
    public Integer getConfigLevel() {
        return configLevel;
    }

    /**
     * 
     * {@linkplain #configLevel}
     * @param configLevel the value for itg_config.config_level
     */
    public void setConfigLevel(Integer configLevel) {
        this.configLevel = configLevel;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of itg_config.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for itg_config.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of itg_config.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for itg_config.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of itg_config.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for itg_config.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of itg_config.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for itg_config.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of itg_config.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for itg_config.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of itg_config.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for itg_config.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}