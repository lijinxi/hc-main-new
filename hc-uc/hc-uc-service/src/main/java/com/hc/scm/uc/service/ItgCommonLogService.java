package com.hc.scm.uc.service;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.uc.dao.entity.ItgCommonLog;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-25 08:39:49
 * @version 1.0.0
 */
public interface ItgCommonLogService extends BaseCrudService {
	
	/**
	 * 保存增,删,改操作的日志
	 * @param log
	 * @return
	 * @throws ServiceException
	 */
	int addLog(ItgCommonLog log) throws ServiceException;
}