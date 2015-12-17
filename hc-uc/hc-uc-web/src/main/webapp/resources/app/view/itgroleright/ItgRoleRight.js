/**
 * Description: 角色管理权限 view
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
Ext.define("Hc_Framework.view.itgroleright.ItgRoleRight", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgroleright',

    requires: [
        'Hc_Framework.model.ItgRightList',
        'Hc_Framework.model.ItgRoleRight',
        'Hc_Framework.view.itgroleright.ItgRoleRightController',
        'Hc_Framework.view.itgroleright.ItgRoleRightModel'
    ],
    controller: "itgroleright",
    viewModel: {
        type: "itgroleright"
    },
    
    customLayout:true,
    
    gridModel: 'Hc_Framework.model.ItgRoleRight',
    
    gridPrimaryKey: 'roleRightId',
    gridLoadUrl: Hc.basePath + 'itg_role_right/getRoleRight.json',
    gridSaveUrl: Hc.basePath + 'itg_role_right/batchOperate.json',
    gridExportUrl: Hc.basePath + 'itg_role_right/do_export.json',
    gridImportUrl: Hc.basePath + '',
    
    oneclick : function(obj,rowIndex){
		console.dir(rowIndex);
	},
    
    initComponent: function () {
        var me = this;
        
        var appStore = Ext.create('Hc_Framework.store.ItgApplication');
        
        var gridSelModel = {
        		type : 'checkboxmodel',
                mode : 'MULTI',
               allowDeselect : true
        }
        
        me.grid.title = "模块设置";
       // me.grid.selModel = gridSelModel;
        
        Ext.apply(me,{
        	searchItems: [
        	{
        		fieldLabel : '所属系统',
                name : 'appNo',
                xtype:'extcombox',
                store: appStore,
				displaymember:'appName',
				valuemember:'appNo'
        	},
        	{
                xtype: 'textfield',
                fieldLabel: '模块编号',
                name: 'moduleCode'
            }, 
            {
                xtype: 'textfield',
                fieldLabel: '模块名称',
                name: 'moduleName'
            },
            {
                xtype: 'comboyesno', 
                fieldLabel: '是否有权限', 
                name: 'enableFlag'
        	}],
        	gridColumns: [
//            {
//            	header: '是否有权限', 
//            	dataIndex: 'other',
//            	//xtype:"checkcolumn",
//            	//disabled : true,
//            	renderer:function(val, m, rec) {
//            		
//            		var checkBox = Ext.create('Ext.grid.column.Check',{
//            				xtype:'checkcolumn',
//            				listeners:{
//            					'checkchange':function( obj, rowIndex, checked, eOpts ){
//            						console.dir("right : "+checked);
//            					}
//            				}
//            		});
//            		
//            		if(val > 0)
//            			checkBox.renderer(true);
//            		else
//            			checkBox.renderer(false);
//            		return checkBox;
//            			
//            	}
//            },
//            {
//        		header: '是否有权限', 
//            	dataIndex: 'roleRightId',
//            	xtype:"templatecolumn",
//            	tpl:'<tpl if="roleRightId &gt; 0"><input type="checkbox" checked='' onclick="columnClick"/></tpl><tpl if="roleRightId &lt;= 0"><input type="checkbox" onclick="columnClick"/></tpl>'
//        	},
        	{
            	header: '是否有权限', 
            	dataIndex: 'hasRight',
            	xtype:"checkcolumn",            	
            	//disabled : true,
//            	renderer:function(val, m, rec) {
//            		if(val > 0)
//            			return (new Ext.grid.column.CheckColumn).renderer(true);
//            		return (new Ext.grid.column.CheckColumn).renderer(false);
//            	}
            },
            /*{//自定义的多选列 
                header:"abc", 
                dataIndex:'otherColumn', 
                renderer:function (value,cellmeta,record,rowIndex,columnIndex,store){ 
                	console.dir(record.get('moduleName'));
                	if(value > 0){
                		return "<input type='checkbox' checked name='adds_checkbox' onclick=oneclick(this," + rowIndex + ") id='adds_checkbox_'"+value+"></input>"; 
                	}
                	else
                		return "<input type='checkbox' name='adds_checkbox' onclick=oneclick(this) id='adds_checkbox_'"+value+"></input>";
                } , 
                width:50, 
                sortable:false 
            },*/
            
            /*{header: '角色ID', dataIndex: 'roleId', type: 'int'},
            {header: '角色模块编号',dataIndex: 'moduleNo', type: 'int'},
            {header: '角色权限值', dataIndex: 'rightValue', editor: {xtype: 'numberfield'}},
            {header: '模块权限值', dataIndex: 't2_rightValue', editor: {xtype: 'numberfield'}},
            {header: '模块ID', dataIndex: 't2_moduleNo'},*/
            {header: '模块编号', dataIndex: 'moduleCode',width:80},
            {header: '模块名称', dataIndex: 'moduleName',width:100},
            {
          	  dataIndex: 'appNo', 
          	  header: '所属系统', 
          	  width: 120,
          	  xtype:'bllookupedit',
          	  readOnly:true,
          	  estore: appStore,
          	  gstore: appStore,
          	  displaymember:'appName',
          	  valuemember:'appNo'
            },
            {header: 'URL', dataIndex: 'moduleUrl',flex:1},
            {header: '分配人员',dataIndex: 'creator',width:80},
            {header: '分配时间',dataIndex: 'createTime',width:135}
            ],
        });
        
        //左面板 : 角色面板
        var leftPanel = {
        		xtype: 'grid',
                reference: 'rolegrid',
                width: 330,
                region: 'west',
                columns: [
                    {text: '角色编号', dataIndex: 'roleId', width: 60},
                    {text: '角色名称', dataIndex: 'roleName', width: 80},
                    {text: '角色拥有者', dataIndex: 'roleOwner', width: 80},
                    {text: '备注', dataIndex: 'remarks', flex: 1}
                ],

                store: {
                    type: 'basestore',
                    model:'Hc_Framework.model.ItgRoleList',
                    autoLoad:true,
                    proxy:{
                        url: Hc.basePath + 'itg_role_list/list.json'
                    }
                },

                split: true,
                listeners: {
                    'selectionchange': 'onSelectItemChange'
                }
        };
        
        //右面板
        
        //右下面板 : 模块面板
        
        //模块权限复选框
        var rightBottomPanel = {
	        	title : '模块权限',
	        	xtype: 'panel',
	        	height:130,
	            border:'false',
	            //autoScroll:true,
    	        region: 'south',
    	        layout:'border',
    	        split:true,
    	        bodyStyle: 'background:#fff; padding:10px;',
	            items:[{
	                xtype: 'checkboxgroup',
	                reference: 'rightboxgroup',
	                columns: 4,
	                boxLabel : 'rightName',
	                inputValue : 'rightNo',
	                items: []
	            }]
    		};
        
      //构建右面板
        var rightPanel = {
        	xtype: 'panel',
        	border:'false',
        	region:'center',
        	layout:'border',
        	items:[me.grid,rightBottomPanel]
        };
        
        //加入左右面板和工具条
        me.otherItems = [leftPanel,rightPanel,me.toolbar,me.searchPanel];
        me.items = me.otherItems;
        
        this.callParent();

    }
});