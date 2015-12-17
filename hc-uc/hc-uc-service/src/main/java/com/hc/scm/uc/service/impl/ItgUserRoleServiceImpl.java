package com.hc.scm.uc.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.TreeModel;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.uc.dao.dal.ItgDepartmentDao;
import com.hc.scm.uc.dao.dal.ItgUserRoleDao;
import com.hc.scm.uc.dao.model.DepartmentModel;
import com.hc.scm.uc.dao.model.DeptUserModel;
import com.hc.scm.uc.dao.model.LoginUserModel;
import com.hc.scm.uc.dao.model.UserRoleModel;
import com.hc.scm.uc.service.ItgUserRoleService;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-06 16:45:38
 * @version 1.0.0
 */
@Service("itgUserRoleService")
class ItgUserRoleServiceImpl extends BaseCrudServiceImpl implements ItgUserRoleService {
	@Resource
	private ItgUserRoleDao itgUserRoleDao;
	@Resource
	private ItgDepartmentDao itgDepartmentDao;

	@Override
	public BaseCrudDao init() {
		return itgUserRoleDao;
	}

	@Override
	public  List<UserRoleModel> getRoleListByUserId(SimplePage page, String orderByField,
			String orderBy,Map<String,Object> params) throws ServiceException {
		try {
			return itgUserRoleDao.findByPageForExistRole(page, orderByField, orderBy, params);
		} catch (ServiceException e) {
			throw e;
		}
	}

	@Override
	public List<UserRoleModel> getNoExistRoleListByUserId(SimplePage page, String orderByField,
			String orderBy,Map<String,Object> params) throws ServiceException{
		try {
			return itgUserRoleDao.findByPageForNoExistRole(page, orderByField, orderBy, params);
		} catch (ServiceException e) {
			throw e;
		}
	}

	@Override
	public List<TreeModel> getDeptTree(int deptNo) throws ServiceException {
		//获取部门下的用户
		List<DeptUserModel> deptUserList = itgUserRoleDao.findDeptUser();
		//转换为用户叶子节点
		Map<Integer, List<TreeModel>> userNodesMap = this.convertUserToTree(deptUserList);
		//构建部门树
		List<TreeModel> deptTree = this.buildDeptTree(deptNo,userNodesMap);
		return deptTree;
	}

	private List<TreeModel> buildDeptTree(int deptNo,Map<Integer, List<TreeModel>> userNodesMap) {
		//获取根部门 ，其父部门编号为0
		List<DepartmentModel> deptTreeData = itgDepartmentDao.getDeptByParDeptNo2(deptNo);
		if(deptTreeData != null && deptTreeData.size() > 0){
			List<TreeModel> tree = new ArrayList<TreeModel>();
			for(DepartmentModel model : deptTreeData){
				TreeModel node = this.innerbuildDeptTree(model,userNodesMap);
				tree.add(node);
			}
			return tree;
		}
		return null;
	}

	private TreeModel innerbuildDeptTree(DepartmentModel model,Map<Integer, List<TreeModel>> userNodesMap) {
		if(model != null){
			TreeModel node = new TreeModel();
			int deptNo = model.getDeptNo();
			node.setId(String.valueOf(deptNo));
			node.setParentId(String.valueOf(model.getParentDeptNo()));
			node.setText(model.getDeptName());
			node.setLeaf("false");

			//判断该部门下是否有用户userNodesMap.containsKey(deptNo),有用户则将用户数组userNodesMap.get(deptNo)追加到部门树节点node上
			if(userNodesMap.containsKey(deptNo)){
				if(node.getChildren() !=null)
					node.getChildren().addAll(userNodesMap.get(deptNo));
				else
					node.setChildren(userNodesMap.get(deptNo));
			}

			//判断部门下是否有子部门
			List<DepartmentModel> childTree = itgDepartmentDao.getDeptByParDeptNo2(deptNo);
			if(childTree != null && childTree.size() > 0){
				List<TreeModel> childNode = new ArrayList<TreeModel>();
				for(DepartmentModel temp : childTree){
					childNode.add(this.innerbuildDeptTree(temp,userNodesMap));
				}
				if(node.getChildren() !=null)
					node.getChildren().addAll(childNode);
				else{
					node.setChildren(childNode);
				}
			}
			else if(node.getChildren() == null){
				node.setChildren(new ArrayList<TreeModel>());
			}
			return node;
		}
		return null;
	}

	//将用户信息构建成树的叶子节点
	private Map<Integer, List<TreeModel>> convertUserToTree(List<DeptUserModel> deptUserList) {
		Map<Integer,List<TreeModel>> map = new HashMap<Integer,List<TreeModel>>();
		if(deptUserList != null && deptUserList.size() > 0){
			for(DeptUserModel deptUser : deptUserList){
				//begin : 构建用户树节点 leafs
				List<TreeModel> leafs = new ArrayList<TreeModel>();
				if(deptUser.getUsers() != null && deptUser.getUsers().size() > 0){
					for(LoginUserModel user : deptUser.getUsers()){
						TreeModel node = new TreeModel();
						node.setChildren(null);
						node.setId("u" + String.valueOf(user.getUserId()));
						node.setLeaf("true");
						node.setParentId(String.valueOf(deptUser.getDeptNo()));
						node.setText(user.getUserCode()+" "+user.getUserName());
						leafs.add(node);
					}
				}
				else
					leafs = null;
				//end : 构建用户树节点
				map.put(deptUser.getDeptNo(), leafs);
			}
			return map;
		}
		return null;
	}

	@Override
	public List<TreeModel> getNodeByDeptNo(int deptNo) throws ServiceException {
		List<LoginUserModel> usersData = itgUserRoleDao.getUserByParDeptNo(deptNo);
		List<DepartmentModel> deptsData = itgDepartmentDao.getDeptByParDeptNo2(deptNo);
		
		List<TreeModel> userNodes = null;
		List<TreeModel> deptNodes = null;
		if(usersData != null && usersData.size() > 0)
			userNodes = this.convertUserModelToTreeModel(usersData,deptNo);
		if(deptsData != null && deptsData.size() > 0)
			deptNodes = this.convertDeptTreeModelToTreeModel(deptsData);
		
		List<TreeModel> nodes = new ArrayList<TreeModel>();
		if(userNodes != null)
			nodes.addAll(userNodes);
		if(deptNodes != null)
			nodes.addAll(deptNodes);
		
		return nodes;
	}

	private List<TreeModel> convertUserModelToTreeModel(
			List<LoginUserModel> usersData,int deptNo) {
		List<TreeModel> nodes = new ArrayList<TreeModel>();
		
		for(LoginUserModel model : usersData){
			TreeModel node = new TreeModel();
			node.setId("u" + String.valueOf(model.getUserId()));
			node.setLeaf("true");
			node.setParentId(String.valueOf(deptNo));
			node.setText(model.getUserCode()+" "+model.getUserName());
			nodes.add(node);
		}
		
		return nodes;
	}

	private List<TreeModel> convertDeptTreeModelToTreeModel(
			List<DepartmentModel> deptsData) {
		List<TreeModel> nodes = new ArrayList<TreeModel>();
		
		for(DepartmentModel model : deptsData){
			TreeModel node = new TreeModel();
			//node.setExpanded("false");
			node.setId(String.valueOf(model.getDeptNo()));
			//node.setLeaf("true");
			node.setParentId(String.valueOf(model.getParentDeptNo()));
			node.setText(model.getDeptName());
			nodes.add(node);
		}
		return nodes;
	}



}