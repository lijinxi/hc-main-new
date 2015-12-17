/**
 * Description: 我的收藏夹菜单树
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/02/07
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.menu.MyFavorite', {
    extend: 'Ext.tree.Panel',

    xtype: 'myfavorite',

    header: {
        hidden: true
    },

    rootVisible: true,
    lines: true,
    hideHeaders: true,

    columns: [
        {dataIndex: 'menuName', xtype: 'treecolumn', flex: 1}
    ],

    store: {type:'myfavorite'},
    listeners: {
        itemclick: 'onTreeMenuClick'
    },

    initComponent: function () {
        this.callParent();
    }
});