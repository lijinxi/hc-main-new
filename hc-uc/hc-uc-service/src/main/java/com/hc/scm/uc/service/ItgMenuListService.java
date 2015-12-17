package com.hc.scm.uc.service;

import java.util.List;




import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.uc.dao.model.UserMenuTreeModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-06 15:42:11
 * @version 1.0.0
 */
public interface ItgMenuListService extends BaseCrudService {
	
	/**
	 * 取用户菜单
	 * @param loginName
	 * @param projectCode
	 * @param userId
	 * @return
	 * @throws ServiceException
	 */
	public List<UserMenuTreeModel>  getUserMenuList(String loginName,String projectCode, int userId) throws ServiceException;
}