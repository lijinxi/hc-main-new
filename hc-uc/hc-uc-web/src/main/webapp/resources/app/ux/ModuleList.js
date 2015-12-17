/**
 * Description: 模块列表
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/02
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.ux.ModuleList', {
    extend: 'Ext.window.Window',

    alias: 'widget.uxmodulelist',


    title: '模块清单',
    width: 500,
    height: 300,
    modal: true,
    layout: 'fit',
    reference: 'commonchildWin',
    closeAction: 'hide',
    items: [{
        xtype: 'grid',
        itemId: 'moduleList',
        border: false,
        columns: [
            {header: '模块ID', dataIndex: 'moduleNo'},
            {header: '模块编号', dataIndex: 'moduleCode'},
            {header: '模块名称', dataIndex: 'moduleName', flex: 1},
            {header: '项目代号', dataIndex: 'projectCode', width: 50},
            {header: '系统ID', dataIndex: 'appNo', width: 50},
            {header: '权限值', dataIndex: 'rightValue', width: 50}
        ],
        selType: 'checkboxmodel',
        store: {
            type: 'basestore',
            model:'Hc_Framework.model.ItgLoginUser',
            autoLoad:true,
            proxy:{
                url:Hc.basePath+'itg_module_list/list.json'
            }
        },
        bbar: {
            xtype: 'pagingtoolbar',
            store: {
                type: 'basestore',
                model:'Hc_Framework.model.ItgLoginUser',
                autoLoad:true,
                proxy:{
                    url:Hc.basePath+'itg_module_list/list.json'
                }
            }
        }
    }],

    bbar: [
        '->',
        {xtype: 'button', text: '确认', handler: 'onWinReturnValue'},
        {
            xtype: 'button', text: '取消', handler: function () {
            this.up('window').close();
        }
        }
    ],
    initComponent: function () {
        this.callParent();
    }
});