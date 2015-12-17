package com.hc.scm.uc.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.uc.dao.entity.ItgDictDtl;
import com.hc.scm.uc.service.ItgDictDtlService;
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
@RequestMapping("/itg_dict_dtl")
public class ItgDictDtlController extends BaseCrudController<ItgDictDtl> {
    @Resource
    private ItgDictDtlService itgDictDtlService;

    @Override
    public BaseCrudService init() {
        return itgDictDtlService;
    }
}