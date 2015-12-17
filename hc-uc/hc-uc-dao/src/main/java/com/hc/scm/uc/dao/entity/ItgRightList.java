package com.hc.scm.uc.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-05 14:06:55
 * @version 1.0.0
 */
public class ItgRightList {
    /**
     * 权限id
     */
    private Integer rightId;

    /**
     * 权限编号(2的倍数，以方便分解权限值)
     */
    private Integer rightNo;

    /**
     * 所属项目编码
     */
    private String projectCode;

    /**
     * 权限名称
     */
    private String rightName;

    /**
     * 启用状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

    /**
     * 权限类型(0=标准权限 1=扩展权限 2=数据权限)
     */
    private Integer rightType;

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
     * {@linkplain #rightId}
     *
     * @return the value of itg_right_list.right_id
     */
    public Integer getRightId() {
        return rightId;
    }

    /**
     * 
     * {@linkplain #rightId}
     * @param rightId the value for itg_right_list.right_id
     */
    public void setRightId(Integer rightId) {
        this.rightId = rightId;
    }

    /**
     * 
     * {@linkplain #rightNo}
     *
     * @return the value of itg_right_list.right_no
     */
    public Integer getRightNo() {
        return rightNo;
    }

    /**
     * 
     * {@linkplain #rightNo}
     * @param rightNo the value for itg_right_list.right_no
     */
    public void setRightNo(Integer rightNo) {
        this.rightNo = rightNo;
    }

    /**
     * 
     * {@linkplain #projectCode}
     *
     * @return the value of itg_right_list.project_code
     */
    public String getProjectCode() {
        return projectCode;
    }

    /**
     * 
     * {@linkplain #projectCode}
     * @param projectCode the value for itg_right_list.project_code
     */
    public void setProjectCode(String projectCode) {
        this.projectCode = projectCode;
    }

    /**
     * 
     * {@linkplain #rightName}
     *
     * @return the value of itg_right_list.right_name
     */
    public String getRightName() {
        return rightName;
    }

    /**
     * 
     * {@linkplain #rightName}
     * @param rightName the value for itg_right_list.right_name
     */
    public void setRightName(String rightName) {
        this.rightName = rightName;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of itg_right_list.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for itg_right_list.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #rightType}
     *
     * @return the value of itg_right_list.right_type
     */
    public Integer getRightType() {
        return rightType;
    }

    /**
     * 
     * {@linkplain #rightType}
     * @param rightType the value for itg_right_list.right_type
     */
    public void setRightType(Integer rightType) {
        this.rightType = rightType;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of itg_right_list.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for itg_right_list.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of itg_right_list.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for itg_right_list.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of itg_right_list.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for itg_right_list.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of itg_right_list.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for itg_right_list.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of itg_right_list.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for itg_right_list.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of itg_right_list.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for itg_right_list.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}