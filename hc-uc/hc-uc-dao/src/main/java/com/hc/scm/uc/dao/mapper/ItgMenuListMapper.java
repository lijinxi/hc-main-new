package com.hc.scm.uc.dao.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.uc.dao.model.UserMenuTreeModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-03-06 15:42:11
 * @version 1.0.0
 */
public interface ItgMenuListMapper extends BaseCrudMapper {
	public List<UserMenuTreeModel>  selectUserModuleList(@Param("projectCode") String projectCode, @Param("userId") int userId);
	public List<UserMenuTreeModel>  selectAllMenuList(@Param("projectCode") String projectCode);
	public List<UserMenuTreeModel>  selectUserMenuListBySQL(@Param("projectCode") String projectCode, @Param("userId") int userId);
}