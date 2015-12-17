package com.hc.scm.uc.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.uc.dao.dal.ItgProjectDao;
import com.hc.scm.uc.dao.mapper.ItgProjectMapper;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-11 10:27:50
 * @version 1.0.0
 */
@Repository("itgProjectDao")
class ItgProjectDaoImpl extends BaseCrudDaoImpl implements ItgProjectDao {
    @Resource
    private ItgProjectMapper itgProjectMapper;

    @Override
    public BaseCrudMapper init() {
        return itgProjectMapper;
    }
}