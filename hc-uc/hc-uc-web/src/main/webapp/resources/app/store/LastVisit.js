/**
 * Description: 最近访问模块Store, 数据存储于本地
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
Ext.define('Hc_Framework.store.LastVisit', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.lastvisit',

    model:'Hc_Framework.model.LastVisit',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'localstorage',
        id: 'lastvisittree'
    },
    root: {
        id: 0,
        text: '最近访问的模块',
        menuNo: 0,
        menuName: '最近访问的模块',
        expanded: true
    }
});