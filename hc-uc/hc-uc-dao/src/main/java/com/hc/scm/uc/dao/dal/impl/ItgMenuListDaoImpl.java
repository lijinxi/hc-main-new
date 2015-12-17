package com.hc.scm.uc.dao.dal.impl;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.uc.dao.dal.ItgMenuListDao;
import com.hc.scm.uc.dao.mapper.ItgMenuListMapper;
import com.hc.scm.uc.dao.model.UserMenuTreeModel;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-03-06 15:42:11
 * @version 1.0.0
 */
@Repository("itgMenuListDao")
class ItgMenuListDaoImpl extends BaseCrudDaoImpl implements ItgMenuListDao {
    @Resource
    private ItgMenuListMapper itgMenuListMapper;

    @Override
    public BaseCrudMapper init() {
        return itgMenuListMapper;
    }

	@Override
	public List<UserMenuTreeModel> selectUserModuleList(String projectCode,
			int userId) throws DaoException{
		return itgMenuListMapper.selectUserModuleList(projectCode, userId);
	}

	@Override
	public List<UserMenuTreeModel> selectAllMenuList(String projectCode)
			throws DaoException {
		return itgMenuListMapper.selectAllMenuList(projectCode);
	}

	@Override
	public List<UserMenuTreeModel> selectUserMenuListBySQL(String projectCode,
			int userId) throws DaoException {
		return itgMenuListMapper.selectUserMenuListBySQL(projectCode, userId);
	}

}