/**
 * Description: 最近访问模块Model, 数据存储于本地
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/2/6
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.MainTree', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'menuNo', type: 'int'},
        {name: 'menuName'},
        {name: 'modelNo', type: 'int'},
        {name: 'moduleName'},
        {name: 'moduleUrl'},
        {name: 'appUrl'},
        {name: 'appCode'},
        {name: 'jsUrl'},
        {name: 'rightValue', type: 'int'},
        {name: 'rights', type: 'int'},
        {name: 'expanded',defaultValue:false}
    ]
});