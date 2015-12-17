/**
 * Description: 角色管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itgrole.ItgRoleList", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgrolelist',

    requires: [
        'Hc_Framework.model.ItgRoleList',
        'Hc_Framework.view.itgrole.ItgRoleListController',
        'Hc_Framework.view.itgrole.ItgRoleListModel'
    ],

    controller: "itgrolelist",

    viewModel: {
        type: "itgrolelist"
    },

    initComponent: function () {
        var me = this;
        
        var projectStore = Ext.create('Hc_Framework.store.ItgProject');

        Ext.apply(me, {
            searchItems: [ 
            {
                fieldLabel : '所属项目',
                name : 'projectCode',
                xtype:'extcombox',
                store: projectStore,
				displaymember:'projectName',
				valuemember:'projectCode'
            },{
                xtype: 'textfield', 
                fieldLabel: '角色名称', 
                name: 'roleName'
            },{
                xtype: 'textfield', 
                fieldLabel: '角色拥有者', 
                name: 'roleOwner'
            },{
                    xtype: 'combouseflag', 
                    fieldLabel: '启用状态', 
                    name: 'enableFlag'
            }
            ],

            gridModel: 'Hc_Framework.model.ItgRoleList',
            gridColumns: [
                {
                	header: '角色名称', 
                	dataIndex: 'roleName', 
                	editor: {
                		allowBlank: false
                	},
                	width:120
                },
                {
                	header: '所属项目', 
                	dataIndex: 'projectCode', 
                	xtype:'bllookupedit',
                	editor: {
                		allowBlank: false
                	},
                	estore: projectStore,
					gstore: projectStore,
					displaymember:'projectName',
					valuemember:'projectCode',
	    			width:120
                },
                {
                	header: '角色拥有者', 
                	dataIndex: 'roleOwner', 
                	/*editor: {
                		allowBlank: false
                	}, */
                	width: 80
                },
                {
      				dataIndex: 'enableFlag',
      				header: '启用状态',
      				editor: {
                		allowBlank: false
                	}, 
      				xtype:'bllookupedit',
      				displayvalue : "0=禁用:1=启用",
      				width: 60
                },
                {header: '排列序号', dataIndex: 'orderNo', editor: {xtype: 'numberfield'}, width: 60},
                {header: '备注', dataIndex: 'remarks', editor: true, flex:1},
                {header: '建档人', dataIndex: 'creator', width: 80},
                {header: '建档时间', dataIndex: 'createTime', width: 135},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 80},
                {header: '修改时间', dataIndex: 'modifyTime', width: 135}
            ],
            gridPrimaryKey: 'roleId',
            gridLoadUrl: Hc.basePath + 'itg_role_list/list.json',
            gridSaveUrl: Hc.basePath + 'itg_role_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'itg_role_list/do_export.json',
            gridImportUrl: Hc.basePath + ''
        });
        me.callParent();

    }
});