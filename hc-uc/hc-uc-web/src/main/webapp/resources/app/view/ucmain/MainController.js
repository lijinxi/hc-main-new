/**
 * Description: 系统主框架 ViewController
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
Ext.define('Hc_Framework.view.ucmain.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    init: function () {
    	console.info("这是我们的MainControlle1");
        this.checkActiveUser();
        this.callParent();
    },

    checkActiveUser: function () {
        var me = this,
            viewmodel = me.getViewModel();
        var currentUser = Ext.create("Hc_Framework.store.CurrentUser");
        currentUser.load();
        var user = currentUser.getAt(0);
        console.info("uselsdsd");
        console.info(user);
        console.info(user.get('userName'));
        if (user) {
            viewmodel.set('currentUser', user);
            viewmodel.set('system.version', user.get('version'));
            viewmodel.set('system.name', user.get('sysid'));
            return;
        }
        Ext.Ajax.request({
            url:  'getCurrentLoginUser.json',
            success: function (result) {
            	console.info("执行成功了没有");
                var p = JSON.parse(result.responseText);
                if (!p.result) {
                    Hc.alert('获取用户信息出错', function () {
                        me.loginOut();
                    });
                    return;
                }
                if (p.result.resultCode == 0) {
                    var obj = Ext.create(currentUser.model);
                    Ext.apply(obj.data, p.entity);
                    obj.set('version', p.version);
                    obj.set('sysid', p.env);
                    obj.save();
                    currentUser.add(obj);
                    currentUser.sync(true);
                    viewmodel.set('currentUser', obj);
                    viewmodel.set('system.version', obj.get('version'));
                    viewmodel.set('system.name', obj.get('sysid'));
                } else {
                    var msg = p.result.msg || '获取用户信息出错';
                    Hc.alert(msg, function () {
                        me.loginOut();
                    });
                }
            },
            failure: function () {
                Hc.alert('访问系统出错', function () {
                    me.loginOut();
                });
            }
        })
    },

    onExitButtonClick: function (obj) {
        var me = this;
        Hc.confirm('确认退出当前用户？', function (btn) {
            if (btn == 'yes') {
                me.loginOut()
            }
        });
    },

    getUserInfo: function () {
        return this.getViewModel().get('currentUser') || {};
    },

    loginOut: function () {
        var currentUser = Ext.create("Hc_Framework.store.CurrentUser");
        currentUser.load();
        var user = currentUser.getAt(0);
        if (user) {
            user.erase();
            user.save();
        }
        currentUser.sync(true);
        location.href = Hc.basePath + 'logout.json';
    },

    onSearchModule: function (field) {
        var store = this.getView().down('maintree').getStore(),
            value = field.getValue(),
            item;
        if (value == '') return;
        item = store.findRecord('moduleNo', value, 0, false, false, true);
        if (!item || !item.data.leaf) {
            item = store.findRecord('menuName', value, 0, false, false, true)
        }
        if (!item || !item.data.leaf) {
            item = store.findRecord('moduleCode', value, 0, false, false, true)
        }
        if (!item) {
            Hc.alert('模块编号或名称【' + value + '】不存在');
            return;
        }
        this.onTreeMenuClick(null, item);
    },

    onTreeMenuClick: function (treeview, record) {

        if (!record.data.leaf || !record.data.url) return;
           console.info(treeview);
           console.info(record);
        var me = this,
            path = record.data.url.split('#'),
            appCode = record.data.appCode.toLowerCase(),
            jspath = path[0] + record.data.jsUrl;
          console.info(record.data.jsUrl);
         console.info("jspath");
         console.info(path);
         console.info(path[0]);
         console.info(jspath);
        if (appCode == "integ") {
            Hc.basePath = path[0];
        } else {
            Hc[appCode + 'Path'] = path[0];
        }
        var isloaded = appCode + "IsLoaded";
        if (appCode != 'integ' && !Hc[isloaded]) {

            Ext.Loader.loadScript({
                url: jspath, 
                onLoad: function () {
                    me.createTab(record.data);
                    Hc[isloaded] = true;
                }, 
                onError: function () {
                    Hc.alert('加载应用的Js文件出错');
                }
            });

        } else {
            me.createTab(record.data);
        }
    },
    createTab: function (data) {
    	console.info("这是最棒的111");
        var tabPanel = Ext.getCmp('maintabpanel'),
            tabId = 'tab_' + data.menuNo,
            moduleNo = data.url.split('#')[1],
            tabitem = tabPanel.getComponent(tabId),
            userInfo = this.getUserInfo();
          console.info("这是最棒的");
        if (!this.checkModule(moduleNo)) return;
        if (!tabitem) {
            var tab = {
                title: data.menuName,
                itemId: tabId,
                xtype: moduleNo,
                userRight: data.rightValue,
                moduleRight: data.rights,
                userName: userInfo.userName,
                userCode: userInfo.userCode,
                closable: true,
                reorderable: true,
                loadMask: '加载中...'
            };
            tabitem = tabPanel.add(tab);
        }
        tabPanel.setActiveTab(tabitem);
    },

    checkModule: function (moduleNo) {
    	console.info("这是最棒的"+moduleNo);
        var className = Ext.ClassManager.getNameByAlias('widget.' + moduleNo);
        if (className) return true;

        Hc.alert('URL出错,无法创建此模块');
        return false;
    },

    setLastVisitMenu: function (menuData) {
        var ltree = this.lookupReference('lastvisittree'),
            treestore = ltree.getStore(),
            maxCount = 15,
            root = treestore.getRoot(),
            item = root.findChild('menuNo', menuData.menuNo);

        if (item) {
            item.remove();
        }

        if (root.childCount >= maxCount) {
            root.lastChild.remove();
        }

        item = Ext.create('Hc_Framework.model.LastVisit', {
            id: menuData.menuNo,
            text: menuData.menuName,
            leaf: true,
            menuNo: menuData.menuNo,
            menuName: menuData.menuName,
            moduleNo: menuData.moduleNo,
            moduleName: menuData.moduleName,
            moduleUrl: menuData.moduleUrl
        });
        root.insertChild(0, item);
        treestore.sync();
    },

    onDoing: function (btn) {
    	Hc.alert("填出信息");
        this.setMsg('功能【' + btn.getText() + '】正在开发中...');
    },

    setUserPassword: function () {
        var me = this, viewModel = me.getViewModel(),
            currentUser = viewModel.get('currentUser');
        if (!currentUser)return;

        Ext.widget('window', {
            closeAction: 'destroy',
            modal: true,
            bodyPadding: '20 40 20 20',
            title: '更改密码',
            autoShow: true,
            items: {
                xtype: 'form',
                baseCls: 'x-plain',
                defaults:{
                    labelWidth:60,
                    allowBlank: false
                },
                defaultType:'textfield',
                items: [{
                    name: 'oldPassword',
                    inputType: 'password',
                    fieldLabel: '原密码'
                }, {
                    name: 'password',
                    inputType: 'password',
                    fieldLabel: '新密码'
                }, {
                    name: 'newPwd2',
                    inputType: 'password',
                    fieldLabel: '确认密码',
                    vtype:'compareTo',
                    compareTo:'password',
                    compareError:'新密码跟确认密码输入不一致'
                },{
                    name:'userId',
                    xtype:'hiddenfield',
                    bind:{
                        value:'{currentUser.userId}'
                    }
                }]
            },
            bbar: ['->',
                {
                    xtype: 'button',
                    text: '确认',
                    handler: 'onBtnSetPwdClick',
                    scope: me,
                    glyph: Hc.Icon.btnSave
                }, {
                    xtype: 'button',
                    text: '取消',
                    handler: function (btn) {
                        btn.up('window').close()
                    },
                    glyph: Hc.Icon.btnCancel
                }]
        });
    },
    onBtnSetPwdClick: function (btn) {
        var me = this,win = btn.up('window'),
            form = win.down('form'),
            val=form.getValues();
        if (form.isValid()) {
             console.info("单击前");
            var userinfo = {
                userId: val.userId,
                password: hex_md5(val.password),
                oldPassword: hex_md5(val.oldPassword)
            }, param = userinfo;
            console.info("单击后");
            Ext.Ajax.request({
                url: Hc.basePath + 'itg_login_user/changePassword.json',
                //jsonData: JSON.stringify(param),
                params: param,	//单条记录的提交直接使用params定义参数
                method: 'POST',
                success: function (d) {
                    var r = JSON.parse(d.responseText);
                    if (r.result) {
                        if (r.result.resultCode == 0) {
                            Hc.alert('更改密码成功,请重新登录系统', function () {
                                me.loginOut();
                            });
                        } else {
                            Hc.alert(r.result.msg);
                        }
                    } else {
                        Hc.alert('不明错误');
                    }
                },
                failure: function (d) {
                    Hc.alert('系统异常!' + d.responseText)
                }
            });
        }
    },

    setMsg: function (msg) {
        this.getViewModel().set('msg.text', msg);
    }
});
