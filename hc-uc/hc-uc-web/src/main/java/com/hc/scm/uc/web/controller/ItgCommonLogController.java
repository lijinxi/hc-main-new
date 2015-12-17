package com.hc.scm.uc.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.uc.dao.entity.ItgCommonLog;
import com.hc.scm.uc.service.ItgCommonLogService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-04-01 14:53:24
 * @version 1.0.0
 */
@Controller
@RequestMapping("/itg_common_log")
public class ItgCommonLogController extends BaseCrudController<ItgCommonLog> {
    @Resource
    private ItgCommonLogService itgCommonLogService;

    @Override
    public BaseCrudService init() {
        return itgCommonLogService;
    }
}