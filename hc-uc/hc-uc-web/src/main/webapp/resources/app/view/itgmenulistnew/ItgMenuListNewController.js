/**
 * Description: All rights Reserved, Designed ByHc Copyright: Copyright(C)
 * 2014-2015 Company: Wonhigh.
 * 
 * @author: liutao
 * @date: 2015-03-09 09:38:33
 * @version 1.0.0
 */
Ext.define('Hc_Framework.view.itgmenulistnew.ItgMenuListNewController', {
    extend: 'Hc_Common.view.BasePageController',
    alias: 'controller.itgmenulistnew',
    
    init:function(){
    },
    //刷新按钮
    onClickRefresh:function(){
    	var projectCode = this.lookupReference('projectCodeCombo').getValue();
    	if(projectCode == '' || projectCode == null){
    		Ext.MessageBox.alert("提示",'请选择所属项目！');
    		return;
    	}
    	//刷新树
    	this.reloadMenuTree(true);
    	//刷新网格
    	this.reloadDataGrid();
    },
    /**
     * isRoot-是否为根节点加载
     * parentNode-上级节点
     */
    reloadMenuTree:function(isRoot){
    	var projectCode = this.lookupReference('projectCodeCombo').getValue();
    	var menuTree = this.lookupReference('menuTree');
	   	menuTree.store.proxy.extraParams['projectCode'] = projectCode;
	   	menuTree.store.root.data.expanded = true;
	   	//如果为非跟节点的reload，则直接加载；否则需指定从根节点0作为参数重新加载
	   	if(isRoot){
	   		//menuTree.store.proxy.extraParams['parentMenuNo'] = 0;
	   		menuTree.store.load();//不能使用reload 否则会出现节点颠倒问题 load默认会从根节点加载
	   		//delete menuTree.store.proxy.extraParams['parentMenuNo'];
	   	}else{
	   		menuTree.store.reload();
	   	}
    	
	   	menuTree.getView().refresh();
    },
    reloadDataGrid:function(){
    	var projectCode = this.lookupReference('projectCodeCombo').getValue();
    	var dataGrid = this.lookupReference('dataGrid');
    	var dataGridStore = dataGrid.store;
    	dataGridStore.proxy.extraParams['projectCode'] = projectCode;
    	dataGridStore.proxy.extraParams['inMenu'] = false;
    	var searchPanel = this.lookupReference('searchPanel');
    	if (searchPanel) {
             var formValue = searchPanel.getValues();
             for (var field in formValue) {
                 if (formValue[field] !== '') {
                	 dataGridStore.proxy.extraParams[field] = formValue[field];
                 }else{
                     delete	dataGridStore.proxy.extraParams[field];
                 }
             }
         }
    	dataGridStore.reload();
    },
    //分页控件改变事件，需添加额外参数
    onBeforechange:function(srcObj, eOpts){
    	var projectCode = this.lookupReference('projectCodeCombo').getValue();
    	eOpts['projectCode'] = projectCode;
    	var searchPanel = this.lookupReference('searchPanel');
    	if (searchPanel) {
             var formValue = searchPanel.getValues();
             for (var field in formValue) {
                 if (formValue[field] !== '') {
                	 eOpts[field] = formValue[field];
                 }
             }
         }
    },
    //所属项目值改变事件
    onChangeProjectCode:function(obj,newval,oldval){
	   	var projectCode = newval;
	   	this.reloadMenuTree(true);//所有内部函数的调用都要用this,存在作用域的问题 定义的都是局部方法,必须要用this调用
	   	//刷新网格
    	this.reloadDataGrid();
    },
    //查询按钮点击事件
    onClickSearch:function(){
    	this.reloadDataGrid();
    },
    //增加文件夹
    addMenuFolder:function(){
    	var addWindow = this.lookupReference('addWindow'),
    		menuTree = this.lookupReference('menuTree');
    	//弹窗前置条件检测
    	var curNode = menuTree.selection;
    	if(curNode==null || !curNode.isLoaded()){
    		Ext.MessageBox.alert("提示",'未选中菜单文件夹节点或者该节点并未展开');
    		return ;
    	}
    	//弹窗
    	addWindow.show();
    },
    //新增菜单弹出框-确定按钮-保存
    btnSaveMenu:function(btn){
    	this.doInsert(0, btn);
    },
    //移除文件夹
    removeMenuFolder:function(btn){
    	this.doDelete(0);
    },
    //添加模块
    addModule:function(btn){
    	this.doInsert(1, btn);
    },
    //移除模块
    removeModule:function(btn){
    	this.doDelete(1);
    },
    //新增主体 dataType：0-菜单 1-模块
    doInsert:function(dataType, btn){
    	var me = this,
			insertList = [],
			menuTree = this.lookupReference('menuTree'),
			curNode = menuTree.selection;
    	if(curNode==null){
    		Ext.MessageBox.alert("提示",'请选中菜单树节点');
    		return ;
    	}
    	var	curSearchCode = curNode.data.searchCode,
    		childNodesCnt = (curNode.childNodes!=null && curNode.childNodes.length) || 0,
    		param = {};
    		
    	if(dataType==0){
    		var addWindow = this.lookupReference('addWindow'),
        		form = btn.up('window').down('form'),
        		record= form.getRecord(),//model record
    			data = form.getValues(),//form name&value
        		searchCode = curSearchCode + '-' + Ext.String.leftPad(childNodesCnt+1,2,'0');//检索码增加连接符;
        	if(data.menuName == ''){
        		Ext.MessageBox.alert("提示",'请输入菜单名称');
        		addWindow.close();
        		return;
        	}
        	insertList.push({
                menuName: data.menuName,
                parentMenuNo: curNode.id,
                projectCode: curNode.data.projectCode,
                appNo: curNode.data.appNo,
                enableFlag: 1,
                searchCode: searchCode,
                levelNo: curNode.data.levelNo + 1,
                orderNo: childNodesCnt+1 //序号orderNno会从0开始  与树的index相对应
            });
    	}else{
			var dataGrid = this.lookupReference('dataGrid'),
				selectedRows = dataGrid.getSelectionModel().getSelection();
			if(selectedRows==null || selectedRows.length==0){
				Ext.MessageBox.alert("提示",'请先选中所需添加的模块');
				return ;
			}
			//叶子节点不能添加模块
			if(curNode.data.leaf){
	    		Ext.MessageBox.alert("提示",'叶子节点【模块】不能添加模块');
	    		return ;
	    	}
			var i = 1; //定义的循环变量 与selectedRows数组中的下标一致
			Ext.Array.each(selectedRows, function(item){
				var orderNo = childNodesCnt+i,
					searchCode = curSearchCode + '-' + Ext.String.leftPad(childNodesCnt+i,2,'0');
	    		insertList.push({
	    			menuName:item.get('moduleName'),
	    			moduleNo: item.get('moduleNo'),
	    			parentMenuNo: curNode.id,
	                projectCode: curNode.data.projectCode,
	                appNo: curNode.data.appNo,
	                enableFlag: 1,
	                searchCode: searchCode,
	                levelNo: curNode.data.levelNo + 1,
	                orderNo: orderNo
	    		});
	    		i++;
	    	});
    	}
    	
    	if(insertList.length > 0) param.insertList = insertList;
    	Ext.Ajax.request({
            url: menuTree.batchUrl,
            jsonData: JSON.stringify(param),
            method: 'POST',
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.result.resultCode=="0") {
                	if(dataType==0){
                		addWindow.close();
                	}
                	(dataType==1 && me.reloadDataGrid()) || (dataType==0 && addWindow.close());//添加模块需刷新网格 添加菜单需关闭弹出框
                	me.reloadMenuTree();
                	
                } else {
                    Ext.MessageBox.alert("提示", result.result.msg);
                }
            }
        });
    },
    //删除主体 dataType：0-菜单 1-模块
    doDelete:function(dataType){
    	var me = this,
			menuTree = this.lookupReference('menuTree'),
			curNode = menuTree.selection;
		if(curNode == null){
			Ext.MessageBox.alert("提示",'请先选中所移除的节点');
			return ;
		}
		if((curNode.data.leaf&&dataType==0) || (!curNode.data.leaf&&dataType==1)){
			Ext.MessageBox.alert("提示",'当前选中的节点与操作按钮的操作对象不匹配');
			return;
		}
		if(dataType===0){
			var childNodesCnt = curNode.childNodes!=null && curNode.childNodes.length;
			if(childNodesCnt > 0){
				Ext.MessageBox.alert("提示",'该菜单存在子节点，不能删除');
				return;
			}
		}
		
		//从父节点中显式删除当前节点，前端树结构中的节点
		var parentNode= curNode.parentNode;
		parentNode.removeChild(curNode);
		
		//将当前删除节点提交到后端
		var param = {menuNo:curNode.id},
			url = Hc.basePath+'itg_menu_list/deleteById.json';
		Ext.Ajax.request({
			url: url,
	        //jsonData: JSON.stringify(param),//批量的提交使用josnData形式
			params: param,	//单条记录的提交直接使用params定义参数
	        method: 'POST',
	        success: function (response) {
	            var result = JSON.parse(response.responseText);
	            if (result.result.resultCode=="0") {
	            	dataType==1 && me.reloadDataGrid();
	            	//me.reloadMenuTree();
	            } else {
	                Ext.MessageBox.alert("提示", result.result.msg);
	            }
	        }
	    });
    },
    //上移模块
    moveUp:function(){
    	var me = this,
			menuTree = this.lookupReference('menuTree'),
			treeStore = menuTree.store,
			curNode = menuTree.selection,
			curIndex = curNode.data.index,
			parentNode = curNode.parentNode;
		
		//操作前置验证
		if(curNode == null){
			Ext.MessageBox.alert("提示",'请先选中所需的节点');
			return ;
		}
		//到顶与到底判断
		if(curNode.data.index == 0){
			Ext.MessageBox.alert("提示",'当前已为此级文件夹第一位置，无法上移');
			return;
		}else{
			var preNode = curNode.previousSibling,
				preIndex = curIndex-1;
			parentNode.insertBefore(curNode, preNode);
			//更新orderNo
			curNode.dirty = true;
			curNode.data.orderNo = preIndex+1;
			preNode.dirty = true;
			preNode.data.orderNo = curIndex+1;
		}
    },
    //下移模块
    moveDown:function(){
    	var me = this,
			menuTree = this.lookupReference('menuTree'),
			treeStore = menuTree.store,
			curNode = menuTree.selection,
			curIndex = curNode.data.index,
			parentNode = curNode.parentNode;
		
		//操作前置验证
		if(curNode == null){
			Ext.MessageBox.alert("提示",'请先选中所需的节点');
			return ;
		}
		//到顶与到底判断
		if(curNode.data.index == parentNode.childNodes.length-1){
			Ext.MessageBox.alert("提示",'当前已为此级文件夹最后位置，无法下移');
			return;
		}else{
			var nextNode = curNode.nextSibling,
				nextIndex = curIndex+1;
			parentNode.insertBefore(nextNode, curNode);
			//更新orderNo
			curNode.dirty = true;
			curNode.data.orderNo = nextIndex+1;//序号从1开始 与生成的检索码序号保持一致
			nextNode.dirty = true;
			nextNode.data.orderNo = curIndex+1;
		}
    },
    moveSave:function(){
    	var me = this,
			menuTree = this.lookupReference('menuTree'),
			treeStore = menuTree.store;

		//获取此次所修改的数据
        var items = treeStore.getModifiedRecords(),
        	param = {},
        	updateItems = [];
        if(items.length == 0){
        	Ext.MessageBox.alert("提示",'不存在所修改的数据，无需保存');
			return;
        }
        Ext.Array.each(items, function(item){
			//item.data.moduleNo==0 && delete item.data.moduleNo; //moduleNo为整型，默认为0 需处理掉
        	//自行组装修改的数据，因moduleNo存在默认值，并且采用默认store的数据提交后台的时候存在很多非修改的无用字段的提交
			var changedData = {
					'menuNo' : item.data.menuNo,
					'orderNo' : item.data.orderNo
			};
			
        	updateItems.push(changedData);
        });
        //将当前移动结果提交到后端 进行保存
		param.updateList = updateItems;
		var url = Hc.basePath + 'itg_menu_list/batchOperate.json';
		Ext.Ajax.request({
			url: url,
	        jsonData: JSON.stringify(param),//批量的提交使用josnData形式
	        method: 'POST',
	        success: function (response) {
	            var result = JSON.parse(response.responseText);
	            if (result.result.resultCode == "0") {
	            	//保存成功后提交store中的所有修改
	            	treeStore.commitChanges();
	            	me.reloadMenuTree();
	            	/*Ext.MessageBox.alert("提示", '保存成功！');
	            	setTimeout(1000);//单位ms*/
	            	 Ext.toast('保存成功！');
	            } else {
	                Ext.MessageBox.alert("提示", result.result.msg);
	            }
	        }
	    });
    }
});