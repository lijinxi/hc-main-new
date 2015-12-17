package com.hc.scm.uc.dao.model;

public class DepartmentModel {
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
     * 父部门编号
     */
    private Integer parentDeptNo;

	public Integer getDeptNo() {
		return deptNo;
	}

	public void setDeptNo(Integer deptNo) {
		this.deptNo = deptNo;
	}

	public String getDeptCode() {
		return deptCode;
	}

	public void setDeptCode(String deptCode) {
		this.deptCode = deptCode;
	}

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	public Integer getParentDeptNo() {
		return parentDeptNo;
	}

	public void setParentDeptNo(Integer parentDeptNo) {
		this.parentDeptNo = parentDeptNo;
	}
    
    
}
