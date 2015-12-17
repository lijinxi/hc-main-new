package com.hc.scm.uc.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.uc.dao.entity.ItgApplication;
import com.hc.scm.uc.service.ItgApplicationService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-05 09:59:34
 * @version 1.0.0
 */
@Controller
@RequestMapping("/itg_application")
public class ItgApplicationController extends BaseCrudController<ItgApplication> {
    @Resource
    private ItgApplicationService itgApplicationService;

    @Override
    public BaseCrudService init() {
        return itgApplicationService;
    }
}