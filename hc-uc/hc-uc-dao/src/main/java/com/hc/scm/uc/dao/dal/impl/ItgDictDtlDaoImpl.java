package com.hc.scm.uc.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.uc.dao.dal.ItgDictDtlDao;
import com.hc.scm.uc.dao.mapper.ItgDictDtlMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     peng.hz
 * @date:  2015-03-19 10:49:45
 * @version 1.0.0
 */
@Repository("itgDictDtlDao")
class ItgDictDtlDaoImpl extends BaseCrudDaoImpl implements ItgDictDtlDao {
    @Resource
    private ItgDictDtlMapper itgDictDtlMapper;

    @Override
    public BaseCrudMapper init() {
        return itgDictDtlMapper;
    }
}