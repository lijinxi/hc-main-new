package com.hc.scm.uc.dao.dal;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.uc.dao.model.DeptUserModel;
import com.hc.scm.uc.dao.model.LoginUserModel;
import com.hc.scm.uc.dao.model.UserRoleModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-06 16:45:38
 * @version 1.0.0
 */
public interface ItgUserRoleDao extends BaseCrudDao {

	List<UserRoleModel> findByPageForExistRole(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params)throws DaoException;

	List<UserRoleModel> findByPageForNoExistRole(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params)throws DaoException;
	
	List<DeptUserModel> findDeptUser() throws DaoException;

	List<LoginUserModel> getUserByParDeptNo(int deptNo) throws DaoException;
}