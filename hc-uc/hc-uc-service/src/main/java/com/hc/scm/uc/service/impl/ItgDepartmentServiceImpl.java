package com.hc.scm.uc.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.uc.dao.dal.ItgDepartmentDao;
import com.hc.scm.uc.service.ItgDepartmentService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-11 14:33:59
 * @version 1.0.0
 */
@Service("itgDepartmentService")
class ItgDepartmentServiceImpl extends BaseCrudServiceImpl implements ItgDepartmentService {
    @Resource
    private ItgDepartmentDao itgDepartmentDao;

    @Override
    public BaseCrudDao init() {
        return itgDepartmentDao;
    }
}