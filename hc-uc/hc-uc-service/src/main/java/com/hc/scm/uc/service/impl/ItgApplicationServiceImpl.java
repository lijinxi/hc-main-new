package com.hc.scm.uc.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.uc.dao.dal.ItgApplicationDao;
import com.hc.scm.uc.dao.entity.ItgApplication;
import com.hc.scm.uc.service.ItgApplicationService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-05 09:59:34
 * @version 1.0.0
 */
@Service("itgApplicationService")
class ItgApplicationServiceImpl extends BaseCrudServiceImpl implements ItgApplicationService {
    @Resource
    private ItgApplicationDao itgApplicationDao;

    @Override
    public BaseCrudDao init() {
        return itgApplicationDao;
    }
    
    public void myAopTest(String aaa) {
        System.out.println("myAopTest");
    }
    
    public <ModelType> int add(ItgApplication modelType) throws ServiceException {
		try {
			System.out.println("add");
		} catch (Exception e) {
			throw new ServiceException("",e);
		}
		return 0;
	}
}