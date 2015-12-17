/**
 * Description: 功能权限清单 view
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
Ext.define("Hc_Framework.view.itgright.ItgRightList", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgrightlist',

    requires: [
        'Hc_Framework.model.ItgRightList',
        'Hc_Framework.view.itgright.ItgRightListController',
        'Hc_Framework.view.itgright.ItgRightListModel',
        'Hc_Framework.store.ItgProject'
    ],

    controller: "itgrightlist",

    viewModel: {
        type: "itgrightlist"
    },

    initComponent: function () {
        var me = this,
        	projectStore = Ext.create('Hc_Framework.store.ItgProject');

        Ext.apply(me, {
            searchItems: [
			{
				xtype : 'extcombox',
				fieldLabel : '所属项目',
				name : 'projectCode',
				store: projectStore,
				displaymember:'projectName',
				valuemember:'projectCode'
			},
            {xtype: 'textfield', fieldLabel: '权限名称', name: 'rightName'},
            {
                xtype: 'combouseflag',
                fieldLabel: '启用状态',
                name: 'enableFlag'
            }],

            gridModel: 'Hc_Framework.model.ItgRightList',
            gridColumns: [
                {header: '权限值', dataIndex: 'rightNo', editor: {allowBlank: false, 
                	xtype: 'numberfield',
                	minValue: 1,
                	onSpinUp: function(){
                		var me = this,
                			nextValue = me.getValue()*2; //权限值的next+相当于当前值乘以2 权限值的next-相当于当前值除以2
                        
                        if (!me.readOnly) {
                            me.setSpinValue(Ext.Number.constrain(nextValue, me.minValue, me.maxValue));
                        }
                	},
                	onSpinDown: function(){
                		var me = this,
                			nextValue = me.getValue()/2;
                        
                        if (!me.readOnly) {
                            me.setSpinValue(Ext.Number.constrain(nextValue, me.minValue, me.maxValue));
                        }
                	}
                }}, 
                {header: '权限名称', dataIndex: 'rightName', editor: {allowBlank: false}},
                {dataIndex: 'projectCode', text: '所属项目', editor: {allowBlank: false}, width:150,
					xtype:'bllookupedit',
					estore: projectStore,
					gstore: projectStore,
					displaymember:'projectName',
					valuemember:'projectCode'
				},
                /*{
                    header: '权限类型', dataIndex: 'rightType',
                    editor: {
                        xtype: 'combo',
                        store: [[0, '标准权限'], [1, '扩展权限'], [2, '数据权限']],
                        editable: false,
                        allowBlank: false
                    },
                    width: 80,
                    renderer:function(v){
                        if(v==0) return '标准权限';
                        if(v==1) return '扩展权限';
                        if(v==2) return '数据权限';
                        return ""
                    }
                },*/
                {
                	header: '启用状态', dataIndex: 'enableFlag', width: 80,
                	editor: {xtype: 'combouseflag',allowBlank: false},
                	renderer: 'renderUseFlag'
                },
                {header: '排列序号', dataIndex: 'orderNo', editor: {xtype: 'numberfield'}, width: 80},
                {header: '备注', dataIndex: 'remarks', editor: true, width: 135},
                {header: '建档人', dataIndex: 'creator', width: 100},
                {header: '建档时间', dataIndex: 'createTime', width: 135},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 100},
                {header: '修改时间', dataIndex: 'modifyTime', width: 135}
            ],
            gridPrimaryKey: 'appCode',
            gridUnionKey: '',

            gridLoadUrl: Hc.basePath + 'itg_right_list/list.json',
            gridSaveUrl: Hc.basePath + 'itg_right_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'itg_right_list/do_export.json',
            gridImportUrl: Hc.basePath + ''
        });

        me.callParent();
    }
});