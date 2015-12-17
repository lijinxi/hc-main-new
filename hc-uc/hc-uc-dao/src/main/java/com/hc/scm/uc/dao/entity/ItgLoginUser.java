package com.hc.scm.uc.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-07 13:30:53
 * @version 1.0.0
 */
public class ItgLoginUser {
    /**
     * 用户id
     */
    private Integer userId;

    /**
     * 用户编码
     */
    private String userCode;

    /**
     * 用户名称
     */
    private String userName;

    /**
     * 启用状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

    /**
     * 用户密码
     */
    private String password;

    /**
     * 密码等级编号
     */
    private Integer pwdLevelNo;

    /**
     * 密码修改时间
     */
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date pwdModifyTime;

    /**
     * 所属部门编号
     */
    private Integer deptNo;

    /**
     * 是否管理员组(0=否 1=是)
     */
    private Integer isAdminGroup;

    /**
     * mac地址检测(0=不检测 1=检测)
     */
    private Integer checkMac;

    /**
     * 设定的mac地址
     */
    private String addressMac;

    /**
     * ip地址检测(0=不检测 1=检测)
     */
    private Integer checkIp;

    /**
     * 设定的ip地址
     */
    private String addressIp;

    /**
     * 手机号码(如不为_，则必须唯一，以支持可以用手机登录)
     */
    private String mobileNo;

    /**
     * 邮箱(如不为_，则必须唯一，以支持可以用邮箱登录)
     */
    private String email;

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
     * 部门名称
     */
    private String deptName;
    
    /**
     * 原用户密码
     */
    private String oldPassword;

    /**
     * 
     * {@linkplain #userId}
     *
     * @return the value of itg_login_user.user_id
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * 
     * {@linkplain #userId}
     * @param userId the value for itg_login_user.user_id
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * 
     * {@linkplain #userCode}
     *
     * @return the value of itg_login_user.user_code
     */
    public String getUserCode() {
        return userCode;
    }

    /**
     * 
     * {@linkplain #userCode}
     * @param userCode the value for itg_login_user.user_code
     */
    public void setUserCode(String userCode) {
        this.userCode = userCode;
    }

    /**
     * 
     * {@linkplain #userName}
     *
     * @return the value of itg_login_user.user_name
     */
    public String getUserName() {
        return userName;
    }

    /**
     * 
     * {@linkplain #userName}
     * @param userName the value for itg_login_user.user_name
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of itg_login_user.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for itg_login_user.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #password}
     *
     * @return the value of itg_login_user.password
     */
    public String getPassword() {
        return password;
    }

    /**
     * 
     * {@linkplain #password}
     * @param password the value for itg_login_user.password
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * 
     * {@linkplain #pwdLevelNo}
     *
     * @return the value of itg_login_user.pwd_level_no
     */
    public Integer getPwdLevelNo() {
        return pwdLevelNo;
    }

    /**
     * 
     * {@linkplain #pwdLevelNo}
     * @param pwdLevelNo the value for itg_login_user.pwd_level_no
     */
    public void setPwdLevelNo(Integer pwdLevelNo) {
        this.pwdLevelNo = pwdLevelNo;
    }

    /**
     * 
     * {@linkplain #pwdModifyTime}
     *
     * @return the value of itg_login_user.pwd_modify_time
     */
    public Date getPwdModifyTime() {
        return pwdModifyTime;
    }

    /**
     * 
     * {@linkplain #pwdModifyTime}
     * @param pwdModifyTime the value for itg_login_user.pwd_modify_time
     */
    public void setPwdModifyTime(Date pwdModifyTime) {
        this.pwdModifyTime = pwdModifyTime;
    }

    /**
     * 
     * {@linkplain #deptNo}
     *
     * @return the value of itg_login_user.dept_no
     */
    public Integer getDeptNo() {
        return deptNo;
    }

    /**
     * 
     * {@linkplain #deptNo}
     * @param deptNo the value for itg_login_user.dept_no
     */
    public void setDeptNo(Integer deptNo) {
        this.deptNo = deptNo;
    }

    /**
     * 
     * {@linkplain #isAdminGroup}
     *
     * @return the value of itg_login_user.is_admin_group
     */
    public Integer getIsAdminGroup() {
        return isAdminGroup;
    }

    /**
     * 
     * {@linkplain #isAdminGroup}
     * @param isAdminGroup the value for itg_login_user.is_admin_group
     */
    public void setIsAdminGroup(Integer isAdminGroup) {
        this.isAdminGroup = isAdminGroup;
    }

    /**
     * 
     * {@linkplain #checkMac}
     *
     * @return the value of itg_login_user.check_mac
     */
    public Integer getCheckMac() {
        return checkMac;
    }

    /**
     * 
     * {@linkplain #checkMac}
     * @param checkMac the value for itg_login_user.check_mac
     */
    public void setCheckMac(Integer checkMac) {
        this.checkMac = checkMac;
    }

    /**
     * 
     * {@linkplain #addressMac}
     *
     * @return the value of itg_login_user.address_mac
     */
    public String getAddressMac() {
        return addressMac;
    }

    /**
     * 
     * {@linkplain #addressMac}
     * @param addressMac the value for itg_login_user.address_mac
     */
    public void setAddressMac(String addressMac) {
        this.addressMac = addressMac;
    }

    /**
     * 
     * {@linkplain #checkIp}
     *
     * @return the value of itg_login_user.check_ip
     */
    public Integer getCheckIp() {
        return checkIp;
    }

    /**
     * 
     * {@linkplain #checkIp}
     * @param checkIp the value for itg_login_user.check_ip
     */
    public void setCheckIp(Integer checkIp) {
        this.checkIp = checkIp;
    }

    /**
     * 
     * {@linkplain #addressIp}
     *
     * @return the value of itg_login_user.address_ip
     */
    public String getAddressIp() {
        return addressIp;
    }

    /**
     * 
     * {@linkplain #addressIp}
     * @param addressIp the value for itg_login_user.address_ip
     */
    public void setAddressIp(String addressIp) {
        this.addressIp = addressIp;
    }

    /**
     * 
     * {@linkplain #mobileNo}
     *
     * @return the value of itg_login_user.mobile_no
     */
    public String getMobileNo() {
        return mobileNo;
    }

    /**
     * 
     * {@linkplain #mobileNo}
     * @param mobileNo the value for itg_login_user.mobile_no
     */
    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    /**
     * 
     * {@linkplain #email}
     *
     * @return the value of itg_login_user.email
     */
    public String getEmail() {
        return email;
    }

    /**
     * 
     * {@linkplain #email}
     * @param email the value for itg_login_user.email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of itg_login_user.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for itg_login_user.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of itg_login_user.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for itg_login_user.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of itg_login_user.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for itg_login_user.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of itg_login_user.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for itg_login_user.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of itg_login_user.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for itg_login_user.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
    
    
}