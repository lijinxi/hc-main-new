/**
 * Description: 模块管理 ViewController
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
Ext.define('Hc_Framework.view.itgmodule.ItgModuleListController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.itgmodulelist',

	init:function(){
		var me = this;
		me.callParent();

	},
	onGridBeforeEdit:function(editor, option){
		this.callParent(arguments);
		if(option.field == 'appNo'){
			var newProjectCode = option.record.get('projectCode'),
				store = option.column.getEditor().store;
			
			oldProjectCode = store.proxy.extraParams['projectCode'];
			if(oldProjectCode != newProjectCode){
				store.proxy.extraParams['projectCode'] = newProjectCode;
				store.reload();
			}
		}
	},
	onGridAfterEdit:function(editor, option){
		this.callParent(arguments);
		//logic:模块启动命令默认值为模块编号	impl:moduleNo录入后，自动将其赋值给moduleCode 
		if(option.field=='moduleNo'){
			var moduleNo = option.record.get('moduleNo'),
				moduleCode = option.record.get('moduleCode');
			if(!moduleCode){
				option.record.set('moduleCode', moduleNo);
			}
		}
	}
});
