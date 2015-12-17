package com.hc.scm.uc.dao.dal.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.uc.dao.dal.ItgRoleRightDao;
import com.hc.scm.uc.dao.mapper.ItgRoleRightMapper;
import com.hc.scm.uc.dao.model.RoleRightModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-17 09:57:12
 * @version 1.0.0
 */
@Service("itgRoleRightDao")
class ItgRoleRightDaoImpl extends BaseCrudDaoImpl implements ItgRoleRightDao {
    @Resource
    private ItgRoleRightMapper itgRoleRightMapper;

    @Override
    public BaseCrudMapper init() {
        return itgRoleRightMapper;
    }

	@Override
	public List<RoleRightModel> findByPageForRoleRightModels(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params)
			throws DaoException {
		try {
			return itgRoleRightMapper.selectRoleRightModels(page, orderByField, orderBy, params);
		} catch (Exception e) {
			throw new DaoException("",e);
		}
	}

	@Override
	public List<RoleRightModel> findByPageForNoRoleRightModels(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params) throws DaoException{
		try {
			return itgRoleRightMapper.selectNoRoleRightModels(page, orderByField, orderBy, params);
		} catch (Exception e) {
			throw new DaoException("",e);
		}
	}

	@Override
	public List<RoleRightModel> findByPageForHasRoleRightModels(
			SimplePage page, String orderByField, String orderBy,
			Map<String, Object> params) throws DaoException{
		try {
			return itgRoleRightMapper.selectHasRoleRightModels(page, orderByField, orderBy, params);
		} catch (Exception e) {
			throw new DaoException("",e);
		}
	}
}