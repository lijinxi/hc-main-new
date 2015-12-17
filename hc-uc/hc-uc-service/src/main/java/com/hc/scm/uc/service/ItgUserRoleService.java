package com.hc.scm.uc.service;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.TreeModel;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.uc.dao.model.UserRoleModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-06 16:45:38
 * @version 1.0.0
 */
public interface ItgUserRoleService extends BaseCrudService {
	public  List<UserRoleModel> getRoleListByUserId(SimplePage page, String orderByField,
			String orderBy,Map<String,Object> params) throws ServiceException;

	public List<UserRoleModel> getNoExistRoleListByUserId(SimplePage page, String orderByField,
			String orderBy,Map<String,Object> params)throws ServiceException;

	public List<TreeModel> getDeptTree(int deptNo)throws ServiceException;

	public List<TreeModel> getNodeByDeptNo(int deptNo)throws ServiceException;
}