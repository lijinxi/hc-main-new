/**
 * Description: 用户分配角色 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.model.ItgUserRole', {
    extend: Ext.data.Model,

    alias: 'model.itguserrole',

    fields: [
        {name: 'userRoleId', text: '用户角色ID', type: 'int'},
        {name: 'userId', text: '角色ID', type: 'int'},
        {name: 'roleId', text: '角色ID', type: 'int'},
        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'},
        {name: 'remarks', text: '备注'},

        {name: 'roleName', text: '角色名称'},
        {name: 'roleOwner', text: '角色拥有者'},
        {name: 'projectCode', text: '所属项目'},
        {name: 'enableFlag', text: '是否启用', type: 'int'}
    ],

    idProperty: 'userRoleId',
    identifier: 'negative'
});
