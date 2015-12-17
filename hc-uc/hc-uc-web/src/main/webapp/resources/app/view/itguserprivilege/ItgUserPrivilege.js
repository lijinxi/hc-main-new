/**
 * Description: 用户特权 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/09
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itguserprivilege.ItgUserPrivilege", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itguserprivilege',

    requires: [
        'Hc_Framework.ux.ModuleList',
        'Hc_Framework.model.ItgUserPrivilege',
        'Hc_Framework.view.itguserprivilege.ItgUserPrivilegeController',
        'Hc_Framework.view.itguserprivilege.ItgUserPrivilegeModel'
    ],

    controller: "itguserprivilege",

    viewModel: {
        type: "itguserprivilege"
    },
    initComponent:function(){
        var me = this;

        me.gridModel = 'Hc_Framework.model.ItgUserPrivilege';
        me.gridColumns = [
            {dataIndex: 'moduleNo', header: '模块ID'},
            {dataIndex: 'moduleCode', header: '模块编号'},
            {dataIndex: 'moduleName', header: '模块编号', width: 60},
            {dataIndex: 'rightValue', header: '模块权限值', flex: 1},

            {dataIndex: 'addRightValue', header: '添加特权', width: 60},
            {dataIndex: 'rightValue', header: '减少特权', flex: 1},

            {dataIndex: 'creator', header: '分配人员', width: 70},
            {dataIndex: 'createTime', header: '分配日期', xtype: 'datecolumn', format: 'Y-m-d', width: 70},

        ];
        me.gridLoadUrl = Hc.basePath + 'itguserprivilege/list.json'
        me.gridSaveUrl = Hc.basePath + 'itguserprivilege/save.json';

        me.otherItems = [{
            xtype: 'grid',
            reference: 'usergrid',
            width: 150,
            region: 'west',
            split: true,
            columns: [
                {text: '用户编号', dataIndex: 'userCode', flex: 0.5},
                {text: '用户名称', dataIndex: 'userName', flex: 0.5}
            ],
            listeners: {
                'selectionchange': 'onSelectChange'
            }
        }];
        me.searchItems=[{xtype:'textfield',name:'creator',fieldLabel:'创建人员'}];
        me.callParent();
    }
});