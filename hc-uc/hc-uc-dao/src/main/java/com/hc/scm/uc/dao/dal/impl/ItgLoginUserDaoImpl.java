package com.hc.scm.uc.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.uc.dao.dal.ItgLoginUserDao;
import com.hc.scm.uc.dao.mapper.ItgLoginUserMapper;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-07 13:30:53
 * @version 1.0.0
 */
@Repository("itgLoginUserDao")
class ItgLoginUserDaoImpl extends BaseCrudDaoImpl implements ItgLoginUserDao {
    @Resource
    private ItgLoginUserMapper itgLoginUserMapper;

    @Override
    public BaseCrudMapper init() {
        return itgLoginUserMapper;
    }
}