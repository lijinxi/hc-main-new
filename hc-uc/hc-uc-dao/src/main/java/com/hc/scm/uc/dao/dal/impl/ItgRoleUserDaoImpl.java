package com.hc.scm.uc.dao.dal.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.uc.dao.dal.ItgRoleUserDao;
import com.hc.scm.uc.dao.entity.ItgRoleList;
import com.hc.scm.uc.dao.mapper.ItgRoleUserMapper;
import com.hc.scm.uc.dao.model.RoleUserModel;
import com.hc.scm.uc.dao.model.UserRoleModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.jw
 * @date:  2015-03-06 16:45:38
 * @version 1.0.0
 */
@Repository("itgRoleUserDao")
public class ItgRoleUserDaoImpl extends BaseCrudDaoImpl implements ItgRoleUserDao{

	@Resource
	ItgRoleUserMapper itgRoleUserMapper;
	
	@Override
	public BaseCrudMapper init() {
		return itgRoleUserMapper;
	}
	
	@Override
	public List<RoleUserModel> findByPageForExistRole(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params)
			throws DaoException {
		return itgRoleUserMapper.selectByPageForExistUser(page, orderByField, orderBy, params);
	}

	@Override
	public List<RoleUserModel> findByPageForNoExistRole(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params)
			throws DaoException {
		return itgRoleUserMapper.selectByPageForNoExistUser(page, orderByField, orderBy, params);
	}

}
