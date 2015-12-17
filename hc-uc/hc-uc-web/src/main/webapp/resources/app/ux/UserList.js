/**
 * Description: 用户列表
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
Ext.define('Hc_Framework.ux.UserList', {
	extend: 'Ext.window.Window',

	alias: 'widget.uxuserlist',

	title: '用户清单',
	width: 500,
	height: 300,
	modal: true,
	layout: 'fit',
	alwaysOnTop: true,
	closeAction: 'hide',

	targetStore: {},

	items: [{
		xtype: 'grid',
		itemId: 'userList',
		border: false,
		columns: [
			{dataIndex: 'userCode', header: '用户编号'},
			{dataIndex: 'userName', header: '用户名称', flex: 1},
			{dataIndex: 'enableFlag', header: '启用状态', renderer: 'renderUseFlag', width: 60},
			{dataIndex: 'deptNo', header: '部门编号', width: 60},
			{
				dataIndex: 'isAdminGroup',
				header: '管理员组?',
				renderer: 'renderYesNo',
				width: 60
			}],
		selType: 'checkboxmodel',
		store: {
			type: 'basestore',
			model:'Hc_Framework.model.ItgLoginUser',
			autoLoad:true,
			proxy:{
				url:Hc.basePath+'itg_login_user/list.json'
			}
		},
		bbar: {
			xtype: 'pagingtoolbar',
			store: {
				type: 'basestore',
				model:'Hc_Framework.model.ItgLoginUser',
				autoLoad:true,
				proxy:{
					url:Hc.basePath+'itg_login_user/list.json'
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


	initComponent: function () {
		this.callParent();
	}
});