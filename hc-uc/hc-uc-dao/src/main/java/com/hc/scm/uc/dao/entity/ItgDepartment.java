package com.hc.scm.uc.dao.entity;

import java.util.Date;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-11 14:33:59
 * @version 1.0.0
 */
public class ItgDepartment {
    /**
     * 部门编号
     */
    private Integer deptNo;

    /**
     * 部门编码
     */
    private String deptCode;

    /**
     * 部门名称
     */
    private String deptName;

    /**
     * 启用状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

    /**
     * 父部门编号
     */
    private Integer parentDeptNo;

    /**
     * 检索码(由系统根据规则维护，间隔位为4，提高检索效率)
     */
    private String searchCode;

    /**
     * 级别号(1,2,3,4,5...)
     */
    private Integer levelNo;

    /**
     * 所属公司id
     */
    private Integer companyId;

    /**
     * 部门经理员工id
     */
    private Integer managerEmpId;

    /**
     * 工作地id
     */
    private Integer worksiteId;

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
     * {@linkplain #deptNo}
     *
     * @return the value of itg_department.dept_no
     */
    public Integer getDeptNo() {
        return deptNo;
    }

    /**
     * 
     * {@linkplain #deptNo}
     * @param deptNo the value for itg_department.dept_no
     */
    public void setDeptNo(Integer deptNo) {
        this.deptNo = deptNo;
    }

    /**
     * 
     * {@linkplain #deptCode}
     *
     * @return the value of itg_department.dept_code
     */
    public String getDeptCode() {
        return deptCode;
    }

    /**
     * 
     * {@linkplain #deptCode}
     * @param deptCode the value for itg_department.dept_code
     */
    public void setDeptCode(String deptCode) {
        this.deptCode = deptCode;
    }

    /**
     * 
     * {@linkplain #deptName}
     *
     * @return the value of itg_department.dept_name
     */
    public String getDeptName() {
        return deptName;
    }

    /**
     * 
     * {@linkplain #deptName}
     * @param deptName the value for itg_department.dept_name
     */
    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of itg_department.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for itg_department.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #parentDeptNo}
     *
     * @return the value of itg_department.parent_dept_no
     */
    public Integer getParentDeptNo() {
        return parentDeptNo;
    }

    /**
     * 
     * {@linkplain #parentDeptNo}
     * @param parentDeptNo the value for itg_department.parent_dept_no
     */
    public void setParentDeptNo(Integer parentDeptNo) {
        this.parentDeptNo = parentDeptNo;
    }

    /**
     * 
     * {@linkplain #searchCode}
     *
     * @return the value of itg_department.search_code
     */
    public String getSearchCode() {
        return searchCode;
    }

    /**
     * 
     * {@linkplain #searchCode}
     * @param searchCode the value for itg_department.search_code
     */
    public void setSearchCode(String searchCode) {
        this.searchCode = searchCode;
    }

    /**
     * 
     * {@linkplain #levelNo}
     *
     * @return the value of itg_department.level_no
     */
    public Integer getLevelNo() {
        return levelNo;
    }

    /**
     * 
     * {@linkplain #levelNo}
     * @param levelNo the value for itg_department.level_no
     */
    public void setLevelNo(Integer levelNo) {
        this.levelNo = levelNo;
    }

    /**
     * 
     * {@linkplain #companyId}
     *
     * @return the value of itg_department.company_id
     */
    public Integer getCompanyId() {
        return companyId;
    }

    /**
     * 
     * {@linkplain #companyId}
     * @param companyId the value for itg_department.company_id
     */
    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    /**
     * 
     * {@linkplain #managerEmpId}
     *
     * @return the value of itg_department.manager_emp_id
     */
    public Integer getManagerEmpId() {
        return managerEmpId;
    }

    /**
     * 
     * {@linkplain #managerEmpId}
     * @param managerEmpId the value for itg_department.manager_emp_id
     */
    public void setManagerEmpId(Integer managerEmpId) {
        this.managerEmpId = managerEmpId;
    }

    /**
     * 
     * {@linkplain #worksiteId}
     *
     * @return the value of itg_department.worksite_id
     */
    public Integer getWorksiteId() {
        return worksiteId;
    }

    /**
     * 
     * {@linkplain #worksiteId}
     * @param worksiteId the value for itg_department.worksite_id
     */
    public void setWorksiteId(Integer worksiteId) {
        this.worksiteId = worksiteId;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of itg_department.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for itg_department.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of itg_department.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for itg_department.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of itg_department.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for itg_department.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of itg_department.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for itg_department.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of itg_department.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for itg_department.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of itg_department.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for itg_department.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}