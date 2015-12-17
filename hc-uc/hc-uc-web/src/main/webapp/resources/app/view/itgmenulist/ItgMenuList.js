Ext.define('Hc_Framework.view.itgmenulist.ItgMenuList', {
	extend: 'Hc_Common.view.BaseTreePage',
	alias: 'widget.itgmenulist',
	requires: [
		'Hc_Framework.ux.ModuleList',
		'Hc_Framework.store.ItgMenuList',
		'Hc_Framework.view.itgmenulist.ItgMenuListController',
		'Hc_Framework.view.itgmenulist.ItgMenuListModel'
	],

	controller: 'itgmenulist',
	viewModel: {
		type: 'itgmenulist'
	},

	initComponent: function () {
		var me = this;
		me.tree.columns = [
			{dataIndex: 'menuNo', text: '菜单编号', xtype: 'treecolumn',width:200},
			{dataIndex: 'menuName', text: '菜单名称'},
			{dataIndex: 'appNo', text: '应用编号'},
			{dataIndex: 'projectCode', text: '项目编号'},
			{dataIndex: 'moduleNo', text: '模块编号'},
			{dataIndex: 'enableFlag', text: '启用标识'},
			{dataIndex: 'parentMenuNo', text: '父级Id'},
			{dataIndex: 'searchCode', text: '查询码'},
			{dataIndex: 'levelNo', text: '层级'},
			{dataIndex: 'orderNo', text: '排序码'},
			{dataIndex: 'creator', text: '创建人员'},
			{dataIndex: 'createTime', text: '创建日期'},
			{dataIndex: 'modifier', text: '更改人员'},
			{dataIndex: 'modifyTime', text: '更改日期'},
			{dataIndex: 'remarks', text: '备注'},
		];
		me.tree.batchUrl = Hc.basePath + 'itg_menu_list/batchOperate.json';
		me.tree.autoLoad = true;

		me.detailItem = [
			{
				name: "menuNo",
				fieldLabel: "菜单编号",
				xtype: "numberfield",
				bind: {value: "{theRow.menuNo}"}
			},
			{
				"name": "menuName",
				"fieldLabel": "菜单名称",
				"xtype": "textfield",
				"bind": {"value": "{theRow.menuName}"}
			},
			{
				"name": "appNo",
				"fieldLabel": "应用编号",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.appNo}"}
			},
			{
				"name": "projectCode",
				"fieldLabel": "项目编号",
				"xtype": "textfield",
				"bind": {"value": "{theRow.projectCode}"}
			}, {
				"name": "moduleNo",
				"fieldLabel": "模块编号",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.moduleNo}"}
			}, {
				"name": "enableFlag",
				"fieldLabel": "启用标识",
				"xtype": "combouseflag",
				"bind": {"value": "{theRow.enableFlag}"}
			}, {
				"name": "parentMenuNo",
				"fieldLabel": "父级Id",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.parentMenuNo}"}
			}, {
				"name": "searchCode",
				"fieldLabel": "查询码",
				"xtype": "textfield",
				"bind": {"value": "{theRow.searchCode}"}
			}, {
				"name": "levelNo",
				"fieldLabel": "层级",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.levelNo}"}
			}, {
				"name": "orderNo",
				"fieldLabel": "排序码",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.orderNo}"}
			}, {
				"name": "creator",
				"fieldLabel": "创建人员",
				"xtype": "textfield",
				"bind": {"value": "{theRow.creator}"}
			}, {
				"name": "createTime",
				"fieldLabel": "创建日期",
				"xtype": "datefield",
				"bind": {"value": "{theRow.createTime}"}
			}, {
				"name": "modifier",
				"fieldLabel": "更改人员",
				"xtype": "textfield",
				"bind": {"value": "{theRow.modifier}"}
			}, {
				"name": "modifyTime",
				"fieldLabel": "更改日期",
				"xtype": "datefield",
				"bind": {"value": "{theRow.modifyTime}"}
			}, {
				"name": "remarks",
				"fieldLabel": "备注",
				"xtype": "textfield",
				"bind": {"value": "{theRow.remarks}"}
			}
		];

		me.otherItems = [{
			xtype:'uxmodulelist',
			autoShow:false

		}];
		me.callParent();

		//me.getComponent("btnAddChild").setText('添加模块');
	}
});
