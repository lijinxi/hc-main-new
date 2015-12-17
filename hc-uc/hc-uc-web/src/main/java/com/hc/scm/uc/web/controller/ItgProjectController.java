package com.hc.scm.uc.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.uc.dao.entity.ItgProject;
import com.hc.scm.uc.service.ItgProjectService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-11 10:27:50
 * @version 1.0.0
 */
@Controller
@RequestMapping("/itg_project")
public class ItgProjectController extends BaseCrudController<ItgProject> {
    @Resource
    private ItgProjectService itgProjectService;

    @Override
    public BaseCrudService init() {
        return itgProjectService;
    }
}