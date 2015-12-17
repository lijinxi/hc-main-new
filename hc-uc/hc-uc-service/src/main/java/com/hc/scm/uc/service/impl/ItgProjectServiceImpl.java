package com.hc.scm.uc.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.uc.dao.dal.ItgProjectDao;
import com.hc.scm.uc.service.ItgProjectService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-11 10:27:50
 * @version 1.0.0
 */
@Service("itgProjectService")
class ItgProjectServiceImpl extends BaseCrudServiceImpl implements ItgProjectService {
    @Resource
    private ItgProjectDao itgProjectDao;

    @Override
    public BaseCrudDao init() {
        return itgProjectDao;
    }
}