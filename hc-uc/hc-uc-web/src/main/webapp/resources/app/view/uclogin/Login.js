/**
 * Description: 用户登陆页面view
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
Ext.define('Hc_Framework.view.uclogin.Login', {
    extend: 'Ext.window.Window',    
    requires: [    
        'Hc_Framework.view.uclogin.LoginController',
        'Hc_Framework.view.uclogin.LoginModel'
    ],    
    viewModel: 'login',    
    controller: 'login',
    modal:true,
    bodyPadding: 10,
    title: '用户登录',
    closable: false,   
    autoShow:true,
    cls: 'login', 
    width:500,
    height:300,
    items: {
        xtype: 'form',
        reference: 'form',
        baseCls: 'x-plain',
        items: [{
            xtype: 'textfield',
            name: 'usercode',
           // bind: '{userCode}',
            fieldLabel: '用户名',
            allowBlank: false,
            enableKeyEvents: true,
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: '密码',
            allowBlank: false,
            enableKeyEvents: true,
            cls: 'password',
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }]
    },
    buttons: [{
        text: '登录',
        listeners: {
            click: 'onLoginbtnClick'
        }
    }]
});
