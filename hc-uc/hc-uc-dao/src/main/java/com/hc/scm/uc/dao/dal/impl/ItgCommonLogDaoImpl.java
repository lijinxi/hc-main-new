package com.hc.scm.uc.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.uc.dao.dal.ItgCommonLogDao;
import com.hc.scm.uc.dao.entity.ItgCommonLog;
import com.hc.scm.uc.dao.mapper.ItgCommonLogMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-25 08:39:49
 * @version 1.0.0
 */
@Repository("itgCommonLogDao")
class ItgCommonLogDaoImpl extends BaseCrudDaoImpl implements ItgCommonLogDao {
    @Resource
    private ItgCommonLogMapper itgCommonLogMapper;

    @Override
    public BaseCrudMapper init() {
        return itgCommonLogMapper;
    }

	@Override
	public int addLog(ItgCommonLog log) throws DaoException {
		return itgCommonLogMapper.insertSelective(log);
	}
}