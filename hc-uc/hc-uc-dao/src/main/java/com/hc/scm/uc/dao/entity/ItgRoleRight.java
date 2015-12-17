package com.hc.scm.uc.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-17 09:57:12
 * @version 1.0.0
 */
public class ItgRoleRight {
    /**
     * 角色模块联合id
     */
    private Integer roleRightId;

    /**
     * 角色id
     */
    private Integer roleId;

    /**
     * 模块编号
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
     * 
     * {@linkplain #roleRightId}
     *
     * @return the value of itg_role_right.role_right_id
     */
    public Integer getRoleRightId() {
        return roleRightId;
    }

    /**
     * 
     * {@linkplain #roleRightId}
     * @param roleRightId the value for itg_role_right.role_right_id
     */
    public void setRoleRightId(Integer roleRightId) {
        this.roleRightId = roleRightId;
    }

    /**
     * 
     * {@linkplain #roleId}
     *
     * @return the value of itg_role_right.role_id
     */
    public Integer getRoleId() {
        return roleId;
    }

    /**
     * 
     * {@linkplain #roleId}
     * @param roleId the value for itg_role_right.role_id
     */
    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    /**
     * 
     * {@linkplain #moduleNo}
     *
     * @return the value of itg_role_right.module_no
     */
    public Integer getModuleNo() {
        return moduleNo;
    }

    /**
     * 
     * {@linkplain #moduleNo}
     * @param moduleNo the value for itg_role_right.module_no
     */
    public void setModuleNo(Integer moduleNo) {
        this.moduleNo = moduleNo;
    }

    /**
     * 
     * {@linkplain #rightValue}
     *
     * @return the value of itg_role_right.right_value
     */
    public Integer getRightValue() {
        return rightValue;
    }

    /**
     * 
     * {@linkplain #rightValue}
     * @param rightValue the value for itg_role_right.right_value
     */
    public void setRightValue(Integer rightValue) {
        this.rightValue = rightValue;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of itg_role_right.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for itg_role_right.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of itg_role_right.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for itg_role_right.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}