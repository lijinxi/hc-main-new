package com.hc.scm.uc.dao.entity;

import java.util.Date;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     peng.hz
 * @date:  2015-03-19 10:49:45
 * @version 1.0.0
 */
public class ItgDict {
    /**
     * 字典id
     */
    private Integer dictId;

    /**
     * 字典编码
     */
    private String dictCode;

    /**
     * 字典名称
     */
    private String dictName;

    /**
     * 所属应用编号
     */
    private Integer appNo;

    /**
     * 字典级别(0=系统级 1=客户级)
     */
    private Integer dictLevel;

    /**
     * 启用状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

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
    private Date createTime;

    /**
     * 修改人
     */
    private String modifier;

    /**
     * 修改时间
     */
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #dictId}
     *
     * @return the value of itg_dict.dict_id
     */
    public Integer getDictId() {
        return dictId;
    }

    /**
     * 
     * {@linkplain #dictId}
     * @param dictId the value for itg_dict.dict_id
     */
    public void setDictId(Integer dictId) {
        this.dictId = dictId;
    }

    /**
     * 
     * {@linkplain #dictCode}
     *
     * @return the value of itg_dict.dict_code
     */
    public String getDictCode() {
        return dictCode;
    }

    /**
     * 
     * {@linkplain #dictCode}
     * @param dictCode the value for itg_dict.dict_code
     */
    public void setDictCode(String dictCode) {
        this.dictCode = dictCode;
    }

    /**
     * 
     * {@linkplain #dictName}
     *
     * @return the value of itg_dict.dict_name
     */
    public String getDictName() {
        return dictName;
    }

    /**
     * 
     * {@linkplain #dictName}
     * @param dictName the value for itg_dict.dict_name
     */
    public void setDictName(String dictName) {
        this.dictName = dictName;
    }

    /**
     * 
     * {@linkplain #appNo}
     *
     * @return the value of itg_dict.app_no
     */
    public Integer getAppNo() {
        return appNo;
    }

    /**
     * 
     * {@linkplain #appNo}
     * @param appNo the value for itg_dict.app_no
     */
    public void setAppNo(Integer appNo) {
        this.appNo = appNo;
    }

    /**
     * 
     * {@linkplain #dictLevel}
     *
     * @return the value of itg_dict.dict_level
     */
    public Integer getDictLevel() {
        return dictLevel;
    }

    /**
     * 
     * {@linkplain #dictLevel}
     * @param dictLevel the value for itg_dict.dict_level
     */
    public void setDictLevel(Integer dictLevel) {
        this.dictLevel = dictLevel;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of itg_dict.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for itg_dict.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of itg_dict.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for itg_dict.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of itg_dict.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for itg_dict.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of itg_dict.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for itg_dict.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of itg_dict.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for itg_dict.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of itg_dict.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for itg_dict.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of itg_dict.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for itg_dict.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}