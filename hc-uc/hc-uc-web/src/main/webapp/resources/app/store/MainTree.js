/**
 * Description: 用户菜单
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
Ext.define('Hc_Framework.store.MainTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.maintree',

    requires: ['Hc_Framework.model.MainTree'],

    model: 'Hc_Framework.model.MainTree',

    autoLoad: true,
    buffered: false,
    proxy: {
       type: 'ajax',
        url: 'itg_menu_list/getusermenulist.json',
        reader: {
            type: 'json',
            rootProperty: 'list'
        },
        root: {
            text: 'hc',
            menuNo: 1,
            menuName: 'hc',
            expanded: true
        }
    },
    parentIdProperty: 'parentMenuNo'
});