/**
 * Description: 主框架左侧菜单
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.region.LeftMenu', {   
    extend:'Ext.Container',
    alias: 'widget.leftmenu',

    requires: [
        'Hc_Framework.view.ucmain.menu.MainTree'
    ],

    layout: 'fit',
    border: false,  

    items: [{           
            xtype: 'maintree',
            reorderable: false,
            border: false
        }],

    initComponent: function () {
        this.callParent();
    }
});