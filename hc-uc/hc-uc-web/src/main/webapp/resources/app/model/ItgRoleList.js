/**
 * Description: 角色管理 Model
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
Ext.define('Hc_Framework.model.ItgRoleList', {
    extend: Ext.data.Model,

    alias: 'model.itgrolelist',

    fields: [
        {name: 'roleId', text: '角色ID', type: 'int'},
        {name: 'roleName', text: '角色名称'},
        {name: 'projectCode', text: '所属项目'},
        {name: 'enableFlag', text: '是否启用', type: 'int'},
        {name: 'roleOwner', text: '角色拥有者'},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'},
        {name: 'modifier', text: '更改人员'},
        {name: 'modifyTime', text: '更改日期'},
        {name: 'remarks', text: '备注'},
    ],

    idProperty: 'roleId',
    identifier: 'negative'
});
