/**
 * Description: 菜单管理 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgmenu.ItgMenuController', {
	extend: 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itgmenu',

	init:function() {

		var me = this,
			objList = me.getObjList();

		me.workObject = objList.menutree;

		if (objList.btnUndo) {
			objList.btnUndo.setVisible(false);
		}

		if (objList.btnCancel) {
			objList.btnCancel.setVisible(false);
		}

		if (objList.btnSave) {
			objList.btnSave.setVisible(false);
		}
		if (objList.btnAdd) {
			delete  objList.btnAdd.menu;
		}
		me.callParent(arguments);
	},


	beforeSearch:function() {
		var objs = this.getObjList(),
			store = objs.mastergrid.store,
			val = objs.ddlProjectCode.getValue();
		store.proxy.extraParams.projectCode = val;
		store.reload();
	},

	btnSaveMenu:function(btn){
		var param={},
			tree =  this.view.workObject,
			form = btn.up('window').down('form'),
			record= form.getRecord(),
			data = form.getValues();

		if(record.phantom){
			data.parentMenuNo = record.data.parentMenuNo;
			data.projectCode = record.data.projectCode;
			data.enableFlag = 1;
			param.insertList = [data];
		}else{
			param.updateList = [data];
		}
		this.saveData({srcObj:tree,btn:btn,data:param});
	},


	onBtnAddClick: function () {
		var projectCode = this.lookupReference('ddlProjectCode').getValue();
		if(!projectCode){
			Hc.alert('请选择项目编号');
			return;
		}
		var win = this.lookupReference('editWin'),
			tree = this.lookupReference('menutree'),
			store = tree.store,
			newObj = Ext.create(store.model,{
				projectCode:projectCode,
				parentMenuNo:tree.selection?tree.selection.id:0
			});
		win.show();
		win.down('form').loadRecord(newObj);
	},

	//用于编辑按钮
	onBtnEditClick:function(){
		var win = this.lookupReference('editWin'),
			node = this.lookupReference('menutree').selection;

		if(node){
			win.show();
			win.down('form').loadRecord(node);
		}
	},


	onBtnCancelClick:function() {
		var tree = this.getView().workObject;
		tree.store.rejectChanges();
		tree.view.refresh();
	},

	onBtnDeleteClick:function(btn){
		var me = this,
			tree = me.lookupReference('menutree'),
			param={deleteList:[{menuNo:tree.selection.id}]};

		me.saveData({srcObj:tree,btn:btn,data:param});
	},

	onGridSelectionChange:function(){

	},

	onTreeSelectionChange: function (sm, selections) {
		var me = this,
			objs=me.getReferences();

		if (this.canDelete() && objs.btnDelete) {
			objs.btnDelete.setDisabled(selections.length === 0);
		}
		if (this.canPrint() && objs.btnPrint) {
			objs.btnPrint.setDisabled(selections.length === 0);
		}
		if (this.canEdit() && objs.btnEdit) {
			objs.btnEdit.setDisabled(selections.length === 0);
		}

	},

	afterSave:function(result,options){
		if (result.result.resultCode=="0") {
			options.srcObj.store.reload();
			options.srcObj.view.refresh();
		} else {
			Hc.alert(result.result.msg);
		}
		if(options.btn) {
			options.btn.setDisabled(false);
			if (options.btn.up('window'))
				options.btn.up('window').close();
		}else{
			this.lookupReference('mastergrid').store.reload();
		}
	}

});
