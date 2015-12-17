Ext.define('Hc_Framework.view.itgmenulistnew.ItgMenuListNew', {
	extend: 'Hc_Common.view.BasePage',
	alias: 'widget.itgmenulistnew',
	requires: [
	   		'Hc_Framework.view.itgmenulistnew.ItgMenuListNewController',
			'Hc_Framework.view.itgmenulistnew.ItgMenuListNewModel',
			'Hc_Framework.store.ItgProject',
			'Hc_Framework.model.ItgMenuList'
			],

	controller: 'itgmenulistnew',
	viewModel: {
		type: 'itgmenulistnew'
	},
	
	layout:'border',
	//工具栏
	toolbar: {
		xtype: 'toolbar',
        itemId: 'commontoolbar',
        reference: 'commontoolbar',
        region: 'north',
        items: [{
            text: '刷新',
            itemId: 'btnRefresh',
            reference:'btnRefresh', 
            handler: 'onClickRefresh',
            glyph: Hc.Icon.btnRefresh

        }]
	},
	//菜单树面板
	treePanel: {
		xtype: 'panel',
        itemId: 'treePanel',
        reference: 'treePanel',
        title: '菜单树面板',
        width:200,
        region: 'west',
        split:true,
        layout:'border',
        collapsible:true,
        items: [{
			xtype: 'combo',
			reference: 'projectCodeCombo',
			labelWidth:60,
			width:100,
			editable:false,
			region:'north',
			triggerAction: 'all',
			fieldLabel: '所属项目',
			name: 'projectCode',
			displayField: 'projectName',
			valueField: 'projectCode',
			queryMode: 'local',
			store: {
				type: 'itgproject',
				autoLoad: true
			},
            allowBlank:false,
			listeners:{
		         'change': 'onChangeProjectCode'
		    }
		},{ xtype: 'treepanel',
		        itemId: 'menuTree',
		        region:'center',
		        layout:'fit',
		        reference: 'menuTree',
		        rootVisible: false,
		        //useArrows: true,
		        lines: true,
		        columns: [
					{xtype:'treecolumn', flex: 1, dataIndex : 'menuName',text: "菜单",sortable: false, hideable: false}
					//{xtype:'treecolumn', dataIndex : 'menuNo',text: "菜单ID",sortable: false,hideable: false},
		        ],
		        bind: {
		            store: '{menuTreeStore}'
		        },
		        batchUrl: Hc.basePath+'itg_menu_list/batchOperate.json'
		    		}]
	},
	//明细面板-查询面板+功能操作面板+模块列表网格
	detailPanel:{
		xtype: 'panel',
        itemId: 'detailPanel',
        reference: 'detailPanel',
        region: 'center',
        layout: 'border',
        items: [{
        	xtype: 'form',
            itemId: 'searchPanel',//查询面板
            reference: 'searchPanel',
        	title: '查询模块',
        	collapsible: true,
            region: 'north',
            //height: 60,
            labelWidth : 40, 
            /*layout:{ 
            	type:'hbox',
            	pack: 'start',
            	align: 'middle'
            },*/
            layout: {
            	type:'table',
            	columns:4
            },
            bodyPadding: 4,
            align : 'center',
            defaults: { 
            	labelAlign: 'right',
                labelWidth: 80,
                width: 200
            },
            items:[{
            	xtype: 'textfield',
				fieldLabel: '模块编码',
				name: 'moduleNo'
			}, {
				xtype: 'textfield',
				fieldLabel: '模块名称',
				name: 'moduleName'
			}, {
				xtype: 'tbspacer',
				width: 80, 
			},{
            	xtype: 'button',
            	text : '查询',
                handler : 'onClickSearch',
                width: 80, 
            }/*,{
            	xtype: 'button',
            	text : '上移',
                handler : 'moveUp',
                width: 80, 
            },{
            	xtype: 'button',
            	text : '保存',
                handler : 'moveSave',
                width: 80, 
            }*/]
            },{
            	xtype: 'panel',
                itemId: 'operationPanel',//功能操作面板
                reference: 'operationPanel',
                region: 'west',
                width:100,
                layout:{ 
                	type:'vbox',
                	pack: 'start',
                	align: 'center'
                },
                defaults: { frame: true, width: 80, height: 30 },
                items:[{
                    xtype: 'tbspacer',          //插入的空填充
                },{
                	xtype: 'button',
                	text : '添加文件夹',
                    handler : 'addMenuFolder'
                },{
                	xtype: 'button',
                	text : '移除文件夹',
                    handler : 'removeMenuFolder'
                },{
                    xtype: 'tbspacer',          //插入的空填充
                },{
                    xtype: 'tbspacer',          //插入的空填充
                },{
                	xtype: 'button',
                	text : '添加模块<<',
                    handler : 'addModule'
                },{
                	xtype: 'button',
                	text : '移除模块>>',
                    handler : 'removeModule'
                },{
                    xtype: 'tbspacer',          //插入的空填充
                },{
                    xtype: 'tbspacer',          //插入的空填充 
                },{
                	xtype: 'button',
                	text : '上移↑',
                    handler : 'moveUp'
                },{
                	xtype: 'button',
                	text : '下移↓',
                    handler : 'moveDown'
                },{
                	xtype: 'button',
                	text : '保存[移动]',
                    handler : 'moveSave'
                }]
            },{
            	xtype: 'grid',
            	itemId: 'dataGrid',//模块列表网格
                reference: 'dataGrid',
                region: 'center',
                layout:'fit',
                columnLines: true,
                multiSelect: true,
                plugins :[{
                    ptype: 'cellediting',
                    clicksToEdit: 1
                }],
                bbar: {
                    xtype: 'pagingtoolbar',
                    bind:{store:'{dataGridStore}'},
                    displayInfo: true,
                    listeners:{
                    	'beforechange':'onBeforechange'
                    }
                },
                viewConfig: {
                    enableTextSelection: true
                },
                columns:[
                	{header: '模块ID', dataIndex: 'moduleNo', sortable: true, width: 100},
                    {header: '模块编号', dataIndex: 'moduleCode', sortable: true, width: 100},
                    {header: '模块名称', dataIndex: 'moduleName', sortable: true,width: 200},
                    {header: '所属系统', dataIndex: 'appNo', sortable: true, width: 140,
                    	xtype:'bllookupedit',
    					displayvalue: 'itg_application/listAll.json',
    					displaymember:'appName',
    					valuemember:'appNo',
    					readOnly:true}
                ],
                bind:{store:'{dataGridStore}'}
            }
       ]
	},
	//新增文件夹弹出框
	addWindow:{
		xtype : 'window',
	    title : '菜单名称',
	    itemId: 'addWindow',
	    reference: 'addWindow',
	    width : 200,
	    height: 100,
	    layout: 'fit',
	    resizable : false, 
	    closeAction:'hide',
	    //buttonAlign : 'center',//设置面板上按钮位置
	    plain : false,
	    items : [{
	             xtype: 'form',
	             bodyPadding: 4,
	             //align : 'center',
	             items:[{
	            "name": "menuName",
	            "fieldLabel": "",
	            "xtype": "textfield"}]
        }],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            layout: {
                type: 'vbox',
                align: 'center'//align与pack都可以控制起始位置
                //pack: 'center',
            },
            items: [
                { xtype: 'button', text: '确定', handler:'btnSaveMenu' }
            ]
        }]
        /*bbar中的按钮无法控制居中 注释
         * bbar: [{
                   xtype: 'button',
                   text: '确认',
                   handler:'btnSaveMenu'
               }]*/
	},
	initComponent: function () {
		this.items=[this.toolbar,this.treePanel,this.detailPanel, this.addWindow];
		this.callParent();
	}
});
