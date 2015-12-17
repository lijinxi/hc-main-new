/**
 * Description: 用户特权 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/09
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.model.ItgUserPrivilege', {
    extend: 'Ext.data.Model',

    alias: 'model.itguserprivilege',

    fields: [
        {name: 'userPrivilegeId', text: '特权编号', type: 'int'},
        {name: 'userId', text: '用户编号',type: 'int'},
        {name: 'moduleNo', text: '模块编号', type: 'int'},
        {name: 'moduleCode', text: '模块编号'},
        {name: 'moduleName', text: '模块名称',type:'int'},
        {name: 'rightValue', text: '模块权限值',type:'int'},
        {name: 'addRightValue', text: '添加特权', type: 'int'},
        {name: 'subRightValue', text: '减少特权', type: 'int'},
        {name: 'creator', text: '等级', type: 'int'},
        {name: 'createTime', text: '分组', type: 'int'},
    ],
    idProperty: 'userPrivilegeId',
    identifier: 'negative'
});
