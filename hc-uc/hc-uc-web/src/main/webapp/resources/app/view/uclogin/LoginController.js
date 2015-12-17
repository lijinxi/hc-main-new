/**
 * Description: 用户登陆页面ViewControll
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.uclogin.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',

    onLoginbtnClick: function () {
        var me = this,
            form = me.lookupReference('form'),
            formdata = form.getValues();

        if (!form.isValid()) return;

        //后端验证
        Ext.Ajax.request({
            url: '/login.json',
            method: 'POST',
            params: formdata,
            success: function (response,opts) {
            	console.info("执行了额咩有");
                me.onSuccess(formdata,Ext.decode(response.responseText));
            }
        });

        this.onSuccess(formdata,{username:'吴德锋'});
    },
    onSpecialKey: function (field, e) {
        if (e.getKey() === e.ENTER) {
            this.onLoginbtnClick();
        }
    },
    onSuccess: function (data, result) {
        var me = this,
            username = result.username,
            user = Ext.create('Hc_Framework.model.CurrentUser', {
                userCode: data.usercode,
                userName: username
            });
        user.save();
        me.getView().destroy();
        Ext.create('Hc_Framework.view.main.Main', {
            viewModel: {
                data: {
                    system: {
                        username: username
                    }
                }
            }
        });
    }
});
