package com.hc.scm.uc.dao.dal.impl;

import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.uc.dao.dal.ItgDepartmentDao;
import com.hc.scm.uc.dao.mapper.ItgDepartmentMapper;
import com.hc.scm.uc.dao.model.DepartmentModel;
import com.hc.scm.uc.dao.model.DepartmentTreeModel;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-11 14:33:59
 * @version 1.0.0
 */
@Repository("itgDepartmentDao")
class ItgDepartmentDaoImpl extends BaseCrudDaoImpl implements ItgDepartmentDao {
    @Resource
    private ItgDepartmentMapper itgDepartmentMapper;

    @Override
    public BaseCrudMapper init() {
        return itgDepartmentMapper;
    }

	@Override
	public List<DepartmentTreeModel> getDeptByParDeptNo(int deptNo)
			throws DaoException {
		return itgDepartmentMapper.selectDeptbyParDeptNo(deptNo);
	}

	@Override
	public List<DepartmentModel> getDeptByParDeptNo2(int deptNo)
			throws DaoException {
		return itgDepartmentMapper.selectDeptByParDeptNo2(deptNo);
	}
}