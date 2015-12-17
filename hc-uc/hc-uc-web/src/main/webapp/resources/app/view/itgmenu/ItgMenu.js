/**
 * Description: 菜单管理 view
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
Ext.define("Hc_Framework.view.itgmenu.ItgMenu", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgmenu',

    requires: [
        'Hc_Framework.model.ItgMenuList',
        'Hc_Framework.model.ItgModuleList',
        'Hc_Framework.view.itgmenu.ItgMenuController',
        'Hc_Framework.view.itgmenu.ItgMenuModel'
    ],

    controller: "itgmenu",
    viewModel: {
        type: "itgmenu"
    },

    initComponent: function () {
        var me = this;        
     
        me.gridEditModel = "none";
        me.gridCanDrag = true;
        me.gridCanEdit = false;
           
        Ext.apply(me, {
            searchItems: [{
                xtype: 'combo',
                width: '250',
                reference:'ddlProjectCode',
                editable: false,
                triggerAction: 'all',
                fieldLabel: '项目编码',
                allowBlank: false,
                name: 'projectCode',
                displayField: 'projectName',
                valueField: 'projectCode',
                store: {
                    model: 'Hc_Framework.model.ItgProject',
                    type: 'basestore',
                    autoLoad: true,
                    proxy: {
                        url: Hc.basePath + 'itg_project/list.json'
                    }
                }
            }],

            gridModel: 'Hc_Framework.model.ItgApplication',
            gridColumns: [
                {header: '模块ID', dataIndex: 'moduleNo'},
                {header: '模块编号', dataIndex: 'moduleCode'},
                {header: '模块名称', dataIndex: 'moduleName', flex: 1},
                {header: '项目代号', dataIndex: 'projectCode', width: 50},
                {header: '系统ID', dataIndex: 'appNo', width: 50},
                {header: '是否可用', dataIndex: 'enableFlag'},
                {header: '是否报表', dataIndex: 'isReport'},
                {header: 'URL', dataIndex: 'moduleUrl', width: 140},
                {header: '权限值', dataIndex: 'rightValue', width: 50},
                {header: '备注', dataIndex: 'remarks'}
            ],
            gridPrimaryKey: 'appCode',
            gridUnionKey: '',
            gridLoadUrl: Hc.basePath + 'itg_module_list/list.json?inMenu=false'
        });

        me.otherItems = [{
            xtype: 'treepanel',
            region: 'west',
            split: true,
            reference: 'menutree',
            width: 200,
            batchUrl: Hc.basePath +'itg_menu_list/batchOperate.json',
            rootVisible: false,
            lines: true,
            columns: [{
                xtype: 'treecolumn',
                flex: 1,
                dataIndex: 'menuName',
                text: "菜单名称",
                sortable: false,
                hideable: false

            }],
            store:{
                model:'Hc_Framework.model.ItgMenuList',
                type:'treebase',
                proxy: {
                    type: 'ajax',
                    url: Hc.basePath + 'itg_menu_list/list.json'
                },
                root: {
                    id:0,
                    menuName: 'hc',
                    menuNo:0,
                    expanded: false
                },
                nodeParam:'parentMenuNo',
                parentIdProperty:'parentMenuNo'
            },
            listeners: {
                'selectionchange': 'onTreeSelectionChange'
            },
            viewConfig: {
                listeners: {
                    render: function (tree) {
                        var dropTarget = new Ext.dd.DropTarget(tree.el, {
                            ddGroup: 'dd_commongrid',
                            copy: false,
                            notifyDrop: function (dragSource, event, data) {
                                var treeObj = me.lookupReference('menutree'),
                                    node = treeObj.selection;
                                if (!node) return true;
                                if (node.isLeaf()) node = node.parentNode;

                                var insertList = [];
                                Ext.Array.each(data.records, function (item) {
                                    insertList.push({
                                        menuName: item.data.moduleName,
                                        moduleNo: item.data.moduleNo,
                                        parentMenuNo: node.id,
                                        projectCode: node.data.projectCode,
                                        appNo: node.data.appNo,
                                        enableFlag: 1,
                                        searchCode: node.data.searchCode,
                                        levelNo: node.data.levelNo + 1,
                                        orderNo: node.data.orderNo
                                    });
                                });
                                me.controller.saveData({data: {insertList: insertList}, srcObj: treeObj});
                                return true
                            }
                        });
                    }
                }
            }
        },{
            xtype:'window',
            autoShow: false,
            closeAction: 'hide',
            reference:'editWin',
            modal: true,
            items: [{
                xtype: 'form',
                items: [{
                        "name": "appNo",
                        "fieldLabel": "应用编号",
                        "xtype": "numberfield"
                    },{
                        "name": "menuName",
                        "fieldLabel": "菜单名称",
                        "xtype": "textfield"
                    }, {
                        "name": "searchCode",
                        "fieldLabel": "查询码",
                        "xtype": "textfield"
                    }, {
                        "name": "levelNo",
                        "fieldLabel": "层级",
                        "xtype": "numberfield"
                    }, {
                        "name": "orderNo",
                        "fieldLabel": "排序码",
                        "xtype": "numberfield"
                    }],
                layout: {
                    type: 'table',
                    columns: 2
                },
                bodyPadding: 10
            }],
            title: '新增菜单',
            bbar: ['->',
                {
                    xtype: 'button',
                    text: '确认',
                    handler:'btnSaveMenu'
                },
                {
                    xtype: 'button',
                    text: '取消',
                    handler: function(btn){btn.up('window').close();}
                }
            ]
        }];
        
        me.callParent();
    }

});