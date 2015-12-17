package com.hc.scm.uc.service;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
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
public interface ItgRoleRightService extends BaseCrudService {
	public  List<RoleRightModel> getRoleRightModels(SimplePage page, String orderByField,
			String orderBy,Map<String,Object> params) throws ServiceException;

}