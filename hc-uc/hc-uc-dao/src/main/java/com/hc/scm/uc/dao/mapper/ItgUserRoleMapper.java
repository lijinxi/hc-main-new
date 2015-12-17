package com.hc.scm.uc.dao.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.utils.SimplePage;
import com.hc.scm.uc.dao.entity.ItgRoleList;
import com.hc.scm.uc.dao.model.DeptUserModel;
import com.hc.scm.uc.dao.model.LoginUserModel;
import com.hc.scm.uc.dao.model.UserRoleModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-06 16:45:38
 * @version 1.0.0
 */
public interface ItgUserRoleMapper extends BaseCrudMapper {

	List<UserRoleModel> selectByPageForExistRole(@Param("page") SimplePage page,@Param("orderByField") String orderByField,@Param("orderBy") String orderBy,@Param("params")Map<String,Object> params);

	List<UserRoleModel> selectByPageForNoExistRole(@Param("page") SimplePage page,@Param("orderByField") String orderByField,@Param("orderBy") String orderBy,@Param("params")Map<String,Object> params);
	
	List<DeptUserModel> selectDeptUser();

	List<LoginUserModel> selectUserByParDeptNo(int deptNo);
}