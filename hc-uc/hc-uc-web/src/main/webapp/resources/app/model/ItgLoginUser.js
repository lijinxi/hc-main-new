/**
 * Description: 用户管理 Model
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
Ext.define('Hc_Framework.model.ItgLoginUser', {
    extend: Ext.data.Model,

    alias: 'model.itgloginuser',

    fields: [
        {name: 'userId', text: '用户ID', type: 'int'},
        {name: 'userCode', text: '用户编号'},
        {name: 'userName', text: '用户名称'},
        {name: 'enableFlag', text: '是否启用', type: 'int'},
        {name: 'password', text: '密码'},
        {name: 'pwdLevelNo', text: '密码等级', type: 'int'},
        {name: 'pwdModifyTime', text: '密码更改日期'},
        {name: 'deptNo', text: '部门编号', type: 'int'},
        {name: 'isAdminGroup', text: '是否管理员组', type: 'int'},
        {name: 'checkMac', text: '是否检查Mac地址', type: 'int'},
        {name: 'addressMac', text: 'Mac地址'},
        {name: 'checkIp', text: '是否检查IP', type: 'int'},
        {name: 'addressIp', text: 'IP地址'},
        {name: 'mobileNo', text: '手机号'},
        {name: 'email', text: '邮箱地址'},
        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'},
        {name: 'modifier', text: '更改人员'},
        {name: 'modifyTime', text: '更改日期'},
        {name: 'remarks', text: '备注'}
    ],
    idProperty: 'userId',
    identifier: 'negative'
});
