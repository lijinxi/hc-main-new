/**
 * Description: 项目清单 Model
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

Ext.define('Hc_Framework.model.ItgProject', {
    extend: 'Ext.data.Model',

    alias: 'model.itgproject',

    fields: [
        {name: 'projectCode', text: '项目编码'},
        {name: 'projectName', text: '项目名称'},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: "enableFlag",text:'启用状态', type: 'int'},
        {name: 'creator', text: '建档人'},
        {name: 'createTime', text: '建档时间'},
        {name: 'modifier', text: '建档人'},
        {name: 'modifyTime', text: '建档时间'},
        {name: 'remarks', text: '备注'}
    ],

    //idProperty: 'projectCode',
	//identifier: ''
    });
