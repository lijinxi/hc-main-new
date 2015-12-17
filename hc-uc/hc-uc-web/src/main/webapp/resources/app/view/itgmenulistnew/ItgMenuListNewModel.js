/**
 * Description: 
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-09 09:38:33
 * @version 1.0.0
 */
Ext.define('Hc_Framework.view.itgmenulistnew.ItgMenuListNewModel', {
	extend: 'Hc_Common.view.BasePageModel',
	alias: 'viewmodel.itgmenulistnew',

	stores: {
		menuTreeStore: {
			type:'treebase',
			model:'Hc_Framework.model.ItgMenuList',
			autoLoad: false,
			proxy: {
				type: 'ajax',
				url: 'itg_menu_list/listAll.json',
			},
			root: {
				id: 0,
				text: 'root',
				menuName: 'root',
				menuNo: 0,
				expanded: false
			},
			nodeParam:'parentMenuNo',
			parentIdProperty:'parentMenuNo' 
		},
		dataGridStore:{
			type:'basestore',
            model : 'Hc_Framework.model.ItgModuleList',
            proxy: {
				type: 'ajax',
				url: 'itg_module_list/list.json'
			},
			autoLoad: false
		}
	}
});