/**
 * Description: 角色分配用户 Model
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
Ext.define('Hc_Framework.model.ItgRoleUser', {
    extend: Ext.data.Model,

    alias: 'model.itgroleuser',

    fields: [
        {name: 'userRoleId', text: '用户角色ID', type: 'int'},
        {name: 'userId', text: '角色ID', type: 'int'},
        {name: 'roleId', text: '角色ID', type: 'int'},

        {name: 'userCode', text: '用户编号'},
        {name: 'userName', text: '用户名称'},
        {name: 'enableFlag', text: '是否启用', type: 'int'},
        {name: 'deptNo', text: '部门编号', type: 'int'},
        {name: 'isAdminGroup', text: '是否管理员组', type: 'int'},
        {name: 'addressMac', text: 'Mac地址'},
        {name: 'addressIp', text: 'IP地址'},
        {name: 'mobileNo', text: '手机号'},
        {name: 'email', text: '邮箱地址'},
        {name: 'remarks', text: '备注'},

        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'}
    ],

    idProperty: 'userRoleId',
    identifier: 'negative'
});
