/**
 * Description: 系统主框架 ViewModel
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
Ext.define('Hc_Framework.view.ucmain.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data: {
        system: {
            name: '',
            version: '',
            copyright: 'Copyright ©2014~2020 Hc All Rights Reserved'
        },

        msg: {
            text: '加载完毕',
            state: 's'
        },

        currentUser: null
    },
    formulas: {
        systemInfo: function (get) {
            return get('name') + get('version') ;
        }
    }
});