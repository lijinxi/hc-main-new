/**
 * Description: 我的收藏夹
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
Ext.define('Hc_Framework.store.MyFavorite', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.myfavorite',

    model:'Hc_Framework.model.LastVisit',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url:  'rest/myfavorite'
    },
    root: {
        id: 0,
        text: '我的收藏夹',
        menuNo: 0,
        menuName: '我的收藏夹',
        expanded: true
    }
});