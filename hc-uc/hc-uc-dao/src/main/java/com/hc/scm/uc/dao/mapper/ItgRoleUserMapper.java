package com.hc.scm.uc.dao.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.uc.dao.model.RoleUserModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.jw
 * @date:  2015-03-17 09:45:38
 * @version 1.0.0
 */

public interface ItgRoleUserMapper extends BaseCrudMapper{
	List<RoleUserModel> selectByPageForExistUser(@Param("page") SimplePage page,@Param("orderByField") String orderByField,@Param("orderBy") String orderBy,@Param("params")Map<String,Object> params);

	List<RoleUserModel> selectByPageForNoExistUser(@Param("page") SimplePage page,@Param("orderByField") String orderByField,@Param("orderBy") String orderBy,@Param("params")Map<String,Object> params);
	
}
