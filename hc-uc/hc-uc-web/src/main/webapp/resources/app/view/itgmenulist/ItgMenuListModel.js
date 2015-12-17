/**
 * Description: ��д���ļ�����;
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-09 09:38:33
 * @version 1.0.0
 */
Ext.define('Hc_Framework.view.itgmenulist.ItgMenuListModel', {
	extend: 'Hc_Common.view.BaseTreePageModel',
	alias: 'viewmodel.itgmenulist',

	stores: {
		commonstore: {
			model:'Hc_Framework.model.ItgMenuList',
			proxy: {
				type: 'ajax',
				url: Hc.basePath + 'itg_menu_list/list.json'
			},
			root: {
				id:0,
				menuName: 'hc项目菜单',
				menuNo:0,
				expanded: true
			},
			nodeParam:'parentMenuNo',
			autoLoad:false,
			parentIdProperty:'parentMenuNo'
		}
	}
});