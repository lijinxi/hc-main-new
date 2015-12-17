/**
 * Description: 角色分配用户管理 view
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
Ext.define("Hc_Framework.view.itgroleuser.ItgRoleUser", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgroleuser',

    requires: [
        'Hc_Framework.model.ItgRoleUser',
        'Hc_Framework.view.itgroleuser.ItgRoleUserController',
        'Hc_Framework.view.itgroleuser.ItgRoleUserModel'
    ],

    controller: "itgroleuser",

    viewModel: {
        type: "itgroleuser"
    },
    customLayout: true,
    gridModel: 'Hc_Framework.model.ItgRoleUser',
    gridPrimaryKey: 'userRoleId',
    gridLoadUrl: Hc.basePath + 'itg_role_user/getUser.json?isExist=true',
    gridSaveUrl: Hc.basePath + 'itg_role_user/batchOperate.json',
    gridExportUrl: Hc.basePath + 'itg_role_user/do_export.json',
    gridImportUrl: Hc.basePath + '',
    
    initComponent: function () {
        var me = this;
        
        me.grid.title = "已分配用户";
        
        var deptStore = Ext.create('Hc_Framework.store.ItgDepartment');
        
        Ext.apply(me,{
        	searchItems: [
        	{
                fieldLabel : '所属部门',
                name : 'deptNo',
                xtype:'extcombox',
                store: deptStore,
				displaymember:'deptName',
				valuemember:'deptNo'
            },
        	{
        		xtype: 'textfield',
        		fieldLabel: '用户编号',
        		name: 'userCode'
        	}, {
        		xtype: 'textfield',
        		fieldLabel: '用户名称',
        		name: 'userName'
        	},
        	{
                xtype: 'combouseflag', 
                fieldLabel: '启用状态', 
                name: 'enableFlag'
        	}
        	],
        	gridColumns: [
        	              {dataIndex: 'userCode', header: '用户编号', width: 80},
        	              {dataIndex: 'userName', header: '用户名称', width: 80},
        	              {
        	            	  dataIndex: 'deptNo', 
        	            	  header: '所属部门', 
        	            	  width: 160,
        	            	  xtype:'bllookupedit',
        	            	  readOnly : true,
        	            	  estore: deptStore,
        	            	  gstore: deptStore,
        	            	  displaymember:'deptName',
        	            	  valuemember:'deptNo'
        	              },
          	              {
              				dataIndex: 'enableFlag',
              				header: '启用状态',
              				readOnly:true,
              				xtype:'bllookupedit',
              				displayvalue : "0=禁用:1=启用",
              				width: 60
                          },
        	              {dataIndex: 'creator', header: '分配人员', width: 80},
        	              {dataIndex: 'createTime', header: '分配时间', width: 135},
        	              {dataIndex: 'remarks', header: '备注',flex:1}
        	          ]
        });

        //左面板 : 角色面板
        var rolePanel = {
            xtype: 'grid',
            reference: 'rolegrid',
            width: 330,
            region: 'west',
            columns: [
                {text: '角色名称', dataIndex: 'roleName', flex: 0.4},
                {text: '角色拥有者', dataIndex: 'roleOwner', flex: 0.2},
                {text: '备注', dataIndex: 'remarks', flex: 0.3}
            ],
            store: {
                type: 'basestore',
                model: 'Hc_Framework.model.ItgRoleList',
                autoLoad: true,
                proxy: {
                    url: Hc.basePath + 'itg_role_list/list.json'
                }
            },
            split: true,
            listeners: {
                'selectionchange': 'onSelectChange'
            }
        };

        //右面板

        //右上面板 : 未分配用户面板

        //构建右面板
        var rightPanel = {
            xtype: 'container',
            border: 'false',
            region: 'center',
            layout: 'border',
            items: [{
                title: '未分配用户',
                xtype: 'grid',
                reference: 'notusergrid',
                columnLines: true,
                split: true,
                columns: [
                    {dataIndex: 'userCode', header: '用户编号', width: 80},
                    {dataIndex: 'userName', header: '用户名称', width: 80},
                    {
  	            	  dataIndex: 'deptNo', 
  	            	  header: '所属部门', 
  	            	  width: 160,
  	            	  xtype:'bllookupedit',
  	            	  readOnly : true,
  	            	  estore: deptStore,
  	            	  gstore: deptStore,
  	            	  displaymember:'deptName',
  	            	  valuemember:'deptNo'
  	              	},
  	              	{
          				dataIndex: 'enableFlag',
          				header: '启用状态',
          				readOnly:true,
          				xtype:'bllookupedit',
          				displayvalue : "0=禁用:1=启用",
          				width: 60
  	              	},
                    {dataIndex: 'creator', header: '创建者', width: 80},
                    {dataIndex: 'createTime', header: '创建日期', width: 135},
                    {dataIndex: 'remarks', header: '备注', flex: 1}
                ],

                region: 'north',
                height: 300,
                bind: {
    	            store:'{store2}'
    	        },
                plugins: [],
                selModel: {
                    mode: 'MULTI',
                    allowDeselect: true
                },
                bbar: {
                    xtype: 'pagingtoolbar',
                    plugins: Ext.create('Ext.ux.ComboPageSize'),
                    displayInfo: true,
                    bind: {
        	            store:'{store2}'
        	        }
                },

                listeners: {
                    'selectionchange': 'onNotUserGridSelectionChange'
                },
                viewConfig: {
                    enableTextSelection: true
                }
            }, me.grid]
        };
        
        me.otherItems = [rolePanel, rightPanel, me.toolbar,me.searchPanel]
        me.items = me.otherItems;
        
        me.callParent();
    }
});