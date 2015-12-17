/**
 * Description: 应用清单 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/2/5
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.model.ItgApplication', {
    extend: 'Ext.data.Model',

    alias: 'model.itgapplication',

    fields: [
        {name: 'appNo', text: '应用编号', type: 'int'},
        {name: 'appCode', text: '应用编码',type:'string'},
        {name: 'appName', text: '应用名称',type:'string'},
        {name: 'projectCode', text: '所属项目'},
        {name: 'enableFlag', text: '启用状态', type: 'int', defaultValue: 1},
        {name: 'appUrl', text: '应用url'},
        {name: 'jsUrl', text: 'jsUrl'},
        {name: 'imageUrl', text: '图标路径'},
        {name: 'imageName', text: '图标名称'},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: 'creator', text: '建档人'},
        {name: 'createTime', text: '建档时间'},
        {name: 'modifier', text: '修改人'},
        {name: 'modifyTime', text: '修改时间'},
        {name: 'remarks', text: '备注'}
    ],

    idProperty: 'appNo',
    identifier: 'negative'
});



