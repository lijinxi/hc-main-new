package com.hc.scm.uc.service;

import java.util.List;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.model.ItgUserRoleModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-09 15:22:57
 * @version 1.0.0
 */
public interface ItgRoleListService extends BaseCrudService {
	
    /**
	 * 获取登录用户的权限角色List
	 * @param userId
	 * @return
	 */
    public List<ItgUserRoleModel> getItgRoleListByLoginUser(String userId);

}