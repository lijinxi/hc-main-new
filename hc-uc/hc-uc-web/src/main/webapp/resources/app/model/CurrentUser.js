/**
 * Description: 当前用户
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/28 0028
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.model.CurrentUser', {
    extend: 'Ext.data.Model',

    alias:'model.currentuser',

    fields: [
        {name: 'userId', type: 'int'},
        {name: 'userCode'},
        {name: 'userName'},
        {name: 'password'},
        {name: 'pwdModifyTime'},
        {name: 'deptNo', type: 'int'},
        {name: 'isAdminGroup',  type: 'int'},
        {name: 'checkMac', type: 'int'},
        {name: 'addressMac'},
        {name: 'checkIp',  type: 'int'},
        {name: 'addressIp', text: 'IP地址'},
        {name: 'mobileNo', text: '手机号'},
        {name: 'email', text: '邮箱地址'},
        'deptName',
        'version',
        'sysid',
        'basePath'
    ],

    proxy: {
            type: 'sessionstorage',
            id  : 'currentuser'
    }
});