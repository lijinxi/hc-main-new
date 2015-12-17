/**
 * Description: 项目清单-公用store
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
Ext.define('Hc_Framework.store.ItgDepartment',{
    extend:'Hc_Common.store.ComBase',
    //requires: ['Hc_Framework.model.ItgDepartment'],
    alias:'store.itgdepartment',

    //model:'Hc_Framework.model.ItgDepartment',
    fields: ['deptNo','deptName'],
    proxy: {
        url: 'itg_department/listAll.json'
    }
});