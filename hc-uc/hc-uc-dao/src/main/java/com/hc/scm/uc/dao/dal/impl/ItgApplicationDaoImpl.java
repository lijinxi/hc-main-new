package com.hc.scm.uc.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.uc.dao.dal.ItgApplicationDao;
import com.hc.scm.uc.dao.mapper.ItgApplicationMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     wugy
 * @date:  2015-03-16 15:47:22
 * @version 1.0.0
 */
@Repository("itgApplicationDao")
class ItgApplicationDaoImpl extends BaseCrudDaoImpl implements ItgApplicationDao {
    @Resource
    private ItgApplicationMapper itgApplicationMapper;

    @Override
    public BaseCrudMapper init() {
        return itgApplicationMapper;
    }
}