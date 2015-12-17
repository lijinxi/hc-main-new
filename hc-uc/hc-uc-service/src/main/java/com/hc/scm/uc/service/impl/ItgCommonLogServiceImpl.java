package com.hc.scm.uc.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.uc.dao.dal.ItgCommonLogDao;
import com.hc.scm.uc.dao.entity.ItgCommonLog;
import com.hc.scm.uc.service.ItgCommonLogService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-25 08:39:49
 * @version 1.0.0
 */
@Service("itgCommonLogService")
class ItgCommonLogServiceImpl extends BaseCrudServiceImpl implements ItgCommonLogService {
    @Resource
    private ItgCommonLogDao itgCommonLogDao;

    @Override
    public BaseCrudDao init() {
        return itgCommonLogDao;
    }

	@Override
	public int addLog(ItgCommonLog log) throws ServiceException {
		return itgCommonLogDao.addLog(log);
	}
}