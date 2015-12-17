/**
 * Description: 应用管理view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/05
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgapplication.ItgApplication', {
	extend: 'Hc_Common.view.BaseSimplePage',

	alias: 'widget.itgapplication',

	requires: [
		'Hc_Framework.model.ItgApplication',
		'Hc_Framework.view.itgapplication.ItgApplicationController',
		'Hc_Framework.view.itgapplication.ItgApplicationModel',
		'Hc_Framework.store.ItgProject'
	],

	controller: 'itgapplication',
	viewModel: {
		type: 'itgapplication'
	},

	initComponent: function () {
		var me = this,
			projectStore = Ext.create('Hc_Framework.store.ItgProject');
			/*projectStore = Ext.create('Hc_Common.store.ComBase',{
				model:'Hc_Framework.model.ItgProject',
				proxy: {
			        url: Hc.basePath + 'itg_project/listAll.json'
			    }
			});*/

		Ext.apply(me, {
			searchItems: [{
            	xtype : 'extcombox',
				fieldLabel : '所属项目',
				name : 'projectCode',
				store: projectStore,
				displaymember:'projectName',
				valuemember:'projectCode'
			}, {
                xtype: 'textfield',
                fieldLabel: '应用编码',
                name: 'appCode'
            }, {
                xtype: 'textfield',
                fieldLabel: '应用名称',
                name: 'appName'
            }, {
                xtype: 'combouseflag',
                fieldLabel: '启用状态',
                name: 'enableFlag'
            }],
				
			gridModel: 'Hc_Framework.model.ItgApplication',
			gridColumns: [
			    {dataIndex: 'appNo', text: '应用编号', editor: {allowBlank: false}},
				{dataIndex: 'appCode', text: '应用编码', editor: {allowBlank: false}},
				{dataIndex: 'appName', text: '应用名称', editor: {allowBlank: false}, width:160},
				{dataIndex: 'projectCode', text: '所属项目', editor: {allowBlank: false}, width:150,
					xtype:'bllookupedit',
					estore: projectStore,
					gstore: projectStore,
					displaymember:'projectName',
					valuemember:'projectCode'
				},
				{dataIndex: 'appUrl', text: '系统url', editor: {allowBlank: false},  width: 160},
				{dataIndex: 'jsUrl', text: 'jsurl', editor: {allowBlank: false},  width: 180},
				{dataIndex: 'enableFlag', text: '启用状态', type: 'int', editor: {xtype: 'combouseflag',allowBlank: false},renderer: 'renderUseFlag', width:60},
				{dataIndex: 'imageUrl', text: '图标路径', editor: true},
				{dataIndex: 'imageName', text: '图标名称', editor: true},
				{dataIndex: 'orderNo', text: '排列序号', type: 'int', editor: {type: 'numberfield'}},
				{header: '备注', dataIndex: 'remarks', editor: true, width: 135},
                {header: '建档人', dataIndex: 'creator', width: 100},
                {header: '建档时间', dataIndex: 'createTime', width: 135},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 100},
                {header: '修改时间', dataIndex: 'modifyTime', width: 135}
			],
			gridPrimaryKey: 'appNo',
			gridUnionKey: '',

			gridLoadUrl: Hc.basePath + 'itg_application/list.json',
			gridSaveUrl: Hc.basePath + 'itg_application/batchOperate.json',
			gridExportUrl: Hc.basePath + 'itg_application/do_export.json',
			gridImportUrl: Hc.basePath + ''
		});

		me.callParent();
	}
});