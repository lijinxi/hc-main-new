package com.hc.scm.uc.dao.dal;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.uc.dao.model.RoleRightModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-17 09:57:12
 * @version 1.0.0
 */
public interface ItgRoleRightDao extends BaseCrudDao {
	
	List<RoleRightModel> findByPageForRoleRightModels(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params)throws DaoException;

	List<RoleRightModel> findByPageForNoRoleRightModels(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params)throws DaoException;

	List<RoleRightModel> findByPageForHasRoleRightModels(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params)throws DaoException;
}