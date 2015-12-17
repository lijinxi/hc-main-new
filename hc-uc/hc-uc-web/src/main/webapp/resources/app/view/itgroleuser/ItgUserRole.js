/**
 * Description: 用户分配角色管理 view
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
Ext.define("Hc_Framework.view.itgroleuser.ItgUserRole", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itguserrole',

    requires: [
        'Hc_Framework.model.ItgUserRole',
        'Hc_Framework.view.itgroleuser.ItgUserRoleController',
        'Hc_Framework.view.itgroleuser.ItgUserRoleModel'
    ],

    controller: "itguserrole",

    viewModel: {
        type: "itguserrole"
    },
    
    customLayout:true,

    gridModel: 'Hc_Framework.model.ItgUserRole',
    gridPrimaryKey: 'userRoleId',
    gridLoadUrl: Hc.basePath + 'itg_user_role/getRole.json?isExist=true',
    gridSaveUrl: Hc.basePath + 'itg_user_role/batchOperate.json',
    gridExportUrl: Hc.basePath + 'itg_user_role/do_export.json',
    gridImportUrl: Hc.basePath + '',
    

    initComponent: function () {
        var me = this;
        
        var projectStore = Ext.create('Hc_Framework.store.ItgProject'); 
        
        Ext.apply(me,{
        	searchItems: [ 
        	{
        	    fieldLabel : '所属项目',
        	    name : 'projectCode',
        	    xtype:'extcombox',
        	    store: projectStore,
        	  	displaymember:'projectName',
        	  	valuemember:'projectCode'
        	},
        	{
        	    xtype: 'textfield', 
        	    fieldLabel: '角色名称', 
        	    name: 'roleName'
        	},
        	{
        	    xtype: 'textfield', 
        	    fieldLabel: '角色拥有者', 
        	    name: 'roleOwner'
        	},
        	{
        		xtype: 'combouseflag', 
        	    fieldLabel: '启用状态', 
        	    name: 'enableFlag'
        	}
        	],
        	              
        	gridColumns: [
        	              {dataIndex: 'roleName', header: '角色名称',width: 80},
        	              {dataIndex: 'roleOwner', header: '角色拥有者',width: 80},
        	              {
        	                	header: '所属项目', 
        	                	dataIndex: 'projectCode', 
        	                	xtype:'bllookupedit',
        	                	readOnly:true,
        	                	estore: projectStore,
        						gstore: projectStore,
        						displaymember:'projectName',
        						valuemember:'projectCode',
        		    			width:120
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
        	              {dataIndex: 'remarks', header: '备注', flex: 1}
        	              ]
        });
        
        me.grid.title = "已分配角色";
        
      //未分配角色面板
        var gridPanel2 = {
        		title : '未分配角色',
        		xtype:'grid',        		
    	        reference: 'notrolegrid',
    	        columnLines: true,
    	        split: true,
    	        columns: [
    	                  {dataIndex: 'roleName', header: '角色名称',width: 80},
    	                  {dataIndex: 'roleOwner', header: '角色拥有者',width: 80},
    	                  {
    	                  	header: '所属项目', 
    	                  	dataIndex: 'projectCode', 
    	                  	xtype:'bllookupedit',
    	                  	readOnly:true,
    	                  	estore: projectStore,
    	  					gstore: projectStore,
    	  					displaymember:'projectName',
    	  					valuemember:'projectCode',
    	  	    			width:120
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
    	        
    	        height:350,
    	        bind: {
    	            store:'{store2}'
    	        },
    	        plugins: [],
    	        selModel: {        	         
    	            mode: 'MULTI',
    	            allowDeselect: true
    	        },
    	        //分页查询
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
    	};
        
        //左右面板 : 左面板 --部门树 ,右面板--未分配角色 + 已分配角色
        
        //右面板--未分配角色 + 已分配角色
        var rightPanel = {
        	xtype: 'container',
        	border:'false',
        	region:'center',
        	layout:'border',
        	items:[gridPanel2,me.grid]
        };
        
        //左面板 --部门树
        var leftPanel = {
                xtype: 'treepanel',
                reference: 'usertree',
                width: 330,
                region: 'west',
                //rootVisible : false,
                columns: [
                    {text: '部门', dataIndex: 'text', flex: 1,xtype : 'treecolumn'}                
                ],
                //部门树 store
                store:{            	
                	type:'treebase',
                	proxy:{
                		url:Hc.basePath + 'itg_user_role/getNodeByDeptNo.json',
                		 reader: {
                	            type: 'json',
                	            rootProperty: 'children',
                	            totalProperty: 'totalCount'
                	        }
                	},
                	 root: {
                		 id:0,
                         text: 'hc',                 
                         expanded: false
                     }
                },
                split: true,
                //部门树监听方法
                listeners: {
                    'selectionchange': 'onSelectChange',
                }
            };

        me.otherItems = [leftPanel,rightPanel,me.toolbar,me.searchPanel];
        
        me.items=me.otherItems;

        me.callParent();
    }
});