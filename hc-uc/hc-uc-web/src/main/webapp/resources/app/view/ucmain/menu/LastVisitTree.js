/**
 * Description: 最近访问菜单树
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.menu.LastVisitTree', {
    extend : 'Ext.tree.Panel',
    xtype : 'lastvisittree',
    header:{
        hidden:true
    },
    reference:'lastvisittree',
    rootVisible : true,
    lines : true,
    hideHeaders:true,
    columns:[
        { dataIndex: 'menuName',xtype: 'treecolumn',flex: 1}
    ],

    store:{type:'lastvisit'},
    listeners : {
        itemclick : 'onTreeMenuClick'
    },
    initComponent : function() {
        this.callParent();
    }
});