package com.hc.scm.uc.dao.dal;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.uc.dao.model.UserMenuTreeModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-03-06 15:42:11
 * @version 1.0.0
 */
public interface ItgMenuListDao extends BaseCrudDao {
	public List<UserMenuTreeModel>  selectUserModuleList(String projectCode, int userId) throws DaoException;
	public List<UserMenuTreeModel>  selectAllMenuList(String projectCode) throws DaoException;
	public List<UserMenuTreeModel>  selectUserMenuListBySQL(String projectCode, int userId) throws DaoException;
}