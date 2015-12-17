package com.hc.scm.uc.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.uc.dao.dal.ItgRightListDao;
import com.hc.scm.uc.dao.mapper.ItgRightListMapper;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-05 14:06:55
 * @version 1.0.0
 */
@Repository("itgRightListDao")
class ItgRightListDaoImpl extends BaseCrudDaoImpl implements ItgRightListDao {
    @Resource
    private ItgRightListMapper itgRightListMapper;

    @Override
    public BaseCrudMapper init() {
        return itgRightListMapper;
    }
}