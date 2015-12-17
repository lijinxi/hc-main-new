/**
 * Description: 模块管理Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.ItgModuleList', {
    extend: 'Ext.data.Model',

    alias: 'model.itgmodulelist',

    fields: [
        {name: 'moduleNo', type: 'int'},
        {name: "moduleCode"},
        {name: "moduleName"},
        {name: "projectCode"},
        {name: "appNo", type: 'int'},
        {name: "enableFlag", type: 'int', defaultValue: 1},
        {name: "isReport", type: 'int'},
        {name: "moduleUrl"},
        {name: "rightValue", type: 'int'},
        {name: "hint"},
        {name: "creator"},
        {name: "createTime"},
        {name: "modifier"},
        {name: "modifyTime"},
        {name: "remarks"}
    ]

});