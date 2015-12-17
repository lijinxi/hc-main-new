/**
 * Description: 模块管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *2015/03/28	liutao	应用/项目下拉combo采用公用store，减少数据库访问
 *
 */
Ext.define("Hc_Framework.view.itgmodule.ItgModuleList", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgmodulelist',

    requires: [
        'Hc_Framework.model.ItgModuleList',
        'Hc_Framework.view.itgmodule.ItgModuleListController',
        'Hc_Framework.view.itgmodule.ItgModuleListModel',
        'Hc_Framework.store.ItgProject',
        'Hc_Framework.store.ItgApplication'
    ],

    controller: "itgmodulelist",

    viewModel: {
        type: "itgmodulelist"
    },


    initComponent: function () {
        var me = this,
        	projectStore = Ext.create('Hc_Framework.store.ItgProject'),
        	applicationStore = Ext.create('Hc_Framework.store.ItgApplication'),
        	applicationEstore = Ext.create('Hc_Framework.store.ItgApplication');
        	
        Ext.apply(me, {
            searchItems: [{
            	xtype : 'extcombox',
				fieldLabel : '所属系统',
				name : 'appNo',
				store: applicationStore,
				displaymember:'appName',
				valuemember:'appNo'
            }, {
                xtype: 'textfield',
                fieldLabel: '模块编号',
                name: 'moduleNo'
            }, {
                xtype: 'textfield',
                fieldLabel: '模块名称',
                name: 'moduleName'
            }, {
                xtype: 'combouseflag',
                fieldLabel: '启用状态',
                name: 'enableFlag'
            }],

            gridModel: 'Hc_Framework.model.ItgModuleList',
            gridColumns: [
                {header: '模块编号', dataIndex: 'moduleNo', editor: {xtype: 'numberfield', allowBlank: false}},
                {header: '模块启动命令', dataIndex: 'moduleCode', editor: {allowBlank: false}, width: 80},
                {header: '模块名称', dataIndex: 'moduleName', editor: {allowBlank: false}},
                {header: '所属项目', dataIndex: 'projectCode', width: 140, editor: {allowBlank: false},
                	xtype:'bllookupedit',
					estore: projectStore,
					gstore: projectStore,
					displaymember:'projectName',
					valuemember:'projectCode'
				},
                {header: '所属系统', dataIndex: 'appNo', width: 150, editor: {allowBlank: false},
					xtype:'bllookupedit',
					estore: applicationEstore,
					gstore: applicationStore,
					displaymember:'appName',
					valuemember:'appNo'
				 },
                {header: 'URL', dataIndex: 'moduleUrl', editor: {allowBlank: false}},
                {header: '权限值', dataIndex: 'rightValue', editor: {xtype: 'numberfield', allowBlank: false}},
                {dataIndex: 'enableFlag', text: '启用状态', type: 'int', editor: {xtype: 'combouseflag',allowBlank: false},renderer: 'renderUseFlag', width:60},
                {header: '是否报表', dataIndex: 'isReport', editor: {xtype: 'comboyesno'}, renderer: 'renderYesNo', width:60},//标题4个汉字60
                {header: '备注', dataIndex: 'remarks', editor: true, width: 140},
                {header: '建档人', dataIndex: 'creator', width: 100},
                {header: '建档时间', dataIndex: 'createTime', width: 140},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 100},
                {header: '修改时间', dataIndex: 'modifyTime', width: 140}
            ],
            gridPrimaryKey: 'moduleNo',
            gridUnionKey: '',

            gridLoadUrl: Hc.basePath + 'itg_module_list/list.json',
            gridSaveUrl: Hc.basePath + 'itg_module_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'itg_module_list/do_export.json',
            gridImportUrl: Hc.basePath + ''
        });

        me.callParent();
    }
});