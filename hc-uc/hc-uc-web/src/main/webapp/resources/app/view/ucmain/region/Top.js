/**
 * Description: 主框架顶部
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.region.Top', {
    extend: 'Ext.Container',
    alias: 'widget.maintop',

    id: 'app-header',

    title: '怀臣生产管理系统',
    titleEn:'huaichen factory 1',

    layout: {
        type: 'hbox',
        align: 'middle'
    },

    initComponent: function () {
        document.title = this.title;

        this.items = [{
            xtype: 'component',
            id: 'app-header-logo'
        }, {
            xtype: 'component',
            html:'<span id="app-header-title-en"><span>'+this.titleEn+'<br /><span id="app-header-title">'+ this.title+'</span>'
        },{
            xtype:'component',
            id:'app-header-systemname',
            bind: {
                html: '{system.name}'
            }
        },{
            xtype:'component',
            id:'app-header-version',
            bind: {
                html: '<span onclick="Hc.openUrl(\'releaselog.html\',\'发布日志\')" style="cursor: pointer">{system.version}</span>'
            },
            flex: 1
        } , {
            xtype: 'toolbar',
            baseCls: 'x-place',
            style:'color:red',
            id:'app-header-toolbar',
            items: [{
                bind:{
                    text:'{currentUser.deptName}'
                },
                glyph:Hc.Icon.btnGroup
            }, {
                bind:{
                    text:'{currentUser.userName}'
                },
                glyph:Hc.Icon.btnUser
            }, {
                text:'通讯录',
                handler: 'onDoing',
                glyph:Hc.Icon.btnAddressList
            }, {
                text: '设置',
                glyph: Hc.Icon.btnSetting,
                handler: 'setUserPassword'
            }, {
                text: '退出',
                glyph: Hc.Icon.btnExit,
                handler: 'onExitButtonClick'
            }]
        }];

        this.callParent();
    }
});