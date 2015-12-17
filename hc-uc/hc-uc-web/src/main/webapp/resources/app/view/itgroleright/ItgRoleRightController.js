/**
 * Description: 角色分配权限管理 ViewController
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
Ext.define('Hc_Framework.view.itgroleright.ItgRoleRightController', {
	extend: 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itgroleright',
	
	init:function(){
		var me = this;
		//调用父类init()方法
		me.callParent(arguments);
		
		var objlist = me.getReferences();
		
		//按钮处理
		objlist.btnSearch.setDisabled(true);
		objlist.btnAdd.setVisible(false);
		objlist.btnDelete.setVisible(false);
		
		Ext.Ajax.request({
			
        	url: Hc.basePath + 'itg_right_list/listAll.json',
        	
        	method: 'GET',
        	
        	params : {pageNum :0},
        	
        	success:function(response, options){
        		var list = JSON.parse(response.responseText).list;
        		
        		var checkobj = me.getObjList().rightboxgroup;
        		
        		Ext.Array.each(list,function(item){
        			
        			checkobj.add({
            			boxLabel : item.rightNo + ' ' + item.rightName,            			
            			inputValue : item.rightNo,
            			checked : false
            		});
        			
        		});
        	}
        });
		objlist.mastergrid.on('cellclick','gridCellClick');
		
	},
	
	/**初始化网格行类样式*/
    initRowClass: function (record, index, rowParams, store) {
        var flag = record.get('_flag');
        if (flag == 'A') return 'x-grid-rows-add';
        if (flag == 'D') return 'x-grid-rows-edit';
        if (record.dirty && !flag) return 'x-grid-rows-edit';
        return ''
    },
	
	onSelectItemChange: function (rd, selected) {
		
		var me = this,
		objlist = me.getReferences();
		
		objlist.mastergrid.enable();
		//objlist.rightboxgroup.disable();
		
		var rolegrid=this.lookupReference('rolegrid');
		var record = rolegrid.getSelectionModel().getSelection()[0];
		
		if(!record) {
			objlist.btnSearch.setDisabled(true);
			return ;
		}
		
		objlist.btnSearch.setDisabled(false);
		
		this.onBtnSearchClick();
	},
	
	//查询前处理函数
	beforeSearch: function (store) {
		
		
		var rolegrid=this.lookupReference('rolegrid');
		var role = rolegrid.getSelectionModel().getSelection()[0];
		
		if(!role){
			Ext.Msg.alert('系统提示','请选择角色');
			return ;
		}
		
		store.proxy.extraParams["roleId"] = role.get('roleId');

		return true;
	},

	onBtnAddClick: function () {
		var me = this,
			role= me.lookupReference('rolegrid').getSelectionModel().getSelection()[0];
		if(!role) {
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
		if (!me.win) {
			me.win = Ext.widget('uxmodulelist');
		}
		me.win.show();
	},
	
	onBtnUndoClick:function(btn){
		var grid = this.workObject,
        store=grid.store,
        items = grid.getSelectionModel().getSelection();

		Ext.Array.each(items, function (record) {
			if(record.phantom){
				store.remove(record);
			}
			else {
				record.reject();
				if(record.get('rightValue') > 0)
					record.set('hasRight',true);
				else
					record.set('hasRight',false);
			}
		});
	},
	
	onBtnCancelClick:function(btn){
		var grid = this.workObject,
        store = grid.getStore(),
		items = store.getModifiedRecords();
		store.rejectChanges();
		
		Ext.Array.each(items, function (record) {
			if(record.get('rightValue') > 0)
				record.set('hasRight',true);
			else
				record.set('hasRight',false);
		});
		
		grid.view.refresh();
	},
	
	/*选择变化之后*/
    onGridSelectionChange: function (sm, selections, index, eOpts) {
        var me = this,
            objlist = me.getObjList();
        
		objlist.rightboxgroup.enable();
        
        var mastergrid = objlist.mastergrid;
        
        var rightValue = mastergrid.getSelectionModel().getSelection()[0].get('rightValue');
        var t2_rightValue = mastergrid.getSelectionModel().getSelection()[0].get('t2_rightValue');
        
        //根据角色和模块的权限值设置模块权限复选框,角色的权限为0,无权限
        var rightboxgroup = objlist.rightboxgroup;
        
        for(var i = 0;i < rightboxgroup.items.length; i++){
        	
        	var item = rightboxgroup.items.getAt(i);
        	
        	//删除监听事件
        	item.un('change',me.boxchange,me);
        	
        	//是否显示
        	var isenable = (item.inputValue & t2_rightValue) === item.inputValue;
        	//是否勾选
        	var ischecked = (item.inputValue & rightValue) === item.inputValue;
        	
        	if(isenable){
        		item.enable();
        		if(ischecked)
        			item.setValue(true);
        		else
        			item.setValue(false);
        	}
        	else{
        		item.disable();
        		item.setValue(false);
        	}
        	
        	//增加监听事件
        	item.on('change',me.boxchange,me);
        	
        }
    },
	
	boxchange : function(box, newValue, oldValue, eOpts ){
		var me = this,
        objlist = me.getObjList();

		//角色面板
		var rolegrid = objlist.rolegrid;
		//模块设置面板
		var mastergrid = objlist.mastergrid;
		//权限复选框
		var rightboxgroup = objlist.rightboxgroup;
		
		//选中的角色面板的记录
		var rolerecord = rolegrid.getSelectionModel().getSelection()[0];
		//选中的模块列表记录
		var gridrecord = mastergrid.getSelectionModel().getSelection()[0];
		
		if(!rolerecord){
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
		
		if(!gridrecord){
			Ext.Msg.alert('系统提示','请选择模块');
			return;
		}
		
		var roleRightId = gridrecord.get('roleRightId');
		var orignValue = gridrecord.get('rightValue');
		var boxvalue = box.inputValue;
		
		if(newValue){//选中
			//选中:权限值做或运算
			var yu = boxvalue | orignValue;
			
			if(roleRightId < 0 && orignValue == 0){//新增记录
				gridrecord.set('rightValue',yu);
				gridrecord.set('_flag','A');
				gridrecord.set('moduleNo',gridrecord.get("t2_moduleNo"));
				gridrecord.set('roleId',rolerecord.get("roleId"));
			}
			else if(gridrecord.get('_flag') == 'D'){
				gridrecord.reject();
				gridrecord.set('rightValue',yu);
			}
			else{
				gridrecord.set('rightValue',yu);
			}
			
			if(boxvalue != 1){//不是浏览权限
				for(var i = 0;i < rightboxgroup.items.length; i++){
		        	var item = rightboxgroup.items.getAt(i);
		        	if(item.inputValue == 1 && item.getValue()==false){
						item.setValue(true);
						break;
					}
		        }
			}
		}
		else{//取消选中  : 
			
			/* 可能情况 
			 *  
			 * 减少权限:
			 * 不管是否是新增的记录,或者是已有记录的权限值修改,都可以直接修改权限值:rightValue
			 * 
			 * 删除:
			 * 1.已有角色模块删除
			 * 2.未有角色模块删除
			 */
			 
			
			//不选中:权限值做异或运算
			var yihuo = boxvalue ^ orignValue;
			
			//删除 :yihuo的值为0时,说明没有改模块的所有权限,需要做删除操作
			
			if(yihuo == 0){
				if(roleRightId > 0){//已有角色模块删除
					gridrecord.set('_flag','D');
					gridrecord.set('rightValue',0);
				}
				else{//未有角色模块删除
					gridrecord.reject();
				}
			}
			else{//只需修改权限值
				gridrecord.set('rightValue',yihuo);
			}
			
			var canDelete = true;
			for(var i = 0;i < rightboxgroup.items.length; i++){
	        	var item = rightboxgroup.items.getAt(i);
	        	if(item.inputValue != 1 && item.getValue() == true){
					canDelete = false;
					break;
				}
	        }
			if(canDelete){
				for(var i = 0;i < rightboxgroup.items.length; i++){
		        	var item = rightboxgroup.items.getAt(i);
		        	if(item.inputValue == 1 && item.getValue() == true){
						item.setValue(false);
						break;
					}
		        }
			}
		}
		//rightValue与hasRight绑定,会根据rightValue自动处理
		gridrecord.set('hasRight',false);
	},
	
	gridCellClick:function( obj, td, cellIndex, record, tr, rowIndex, e, eOpts ){
		if(cellIndex==0){
			var me = this,
	        objlist = me.getObjList();

			//角色面板
			var rolegrid = objlist.rolegrid;
			//复选框面板
			var rightboxgroup = objlist.rightboxgroup;
			
			//选中的角色面板的记录
			var rolerecord = rolegrid.getSelectionModel().getSelection()[0];
			
			if(!rolerecord){
				Ext.Msg.alert('系统提示','请选择角色');
				return;
			}
			
			//获取模块权限值和角色权限值,如果角色权限值小于模块权限值,则全选,否则,取消全选
			var moduleRightValue = record.get('t2_rightValue');
			var roleRightValue = record.get('rightValue');
			
			if(roleRightValue == moduleRightValue){//已全选,执行取消全选操作
				for(var i = 0;i < rightboxgroup.items.length; i++){
		        	var item = rightboxgroup.items.getAt(i);
		        	item.setValue(false);
		        }
			}
			else{//未全选,执行全选操作
				//按模块权限值勾选复选框
				for(var i = 0;i < rightboxgroup.items.length; i++){
		        	var item = rightboxgroup.items.getAt(i);
		        	if(item.inputValue & moduleRightValue){
		        		item.setValue(true);
		        	}
		        }
			}
		}
	}
	
	
});
