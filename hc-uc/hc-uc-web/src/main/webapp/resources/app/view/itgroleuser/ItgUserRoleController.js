/**
 * Description: 用户分配角色管理 ViewController
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
Ext.define('Hc_Framework.view.itgroleuser.ItgUserRoleController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itguserrole',

	init:function(){
		var objlist = this.getReferences();
		//按钮处理
		objlist.btnAdd.setDisabled(true);
		objlist.btnDelete.setDisabled(true);
		//未分配角色面板,增加 选中记录selectchange 触发函数  onNotUserGridSelectionChange
		//objlist.notrolegrid.on("selectchange",this.onNotUserGridSelectionChange,this);
		
		this.callParent();
	},
	
	onSelectChange:function(item) {
		var me = this,
		objlist = me.getReferences();
		
		var usertree=me.lookupReference('usertree');
		var node = usertree.getSelectionModel().getSelection()[0];
		
		if(node){
			//如果叶子节点不是部门，是用户时,查询该用户的角色信息
			if(node.get('leaf')==true){
				objlist.btnSearch.setDisabled(false);
				objlist.notrolegrid.enable();
				objlist.mastergrid.enable();
				this.onBtnSearchClick();
			}
			else{
				objlist.btnSearch.setDisabled(true);
				objlist.notrolegrid.store.removeAll();
				objlist.mastergrid.store.removeAll();
			}
		}
		
		//按钮处理
		objlist.btnAdd.setDisabled(true);
		objlist.btnDelete.setDisabled(true);
		
	},
	
	beforeSearch: function (store) {
		var grid=this.lookupReference('usertree');
		var node = grid.getSelectionModel().getSelection()[0];
	
		//如果 不是叶子节点不查询
		if(!node || node.get('leaf') != true) return ;

		var nodeId = Ext.util.Format.substr(node.get('id'), 1, node.get('id').length);
		
		
		store.proxy.extraParams["userId"] = nodeId;

		var store2 = this.lookupReference('notrolegrid').store;
		store2.proxy.extraParams["userId"] = nodeId;
		
		var searchPanel = this.lookupReference('commonsearch');
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

	onBtnAddClick: function () {
		var me = this;
		var notrolegrid = me.lookupReference('notrolegrid');
		//获取选中的未分配角色
		var roles = notrolegrid.getSelectionModel().getSelection();
		if(roles == null || roles.length <= 0) {
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
		
		//获取已分配角色网格grid对象
		var grid1 = me.lookupReference('mastergrid');
		var usertree = me.lookupReference('usertree');
		var user = usertree.getSelectionModel().getSelection()[0];
		if(!user){
			Ext.Msg.alert('系统提示','请选择用户');
			return;
		}
		
		var userId = Ext.util.Format.substr(user.get('id'), 1, user.get('id').length);
		
		Ext.Array.each(roles, function (role) {
			//向获取的记录增加字段 : _flag
			role.data._flag='A';
			//增加userId字段值
			var usertree = me.lookupReference('usertree');
			role.data.userId = userId;
		
			//新建插入对象
			var newobj=Ext.create(grid1.store.model);
			Ext.apply(newobj.data,role.data);
		
			//将数据增加到已分配角色中
			grid1.store.insert(0,newobj);
			//删除未分配角色的选中记录
			notrolegrid.store.remove(role);
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

        if (items.length < 1) return;
        if (!me.checkDelete(items)===false) return;
        Ext.Array.each(items, function (record) {
            var _flag = record.get('_flag');
            if (_flag == 'A') {
            	var notrolegrid = me.lookupReference('notrolegrid');
            	//新建插入对象
        		var newobj=Ext.create(notrolegrid.store.model);
        		Ext.apply(newobj.data,record.data);
        		notrolegrid.store.insert(0,newobj);
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

	//未分配角色notrolegrid选中记录触发函数
	onNotUserGridSelectionChange : function(){
		var me = this,
		objlist = me.getReferences();
		objlist.btnAdd.setDisabled(false);
	},
	//已分配角色mastergrid选中记录触发函数
	onGridSelectionChange : function()	{
		var me = this,
		objList = me.getReferences();
		objList.btnDelete.setDisabled(false);
	},
	
	/*保存后处理方法*/
    afterSave:function(result,options){
    	var me = this,
		objList = me.getReferences();
		objList.btnSave.setDisabled(true);
		objList.notrolegrid.store.load();
		objList.mastergrid.store.load();
		
    },
    
    /*从写保存之后方法（保存完后，如果成功重新加载数据，失败则提示错误消息）*/
    afterSave:function(result,options) {
        var me = this;
        if (result.result.resultCode == "0") {
    		var objList = me.getReferences();
    		objList.btnSave.setDisabled(true);
    		objList.notrolegrid.store.reload({afterSaveData:true});
    		objList.mastergrid.store.reload({afterSaveData:true});
        } else {
            Hc.alert(result.result.msg);
        }
        me.callParent(arguments);
    }
    
});
