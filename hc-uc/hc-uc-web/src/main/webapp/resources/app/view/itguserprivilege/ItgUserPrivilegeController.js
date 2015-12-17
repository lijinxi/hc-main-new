/**
 * Description: 用户特权 ViewController
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
Ext.define('Hc_Framework.view.itguserprivilege.ItgUserPrivilegeController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itguserprivilege',

	onSelectChange:function(item) {
		this.onBtnSearchClick();
	},
	onBtnAddClick: function () {
		var me = this,
			user= me.lookupReference('usergrid').getSelectionModel().getSelection();
		if(user.length<1) {
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
		if (!me.win) {
			me.win = Ext.widget('uxrolelist');
		}
		me.win.show();
	},

	onChooseUserClick: function (btn) {
		var me = this,
			userid =  me.lookupReference('usergrid').getSelectionModel().getSelection()[0].get('userId'),
			roles = me.win.getComponent('roleList').getSelectionModel().getSelection(),
			store = me.getView().workObject.getStore(),
			model = store.getModel();
		Ext.Array.each(roles, function (obj) {

			if(store.findBy(function(record){return record.data.roleId==obj.data.roleId})==-1) {
				store.insert(0, new model({
					userId: userid,
					roleId: obj.data.roleId,
					roleName: obj.data.roleName,
					roleOwner: obj.data.roleOwner,
					enableFlag: obj.data.enableFlag,
					remarks: obj.data.remarks,
					_flag:'A'
				}));
			}
		});
		me.win.close();
	},

	customFilter: function (store,filterdata) {
		var item = this.lookupReference('usergrid').getSelection();
		if (item.length < 1)return false;
		filterdata.push({
			property: 'userId',
			value: item[0].get("userId")
		});
		return true;
	}

});
