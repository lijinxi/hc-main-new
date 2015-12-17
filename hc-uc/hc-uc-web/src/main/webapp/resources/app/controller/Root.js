/**
 * Description: 主框架控制器
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * -----------------------------------------
 *
 */

Ext.define('Hc_Framework.controller.Root', {
    extend: 'Ext.app.Controller',

    requires: [
        'Hc_Framework.store.CurrentUser',
        'Hc_Framework.store.MainTree',
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

    // 启动主程序
    onLaunch: function () {
        var me = this;
       // me.showMainUI();
        //console.info("这是我们的ROOT");
      //  new  Hc_Framework.view.uclogin.Login();
       // console.info("这是我们的ROOT1");
        var currentUser = Ext.create("Hc_Framework.store.CurrentUser");
        console.info("这是我们的ROOT1:"+currentUser.data.length);
        currentUser.load();
        console.info("这是我们的ROOT2:"+currentUser.data.length);
       //   Hc.alert('系统出错');
        if (currentUser.data.length < 1) {
            Ext.Ajax.request({
                url: Hc.basePath + '/getCurrentLoginUser.json',
                success: function (result) {
                   console.info("Root执行了没有");
                   console.info(result.responseText);
                    var p = JSON.parse(result.responseText);
                    if (p.result.resultCode == 0) {
                        var obj = Ext.create(currentUser.model, {
                        	userId:p.entity.userId,
                            userCode: p.entity.userCode,
                            userName: p.entity.userName,
                            deptName: p.entity.deptName,
                            isAdminGroup: p.entity.isAdminGroup,
                            email:p.entity.email,
                            password:p.entity.password
                        });
                       
                        obj.save();
                        currentUser.add(obj);
                        currentUser.sync(true);
                        currentUser.load();
                        console.info("这是我们的ROOT1Main1sssaaaaadasdfasd23232:");
                        console.info("这是我们的ROOT1Main1:"+currentUser.getAt(0).get('userCode'));
                        console.info("这是我们的ROOT1Main2:"+currentUser.getAt(0).get('userName'));
                        console.info("这是我们的ROOT1Main3:"+currentUser.getAt(0).get('email'));
                        console.info("这是我们的ROOT1Main3:"+currentUser.getAt(0).get('deptName'));
                        console.info("这是我们的ROOT1Main4:"+currentUser.getAt(0).get('password'));
                        me.showMainUI(currentUser.getAt(0));
                    } else {
                        Hc.alert(p.result.msg);
                    }
                },
                failure: function () {
                    Hc.alert('系统出错');
                }
            })
        } else {
            me.showMainUI(currentUser.getAt(0));
        }
    },

    // 显示主界面
      showMainUI: function (currentUser) {
    	console.info("这是我们的ROOT1Main:"+currentUser);
    	console.info(currentUser);
       Ext.widget('app-main', {viewModel: {data: {currentUser: currentUser}}});
    }
});
