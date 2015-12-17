/**
 * Description: 用户管理view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgloginuser.ItgLoginUser', {
	extend: 'Hc_Common.view.BaseSimplePage',

	alias: 'widget.itgloginuser',

	requires: [
		'Hc_Framework.model.ItgLoginUser',
		'Hc_Framework.view.itgloginuser.ItgLoginUserController',
		'Hc_Framework.view.itgloginuser.ItgLoginUserModel',
		'Hc_Framework.store.ItgDepartment'
	],

	controller: 'itgloginuser',
	viewModel: {
		type: 'itgloginuser'
	},

	initComponent: function (arguments) {
		var me = this;
		var	deptStore = Ext.create('Hc_Framework.store.ItgDepartment');

		Ext.apply(me, {
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
				fieldLabel: '用户账号',
				name: 'userCode'
			}, {
				xtype: 'textfield',
				fieldLabel: '用户名称',
				name: 'userName'
			}, {
                xtype: 'combouseflag',
                fieldLabel: '启用状态',
                name: 'enableFlag'
            }],

			gridModel: 'Hc_Framework.model.ItgLoginUser',
			gridColumns: [
				{
					dataIndex: 'userCode', header: '用户账号', 
					editor: {allowBlank: false,
						regex:/^[a-zA-Z0-9.@\-\_]+$/,  //只能输入字母、数字或中文或下划线
						regexText:'请输入字母、数字与.@-_特殊字符'
				}},
				{dataIndex: 'userName', header: '用户名称', editor: {allowBlank: false}},
				{
					dataIndex: 'password',
					header: '密码',
					editor: {allowBlank: false, inputType: 'password'},
					renderer: function () {
						return '*';
					}
				},
				//{dataIndex: 'pwdLevelNo', header: '密码等级', editor: {xtype: 'numberfield'}},
				{
					dataIndex: 'deptNo', 
					header: '所属部门', 
					editor: {allowBlank: false},
					width: 160,
                	xtype:'bllookupedit',
					estore: deptStore,
					gstore: deptStore,
					displaymember:'deptName',
					valuemember:'deptNo'
				},
				/*{
					dataIndex: 'isAdminGroup',
					header: '管理员组?',
					editor: {xtype: 'comboyesno'},
					renderer: 'renderYesNo'
				},
				{
					dataIndex: 'checkMac',
					header: '检查Mac地址?',
					editor: {xtype: 'comboyesno'},
					renderer: 'renderYesNo'
				},
				{dataIndex: 'addressMac', header: 'Mac地址', editor: true},
				{
					dataIndex: 'checkIp',
					header: '检查IP?',
					editor: {xtype: 'comboyesno'},
					renderer: 'renderYesNo'
				},
				{dataIndex: 'addressIp', header: 'IP地址', editor: true},*/
				{dataIndex: 'mobileNo', header: '手机号码', editor: true},
				{dataIndex: 'email', header: '邮箱', editor: true, width: 135, vtype: 'email'},
				{
      				dataIndex: 'enableFlag',
      				header: '启用状态',
      				editor: {allowBlank: false},
      				xtype:'bllookupedit',
      				displayvalue : "0=禁用:1=启用",
      				width: 60
                },
				{header: '备注', dataIndex: 'remarks', editor: true, width: 135},
                {header: '建档人', dataIndex: 'creator', width: 100},
                {header: '建档时间', dataIndex: 'createTime', width: 135},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 100},
                {header: '修改时间', dataIndex: 'modifyTime', width: 135}
			],
			gridPrimaryKey: 'userCode',
			gridUnionKey: '',

			gridLoadUrl: Hc.basePath + 'itg_login_user/list.json',
			gridSaveUrl: Hc.basePath + 'itg_login_user/batchOperate.json',
			gridExportUrl: Hc.basePath + 'itg_login_user/do_export.json',
			gridImportUrl: Hc.basePath + ''
		});


		/* 测试用 系统自动生成编辑面板,（只需要指定列数）
		*  me.gridEditColumn = 4;
		*/

		/* 测试用 自定义编辑面板 (需要指定面板items)
		me.gridEditLayout = 'auto';
		me.gridEditItems =[{
			xtype:'container',
			height:40,
			layout:{
				type:'table',
				columns:2
			},
			items:[{
				xtype: 'textfield',
				fieldLabel: '用名户',
				width: 300,
				bind:{
					value:'{gridRow.userName}'
				}
			},{
				xtype: 'textfield',
				fieldLabel: '用户编号',
				width: 300,
				bind:{
					value:'{gridRow.userCode}'
				}
			}]
		},
			{
			xtype:'tabpanel',
			height:100,
			items:[{
				title:'联系方式',
				xtype:'container',
				items:[{
					xtype: 'textfield',
					fieldLabel: '手机号',
					width: 200,
					bind:{
						value:'{gridRow.mobileNo}'
					}
				}]
			},{
				title:'单据状态',
				xtype:'container',
				items:[{
					xtype: 'textfield',
					fieldLabel: '建单人',
					width: 200,
					bind:{
						value:'{gridRow.creator}'
					}
				}]
			}]
		}];
      */
		me.callParent(arguments);
		
	}
});