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
Ext.define('Hc_Framework.ux.ImportWin', {
	extend: 'Ext.window.Window',

	alias: 'widget.uximportwin',

	title: '批量导入数据',
	width: 500,
	height: 300,
	modal: true,
	layout: 'fit',
	alwaysOnTop: true,
	closeAction: 'destroy',

	items: [{
		xtype: 'form',
		itemId: 'userList',
		border: false

	}],

	bbar: [
		'->',
		{xtype: 'button', text: '确认', handler: 'onChooseUserClick'},
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