/**
 * Description: 用户分配角色管理 ViewModel
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
Ext.define('Hc_Framework.view.itgroleuser.ItgUserRoleModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itguserrole',

    stores: {
        store2: {
        	type:'basestore',
            model: 'Hc_Framework.model.ItgUserRole',
            proxy: {
                url:  Hc.basePath + 'itg_user_role/getRole.json?isExist=false'
            }
        }
    }
});