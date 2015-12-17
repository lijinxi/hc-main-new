package com.hc.scm.uc.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.uc.dao.entity.ItgDepartment;
import com.hc.scm.uc.service.ItgDepartmentService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-11 14:33:59
 * @version 1.0.0
 */
@Controller
@RequestMapping("/itg_department")
public class ItgDepartmentController extends BaseCrudController<ItgDepartment> {
    @Resource
    private ItgDepartmentService itgDepartmentService;

    @Override
    public BaseCrudService init() {
        return itgDepartmentService;
    }
}