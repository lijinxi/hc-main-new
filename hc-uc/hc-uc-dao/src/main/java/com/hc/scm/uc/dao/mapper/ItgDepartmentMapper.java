package com.hc.scm.uc.dao.mapper;

import java.util.List;

import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.uc.dao.model.DepartmentModel;
import com.hc.scm.uc.dao.model.DepartmentTreeModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-11 14:33:59
 * @version 1.0.0
 */
public interface ItgDepartmentMapper extends BaseCrudMapper {
	public List<DepartmentTreeModel> selectDeptbyParDeptNo(int deptNo) throws DaoException;

	public List<DepartmentModel> selectDeptByParDeptNo2(int deptNo) throws DaoException;
}