package com.hc.scm.uc.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.uc.dao.dal.ItgRoleRightDao;
import com.hc.scm.uc.dao.model.RoleRightModel;
import com.hc.scm.uc.service.ItgRoleRightService;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-17 09:57:12
 * @version 1.0.0
 */
@Service("itgRoleRightService")
class ItgRoleRightServiceImpl extends BaseCrudServiceImpl implements ItgRoleRightService {
    @Resource
    private ItgRoleRightDao itgRoleRightDao;

    @Override
    public BaseCrudDao init() {
        return itgRoleRightDao;
    }

	@Override
	public List<RoleRightModel> getRoleRightModels(SimplePage page,
			String orderByField, String orderBy, Map<String, Object> params)
			throws ServiceException {
		try {
			if(params != null){
				if(params.containsKey("enableFlag")){
					if(params.get("enableFlag").equals("0"))
						return itgRoleRightDao.findByPageForNoRoleRightModels(page, orderByField, orderBy, params);
					else
						return itgRoleRightDao.findByPageForHasRoleRightModels(page, orderByField, orderBy, params);
				}
				return itgRoleRightDao.findByPageForRoleRightModels(page, orderByField, orderBy, params);
			}
			else
				return null;
		} catch (Exception e) {
			throw new ServiceException("",e);
		}
	}
}