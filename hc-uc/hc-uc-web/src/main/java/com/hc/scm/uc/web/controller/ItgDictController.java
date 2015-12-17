package com.hc.scm.uc.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.uc.dao.entity.ItgDict;
import com.hc.scm.uc.service.ItgDictService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     peng.hz
 * @date:  2015-03-19 10:49:45
 * @version 1.0.0
 */
@Controller
@RequestMapping("/itg_dict")
public class ItgDictController extends BaseCrudController<ItgDict> {
    @Resource
    private ItgDictService itgDictService;

    @Override
    public BaseCrudService init() {
        return itgDictService;
    }
}