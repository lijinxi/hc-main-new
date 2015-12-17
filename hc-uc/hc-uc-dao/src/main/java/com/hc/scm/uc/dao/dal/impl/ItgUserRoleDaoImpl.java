package com.hc.scm.uc.dao.dal.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.uc.dao.dal.ItgUserRoleDao;
import com.hc.scm.uc.dao.entity.ItgRoleList;
import com.hc.scm.uc.dao.mapper.ItgUserRoleMapper;
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
@Repository("itgUserRoleDao")
class ItgUserRoleDaoImpl extends BaseCrudDaoImpl implements ItgUserRoleDao {
    @Resource
    private ItgUserRoleMapper itgUserRoleMapper;

    @Override
    public BaseCrudMapper init() {
        return itgUserRoleMapper;
    }

	@Override
	public List<UserRoleModel> findByPageForExistRole(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params)
			throws DaoException {
		return itgUserRoleMapper.selectByPageForExistRole(page, orderByField, orderBy, params);
	}

	@Override
	public List<UserRoleModel> findByPageForNoExistRole(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params)
			throws DaoException {
		return itgUserRoleMapper.selectByPageForNoExistRole(page, orderByField, orderBy, params);
	}

	@Override
	public List<DeptUserModel> findDeptUser() throws DaoException {
		return itgUserRoleMapper.selectDeptUser();
	}

	@Override
	public List<LoginUserModel> getUserByParDeptNo(int deptNo)
			throws DaoException {
		return itgUserRoleMapper.selectUserByParDeptNo(deptNo);
	}
}