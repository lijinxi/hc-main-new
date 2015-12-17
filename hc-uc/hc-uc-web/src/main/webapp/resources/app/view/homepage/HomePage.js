/**
 * Description: 首页（可放置用户罗盘）
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.homepage.HomePage', {
    extend: 'Ext.Container',
    alias: 'widget.homepage',

    title:'首页',

    id:'app-homepage',

    layout: {
        type: 'fit',
        align: 'middle'
    },

    initComponent: function () {
        this.callParent();
    }
});