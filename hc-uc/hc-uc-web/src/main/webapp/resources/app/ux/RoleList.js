/**
 * Description: 角色列表
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/31
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.ux.RoleList', {
	extend: 'Ext.window.Window',

	alias: 'widget.uxrolelist',



	title: '角色清单',
	width: 500,
	height: 300,
	modal: true,
	layout: 'fit',
	alwaysOnTop: true,
	closeAction: 'hide',

	targetStore: {},

	items: [{
		xtype: 'grid',
		itemId: 'roleList',
		border: false,
		columns: [

			{header: '角色名称', dataIndex: 'roleName'},
			{
				header: '启用状态', dataIndex: 'enableFlag',
				renderer: 'renderUseFlag'
			},
			{header: '角色拥有者', dataIndex: 'roleOwner',  width: 150},
			{header: '排列序号', dataIndex: 'orderNo', width: 80},
			{header: '备注', dataIndex: 'remarks',  flex: 1}
		],
		selType: 'checkboxmodel',
		store: {
			type: 'basestore',
			model:'Hc_Framework.model.ItgLoginUser',
			autoLoad:true,
			proxy:{
				url:Hc.basePath+'itg_role_list/list.json'
			}
		},
		bbar: {
			xtype: 'pagingtoolbar',
			store: {
				type: 'basestore',
				model:'Hc_Framework.model.ItgLoginUser',
				autoLoad:true,
				proxy:{
					url:Hc.basePath+'itg_role_list/list.json'
				}
			}
		}
	}],

	bbar: [
		'->',
		{xtype: 'button', text: '确认', handler: 'onWinReturnValue'},
		{
			xtype: 'button', text: '取消', handler: function () {
			this.up('window').close();
		}
		}
	],

	scope:this,


	initComponent: function () {
		this.callParent();
	},

	onWinReturnValue:function(btn){
		alert(btn);
	}

});