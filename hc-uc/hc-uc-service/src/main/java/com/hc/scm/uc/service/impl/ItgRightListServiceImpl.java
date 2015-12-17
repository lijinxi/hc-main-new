package com.hc.scm.uc.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.uc.dao.dal.ItgRightListDao;
import com.hc.scm.uc.service.ItgRightListService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-05 14:06:55
 * @version 1.0.0
 */
@Service("itgRightListService")
class ItgRightListServiceImpl extends BaseCrudServiceImpl implements ItgRightListService {
    @Resource
    private ItgRightListDao itgRightListDao;

    @Override
    public BaseCrudDao init() {
        return itgRightListDao;
    }
}