package com.hc.scm.uc.dao.model;

import java.util.List;

import com.hc.scm.uc.dao.entity.ItgLoginUser;

public class DeptUserModel {
	
	private int deptNo;
	private List<LoginUserModel> users;
	
	public int getDeptNo() {
		return deptNo;
	}
	public void setDeptNo(int deptNo) {
		this.deptNo = deptNo;
	}
	public List<LoginUserModel> getUsers() {
		return users;
	}
	public void setUsers(List<LoginUserModel> users) {
		this.users = users;
	}
	
	
	
	
	
	

}
