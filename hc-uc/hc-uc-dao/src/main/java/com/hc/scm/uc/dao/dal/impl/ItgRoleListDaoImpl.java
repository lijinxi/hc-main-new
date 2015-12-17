package com.hc.scm.uc.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.uc.dao.dal.ItgRoleListDao;
import com.hc.scm.uc.dao.mapper.ItgRoleListMapper;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-09 15:22:57
 * @version 1.0.0
 */
@Repository("itgRoleListDao")
class ItgRoleListDaoImpl extends BaseCrudDaoImpl implements ItgRoleListDao {
    @Resource
    private ItgRoleListMapper itgRoleListMapper;

    @Override
    public BaseCrudMapper init() {
        return itgRoleListMapper;
    }
}