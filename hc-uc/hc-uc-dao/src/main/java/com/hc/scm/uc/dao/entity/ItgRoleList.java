package com.hc.scm.uc.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-09 15:22:57
 * @version 1.0.0
 */
public class ItgRoleList {
    /**
     * 角色id
     */
    private Integer roleId;

    /**
     * 角色名称
     */
    private String roleName;
    
    /**
     * 所属项目
     */
    private String projectCode;

	/**
     * 启用状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

    /**
     * 角色拥有者(指定为一个用户的user_code)
     */
    private String roleOwner;

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
     * {@linkplain #roleId}
     *
     * @return the value of itg_role_list.role_id
     */
    public Integer getRoleId() {
        return roleId;
    }

    /**
     * 
     * {@linkplain #roleId}
     * @param roleId the value for itg_role_list.role_id
     */
    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    /**
     * 
     * {@linkplain #roleName}
     *
     * @return the value of itg_role_list.role_name
     */
    public String getRoleName() {
        return roleName;
    }

    /**
     * 
     * {@linkplain #roleName}
     * @param roleName the value for itg_role_list.role_name
     */
    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
    
    public String getProjectCode() {
		return projectCode;
	}

	public void setProjectCode(String projectCode) {
		this.projectCode = projectCode;
	}

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of itg_role_list.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for itg_role_list.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #roleOwner}
     *
     * @return the value of itg_role_list.role_owner
     */
    public String getRoleOwner() {
        return roleOwner;
    }

    /**
     * 
     * {@linkplain #roleOwner}
     * @param roleOwner the value for itg_role_list.role_owner
     */
    public void setRoleOwner(String roleOwner) {
        this.roleOwner = roleOwner;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of itg_role_list.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for itg_role_list.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of itg_role_list.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for itg_role_list.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of itg_role_list.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for itg_role_list.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of itg_role_list.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for itg_role_list.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of itg_role_list.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for itg_role_list.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of itg_role_list.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for itg_role_list.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}