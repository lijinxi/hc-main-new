/**
 * Description: ��д���ļ�����;
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-09 09:38:33
 * @version 1.0.0
 */
Ext.define('Hc_Framework.view.itgmenulist.ItgMenuListController', {
    extend: 'Hc_Common.view.BaseTreePageController',
    alias: 'controller.itgmenulist',

    initAddData:function(newObj,parentObj){
        if(!newObj) return;
        newObj.set('projectCode','hc');
    },



    onAddChildClick:function() {
        var win = this.lookupReference('commonchildWin');
        win.show();
    },

    getWinData:function(data,btn){
        if(!data || data.length<1) {
            btn.up('window').close();
            return;
        }
        var param={},
            insertList=[],
            insertObj,
            pNode = this.view.workObject.getSelectionModel().getSelection()[0] ;


        Ext.Array.each(data,function(item){
            insertObj = new Object();
            insertObj.menuNo=insertObj.moduleNo = item.get('moduleNo');
            insertObj.menuName = item.get('moduleName');
            insertObj.appNo = pNode.get('appNo');
            insertObj.projectCode = pNode.get('projectCode');
            insertObj.enableFlag=1;
            insertObj.parentMenuNo=pNode.get('menuNo');
            insertObj.searchCode=0;
            insertObj.levelNo=0;
            insertObj.orderNo=2;
            insertList.push(insertObj);
        });
        param.insertList = insertList;

        this.saveData(param,this.view.workObject,btn);
    }
});