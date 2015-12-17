package com.hc.scm.uc.dao.dal.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.uc.dao.dal.ItgModuleListDao;
import com.hc.scm.uc.dao.mapper.ItgModuleListMapper;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-06 13:42:42
 * @version 1.0.0
 */
@Service("itgModuleListDao")
class ItgModuleListDaoImpl extends BaseCrudDaoImpl implements ItgModuleListDao {
    @Resource
    private ItgModuleListMapper itgModuleListMapper;

    @Override
    public BaseCrudMapper init() {
        return itgModuleListMapper;
    }
}