/**
 * Description: 主菜单树 All rights Reserved, Designed By Hc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh. author: wudefeng Createdate:
 * 2015/01/20
 * 
 * Modification History: Date Author What
 * ------------------------------------------
 * 
 */
Ext.define('Hc_Framework.view.ucmain.menu.MainTree', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.maintree',

	header: {
		hidden: true
	},

	rootVisible: false,
	lines: true,
	hideHeaders: true,
	listeners: {
		itemdblclick: 'onTreeMenuClick'
	},
	viewConfig: {
		enableTextSelection: true
	},


	initComponent: function () {
		var me = this;
		me.columns = [{
			xtype: 'treecolumn',
			flex: 1,
			dataIndex: 'menuName',
			renderer: function (value) {
				var searchString = me.searchField.getValue();
				if (searchString.length > 0) {
					return me.strMarkRedPlus(searchString, value);
				}
				return value;
			}
		}];
		Ext.apply(me, {
			store: Ext.create('Hc_Framework.store.MainTree'),
			dockedItems: [
				{
					xtype: 'textfield',
					dock: 'top',
					emptyText: '查询',
					enableKeyEvents: true,
					triggers: {
						clear: {
							cls: 'x-form-clear-trigger',
							handler: 'onClearTriggerClick',
							hidden: true,
							scope: 'this'
						},
						search: {
							cls: 'x-form-search-trigger',
							weight: 1,
							handler: 'onSearchModule'
						}
					},
					onClearTriggerClick: function () {
						this.setValue();
						me.store.clearFilter();
						this.getTrigger('clear').hide();
					},
					listeners: {
						keyup: {
							fn: function (field,e) {
								if(e.keyCode == Ext.event.Event.ENTER){
									me.up('app-main').controller.onSearchModule(field);
									return;
								}
								var value = field.getValue();
								if (value) {
									field.getTrigger('clear').show();
									me.filterStore(value);
								}else{
									me.store.clearFilter();
									field.getTrigger('clear').hide()
								}
							},
							buffer: 300
						},
						render: function (field) {
							this.searchField = field;
						},
						scope: me
					}
			   }
			]
		});
		me.callParent(arguments);
		me.store.on('load',function(obj,record){
			if(record && record.length>0){
				me.expandNode(record[0],true);
			}
		});
	},

	filterStore: function (value) {
		var me = this,
			store = me.store,
			searchString = value.toLowerCase(),
			filterFn = function (node) {
				var children = node.childNodes,
					len = children && children.length,
					visible = v.test(node.get('menuName'))||v.test(node.get('moduleNo'))||v.test(node.get('moduleCode')),
					i;
				if (!visible) {
					for (i = 0; i < len; i++) {
						if (children[i].isLeaf()) {
							visible = children[i].get('visible');
						} else {
							visible = filterFn(children[i]);
						}
						if (visible) {
							break;
						}
					}
				}
				else {
					for (i = 0; i < len; i++) {
						children[i].set('visible', true);
					}
				}
				return visible;
			}, v;

		if (searchString.length < 1) {
			store.clearFilter();
		} else {
			v = new RegExp(searchString, 'i');
			store.getFilters().replaceAll({
				filterFn: filterFn
			});
		}
	},
	strMarkRedPlus: function (search, subject) {
		return subject.replace(
			new RegExp('(' + search + ')', "gi"),
			"<span style='color: indianred;'><b>$1</b></span>"
		);
	}



});