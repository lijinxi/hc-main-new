/**
 * Description:
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/28 0028
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.store.CurrentUser', {
    extend: 'Ext.data.Store',
    alias: 'store.currentuser',
    storeId:'currentuser',
    model:'Hc_Framework.model.CurrentUser'
});