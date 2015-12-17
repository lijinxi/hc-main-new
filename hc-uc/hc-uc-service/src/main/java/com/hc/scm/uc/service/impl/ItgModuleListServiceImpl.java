package com.hc.scm.uc.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.uc.dao.dal.ItgModuleListDao;
import com.hc.scm.uc.service.ItgModuleListService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-06 13:42:42
 * @version 1.0.0
 */
@Service("itgModuleListService")
class ItgModuleListServiceImpl extends BaseCrudServiceImpl implements ItgModuleListService {
    @Resource
    private ItgModuleListDao itgModuleListDao;

    @Override
    public BaseCrudDao init() {
        return itgModuleListDao;
    }
}