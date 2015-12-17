/**
 * Description: 用户管理viewcontroller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgloginuser.ItgLoginUserController', {
	extend: 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itgloginuser',
	
	/*onGridBeforeEdit:function(sender,e){
		if(this.callParent(arguments)===false) return false;
		if(e.field == 'password' && !e.record.phantom)return false;
	},*/
	
	onGridAfterEdit:function(editor, option){
		var newValue = option.value;
		var originalValue = option.originalValue;
		this.callParent(arguments);
		
		//logic:密码字段编辑之后就进行加密    impl:
		if(option.field == 'password'){
			if(newValue == originalValue){
				return;
			}else{
				var encryptedPwd = hex_md5(newValue);
				option.record.set('password', encryptedPwd);
			}
		}
	},
	
    /*复制记录按钮 (复制选中的行)*/
    onBtnCopyClick: function (btn) {
        var me = this,
            grid = me.workObject,
            store = me.workObject.store,
            idField = me.workObject.primaryKey,
            selection = me.workObject.getSelection(),
            newObj;
        if (selection.length < 1)return;
        if (!grid.isCanAdd || grid.isReadOnly) {
            Hc.alert('此网格不允许新增数据');
            return;
        }
        if(grid.isMaster && this.editingList.length>0){
            Hc.alert('您有一笔数据正在处理，不能复制主表记录');
            return;
        }
        Ext.Array.each(selection, function (item) {
            newObj = Ext.create(store.model);
            Ext.apply(newObj.data, item.data);
            newObj.set(idField, '');
            newObj.set('_flag', 'A');
            newObj.set('password','');
            store.add(newObj);
        });
    }
});