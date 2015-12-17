/**
 * Description: 项目管理 view
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
Ext.define('Hc_Framework.view.itgproject.ItgProject', {
	extend: 'Hc_Common.view.BaseSimplePage',

	alias: 'widget.itgproject',

	requires: [
		'Hc_Framework.model.ItgProject',
		'Hc_Framework.view.itgproject.ItgProjectController',
		'Hc_Framework.view.itgproject.ItgProjectModel'
	],

	controller: 'itgproject',
	viewModel: {
		type: 'itgproject'
	},

	initComponent: function () {
		var me = this;

		Ext.apply(me, {
			gridModel: 'Hc_Framework.model.ItgProject',
			gridColumns: [
				{dataIndex: 'projectCode', text: '项目编码', editor: {allowBlank: false}},
				{dataIndex: 'projectName', text: '项目名称', editor: {allowBlank: false}, width: 160},
				{dataIndex: 'enableFlag', text: '启用状态', type: 'int', editor: {xtype: 'combouseflag',allowBlank: false},renderer: 'renderUseFlag', width:60},
				{dataIndex: 'orderNo', text: '排列序号', editor: {xtype: 'numberfield'}},
				{header: '备注', dataIndex: 'remarks', editor: true, width: 135},
                {header: '建档人', dataIndex: 'creator', width: 100},
                {header: '建档时间', dataIndex: 'createTime', width: 135},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 100},
                {header: '修改时间', dataIndex: 'modifyTime', width: 135}
			],
			gridPrimaryKey: 'projectCode',
			gridUnionKey: '',

			gridLoadUrl: Hc.basePath + 'itg_project/list.json',
			gridSaveUrl: Hc.basePath + 'itg_project/batchOperate.json',
			gridExportUrl: Hc.basePath + 'itg_project/do_export.json',
			gridImportUrl: Hc.basePath + ''
		});

		me.callParent();

	}
});