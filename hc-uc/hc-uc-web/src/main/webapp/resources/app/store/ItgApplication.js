/**
 * Description: 应用清单-公用store
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      liutao
 * Createdate:  2015/3/28
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.store.ItgApplication',{
    extend:'Hc_Common.store.ComBase',

    alias: 'store.itgapplication',

    model: 'Hc_Framework.model.ItgApplication',
    proxy: {
        url: 'itg_application/listAll.json?'
    }
});