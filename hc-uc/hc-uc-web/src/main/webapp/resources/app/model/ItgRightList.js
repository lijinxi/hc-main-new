/**
 * Description: 功能权限清单 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.ItgRightList', {
    extend: Ext.data.Model,

    alias: 'model.itgrightlist',

    fields: [
        {name: 'rightId', text: '权限ID', type: 'int'},
        {name: 'projectCode', text: '项目代号'},
        {name: 'rightNo', text: '权限编号'},
        {name: 'rightName', text: '权限名称'},
        {name: 'enableFlag', text: '启用', type: 'int', defaultValue: 1},
        {name: 'rightType', text: '权限类型', type: 'int'},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'},
        {name: 'modifier', text: '更改人员'},
        {name: 'modifyTime', text: '更改日期'},
        {name: 'remarks', text: '备注'}
    ],
    idProperty: 'rightId',
    identifier: 'negative'
});
