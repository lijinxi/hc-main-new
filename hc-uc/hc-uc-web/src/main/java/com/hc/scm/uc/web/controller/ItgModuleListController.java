package com.hc.scm.uc.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.uc.dao.entity.ItgModuleList;
import com.hc.scm.uc.service.ItgModuleListService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-06 13:42:42
 * @version 1.0.0
 */
@Controller
@RequestMapping("/itg_module_list")
public class ItgModuleListController extends BaseCrudController<ItgModuleList> {
    @Resource
    private ItgModuleListService itgModuleListService;

    @Override
    public BaseCrudService init() {
        return itgModuleListService;
    }
}