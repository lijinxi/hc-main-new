/**
 * Description: 主框架工作台
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
Ext.define('Hc_Framework.view.ucmain.region.Center', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.maincenter',

    uses: [
        'Hc_Framework.view.uchome.HomePage','Hc_Framework.view.itgloginuser.ItgLoginUser'
    ],

    closeAction: 'hide',
    autoDestroy: true,
    tabPosition: 'top',
    border: false,
    id: 'maintabpanel',

    plugins: [{
        ptype: 'tabclosemenu',
        closeAllTabsText: '关闭所有',
        closeOthersTabsText: '关闭其他',
        closeTabText: '关闭'
    },Ext.create('Ext.ux.TabReorderer')],

    initComponent: function () {

        this.items = [{
            glyph: Hc.Icon.btnHome,
            xtype: 'homepage', /*调试模块*/
         //   xtype: 'itgloginuser',
			reorderable: false
        }];

        this.callParent();
    }
});