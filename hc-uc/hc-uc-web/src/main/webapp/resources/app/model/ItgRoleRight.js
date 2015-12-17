/**
 * Description: 角色分配权限 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/31
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.ItgRoleRight', {
    extend: Ext.data.Model,

    alias: 'model.itgroleright',

    fields: [
        {name: 'roleRightId', text: '角色权限ID', type: 'int'},
        {name: 'roleId', text: '角色ID', type: 'int'},
        {name: "rightValue", type: 'int',defaultValue:0},
        {name:'hasRight',type:'boolean',convert:function(v,f){
        	if(f.get('rightValue')>0){
        		return true;
        	}
        	return false;
        }},        
        {name: 'moduleNo', type: 'int'},
        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'},

        {name: 't2_moduleNo', type: 'int'},
        {name: "moduleCode"},
        {name: "moduleName"},
        {name: "appNo", type: 'int'},
        {name: "moduleUrl"},
        {name: "t2_rightValue", type: 'int'}
        
    ],

    idProperty: 'roleRightId',
    identifier: 'negative'
});
