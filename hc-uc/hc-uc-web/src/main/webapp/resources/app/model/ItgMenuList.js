/**
 * Description: 菜单管理;
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-09 09:38:33
 * @version 1.0.0
 */
Ext.define('Hc_Framework.model.ItgMenuList', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'menuNo', text: '菜单编号', type: 'int'},
        {name: 'menuName', text: '菜单名称', type: 'string'},
        {name: 'appNo', text: '应用编号', type: 'int'},
        {name: 'projectCode', text: '项目编号', type: 'string'},
        {name: 'moduleNo', text: '模块编号', type: 'int'},
        {name: 'enableFlag', text: '启用标识', type: 'int'},
        {name: 'parentMenuNo', text: '父级Id', type: 'int'},
        {name: 'searchCode', text: '查询码', type: 'string'},
        {name: 'levelNo', text: '层级', type: 'int'},
        {name: 'beginGroup', text: '', type: 'int'},
        {name: 'orderNo', text: '排序号', type: 'int'},
        {name: 'creator', text: '建档人', type: 'string'},
        {name: 'createTime', text: '建档时间'},
        {name: 'modifier', text: '修改人', type: 'string'},
        {name: 'modifyTime', text: '修改时间'},
        {name: 'remarks', text: '备注', type: 'string'},
        {name:'leaf',convert:function(val,rec){
            return rec.get('moduleNo')?true:false;
        }},
        {name: 'children',defaultValue:[]}
    ],
    idProperty: 'menuNo',
    identifier: 'negative'

});