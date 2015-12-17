package com.hc.scm.uc.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.uc.dao.dal.ItgRoleUserDao;
import com.hc.scm.uc.dao.model.RoleUserModel;
import com.hc.scm.uc.service.ItgRoleUserService;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.jw
 * @date:  2015-03-06 16:45:38
 * @version 1.0.0
 */
@Service("itgRoleUserService")
public class ItgRoleUserServiceImpl extends BaseCrudServiceImpl implements ItgRoleUserService{

	@Resource
	private ItgRoleUserDao itgRoleUserDao;

	@Override
	public BaseCrudDao init() {
		return itgRoleUserDao;
	}

	@Override
	public List<RoleUserModel> getUserListByRoleId(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params)
					throws ServiceException {
		try {
			return itgRoleUserDao.findByPageForExistRole(page, orderByField, orderBy, params);
		} catch (ServiceException e) {
			throw e;
		}
	}

	@Override
	public List<RoleUserModel> getNoExistUserListByRoleId(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params)
					throws ServiceException {
		try {
			return itgRoleUserDao.findByPageForNoExistRole(page, orderByField, orderBy, params);
		} catch (ServiceException e) {
			throw e;
		}
	}

}
