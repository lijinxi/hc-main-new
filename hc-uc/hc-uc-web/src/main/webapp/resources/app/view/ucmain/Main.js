/**
 * Description: 系统主框架 View
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.ucmain.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Hc_Framework.store.CurrentUser',
        'Hc_Framework.store.LastVisit',
        'Hc_Framework.store.MainTree',
        'Hc_Framework.store.MyFavorite',
        'Hc_Framework.view.ucmain.MainController',
        'Hc_Framework.view.ucmain.MainModel',
        'Hc_Framework.view.ucmain.region.Top',
        'Hc_Framework.view.ucmain.region.LeftMenu',
        'Hc_Framework.view.ucmain.region.Center'
    ],

    id:'mainpage',
    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: 'border',

    items: [{
        xtype: 'maintop',
        region: 'north',
        height: 100
    }, {
        region: 'west',
        width: 180,
        split: true,
        collapsible: true,
        collapseMode: 'mini',
        title:'导航菜单',
        layout: 'fit',
        items: [{
            xtype: 'leftmenu'
        }]
    }, {
        region: 'center',
        xtype: 'maincenter'
    }],

    initComponent: function () {
    	console.info("这是我们的Main");
        Ext.setGlyphFontFamily('FontAwesome');
        this.callParent();
    }
});
