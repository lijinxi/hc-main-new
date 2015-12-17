/**
 * Description: 角色分配用户管理 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgroleuser.ItgRoleUserController', {
	extend: 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itgroleuser',

	init:function(){
		this.callParent(arguments);
		var objlist = this.getReferences();
		//按钮处理
		objlist.btnAdd.setDisabled(true);
		objlist.btnDelete.setDisabled(true);
		
	},

	onSelectChange:function(item) {
		
		var me = this,
		objlist = me.getReferences();
		
		var rolegrid=me.lookupReference('rolegrid');
		var record = rolegrid.getSelectionModel().getSelection()[0];

		if(!record) {
			
			objlist.notusergrid.store.removeAll();
			objlist.notusergrid.disable();
			objlist.mastergrid.store.removeAll();
			objlist.mastergrid.disable();
			objlist.btnSearch.setDisabled(true);
			return ;
		}
		
		//按钮处理
		objlist.btnSearch.setDisabled(false);
		objlist.btnAdd.setDisabled(true);
		objlist.btnDelete.setDisabled(true);
		
		objlist.notusergrid.enable();
		objlist.mastergrid.enable();

		me.onBtnSearchClick();
	},

	//查询前处理函数
	beforeSearch: function (store) {
		var me = this;
		//已分配面板增加查询参数  : roleId
		var rolegrid=me.lookupReference('rolegrid');
		var role = rolegrid.getSelectionModel().getSelection()[0];
		
		if(!role) 
			return ;
		
		var roleId = role.get('roleId')
	
		store.proxy.extraParams["roleId"] = roleId;

		//未分配面板增加查询参数  : roleId
		var store2 = me.lookupReference('notusergrid').store;
		store2.proxy.extraParams["roleId"] = roleId;

		var searchPanel = me.lookupReference('commonsearch');
		if (searchPanel) {
			var formValue = searchPanel.getValues();
			for (var field in formValue) {
				if (formValue[field] !== '') {
					store2.proxy.extraParams[field] = formValue[field];
				} else {
					delete   store2.proxy.extraParams[field];
				}
			}
		}

		store2.load();
		return true;
	},

	//未分配用户notusergrid选中记录触发函数
	onNotUserGridSelectionChange : function(){
		var me = this,
		objlist = me.getReferences();
		objlist.btnAdd.setDisabled(false);
	},

	//已分配用户mastergrid选中记录触发函数
	onGridSelectionChange : function()	{
		var me = this,
		objList = me.getReferences();
		objList.btnDelete.setDisabled(false);
	},

	//将未分配用户记录添加到已分配用户列表中
	onBtnAddClick: function () {
		var me = this;
		var notusergrid = me.lookupReference('notusergrid');

		//获取选中的未分配角色
		var users = notusergrid.getSelectionModel().getSelection();

		if(users == null || users.length <= 0) {
			Ext.Msg.alert('系统提示','请选择未分配用户');
			return;
		}
		
		var rolegrid = me.lookupReference('rolegrid');
		var role = rolegrid.getSelectionModel().getSelection()[0];
		if(!role){
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
			
		var roleId = role.get('roleId');
		//获取已分配角用户grid对象
		var grid1 = me.lookupReference('mastergrid');
		
		Ext.Array.each(users,function(user){
			//向获取的记录增加字段 : _flag
			user.data._flag='A';

			//增加roleId字段值
			user.data.roleId = roleId;

			//新建插入对象
			var newobj=Ext.create(grid1.store.model);
			Ext.apply(newobj.data,user.data);

			//将数据增加到已分配角色中
			grid1.store.insert(0,newobj);

			//删除未分配角色的选中记录
			notusergrid.store.remove(user);
		});

		//显示保存按钮
		var objList = me.getReferences();
		objList.btnSave.setDisabled(false);
	},

	// 删除 如果是新增还没有保存的数据，直接删除，如果是已保存的数据，打上删除标识
	onBtnDeleteClick: function (btn) {
		var me = this,
		obj = me.workObject,
		store = obj.getStore(),
		delflag = false,
		items = obj.getSelectionModel().getSelection();

		if (items.length < 1) {
			Ext.Msg.alert('系统提示','请选择已分配用户');
			return;
		}
		if (!me.checkDelete(items)===false) return;

		Ext.Array.each(items, function (record) {
			var _flag = record.get('_flag');

			if (_flag == 'A') {
				var notusergrid = me.lookupReference('notusergrid');

				//新建插入对象
				var newobj=Ext.create(notusergrid.store.model);
				Ext.apply(newobj.data,record.data);

				notusergrid.store.insert(0,newobj);
				store.remove(record);
			} else {
				record.set('_flag', 'D');
				delflag = true;
			}
		});

		if (delflag) {
			obj.view.refresh();
		}
	},

	/*从写保存之后方法（保存完后，如果成功重新加载数据，失败则提示错误消息）*/
	afterSave:function(result,options) {
		var me = this;
		if (result.result.resultCode == "0") {
			objList = me.getReferences();
			objList.btnSave.setDisabled(true);
			objList.notusergrid.store.reload({afterSaveData:true});
			objList.mastergrid.store.reload({afterSaveData:true});
		} else {
			Hc.alert(result.result.msg);
		}
		me.callParent(arguments);
	}

});
