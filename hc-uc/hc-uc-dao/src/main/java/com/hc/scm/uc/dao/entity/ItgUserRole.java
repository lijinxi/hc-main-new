package com.hc.scm.uc.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-06 16:45:38
 * @version 1.0.0
 */
public class ItgUserRole {
    /**
     * 用户角色联合id
     */
    private Integer userRoleId;

    /**
     * 用户id
     */
    private Integer userId;

    /**
     * 角色id
     */
    private Integer roleId;

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
     * {@linkplain #userRoleId}
     *
     * @return the value of itg_user_role.user_role_id
     */
    public Integer getUserRoleId() {
        return userRoleId;
    }

    /**
     * 
     * {@linkplain #userRoleId}
     * @param userRoleId the value for itg_user_role.user_role_id
     */
    public void setUserRoleId(Integer userRoleId) {
        this.userRoleId = userRoleId;
    }

    /**
     * 
     * {@linkplain #userId}
     *
     * @return the value of itg_user_role.user_id
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * 
     * {@linkplain #userId}
     * @param userId the value for itg_user_role.user_id
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * 
     * {@linkplain #roleId}
     *
     * @return the value of itg_user_role.role_id
     */
    public Integer getRoleId() {
        return roleId;
    }

    /**
     * 
     * {@linkplain #roleId}
     * @param roleId the value for itg_user_role.role_id
     */
    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of itg_user_role.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for itg_user_role.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of itg_user_role.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for itg_user_role.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}