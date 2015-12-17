package com.hc.scm.uc.service;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.uc.dao.model.RoleUserModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.jw
 * @date:  2015-03-06 16:45:38
 * @version 1.0.0
 */
public interface ItgRoleUserService extends BaseCrudService{
	public  List<RoleUserModel> getUserListByRoleId(SimplePage page, String orderByField,
			String orderBy,Map<String,Object> params) throws ServiceException;

	public List<RoleUserModel> getNoExistUserListByRoleId(SimplePage page, String orderByField,
			String orderBy,Map<String,Object> params)throws ServiceException;

}
