/**
 * Description: 主框架应用程序
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

Ext.define('Hc_Framework.Application', {
    extend: 'Ext.app.Application',
    name: 'Hc_Framework', 
    appFolder:'resources/app',
    requires: [
        'Hc_Framework.view.uclogin.Login',
        'Hc_Framework.view.ucmain.Main',
        'Hc_Framework.view.itgapplication.ItgApplication',
        'Hc_Framework.view.itgloginuser.ItgLoginUser',
        'Hc_Framework.view.itgmodule.ItgModuleList',
        'Hc_Framework.view.itgproject.ItgProject',
        'Hc_Framework.view.itgright.ItgRightList',
        'Hc_Framework.view.itgrole.ItgRoleList',
        'Hc_Framework.view.itgroleright.ItgRoleRight',
        'Hc_Framework.view.itgroleuser.ItgRoleUser',
        'Hc_Framework.view.itgroleuser.ItgUserRole',
        'Hc_Framework.view.itguserprivilege.ItgUserPrivilege',
        'Hc_Framework.view.itgmenulistnew.ItgMenuListNew'
    ],
    controllers: [
        'Root'
        // TODO: add controllers here
    ],
    launch: function () {
     console.info("军情解码李金喜");
    //  console.info("这是我们的ROOT");
      //  new  Hc_Framework.view.uclogin.Login();
     //   console.info("这是我们的ROOT1");
    }
});
