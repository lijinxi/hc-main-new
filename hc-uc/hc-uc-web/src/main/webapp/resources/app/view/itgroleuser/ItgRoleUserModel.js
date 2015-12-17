/**
 * Description: 角色分配用户管理 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgroleuser.ItgRoleUserModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itgroleuser',
    
    stores: {
        store2: {
        	type:'basestore',
            model: 'Hc_Framework.model.ItgRoleList',
            proxy: {
                url:  Hc.basePath + 'itg_role_user/getUser.json?isExist=false'
            }
        }
    }

});