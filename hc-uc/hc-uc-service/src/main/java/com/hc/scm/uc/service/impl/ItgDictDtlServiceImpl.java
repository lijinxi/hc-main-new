package com.hc.scm.uc.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.uc.dao.dal.ItgDictDtlDao;
import com.hc.scm.uc.service.ItgDictDtlService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     peng.hz
 * @date:  2015-03-19 10:49:45
 * @version 1.0.0
 */
@Service("itgDictDtlService")
class ItgDictDtlServiceImpl extends BaseCrudServiceImpl implements ItgDictDtlService {
    @Resource
    private ItgDictDtlDao itgDictDtlDao;

    @Override
    public BaseCrudDao init() {
        return itgDictDtlDao;
    }
}