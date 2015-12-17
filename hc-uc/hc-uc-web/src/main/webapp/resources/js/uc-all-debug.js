/**
 * Description: 主框架应用程序
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

Ext.define('Hc_Framework.Application', {
    extend: 'Ext.app.Application',
    name: 'Hc_Framework', 
    appFolder:'resources/app',
    
    controllers: [
        'Root'
        // TODO: add controllers here
    ],
    launch: function () {
     console.info("军情解码李金喜");
    //  console.info("这是我们的ROOT");
      //  new  Hc_Framework.view.uclogin.Login();
     //   console.info("这是我们的ROOT1");
    }
});

/**
 * Description: 主框架控制器
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * -----------------------------------------
 *
 */

Ext.define('Hc_Framework.controller.Root', {
    extend: 'Ext.app.Controller',

    

    // 启动主程序
    onLaunch: function () {
        var me = this;
       // me.showMainUI();
        //console.info("这是我们的ROOT");
      //  new  Hc_Framework.view.uclogin.Login();
       // console.info("这是我们的ROOT1");
        var currentUser = Ext.create("Hc_Framework.store.CurrentUser");
        console.info("这是我们的ROOT1:"+currentUser.data.length);
        currentUser.load();
        console.info("这是我们的ROOT2:"+currentUser.data.length);
       //   Hc.alert('系统出错');
        if (currentUser.data.length < 1) {
            Ext.Ajax.request({
                url: Hc.basePath + '/getCurrentLoginUser.json',
                success: function (result) {
                   console.info("Root执行了没有");
                   console.info(result.responseText);
                    var p = JSON.parse(result.responseText);
                    if (p.result.resultCode == 0) {
                        var obj = Ext.create(currentUser.model, {
                        	userId:p.entity.userId,
                            userCode: p.entity.userCode,
                            userName: p.entity.userName,
                            deptName: p.entity.deptName,
                            isAdminGroup: p.entity.isAdminGroup,
                            email:p.entity.email,
                            password:p.entity.password
                        });
                       
                        obj.save();
                        currentUser.add(obj);
                        currentUser.sync(true);
                        currentUser.load();
                        console.info("这是我们的ROOT1Main1sssaaaaadasdfasd23232:");
                        console.info("这是我们的ROOT1Main1:"+currentUser.getAt(0).get('userCode'));
                        console.info("这是我们的ROOT1Main2:"+currentUser.getAt(0).get('userName'));
                        console.info("这是我们的ROOT1Main3:"+currentUser.getAt(0).get('email'));
                        console.info("这是我们的ROOT1Main3:"+currentUser.getAt(0).get('deptName'));
                        console.info("这是我们的ROOT1Main4:"+currentUser.getAt(0).get('password'));
                        me.showMainUI(currentUser.getAt(0));
                    } else {
                        Hc.alert(p.result.msg);
                    }
                },
                failure: function () {
                    Hc.alert('系统出错');
                }
            })
        } else {
            me.showMainUI(currentUser.getAt(0));
        }
    },

    // 显示主界面
      showMainUI: function (currentUser) {
    	console.info("这是我们的ROOT1Main:"+currentUser);
    	console.info(currentUser);
       Ext.widget('app-main', {viewModel: {data: {currentUser: currentUser}}});
    }
});


var hexcase = 0;  
var b64pad  = ""; 
var chrsz   = 8;  
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function calcMD5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}

function md5_vm_test()
{
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

function core_md5(x, len)
{

  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;
  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;
  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);
    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);
    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);
    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);
  
}

function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function core_hmac_md5(key, data)
{
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++) 
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

function str2binl(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}

function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}

function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}
/**
 * Description: 当前用户
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/28 0028
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.model.CurrentUser', {
    extend: 'Ext.data.Model',

    alias:'model.currentuser',

    fields: [
        {name: 'userId', type: 'int'},
        {name: 'userCode'},
        {name: 'userName'},
        {name: 'password'},
        {name: 'pwdModifyTime'},
        {name: 'deptNo', type: 'int'},
        {name: 'isAdminGroup',  type: 'int'},
        {name: 'checkMac', type: 'int'},
        {name: 'addressMac'},
        {name: 'checkIp',  type: 'int'},
        {name: 'addressIp', text: 'IP地址'},
        {name: 'mobileNo', text: '手机号'},
        {name: 'email', text: '邮箱地址'},
        'deptName',
        'version',
        'sysid',
        'basePath'
    ],

    proxy: {
            type: 'sessionstorage',
            id  : 'currentuser'
    }
});
/**
 * Description: 应用清单 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/2/5
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.model.ItgApplication', {
    extend: 'Ext.data.Model',

    alias: 'model.itgapplication',

    fields: [
        {name: 'appNo', text: '应用编号', type: 'int'},
        {name: 'appCode', text: '应用编码',type:'string'},
        {name: 'appName', text: '应用名称',type:'string'},
        {name: 'projectCode', text: '所属项目'},
        {name: 'enableFlag', text: '启用状态', type: 'int', defaultValue: 1},
        {name: 'appUrl', text: '应用url'},
        {name: 'jsUrl', text: 'jsUrl'},
        {name: 'imageUrl', text: '图标路径'},
        {name: 'imageName', text: '图标名称'},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: 'creator', text: '建档人'},
        {name: 'createTime', text: '建档时间'},
        {name: 'modifier', text: '修改人'},
        {name: 'modifyTime', text: '修改时间'},
        {name: 'remarks', text: '备注'}
    ],

    idProperty: 'appNo',
    identifier: 'negative'
});




/**
 * Description: 用户管理 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.ItgLoginUser', {
    extend: Ext.data.Model,

    alias: 'model.itgloginuser',

    fields: [
        {name: 'userId', text: '用户ID', type: 'int'},
        {name: 'userCode', text: '用户编号'},
        {name: 'userName', text: '用户名称'},
        {name: 'enableFlag', text: '是否启用', type: 'int'},
        {name: 'password', text: '密码'},
        {name: 'pwdLevelNo', text: '密码等级', type: 'int'},
        {name: 'pwdModifyTime', text: '密码更改日期'},
        {name: 'deptNo', text: '部门编号', type: 'int'},
        {name: 'isAdminGroup', text: '是否管理员组', type: 'int'},
        {name: 'checkMac', text: '是否检查Mac地址', type: 'int'},
        {name: 'addressMac', text: 'Mac地址'},
        {name: 'checkIp', text: '是否检查IP', type: 'int'},
        {name: 'addressIp', text: 'IP地址'},
        {name: 'mobileNo', text: '手机号'},
        {name: 'email', text: '邮箱地址'},
        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'},
        {name: 'modifier', text: '更改人员'},
        {name: 'modifyTime', text: '更改日期'},
        {name: 'remarks', text: '备注'}
    ],
    idProperty: 'userId',
    identifier: 'negative'
});

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
/**
 * Description: 模块管理Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.ItgModuleList', {
    extend: 'Ext.data.Model',

    alias: 'model.itgmodulelist',

    fields: [
        {name: 'moduleNo', type: 'int'},
        {name: "moduleCode"},
        {name: "moduleName"},
        {name: "projectCode"},
        {name: "appNo", type: 'int'},
        {name: "enableFlag", type: 'int', defaultValue: 1},
        {name: "isReport", type: 'int'},
        {name: "moduleUrl"},
        {name: "rightValue", type: 'int'},
        {name: "hint"},
        {name: "creator"},
        {name: "createTime"},
        {name: "modifier"},
        {name: "modifyTime"},
        {name: "remarks"}
    ]

});
/**
 * Description: 项目清单 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/2/5
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.model.ItgProject', {
    extend: 'Ext.data.Model',

    alias: 'model.itgproject',

    fields: [
        {name: 'projectCode', text: '项目编码'},
        {name: 'projectName', text: '项目名称'},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: "enableFlag",text:'启用状态', type: 'int'},
        {name: 'creator', text: '建档人'},
        {name: 'createTime', text: '建档时间'},
        {name: 'modifier', text: '建档人'},
        {name: 'modifyTime', text: '建档时间'},
        {name: 'remarks', text: '备注'}
    ],

    //idProperty: 'projectCode',
	//identifier: ''
    });

/**
 * Description: 功能权限清单 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.ItgRightList', {
    extend: Ext.data.Model,

    alias: 'model.itgrightlist',

    fields: [
        {name: 'rightId', text: '权限ID', type: 'int'},
        {name: 'projectCode', text: '项目代号'},
        {name: 'rightNo', text: '权限编号'},
        {name: 'rightName', text: '权限名称'},
        {name: 'enableFlag', text: '启用', type: 'int', defaultValue: 1},
        {name: 'rightType', text: '权限类型', type: 'int'},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'},
        {name: 'modifier', text: '更改人员'},
        {name: 'modifyTime', text: '更改日期'},
        {name: 'remarks', text: '备注'}
    ],
    idProperty: 'rightId',
    identifier: 'negative'
});

/**
 * Description: 角色管理 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.ItgRoleList', {
    extend: Ext.data.Model,

    alias: 'model.itgrolelist',

    fields: [
        {name: 'roleId', text: '角色ID', type: 'int'},
        {name: 'roleName', text: '角色名称'},
        {name: 'projectCode', text: '所属项目'},
        {name: 'enableFlag', text: '是否启用', type: 'int'},
        {name: 'roleOwner', text: '角色拥有者'},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'},
        {name: 'modifier', text: '更改人员'},
        {name: 'modifyTime', text: '更改日期'},
        {name: 'remarks', text: '备注'},
    ],

    idProperty: 'roleId',
    identifier: 'negative'
});

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

/**
 * Description: 角色分配用户 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.ItgRoleUser', {
    extend: Ext.data.Model,

    alias: 'model.itgroleuser',

    fields: [
        {name: 'userRoleId', text: '用户角色ID', type: 'int'},
        {name: 'userId', text: '角色ID', type: 'int'},
        {name: 'roleId', text: '角色ID', type: 'int'},

        {name: 'userCode', text: '用户编号'},
        {name: 'userName', text: '用户名称'},
        {name: 'enableFlag', text: '是否启用', type: 'int'},
        {name: 'deptNo', text: '部门编号', type: 'int'},
        {name: 'isAdminGroup', text: '是否管理员组', type: 'int'},
        {name: 'addressMac', text: 'Mac地址'},
        {name: 'addressIp', text: 'IP地址'},
        {name: 'mobileNo', text: '手机号'},
        {name: 'email', text: '邮箱地址'},
        {name: 'remarks', text: '备注'},

        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'}
    ],

    idProperty: 'userRoleId',
    identifier: 'negative'
});

/**
 * Description: 用户特权 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/09
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.model.ItgUserPrivilege', {
    extend: 'Ext.data.Model',

    alias: 'model.itguserprivilege',

    fields: [
        {name: 'userPrivilegeId', text: '特权编号', type: 'int'},
        {name: 'userId', text: '用户编号',type: 'int'},
        {name: 'moduleNo', text: '模块编号', type: 'int'},
        {name: 'moduleCode', text: '模块编号'},
        {name: 'moduleName', text: '模块名称',type:'int'},
        {name: 'rightValue', text: '模块权限值',type:'int'},
        {name: 'addRightValue', text: '添加特权', type: 'int'},
        {name: 'subRightValue', text: '减少特权', type: 'int'},
        {name: 'creator', text: '等级', type: 'int'},
        {name: 'createTime', text: '分组', type: 'int'},
    ],
    idProperty: 'userPrivilegeId',
    identifier: 'negative'
});

/**
 * Description: 用户分配角色 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.model.ItgUserRole', {
    extend: Ext.data.Model,

    alias: 'model.itguserrole',

    fields: [
        {name: 'userRoleId', text: '用户角色ID', type: 'int'},
        {name: 'userId', text: '角色ID', type: 'int'},
        {name: 'roleId', text: '角色ID', type: 'int'},
        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'},
        {name: 'remarks', text: '备注'},

        {name: 'roleName', text: '角色名称'},
        {name: 'roleOwner', text: '角色拥有者'},
        {name: 'projectCode', text: '所属项目'},
        {name: 'enableFlag', text: '是否启用', type: 'int'}
    ],

    idProperty: 'userRoleId',
    identifier: 'negative'
});

/**
 * Description: 最近访问模块Model, 数据存储于本地
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/2/6
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.LastVisit', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'menuNo', type: 'int'},
        {name: 'menuName'},
        {name: 'moduleNo', type: 'int'},
        {name: 'moduleName'},
        {name: 'moduleUrl'},
        {name: 'mRight', type: 'int'},
        {name: 'uRight', type: 'int'}
    ]
});
/**
 * Description: 最近访问模块Model, 数据存储于本地
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/2/6
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.MainTree', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'menuNo', type: 'int'},
        {name: 'menuName'},
        {name: 'modelNo', type: 'int'},
        {name: 'moduleName'},
        {name: 'moduleUrl'},
        {name: 'appUrl'},
        {name: 'appCode'},
        {name: 'jsUrl'},
        {name: 'rightValue', type: 'int'},
        {name: 'rights', type: 'int'},
        {name: 'expanded',defaultValue:false}
    ]
});
/**
 * Description:
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/28 0028
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.store.CurrentUser', {
    extend: 'Ext.data.Store',
    alias: 'store.currentuser',
    storeId:'currentuser',
    model:'Hc_Framework.model.CurrentUser'
});
/**
 * Description: 应用清单-公用store
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      liutao
 * Createdate:  2015/3/28
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.store.ItgApplication',{
    extend:'Hc_Common.store.ComBase',

    alias: 'store.itgapplication',

    model: 'Hc_Framework.model.ItgApplication',
    proxy: {
        url: 'itg_application/listAll.json?'
    }
});
/**
 * Description: 项目清单-公用store
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      liutao
 * Createdate:  2015/3/28
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.store.ItgDepartment',{
    extend:'Hc_Common.store.ComBase',
    //
    alias:'store.itgdepartment',

    //model:'Hc_Framework.model.ItgDepartment',
    fields: ['deptNo','deptName'],
    proxy: {
        url: 'itg_department/listAll.json'
    }
});
/**
 * Description: 项目清单-公用store
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      liutao
 * Createdate:  2015/3/28
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.store.ItgProject',{
    extend:'Hc_Common.store.ComBase',
    
    alias:'store.itgproject',

    model:'Hc_Framework.model.ItgProject',
    proxy: {
        url: 'itg_project/listAll.json'
    }
});
/**
 * Description: 最近访问模块Store, 数据存储于本地
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
Ext.define('Hc_Framework.store.LastVisit', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.lastvisit',

    model:'Hc_Framework.model.LastVisit',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'localstorage',
        id: 'lastvisittree'
    },
    root: {
        id: 0,
        text: '最近访问的模块',
        menuNo: 0,
        menuName: '最近访问的模块',
        expanded: true
    }
});
/**
 * Description: 用户菜单
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
Ext.define('Hc_Framework.store.MainTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.maintree',

    

    model: 'Hc_Framework.model.MainTree',

    autoLoad: true,
    buffered: false,
    proxy: {
       type: 'ajax',
        url: 'itg_menu_list/getusermenulist.json',
        reader: {
            type: 'json',
            rootProperty: 'list'
        },
        root: {
            text: 'hc',
            menuNo: 1,
            menuName: 'hc',
            expanded: true
        }
    },
    parentIdProperty: 'parentMenuNo'
});
/**
 * Description: 我的收藏夹
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/02/07
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.store.MyFavorite', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.myfavorite',

    model:'Hc_Framework.model.LastVisit',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url:  'rest/myfavorite'
    },
    root: {
        id: 0,
        text: '我的收藏夹',
        menuNo: 0,
        menuName: '我的收藏夹',
        expanded: true
    }
});
/**
 * Description: 用户列表
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/31
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.ux.ImportWin', {
	extend: 'Ext.window.Window',

	alias: 'widget.uximportwin',

	title: '批量导入数据',
	width: 500,
	height: 300,
	modal: true,
	layout: 'fit',
	alwaysOnTop: true,
	closeAction: 'destroy',

	items: [{
		xtype: 'form',
		itemId: 'userList',
		border: false

	}],

	bbar: [
		'->',
		{xtype: 'button', text: '确认', handler: 'onChooseUserClick'},
		{
			xtype: 'button', text: '取消', handler: function () {
			this.up('window').close();
		}
		}
	],


	initComponent: function () {
		this.callParent();
	}
});
/**
 * Description: 模块列表
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/02
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.ux.ModuleList', {
    extend: 'Ext.window.Window',

    alias: 'widget.uxmodulelist',


    title: '模块清单',
    width: 500,
    height: 300,
    modal: true,
    layout: 'fit',
    reference: 'commonchildWin',
    closeAction: 'hide',
    items: [{
        xtype: 'grid',
        itemId: 'moduleList',
        border: false,
        columns: [
            {header: '模块ID', dataIndex: 'moduleNo'},
            {header: '模块编号', dataIndex: 'moduleCode'},
            {header: '模块名称', dataIndex: 'moduleName', flex: 1},
            {header: '项目代号', dataIndex: 'projectCode', width: 50},
            {header: '系统ID', dataIndex: 'appNo', width: 50},
            {header: '权限值', dataIndex: 'rightValue', width: 50}
        ],
        selType: 'checkboxmodel',
        store: {
            type: 'basestore',
            model:'Hc_Framework.model.ItgLoginUser',
            autoLoad:true,
            proxy:{
                url:Hc.basePath+'itg_module_list/list.json'
            }
        },
        bbar: {
            xtype: 'pagingtoolbar',
            store: {
                type: 'basestore',
                model:'Hc_Framework.model.ItgLoginUser',
                autoLoad:true,
                proxy:{
                    url:Hc.basePath+'itg_module_list/list.json'
                }
            }
        }
    }],

    bbar: [
        '->',
        {xtype: 'button', text: '确认', handler: 'onWinReturnValue'},
        {
            xtype: 'button', text: '取消', handler: function () {
            this.up('window').close();
        }
        }
    ],
    initComponent: function () {
        this.callParent();
    }
});
/**
 * Description: 角色列表
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/31
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.ux.RoleList', {
	extend: 'Ext.window.Window',

	alias: 'widget.uxrolelist',



	title: '角色清单',
	width: 500,
	height: 300,
	modal: true,
	layout: 'fit',
	alwaysOnTop: true,
	closeAction: 'hide',

	targetStore: {},

	items: [{
		xtype: 'grid',
		itemId: 'roleList',
		border: false,
		columns: [

			{header: '角色名称', dataIndex: 'roleName'},
			{
				header: '启用状态', dataIndex: 'enableFlag',
				renderer: 'renderUseFlag'
			},
			{header: '角色拥有者', dataIndex: 'roleOwner',  width: 150},
			{header: '排列序号', dataIndex: 'orderNo', width: 80},
			{header: '备注', dataIndex: 'remarks',  flex: 1}
		],
		selType: 'checkboxmodel',
		store: {
			type: 'basestore',
			model:'Hc_Framework.model.ItgLoginUser',
			autoLoad:true,
			proxy:{
				url:Hc.basePath+'itg_role_list/list.json'
			}
		},
		bbar: {
			xtype: 'pagingtoolbar',
			store: {
				type: 'basestore',
				model:'Hc_Framework.model.ItgLoginUser',
				autoLoad:true,
				proxy:{
					url:Hc.basePath+'itg_role_list/list.json'
				}
			}
		}
	}],

	bbar: [
		'->',
		{xtype: 'button', text: '确认', handler: 'onWinReturnValue'},
		{
			xtype: 'button', text: '取消', handler: function () {
			this.up('window').close();
		}
		}
	],

	scope:this,


	initComponent: function () {
		this.callParent();
	},

	onWinReturnValue:function(btn){
		alert(btn);
	}

});
/**
 * Description: 用户列表
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/31
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.ux.UserList', {
	extend: 'Ext.window.Window',

	alias: 'widget.uxuserlist',

	title: '用户清单',
	width: 500,
	height: 300,
	modal: true,
	layout: 'fit',
	alwaysOnTop: true,
	closeAction: 'hide',

	targetStore: {},

	items: [{
		xtype: 'grid',
		itemId: 'userList',
		border: false,
		columns: [
			{dataIndex: 'userCode', header: '用户编号'},
			{dataIndex: 'userName', header: '用户名称', flex: 1},
			{dataIndex: 'enableFlag', header: '启用状态', renderer: 'renderUseFlag', width: 60},
			{dataIndex: 'deptNo', header: '部门编号', width: 60},
			{
				dataIndex: 'isAdminGroup',
				header: '管理员组?',
				renderer: 'renderYesNo',
				width: 60
			}],
		selType: 'checkboxmodel',
		store: {
			type: 'basestore',
			model:'Hc_Framework.model.ItgLoginUser',
			autoLoad:true,
			proxy:{
				url:Hc.basePath+'itg_login_user/list.json'
			}
		},
		bbar: {
			xtype: 'pagingtoolbar',
			store: {
				type: 'basestore',
				model:'Hc_Framework.model.ItgLoginUser',
				autoLoad:true,
				proxy:{
					url:Hc.basePath+'itg_login_user/list.json'
				}
			}
		}
	}],

	bbar: [
		'->',
		{xtype: 'button', text: '确认', handler: 'onWinReturnValue'},
		{
			xtype: 'button', text: '取消', handler: function () {
			this.up('window').close();
		}
		}
	],


	initComponent: function () {
		this.callParent();
	}
});
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
/**
 * Description: 应用管理view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/05
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgapplication.ItgApplication', {
	extend: 'Hc_Common.view.BaseSimplePage',

	alias: 'widget.itgapplication',

	

	controller: 'itgapplication',
	viewModel: {
		type: 'itgapplication'
	},

	initComponent: function () {
		var me = this,
			projectStore = Ext.create('Hc_Framework.store.ItgProject');
			/*projectStore = Ext.create('Hc_Common.store.ComBase',{
				model:'Hc_Framework.model.ItgProject',
				proxy: {
			        url: Hc.basePath + 'itg_project/listAll.json'
			    }
			});*/

		Ext.apply(me, {
			searchItems: [{
            	xtype : 'extcombox',
				fieldLabel : '所属项目',
				name : 'projectCode',
				store: projectStore,
				displaymember:'projectName',
				valuemember:'projectCode'
			}, {
                xtype: 'textfield',
                fieldLabel: '应用编码',
                name: 'appCode'
            }, {
                xtype: 'textfield',
                fieldLabel: '应用名称',
                name: 'appName'
            }, {
                xtype: 'combouseflag',
                fieldLabel: '启用状态',
                name: 'enableFlag'
            }],
				
			gridModel: 'Hc_Framework.model.ItgApplication',
			gridColumns: [
			    {dataIndex: 'appNo', text: '应用编号', editor: {allowBlank: false}},
				{dataIndex: 'appCode', text: '应用编码', editor: {allowBlank: false}},
				{dataIndex: 'appName', text: '应用名称', editor: {allowBlank: false}, width:160},
				{dataIndex: 'projectCode', text: '所属项目', editor: {allowBlank: false}, width:150,
					xtype:'bllookupedit',
					estore: projectStore,
					gstore: projectStore,
					displaymember:'projectName',
					valuemember:'projectCode'
				},
				{dataIndex: 'appUrl', text: '系统url', editor: {allowBlank: false},  width: 160},
				{dataIndex: 'jsUrl', text: 'jsurl', editor: {allowBlank: false},  width: 180},
				{dataIndex: 'enableFlag', text: '启用状态', type: 'int', editor: {xtype: 'combouseflag',allowBlank: false},renderer: 'renderUseFlag', width:60},
				{dataIndex: 'imageUrl', text: '图标路径', editor: true},
				{dataIndex: 'imageName', text: '图标名称', editor: true},
				{dataIndex: 'orderNo', text: '排列序号', type: 'int', editor: {type: 'numberfield'}},
				{header: '备注', dataIndex: 'remarks', editor: true, width: 135},
                {header: '建档人', dataIndex: 'creator', width: 100},
                {header: '建档时间', dataIndex: 'createTime', width: 135},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 100},
                {header: '修改时间', dataIndex: 'modifyTime', width: 135}
			],
			gridPrimaryKey: 'appNo',
			gridUnionKey: '',

			gridLoadUrl: Hc.basePath + 'itg_application/list.json',
			gridSaveUrl: Hc.basePath + 'itg_application/batchOperate.json',
			gridExportUrl: Hc.basePath + 'itg_application/do_export.json',
			gridImportUrl: Hc.basePath + ''
		});

		me.callParent();
	}
});
/**
 * Description: 应用管理viewcontroller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/05
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgapplication.ItgApplicationController', {
	extend: 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itgapplication'
});
/**
 * Description: 应用管理viewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/05
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgapplication.ItgApplicationModel', {
	extend: 'Hc_Common.view.BaseSimplePageModel',

	alias: 'viewmodel.itgapplication'

});
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
/**
 * Description: 用户管理viewcontroller
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
Ext.define('Hc_Framework.view.itgloginuser.ItgLoginUserController', {
	extend: 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itgloginuser',
	
	/*onGridBeforeEdit:function(sender,e){
		if(this.callParent(arguments)===false) return false;
		if(e.field == 'password' && !e.record.phantom)return false;
	},*/
	
	onGridAfterEdit:function(editor, option){
		var newValue = option.value;
		var originalValue = option.originalValue;
		this.callParent(arguments);
		
		//logic:密码字段编辑之后就进行加密    impl:
		if(option.field == 'password'){
			if(newValue == originalValue){
				return;
			}else{
				var encryptedPwd = hex_md5(newValue);
				option.record.set('password', encryptedPwd);
			}
		}
	},
	
    /*复制记录按钮 (复制选中的行)*/
    onBtnCopyClick: function (btn) {
        var me = this,
            grid = me.workObject,
            store = me.workObject.store,
            idField = me.workObject.primaryKey,
            selection = me.workObject.getSelection(),
            newObj;
        if (selection.length < 1)return;
        if (!grid.isCanAdd || grid.isReadOnly) {
            Hc.alert('此网格不允许新增数据');
            return;
        }
        if(grid.isMaster && this.editingList.length>0){
            Hc.alert('您有一笔数据正在处理，不能复制主表记录');
            return;
        }
        Ext.Array.each(selection, function (item) {
            newObj = Ext.create(store.model);
            Ext.apply(newObj.data, item.data);
            newObj.set(idField, '');
            newObj.set('_flag', 'A');
            newObj.set('password','');
            store.add(newObj);
        });
    }
});
/**
 * Description: 用户管理viewModel
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
Ext.define('Hc_Framework.view.itgloginuser.ItgLoginUserModel', {
	extend: 'Hc_Common.view.BaseSimplePageModel',

	alias: 'viewmodel.itgloginuser'
});
/**
 * Description: 菜单管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itgmenu.ItgMenu", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgmenu',

    

    controller: "itgmenu",
    viewModel: {
        type: "itgmenu"
    },

    initComponent: function () {
        var me = this;        
     
        me.gridEditModel = "none";
        me.gridCanDrag = true;
        me.gridCanEdit = false;
           
        Ext.apply(me, {
            searchItems: [{
                xtype: 'combo',
                width: '250',
                reference:'ddlProjectCode',
                editable: false,
                triggerAction: 'all',
                fieldLabel: '项目编码',
                allowBlank: false,
                name: 'projectCode',
                displayField: 'projectName',
                valueField: 'projectCode',
                store: {
                    model: 'Hc_Framework.model.ItgProject',
                    type: 'basestore',
                    autoLoad: true,
                    proxy: {
                        url: Hc.basePath + 'itg_project/list.json'
                    }
                }
            }],

            gridModel: 'Hc_Framework.model.ItgApplication',
            gridColumns: [
                {header: '模块ID', dataIndex: 'moduleNo'},
                {header: '模块编号', dataIndex: 'moduleCode'},
                {header: '模块名称', dataIndex: 'moduleName', flex: 1},
                {header: '项目代号', dataIndex: 'projectCode', width: 50},
                {header: '系统ID', dataIndex: 'appNo', width: 50},
                {header: '是否可用', dataIndex: 'enableFlag'},
                {header: '是否报表', dataIndex: 'isReport'},
                {header: 'URL', dataIndex: 'moduleUrl', width: 140},
                {header: '权限值', dataIndex: 'rightValue', width: 50},
                {header: '备注', dataIndex: 'remarks'}
            ],
            gridPrimaryKey: 'appCode',
            gridUnionKey: '',
            gridLoadUrl: Hc.basePath + 'itg_module_list/list.json?inMenu=false'
        });

        me.otherItems = [{
            xtype: 'treepanel',
            region: 'west',
            split: true,
            reference: 'menutree',
            width: 200,
            batchUrl: Hc.basePath +'itg_menu_list/batchOperate.json',
            rootVisible: false,
            lines: true,
            columns: [{
                xtype: 'treecolumn',
                flex: 1,
                dataIndex: 'menuName',
                text: "菜单名称",
                sortable: false,
                hideable: false

            }],
            store:{
                model:'Hc_Framework.model.ItgMenuList',
                type:'treebase',
                proxy: {
                    type: 'ajax',
                    url: Hc.basePath + 'itg_menu_list/list.json'
                },
                root: {
                    id:0,
                    menuName: 'hc',
                    menuNo:0,
                    expanded: false
                },
                nodeParam:'parentMenuNo',
                parentIdProperty:'parentMenuNo'
            },
            listeners: {
                'selectionchange': 'onTreeSelectionChange'
            },
            viewConfig: {
                listeners: {
                    render: function (tree) {
                        var dropTarget = new Ext.dd.DropTarget(tree.el, {
                            ddGroup: 'dd_commongrid',
                            copy: false,
                            notifyDrop: function (dragSource, event, data) {
                                var treeObj = me.lookupReference('menutree'),
                                    node = treeObj.selection;
                                if (!node) return true;
                                if (node.isLeaf()) node = node.parentNode;

                                var insertList = [];
                                Ext.Array.each(data.records, function (item) {
                                    insertList.push({
                                        menuName: item.data.moduleName,
                                        moduleNo: item.data.moduleNo,
                                        parentMenuNo: node.id,
                                        projectCode: node.data.projectCode,
                                        appNo: node.data.appNo,
                                        enableFlag: 1,
                                        searchCode: node.data.searchCode,
                                        levelNo: node.data.levelNo + 1,
                                        orderNo: node.data.orderNo
                                    });
                                });
                                me.controller.saveData({data: {insertList: insertList}, srcObj: treeObj});
                                return true
                            }
                        });
                    }
                }
            }
        },{
            xtype:'window',
            autoShow: false,
            closeAction: 'hide',
            reference:'editWin',
            modal: true,
            items: [{
                xtype: 'form',
                items: [{
                        "name": "appNo",
                        "fieldLabel": "应用编号",
                        "xtype": "numberfield"
                    },{
                        "name": "menuName",
                        "fieldLabel": "菜单名称",
                        "xtype": "textfield"
                    }, {
                        "name": "searchCode",
                        "fieldLabel": "查询码",
                        "xtype": "textfield"
                    }, {
                        "name": "levelNo",
                        "fieldLabel": "层级",
                        "xtype": "numberfield"
                    }, {
                        "name": "orderNo",
                        "fieldLabel": "排序码",
                        "xtype": "numberfield"
                    }],
                layout: {
                    type: 'table',
                    columns: 2
                },
                bodyPadding: 10
            }],
            title: '新增菜单',
            bbar: ['->',
                {
                    xtype: 'button',
                    text: '确认',
                    handler:'btnSaveMenu'
                },
                {
                    xtype: 'button',
                    text: '取消',
                    handler: function(btn){btn.up('window').close();}
                }
            ]
        }];
        
        me.callParent();
    }

});
/**
 * Description: 菜单管理 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgmenu.ItgMenuController', {
	extend: 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itgmenu',

	init:function() {

		var me = this,
			objList = me.getObjList();

		me.workObject = objList.menutree;

		if (objList.btnUndo) {
			objList.btnUndo.setVisible(false);
		}

		if (objList.btnCancel) {
			objList.btnCancel.setVisible(false);
		}

		if (objList.btnSave) {
			objList.btnSave.setVisible(false);
		}
		if (objList.btnAdd) {
			delete  objList.btnAdd.menu;
		}
		me.callParent(arguments);
	},


	beforeSearch:function() {
		var objs = this.getObjList(),
			store = objs.mastergrid.store,
			val = objs.ddlProjectCode.getValue();
		store.proxy.extraParams.projectCode = val;
		store.reload();
	},

	btnSaveMenu:function(btn){
		var param={},
			tree =  this.view.workObject,
			form = btn.up('window').down('form'),
			record= form.getRecord(),
			data = form.getValues();

		if(record.phantom){
			data.parentMenuNo = record.data.parentMenuNo;
			data.projectCode = record.data.projectCode;
			data.enableFlag = 1;
			param.insertList = [data];
		}else{
			param.updateList = [data];
		}
		this.saveData({srcObj:tree,btn:btn,data:param});
	},


	onBtnAddClick: function () {
		var projectCode = this.lookupReference('ddlProjectCode').getValue();
		if(!projectCode){
			Hc.alert('请选择项目编号');
			return;
		}
		var win = this.lookupReference('editWin'),
			tree = this.lookupReference('menutree'),
			store = tree.store,
			newObj = Ext.create(store.model,{
				projectCode:projectCode,
				parentMenuNo:tree.selection?tree.selection.id:0
			});
		win.show();
		win.down('form').loadRecord(newObj);
	},

	//用于编辑按钮
	onBtnEditClick:function(){
		var win = this.lookupReference('editWin'),
			node = this.lookupReference('menutree').selection;

		if(node){
			win.show();
			win.down('form').loadRecord(node);
		}
	},


	onBtnCancelClick:function() {
		var tree = this.getView().workObject;
		tree.store.rejectChanges();
		tree.view.refresh();
	},

	onBtnDeleteClick:function(btn){
		var me = this,
			tree = me.lookupReference('menutree'),
			param={deleteList:[{menuNo:tree.selection.id}]};

		me.saveData({srcObj:tree,btn:btn,data:param});
	},

	onGridSelectionChange:function(){

	},

	onTreeSelectionChange: function (sm, selections) {
		var me = this,
			objs=me.getReferences();

		if (this.canDelete() && objs.btnDelete) {
			objs.btnDelete.setDisabled(selections.length === 0);
		}
		if (this.canPrint() && objs.btnPrint) {
			objs.btnPrint.setDisabled(selections.length === 0);
		}
		if (this.canEdit() && objs.btnEdit) {
			objs.btnEdit.setDisabled(selections.length === 0);
		}

	},

	afterSave:function(result,options){
		if (result.result.resultCode=="0") {
			options.srcObj.store.reload();
			options.srcObj.view.refresh();
		} else {
			Hc.alert(result.result.msg);
		}
		if(options.btn) {
			options.btn.setDisabled(false);
			if (options.btn.up('window'))
				options.btn.up('window').close();
		}else{
			this.lookupReference('mastergrid').store.reload();
		}
	}

});

/**
 * Description: 菜单管理 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgmenu.ItgMenuModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itgmenu'

});
Ext.define('Hc_Framework.view.itgmenulist.ItgMenuList', {
	extend: 'Hc_Common.view.BaseTreePage',
	alias: 'widget.itgmenulist',
	

	controller: 'itgmenulist',
	viewModel: {
		type: 'itgmenulist'
	},

	initComponent: function () {
		var me = this;
		me.tree.columns = [
			{dataIndex: 'menuNo', text: '菜单编号', xtype: 'treecolumn',width:200},
			{dataIndex: 'menuName', text: '菜单名称'},
			{dataIndex: 'appNo', text: '应用编号'},
			{dataIndex: 'projectCode', text: '项目编号'},
			{dataIndex: 'moduleNo', text: '模块编号'},
			{dataIndex: 'enableFlag', text: '启用标识'},
			{dataIndex: 'parentMenuNo', text: '父级Id'},
			{dataIndex: 'searchCode', text: '查询码'},
			{dataIndex: 'levelNo', text: '层级'},
			{dataIndex: 'orderNo', text: '排序码'},
			{dataIndex: 'creator', text: '创建人员'},
			{dataIndex: 'createTime', text: '创建日期'},
			{dataIndex: 'modifier', text: '更改人员'},
			{dataIndex: 'modifyTime', text: '更改日期'},
			{dataIndex: 'remarks', text: '备注'},
		];
		me.tree.batchUrl = Hc.basePath + 'itg_menu_list/batchOperate.json';
		me.tree.autoLoad = true;

		me.detailItem = [
			{
				name: "menuNo",
				fieldLabel: "菜单编号",
				xtype: "numberfield",
				bind: {value: "{theRow.menuNo}"}
			},
			{
				"name": "menuName",
				"fieldLabel": "菜单名称",
				"xtype": "textfield",
				"bind": {"value": "{theRow.menuName}"}
			},
			{
				"name": "appNo",
				"fieldLabel": "应用编号",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.appNo}"}
			},
			{
				"name": "projectCode",
				"fieldLabel": "项目编号",
				"xtype": "textfield",
				"bind": {"value": "{theRow.projectCode}"}
			}, {
				"name": "moduleNo",
				"fieldLabel": "模块编号",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.moduleNo}"}
			}, {
				"name": "enableFlag",
				"fieldLabel": "启用标识",
				"xtype": "combouseflag",
				"bind": {"value": "{theRow.enableFlag}"}
			}, {
				"name": "parentMenuNo",
				"fieldLabel": "父级Id",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.parentMenuNo}"}
			}, {
				"name": "searchCode",
				"fieldLabel": "查询码",
				"xtype": "textfield",
				"bind": {"value": "{theRow.searchCode}"}
			}, {
				"name": "levelNo",
				"fieldLabel": "层级",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.levelNo}"}
			}, {
				"name": "orderNo",
				"fieldLabel": "排序码",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.orderNo}"}
			}, {
				"name": "creator",
				"fieldLabel": "创建人员",
				"xtype": "textfield",
				"bind": {"value": "{theRow.creator}"}
			}, {
				"name": "createTime",
				"fieldLabel": "创建日期",
				"xtype": "datefield",
				"bind": {"value": "{theRow.createTime}"}
			}, {
				"name": "modifier",
				"fieldLabel": "更改人员",
				"xtype": "textfield",
				"bind": {"value": "{theRow.modifier}"}
			}, {
				"name": "modifyTime",
				"fieldLabel": "更改日期",
				"xtype": "datefield",
				"bind": {"value": "{theRow.modifyTime}"}
			}, {
				"name": "remarks",
				"fieldLabel": "备注",
				"xtype": "textfield",
				"bind": {"value": "{theRow.remarks}"}
			}
		];

		me.otherItems = [{
			xtype:'uxmodulelist',
			autoShow:false

		}];
		me.callParent();

		//me.getComponent("btnAddChild").setText('添加模块');
	}
});

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
/**
 * Description: ��д���ļ�����;
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-09 09:38:33
 * @version 1.0.0
 */
Ext.define('Hc_Framework.view.itgmenulist.ItgMenuListModel', {
	extend: 'Hc_Common.view.BaseTreePageModel',
	alias: 'viewmodel.itgmenulist',

	stores: {
		commonstore: {
			model:'Hc_Framework.model.ItgMenuList',
			proxy: {
				type: 'ajax',
				url: Hc.basePath + 'itg_menu_list/list.json'
			},
			root: {
				id:0,
				menuName: 'hc项目菜单',
				menuNo:0,
				expanded: true
			},
			nodeParam:'parentMenuNo',
			autoLoad:false,
			parentIdProperty:'parentMenuNo'
		}
	}
});
Ext.define('Hc_Framework.view.itgmenulistnew.ItgMenuListNew', {
	extend: 'Hc_Common.view.BasePage',
	alias: 'widget.itgmenulistnew',
	

	controller: 'itgmenulistnew',
	viewModel: {
		type: 'itgmenulistnew'
	},
	
	layout:'border',
	//工具栏
	toolbar: {
		xtype: 'toolbar',
        itemId: 'commontoolbar',
        reference: 'commontoolbar',
        region: 'north',
        items: [{
            text: '刷新',
            itemId: 'btnRefresh',
            reference:'btnRefresh', 
            handler: 'onClickRefresh',
            glyph: Hc.Icon.btnRefresh

        }]
	},
	//菜单树面板
	treePanel: {
		xtype: 'panel',
        itemId: 'treePanel',
        reference: 'treePanel',
        title: '菜单树面板',
        width:200,
        region: 'west',
        split:true,
        layout:'border',
        collapsible:true,
        items: [{
			xtype: 'combo',
			reference: 'projectCodeCombo',
			labelWidth:60,
			width:100,
			editable:false,
			region:'north',
			triggerAction: 'all',
			fieldLabel: '所属项目',
			name: 'projectCode',
			displayField: 'projectName',
			valueField: 'projectCode',
			queryMode: 'local',
			store: {
				type: 'itgproject',
				autoLoad: true
			},
            allowBlank:false,
			listeners:{
		         'change': 'onChangeProjectCode'
		    }
		},{ xtype: 'treepanel',
		        itemId: 'menuTree',
		        region:'center',
		        layout:'fit',
		        reference: 'menuTree',
		        rootVisible: false,
		        //useArrows: true,
		        lines: true,
		        columns: [
					{xtype:'treecolumn', flex: 1, dataIndex : 'menuName',text: "菜单",sortable: false, hideable: false}
					//{xtype:'treecolumn', dataIndex : 'menuNo',text: "菜单ID",sortable: false,hideable: false},
		        ],
		        bind: {
		            store: '{menuTreeStore}'
		        },
		        batchUrl: Hc.basePath+'itg_menu_list/batchOperate.json'
		    		}]
	},
	//明细面板-查询面板+功能操作面板+模块列表网格
	detailPanel:{
		xtype: 'panel',
        itemId: 'detailPanel',
        reference: 'detailPanel',
        region: 'center',
        layout: 'border',
        items: [{
        	xtype: 'form',
            itemId: 'searchPanel',//查询面板
            reference: 'searchPanel',
        	title: '查询模块',
        	collapsible: true,
            region: 'north',
            //height: 60,
            labelWidth : 40, 
            /*layout:{ 
            	type:'hbox',
            	pack: 'start',
            	align: 'middle'
            },*/
            layout: {
            	type:'table',
            	columns:4
            },
            bodyPadding: 4,
            align : 'center',
            defaults: { 
            	labelAlign: 'right',
                labelWidth: 80,
                width: 200
            },
            items:[{
            	xtype: 'textfield',
				fieldLabel: '模块编码',
				name: 'moduleNo'
			}, {
				xtype: 'textfield',
				fieldLabel: '模块名称',
				name: 'moduleName'
			}, {
				xtype: 'tbspacer',
				width: 80, 
			},{
            	xtype: 'button',
            	text : '查询',
                handler : 'onClickSearch',
                width: 80, 
            }/*,{
            	xtype: 'button',
            	text : '上移',
                handler : 'moveUp',
                width: 80, 
            },{
            	xtype: 'button',
            	text : '保存',
                handler : 'moveSave',
                width: 80, 
            }*/]
            },{
            	xtype: 'panel',
                itemId: 'operationPanel',//功能操作面板
                reference: 'operationPanel',
                region: 'west',
                width:100,
                layout:{ 
                	type:'vbox',
                	pack: 'start',
                	align: 'center'
                },
                defaults: { frame: true, width: 80, height: 30 },
                items:[{
                    xtype: 'tbspacer',          //插入的空填充
                },{
                	xtype: 'button',
                	text : '添加文件夹',
                    handler : 'addMenuFolder'
                },{
                	xtype: 'button',
                	text : '移除文件夹',
                    handler : 'removeMenuFolder'
                },{
                    xtype: 'tbspacer',          //插入的空填充
                },{
                    xtype: 'tbspacer',          //插入的空填充
                },{
                	xtype: 'button',
                	text : '添加模块<<',
                    handler : 'addModule'
                },{
                	xtype: 'button',
                	text : '移除模块>>',
                    handler : 'removeModule'
                },{
                    xtype: 'tbspacer',          //插入的空填充
                },{
                    xtype: 'tbspacer',          //插入的空填充 
                },{
                	xtype: 'button',
                	text : '上移↑',
                    handler : 'moveUp'
                },{
                	xtype: 'button',
                	text : '下移↓',
                    handler : 'moveDown'
                },{
                	xtype: 'button',
                	text : '保存[移动]',
                    handler : 'moveSave'
                }]
            },{
            	xtype: 'grid',
            	itemId: 'dataGrid',//模块列表网格
                reference: 'dataGrid',
                region: 'center',
                layout:'fit',
                columnLines: true,
                multiSelect: true,
                plugins :[{
                    ptype: 'cellediting',
                    clicksToEdit: 1
                }],
                bbar: {
                    xtype: 'pagingtoolbar',
                    bind:{store:'{dataGridStore}'},
                    displayInfo: true,
                    listeners:{
                    	'beforechange':'onBeforechange'
                    }
                },
                viewConfig: {
                    enableTextSelection: true
                },
                columns:[
                	{header: '模块ID', dataIndex: 'moduleNo', sortable: true, width: 100},
                    {header: '模块编号', dataIndex: 'moduleCode', sortable: true, width: 100},
                    {header: '模块名称', dataIndex: 'moduleName', sortable: true,width: 200},
                    {header: '所属系统', dataIndex: 'appNo', sortable: true, width: 140,
                    	xtype:'bllookupedit',
    					displayvalue: 'itg_application/listAll.json',
    					displaymember:'appName',
    					valuemember:'appNo',
    					readOnly:true}
                ],
                bind:{store:'{dataGridStore}'}
            }
       ]
	},
	//新增文件夹弹出框
	addWindow:{
		xtype : 'window',
	    title : '菜单名称',
	    itemId: 'addWindow',
	    reference: 'addWindow',
	    width : 200,
	    height: 100,
	    layout: 'fit',
	    resizable : false, 
	    closeAction:'hide',
	    //buttonAlign : 'center',//设置面板上按钮位置
	    plain : false,
	    items : [{
	             xtype: 'form',
	             bodyPadding: 4,
	             //align : 'center',
	             items:[{
	            "name": "menuName",
	            "fieldLabel": "",
	            "xtype": "textfield"}]
        }],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            layout: {
                type: 'vbox',
                align: 'center'//align与pack都可以控制起始位置
                //pack: 'center',
            },
            items: [
                { xtype: 'button', text: '确定', handler:'btnSaveMenu' }
            ]
        }]
        /*bbar中的按钮无法控制居中 注释
         * bbar: [{
                   xtype: 'button',
                   text: '确认',
                   handler:'btnSaveMenu'
               }]*/
	},
	initComponent: function () {
		this.items=[this.toolbar,this.treePanel,this.detailPanel, this.addWindow];
		this.callParent();
	}
});

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
/**
 * Description: 
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-09 09:38:33
 * @version 1.0.0
 */
Ext.define('Hc_Framework.view.itgmenulistnew.ItgMenuListNewModel', {
	extend: 'Hc_Common.view.BasePageModel',
	alias: 'viewmodel.itgmenulistnew',

	stores: {
		menuTreeStore: {
			type:'treebase',
			model:'Hc_Framework.model.ItgMenuList',
			autoLoad: false,
			proxy: {
				type: 'ajax',
				url: 'itg_menu_list/listAll.json',
			},
			root: {
				id: 0,
				text: 'root',
				menuName: 'root',
				menuNo: 0,
				expanded: false
			},
			nodeParam:'parentMenuNo',
			parentIdProperty:'parentMenuNo' 
		},
		dataGridStore:{
			type:'basestore',
            model : 'Hc_Framework.model.ItgModuleList',
            proxy: {
				type: 'ajax',
				url: 'itg_module_list/list.json'
			},
			autoLoad: false
		}
	}
});
/**
 * Description: 模块管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *2015/03/28	liutao	应用/项目下拉combo采用公用store，减少数据库访问
 *
 */
Ext.define("Hc_Framework.view.itgmodule.ItgModuleList", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgmodulelist',

    

    controller: "itgmodulelist",

    viewModel: {
        type: "itgmodulelist"
    },


    initComponent: function () {
        var me = this,
        	projectStore = Ext.create('Hc_Framework.store.ItgProject'),
        	applicationStore = Ext.create('Hc_Framework.store.ItgApplication'),
        	applicationEstore = Ext.create('Hc_Framework.store.ItgApplication');
        	
        Ext.apply(me, {
            searchItems: [{
            	xtype : 'extcombox',
				fieldLabel : '所属系统',
				name : 'appNo',
				store: applicationStore,
				displaymember:'appName',
				valuemember:'appNo'
            }, {
                xtype: 'textfield',
                fieldLabel: '模块编号',
                name: 'moduleNo'
            }, {
                xtype: 'textfield',
                fieldLabel: '模块名称',
                name: 'moduleName'
            }, {
                xtype: 'combouseflag',
                fieldLabel: '启用状态',
                name: 'enableFlag'
            }],

            gridModel: 'Hc_Framework.model.ItgModuleList',
            gridColumns: [
                {header: '模块编号', dataIndex: 'moduleNo', editor: {xtype: 'numberfield', allowBlank: false}},
                {header: '模块启动命令', dataIndex: 'moduleCode', editor: {allowBlank: false}, width: 80},
                {header: '模块名称', dataIndex: 'moduleName', editor: {allowBlank: false}},
                {header: '所属项目', dataIndex: 'projectCode', width: 140, editor: {allowBlank: false},
                	xtype:'bllookupedit',
					estore: projectStore,
					gstore: projectStore,
					displaymember:'projectName',
					valuemember:'projectCode'
				},
                {header: '所属系统', dataIndex: 'appNo', width: 150, editor: {allowBlank: false},
					xtype:'bllookupedit',
					estore: applicationEstore,
					gstore: applicationStore,
					displaymember:'appName',
					valuemember:'appNo'
				 },
                {header: 'URL', dataIndex: 'moduleUrl', editor: {allowBlank: false}},
                {header: '权限值', dataIndex: 'rightValue', editor: {xtype: 'numberfield', allowBlank: false}},
                {dataIndex: 'enableFlag', text: '启用状态', type: 'int', editor: {xtype: 'combouseflag',allowBlank: false},renderer: 'renderUseFlag', width:60},
                {header: '是否报表', dataIndex: 'isReport', editor: {xtype: 'comboyesno'}, renderer: 'renderYesNo', width:60},//标题4个汉字60
                {header: '备注', dataIndex: 'remarks', editor: true, width: 140},
                {header: '建档人', dataIndex: 'creator', width: 100},
                {header: '建档时间', dataIndex: 'createTime', width: 140},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 100},
                {header: '修改时间', dataIndex: 'modifyTime', width: 140}
            ],
            gridPrimaryKey: 'moduleNo',
            gridUnionKey: '',

            gridLoadUrl: Hc.basePath + 'itg_module_list/list.json',
            gridSaveUrl: Hc.basePath + 'itg_module_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'itg_module_list/do_export.json',
            gridImportUrl: Hc.basePath + ''
        });

        me.callParent();
    }
});
/**
 * Description: 模块管理 ViewController
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
Ext.define('Hc_Framework.view.itgmodule.ItgModuleListController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.itgmodulelist',

	init:function(){
		var me = this;
		me.callParent();

	},
	onGridBeforeEdit:function(editor, option){
		this.callParent(arguments);
		if(option.field == 'appNo'){
			var newProjectCode = option.record.get('projectCode'),
				store = option.column.getEditor().store;
			
			oldProjectCode = store.proxy.extraParams['projectCode'];
			if(oldProjectCode != newProjectCode){
				store.proxy.extraParams['projectCode'] = newProjectCode;
				store.reload();
			}
		}
	},
	onGridAfterEdit:function(editor, option){
		this.callParent(arguments);
		//logic:模块启动命令默认值为模块编号	impl:moduleNo录入后，自动将其赋值给moduleCode 
		if(option.field=='moduleNo'){
			var moduleNo = option.record.get('moduleNo'),
				moduleCode = option.record.get('moduleCode');
			if(!moduleCode){
				option.record.set('moduleCode', moduleNo);
			}
		}
	}
});

/**
 * Description: 模块管理 ViewModel
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
Ext.define('Hc_Framework.view.itgmodule.ItgModuleListModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itgmodulelist'

});
/**
 * Description: 项目管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/05
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgproject.ItgProject', {
	extend: 'Hc_Common.view.BaseSimplePage',

	alias: 'widget.itgproject',

	

	controller: 'itgproject',
	viewModel: {
		type: 'itgproject'
	},

	initComponent: function () {
		var me = this;

		Ext.apply(me, {
			gridModel: 'Hc_Framework.model.ItgProject',
			gridColumns: [
				{dataIndex: 'projectCode', text: '项目编码', editor: {allowBlank: false}},
				{dataIndex: 'projectName', text: '项目名称', editor: {allowBlank: false}, width: 160},
				{dataIndex: 'enableFlag', text: '启用状态', type: 'int', editor: {xtype: 'combouseflag',allowBlank: false},renderer: 'renderUseFlag', width:60},
				{dataIndex: 'orderNo', text: '排列序号', editor: {xtype: 'numberfield'}},
				{header: '备注', dataIndex: 'remarks', editor: true, width: 135},
                {header: '建档人', dataIndex: 'creator', width: 100},
                {header: '建档时间', dataIndex: 'createTime', width: 135},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 100},
                {header: '修改时间', dataIndex: 'modifyTime', width: 135}
			],
			gridPrimaryKey: 'projectCode',
			gridUnionKey: '',

			gridLoadUrl: Hc.basePath + 'itg_project/list.json',
			gridSaveUrl: Hc.basePath + 'itg_project/batchOperate.json',
			gridExportUrl: Hc.basePath + 'itg_project/do_export.json',
			gridImportUrl: Hc.basePath + ''
		});

		me.callParent();

	}
});
/**
 * Description: 项目管理 viewcontroller All rights Reserved, Designed By Hc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh. author: denny.wu
 * Createdate: 2015/02/05
 * 
 * Modification History: Date Author What
 * ------------------------------------------
 * 
 */
Ext.define('Hc_Framework.view.itgproject.ItgProjectController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.itgproject'

});
/**
 * Description: 项目管理 viewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/05
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgproject.ItgProjectModel', {
	extend: 'Hc_Common.view.BaseSimplePageModel',

	alias: 'viewmodel.itgproject'

});
/**
 * Description: 功能权限清单 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itgright.ItgRightList", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgrightlist',

    

    controller: "itgrightlist",

    viewModel: {
        type: "itgrightlist"
    },

    initComponent: function () {
        var me = this,
        	projectStore = Ext.create('Hc_Framework.store.ItgProject');

        Ext.apply(me, {
            searchItems: [
			{
				xtype : 'extcombox',
				fieldLabel : '所属项目',
				name : 'projectCode',
				store: projectStore,
				displaymember:'projectName',
				valuemember:'projectCode'
			},
            {xtype: 'textfield', fieldLabel: '权限名称', name: 'rightName'},
            {
                xtype: 'combouseflag',
                fieldLabel: '启用状态',
                name: 'enableFlag'
            }],

            gridModel: 'Hc_Framework.model.ItgRightList',
            gridColumns: [
                {header: '权限值', dataIndex: 'rightNo', editor: {allowBlank: false, 
                	xtype: 'numberfield',
                	minValue: 1,
                	onSpinUp: function(){
                		var me = this,
                			nextValue = me.getValue()*2; //权限值的next+相当于当前值乘以2 权限值的next-相当于当前值除以2
                        
                        if (!me.readOnly) {
                            me.setSpinValue(Ext.Number.constrain(nextValue, me.minValue, me.maxValue));
                        }
                	},
                	onSpinDown: function(){
                		var me = this,
                			nextValue = me.getValue()/2;
                        
                        if (!me.readOnly) {
                            me.setSpinValue(Ext.Number.constrain(nextValue, me.minValue, me.maxValue));
                        }
                	}
                }}, 
                {header: '权限名称', dataIndex: 'rightName', editor: {allowBlank: false}},
                {dataIndex: 'projectCode', text: '所属项目', editor: {allowBlank: false}, width:150,
					xtype:'bllookupedit',
					estore: projectStore,
					gstore: projectStore,
					displaymember:'projectName',
					valuemember:'projectCode'
				},
                /*{
                    header: '权限类型', dataIndex: 'rightType',
                    editor: {
                        xtype: 'combo',
                        store: [[0, '标准权限'], [1, '扩展权限'], [2, '数据权限']],
                        editable: false,
                        allowBlank: false
                    },
                    width: 80,
                    renderer:function(v){
                        if(v==0) return '标准权限';
                        if(v==1) return '扩展权限';
                        if(v==2) return '数据权限';
                        return ""
                    }
                },*/
                {
                	header: '启用状态', dataIndex: 'enableFlag', width: 80,
                	editor: {xtype: 'combouseflag',allowBlank: false},
                	renderer: 'renderUseFlag'
                },
                {header: '排列序号', dataIndex: 'orderNo', editor: {xtype: 'numberfield'}, width: 80},
                {header: '备注', dataIndex: 'remarks', editor: true, width: 135},
                {header: '建档人', dataIndex: 'creator', width: 100},
                {header: '建档时间', dataIndex: 'createTime', width: 135},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 100},
                {header: '修改时间', dataIndex: 'modifyTime', width: 135}
            ],
            gridPrimaryKey: 'appCode',
            gridUnionKey: '',

            gridLoadUrl: Hc.basePath + 'itg_right_list/list.json',
            gridSaveUrl: Hc.basePath + 'itg_right_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'itg_right_list/do_export.json',
            gridImportUrl: Hc.basePath + ''
        });

        me.callParent();
    }
});
/**
 * Description: 功能权限清单 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgright.ItgRightListController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.itgrightlist'
});

/**
 * Description: 功能权限清单 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgright.ItgRightListModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itgrightlist'
});
/**
 * Description: 角色管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itgrole.ItgRoleList", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgrolelist',

    

    controller: "itgrolelist",

    viewModel: {
        type: "itgrolelist"
    },

    initComponent: function () {
        var me = this;
        
        var projectStore = Ext.create('Hc_Framework.store.ItgProject');

        Ext.apply(me, {
            searchItems: [ 
            {
                fieldLabel : '所属项目',
                name : 'projectCode',
                xtype:'extcombox',
                store: projectStore,
				displaymember:'projectName',
				valuemember:'projectCode'
            },{
                xtype: 'textfield', 
                fieldLabel: '角色名称', 
                name: 'roleName'
            },{
                xtype: 'textfield', 
                fieldLabel: '角色拥有者', 
                name: 'roleOwner'
            },{
                    xtype: 'combouseflag', 
                    fieldLabel: '启用状态', 
                    name: 'enableFlag'
            }
            ],

            gridModel: 'Hc_Framework.model.ItgRoleList',
            gridColumns: [
                {
                	header: '角色名称', 
                	dataIndex: 'roleName', 
                	editor: {
                		allowBlank: false
                	},
                	width:120
                },
                {
                	header: '所属项目', 
                	dataIndex: 'projectCode', 
                	xtype:'bllookupedit',
                	editor: {
                		allowBlank: false
                	},
                	estore: projectStore,
					gstore: projectStore,
					displaymember:'projectName',
					valuemember:'projectCode',
	    			width:120
                },
                {
                	header: '角色拥有者', 
                	dataIndex: 'roleOwner', 
                	/*editor: {
                		allowBlank: false
                	}, */
                	width: 80
                },
                {
      				dataIndex: 'enableFlag',
      				header: '启用状态',
      				editor: {
                		allowBlank: false
                	}, 
      				xtype:'bllookupedit',
      				displayvalue : "0=禁用:1=启用",
      				width: 60
                },
                {header: '排列序号', dataIndex: 'orderNo', editor: {xtype: 'numberfield'}, width: 60},
                {header: '备注', dataIndex: 'remarks', editor: true, flex:1},
                {header: '建档人', dataIndex: 'creator', width: 80},
                {header: '建档时间', dataIndex: 'createTime', width: 135},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 80},
                {header: '修改时间', dataIndex: 'modifyTime', width: 135}
            ],
            gridPrimaryKey: 'roleId',
            gridLoadUrl: Hc.basePath + 'itg_role_list/list.json',
            gridSaveUrl: Hc.basePath + 'itg_role_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'itg_role_list/do_export.json',
            gridImportUrl: Hc.basePath + ''
        });
        me.callParent();

    }
});
/**
 * Description: 角色管理 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgrole.ItgRoleListController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.itgrolelist'
});

/**
 * Description: 角色管理 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgrole.ItgRoleListModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itgrolelist'
});
/**
 * Description: 角色管理权限 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itgroleright.ItgRoleRight", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgroleright',

    
    controller: "itgroleright",
    viewModel: {
        type: "itgroleright"
    },
    
    customLayout:true,
    
    gridModel: 'Hc_Framework.model.ItgRoleRight',
    
    gridPrimaryKey: 'roleRightId',
    gridLoadUrl: Hc.basePath + 'itg_role_right/getRoleRight.json',
    gridSaveUrl: Hc.basePath + 'itg_role_right/batchOperate.json',
    gridExportUrl: Hc.basePath + 'itg_role_right/do_export.json',
    gridImportUrl: Hc.basePath + '',
    
    oneclick : function(obj,rowIndex){
		console.dir(rowIndex);
	},
    
    initComponent: function () {
        var me = this;
        
        var appStore = Ext.create('Hc_Framework.store.ItgApplication');
        
        var gridSelModel = {
        		type : 'checkboxmodel',
                mode : 'MULTI',
               allowDeselect : true
        }
        
        me.grid.title = "模块设置";
       // me.grid.selModel = gridSelModel;
        
        Ext.apply(me,{
        	searchItems: [
        	{
        		fieldLabel : '所属系统',
                name : 'appNo',
                xtype:'extcombox',
                store: appStore,
				displaymember:'appName',
				valuemember:'appNo'
        	},
        	{
                xtype: 'textfield',
                fieldLabel: '模块编号',
                name: 'moduleCode'
            }, 
            {
                xtype: 'textfield',
                fieldLabel: '模块名称',
                name: 'moduleName'
            },
            {
                xtype: 'comboyesno', 
                fieldLabel: '是否有权限', 
                name: 'enableFlag'
        	}],
        	gridColumns: [
//            {
//            	header: '是否有权限', 
//            	dataIndex: 'other',
//            	//xtype:"checkcolumn",
//            	//disabled : true,
//            	renderer:function(val, m, rec) {
//            		
//            		var checkBox = Ext.create('Ext.grid.column.Check',{
//            				xtype:'checkcolumn',
//            				listeners:{
//            					'checkchange':function( obj, rowIndex, checked, eOpts ){
//            						console.dir("right : "+checked);
//            					}
//            				}
//            		});
//            		
//            		if(val > 0)
//            			checkBox.renderer(true);
//            		else
//            			checkBox.renderer(false);
//            		return checkBox;
//            			
//            	}
//            },
//            {
//        		header: '是否有权限', 
//            	dataIndex: 'roleRightId',
//            	xtype:"templatecolumn",
//            	tpl:'<tpl if="roleRightId &gt; 0"><input type="checkbox" checked='' onclick="columnClick"/></tpl><tpl if="roleRightId &lt;= 0"><input type="checkbox" onclick="columnClick"/></tpl>'
//        	},
        	{
            	header: '是否有权限', 
            	dataIndex: 'hasRight',
            	xtype:"checkcolumn",            	
            	//disabled : true,
//            	renderer:function(val, m, rec) {
//            		if(val > 0)
//            			return (new Ext.grid.column.CheckColumn).renderer(true);
//            		return (new Ext.grid.column.CheckColumn).renderer(false);
//            	}
            },
            /*{//自定义的多选列 
                header:"abc", 
                dataIndex:'otherColumn', 
                renderer:function (value,cellmeta,record,rowIndex,columnIndex,store){ 
                	console.dir(record.get('moduleName'));
                	if(value > 0){
                		return "<input type='checkbox' checked name='adds_checkbox' onclick=oneclick(this," + rowIndex + ") id='adds_checkbox_'"+value+"></input>"; 
                	}
                	else
                		return "<input type='checkbox' name='adds_checkbox' onclick=oneclick(this) id='adds_checkbox_'"+value+"></input>";
                } , 
                width:50, 
                sortable:false 
            },*/
            
            /*{header: '角色ID', dataIndex: 'roleId', type: 'int'},
            {header: '角色模块编号',dataIndex: 'moduleNo', type: 'int'},
            {header: '角色权限值', dataIndex: 'rightValue', editor: {xtype: 'numberfield'}},
            {header: '模块权限值', dataIndex: 't2_rightValue', editor: {xtype: 'numberfield'}},
            {header: '模块ID', dataIndex: 't2_moduleNo'},*/
            {header: '模块编号', dataIndex: 'moduleCode',width:80},
            {header: '模块名称', dataIndex: 'moduleName',width:100},
            {
          	  dataIndex: 'appNo', 
          	  header: '所属系统', 
          	  width: 120,
          	  xtype:'bllookupedit',
          	  readOnly:true,
          	  estore: appStore,
          	  gstore: appStore,
          	  displaymember:'appName',
          	  valuemember:'appNo'
            },
            {header: 'URL', dataIndex: 'moduleUrl',flex:1},
            {header: '分配人员',dataIndex: 'creator',width:80},
            {header: '分配时间',dataIndex: 'createTime',width:135}
            ],
        });
        
        //左面板 : 角色面板
        var leftPanel = {
        		xtype: 'grid',
                reference: 'rolegrid',
                width: 330,
                region: 'west',
                columns: [
                    {text: '角色编号', dataIndex: 'roleId', width: 60},
                    {text: '角色名称', dataIndex: 'roleName', width: 80},
                    {text: '角色拥有者', dataIndex: 'roleOwner', width: 80},
                    {text: '备注', dataIndex: 'remarks', flex: 1}
                ],

                store: {
                    type: 'basestore',
                    model:'Hc_Framework.model.ItgRoleList',
                    autoLoad:true,
                    proxy:{
                        url: Hc.basePath + 'itg_role_list/list.json'
                    }
                },

                split: true,
                listeners: {
                    'selectionchange': 'onSelectItemChange'
                }
        };
        
        //右面板
        
        //右下面板 : 模块面板
        
        //模块权限复选框
        var rightBottomPanel = {
	        	title : '模块权限',
	        	xtype: 'panel',
	        	height:130,
	            border:'false',
	            //autoScroll:true,
    	        region: 'south',
    	        layout:'border',
    	        split:true,
    	        bodyStyle: 'background:#fff; padding:10px;',
	            items:[{
	                xtype: 'checkboxgroup',
	                reference: 'rightboxgroup',
	                columns: 4,
	                boxLabel : 'rightName',
	                inputValue : 'rightNo',
	                items: []
	            }]
    		};
        
      //构建右面板
        var rightPanel = {
        	xtype: 'panel',
        	border:'false',
        	region:'center',
        	layout:'border',
        	items:[me.grid,rightBottomPanel]
        };
        
        //加入左右面板和工具条
        me.otherItems = [leftPanel,rightPanel,me.toolbar,me.searchPanel];
        me.items = me.otherItems;
        
        this.callParent();

    }
});
/**
 * Description: 角色分配权限管理 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgroleright.ItgRoleRightController', {
	extend: 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itgroleright',
	
	init:function(){
		var me = this;
		//调用父类init()方法
		me.callParent(arguments);
		
		var objlist = me.getReferences();
		
		//按钮处理
		objlist.btnSearch.setDisabled(true);
		objlist.btnAdd.setVisible(false);
		objlist.btnDelete.setVisible(false);
		
		Ext.Ajax.request({
			
        	url: Hc.basePath + 'itg_right_list/listAll.json',
        	
        	method: 'GET',
        	
        	params : {pageNum :0},
        	
        	success:function(response, options){
        		var list = JSON.parse(response.responseText).list;
        		
        		var checkobj = me.getObjList().rightboxgroup;
        		
        		Ext.Array.each(list,function(item){
        			
        			checkobj.add({
            			boxLabel : item.rightNo + ' ' + item.rightName,            			
            			inputValue : item.rightNo,
            			checked : false
            		});
        			
        		});
        	}
        });
		objlist.mastergrid.on('cellclick','gridCellClick');
		
	},
	
	/**初始化网格行类样式*/
    initRowClass: function (record, index, rowParams, store) {
        var flag = record.get('_flag');
        if (flag == 'A') return 'x-grid-rows-add';
        if (flag == 'D') return 'x-grid-rows-edit';
        if (record.dirty && !flag) return 'x-grid-rows-edit';
        return ''
    },
	
	onSelectItemChange: function (rd, selected) {
		
		var me = this,
		objlist = me.getReferences();
		
		objlist.mastergrid.enable();
		//objlist.rightboxgroup.disable();
		
		var rolegrid=this.lookupReference('rolegrid');
		var record = rolegrid.getSelectionModel().getSelection()[0];
		
		if(!record) {
			objlist.btnSearch.setDisabled(true);
			return ;
		}
		
		objlist.btnSearch.setDisabled(false);
		
		this.onBtnSearchClick();
	},
	
	//查询前处理函数
	beforeSearch: function (store) {
		
		
		var rolegrid=this.lookupReference('rolegrid');
		var role = rolegrid.getSelectionModel().getSelection()[0];
		
		if(!role){
			Ext.Msg.alert('系统提示','请选择角色');
			return ;
		}
		
		store.proxy.extraParams["roleId"] = role.get('roleId');

		return true;
	},

	onBtnAddClick: function () {
		var me = this,
			role= me.lookupReference('rolegrid').getSelectionModel().getSelection()[0];
		if(!role) {
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
		if (!me.win) {
			me.win = Ext.widget('uxmodulelist');
		}
		me.win.show();
	},
	
	onBtnUndoClick:function(btn){
		var grid = this.workObject,
        store=grid.store,
        items = grid.getSelectionModel().getSelection();

		Ext.Array.each(items, function (record) {
			if(record.phantom){
				store.remove(record);
			}
			else {
				record.reject();
				if(record.get('rightValue') > 0)
					record.set('hasRight',true);
				else
					record.set('hasRight',false);
			}
		});
	},
	
	onBtnCancelClick:function(btn){
		var grid = this.workObject,
        store = grid.getStore(),
		items = store.getModifiedRecords();
		store.rejectChanges();
		
		Ext.Array.each(items, function (record) {
			if(record.get('rightValue') > 0)
				record.set('hasRight',true);
			else
				record.set('hasRight',false);
		});
		
		grid.view.refresh();
	},
	
	/*选择变化之后*/
    onGridSelectionChange: function (sm, selections, index, eOpts) {
        var me = this,
            objlist = me.getObjList();
        
		objlist.rightboxgroup.enable();
        
        var mastergrid = objlist.mastergrid;
        
        var rightValue = mastergrid.getSelectionModel().getSelection()[0].get('rightValue');
        var t2_rightValue = mastergrid.getSelectionModel().getSelection()[0].get('t2_rightValue');
        
        //根据角色和模块的权限值设置模块权限复选框,角色的权限为0,无权限
        var rightboxgroup = objlist.rightboxgroup;
        
        for(var i = 0;i < rightboxgroup.items.length; i++){
        	
        	var item = rightboxgroup.items.getAt(i);
        	
        	//删除监听事件
        	item.un('change',me.boxchange,me);
        	
        	//是否显示
        	var isenable = (item.inputValue & t2_rightValue) === item.inputValue;
        	//是否勾选
        	var ischecked = (item.inputValue & rightValue) === item.inputValue;
        	
        	if(isenable){
        		item.enable();
        		if(ischecked)
        			item.setValue(true);
        		else
        			item.setValue(false);
        	}
        	else{
        		item.disable();
        		item.setValue(false);
        	}
        	
        	//增加监听事件
        	item.on('change',me.boxchange,me);
        	
        }
    },
	
	boxchange : function(box, newValue, oldValue, eOpts ){
		var me = this,
        objlist = me.getObjList();

		//角色面板
		var rolegrid = objlist.rolegrid;
		//模块设置面板
		var mastergrid = objlist.mastergrid;
		//权限复选框
		var rightboxgroup = objlist.rightboxgroup;
		
		//选中的角色面板的记录
		var rolerecord = rolegrid.getSelectionModel().getSelection()[0];
		//选中的模块列表记录
		var gridrecord = mastergrid.getSelectionModel().getSelection()[0];
		
		if(!rolerecord){
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
		
		if(!gridrecord){
			Ext.Msg.alert('系统提示','请选择模块');
			return;
		}
		
		var roleRightId = gridrecord.get('roleRightId');
		var orignValue = gridrecord.get('rightValue');
		var boxvalue = box.inputValue;
		
		if(newValue){//选中
			//选中:权限值做或运算
			var yu = boxvalue | orignValue;
			
			if(roleRightId < 0 && orignValue == 0){//新增记录
				gridrecord.set('rightValue',yu);
				gridrecord.set('_flag','A');
				gridrecord.set('moduleNo',gridrecord.get("t2_moduleNo"));
				gridrecord.set('roleId',rolerecord.get("roleId"));
			}
			else if(gridrecord.get('_flag') == 'D'){
				gridrecord.reject();
				gridrecord.set('rightValue',yu);
			}
			else{
				gridrecord.set('rightValue',yu);
			}
			
			if(boxvalue != 1){//不是浏览权限
				for(var i = 0;i < rightboxgroup.items.length; i++){
		        	var item = rightboxgroup.items.getAt(i);
		        	if(item.inputValue == 1 && item.getValue()==false){
						item.setValue(true);
						break;
					}
		        }
			}
		}
		else{//取消选中  : 
			
			/* 可能情况 
			 *  
			 * 减少权限:
			 * 不管是否是新增的记录,或者是已有记录的权限值修改,都可以直接修改权限值:rightValue
			 * 
			 * 删除:
			 * 1.已有角色模块删除
			 * 2.未有角色模块删除
			 */
			 
			
			//不选中:权限值做异或运算
			var yihuo = boxvalue ^ orignValue;
			
			//删除 :yihuo的值为0时,说明没有改模块的所有权限,需要做删除操作
			
			if(yihuo == 0){
				if(roleRightId > 0){//已有角色模块删除
					gridrecord.set('_flag','D');
					gridrecord.set('rightValue',0);
				}
				else{//未有角色模块删除
					gridrecord.reject();
				}
			}
			else{//只需修改权限值
				gridrecord.set('rightValue',yihuo);
			}
			
			var canDelete = true;
			for(var i = 0;i < rightboxgroup.items.length; i++){
	        	var item = rightboxgroup.items.getAt(i);
	        	if(item.inputValue != 1 && item.getValue() == true){
					canDelete = false;
					break;
				}
	        }
			if(canDelete){
				for(var i = 0;i < rightboxgroup.items.length; i++){
		        	var item = rightboxgroup.items.getAt(i);
		        	if(item.inputValue == 1 && item.getValue() == true){
						item.setValue(false);
						break;
					}
		        }
			}
		}
		//rightValue与hasRight绑定,会根据rightValue自动处理
		gridrecord.set('hasRight',false);
	},
	
	gridCellClick:function( obj, td, cellIndex, record, tr, rowIndex, e, eOpts ){
		if(cellIndex==0){
			var me = this,
	        objlist = me.getObjList();

			//角色面板
			var rolegrid = objlist.rolegrid;
			//复选框面板
			var rightboxgroup = objlist.rightboxgroup;
			
			//选中的角色面板的记录
			var rolerecord = rolegrid.getSelectionModel().getSelection()[0];
			
			if(!rolerecord){
				Ext.Msg.alert('系统提示','请选择角色');
				return;
			}
			
			//获取模块权限值和角色权限值,如果角色权限值小于模块权限值,则全选,否则,取消全选
			var moduleRightValue = record.get('t2_rightValue');
			var roleRightValue = record.get('rightValue');
			
			if(roleRightValue == moduleRightValue){//已全选,执行取消全选操作
				for(var i = 0;i < rightboxgroup.items.length; i++){
		        	var item = rightboxgroup.items.getAt(i);
		        	item.setValue(false);
		        }
			}
			else{//未全选,执行全选操作
				//按模块权限值勾选复选框
				for(var i = 0;i < rightboxgroup.items.length; i++){
		        	var item = rightboxgroup.items.getAt(i);
		        	if(item.inputValue & moduleRightValue){
		        		item.setValue(true);
		        	}
		        }
			}
		}
	}
	
	
});

/**
 * Description: 角色分配权限管理 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgroleright.ItgRoleRightModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itgroleright'
});
/**
 * Description: 角色分配用户管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itgroleuser.ItgRoleUser", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgroleuser',

    

    controller: "itgroleuser",

    viewModel: {
        type: "itgroleuser"
    },
    customLayout: true,
    gridModel: 'Hc_Framework.model.ItgRoleUser',
    gridPrimaryKey: 'userRoleId',
    gridLoadUrl: Hc.basePath + 'itg_role_user/getUser.json?isExist=true',
    gridSaveUrl: Hc.basePath + 'itg_role_user/batchOperate.json',
    gridExportUrl: Hc.basePath + 'itg_role_user/do_export.json',
    gridImportUrl: Hc.basePath + '',
    
    initComponent: function () {
        var me = this;
        
        me.grid.title = "已分配用户";
        
        var deptStore = Ext.create('Hc_Framework.store.ItgDepartment');
        
        Ext.apply(me,{
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
        		fieldLabel: '用户编号',
        		name: 'userCode'
        	}, {
        		xtype: 'textfield',
        		fieldLabel: '用户名称',
        		name: 'userName'
        	},
        	{
                xtype: 'combouseflag', 
                fieldLabel: '启用状态', 
                name: 'enableFlag'
        	}
        	],
        	gridColumns: [
        	              {dataIndex: 'userCode', header: '用户编号', width: 80},
        	              {dataIndex: 'userName', header: '用户名称', width: 80},
        	              {
        	            	  dataIndex: 'deptNo', 
        	            	  header: '所属部门', 
        	            	  width: 160,
        	            	  xtype:'bllookupedit',
        	            	  readOnly : true,
        	            	  estore: deptStore,
        	            	  gstore: deptStore,
        	            	  displaymember:'deptName',
        	            	  valuemember:'deptNo'
        	              },
          	              {
              				dataIndex: 'enableFlag',
              				header: '启用状态',
              				readOnly:true,
              				xtype:'bllookupedit',
              				displayvalue : "0=禁用:1=启用",
              				width: 60
                          },
        	              {dataIndex: 'creator', header: '分配人员', width: 80},
        	              {dataIndex: 'createTime', header: '分配时间', width: 135},
        	              {dataIndex: 'remarks', header: '备注',flex:1}
        	          ]
        });

        //左面板 : 角色面板
        var rolePanel = {
            xtype: 'grid',
            reference: 'rolegrid',
            width: 330,
            region: 'west',
            columns: [
                {text: '角色名称', dataIndex: 'roleName', flex: 0.4},
                {text: '角色拥有者', dataIndex: 'roleOwner', flex: 0.2},
                {text: '备注', dataIndex: 'remarks', flex: 0.3}
            ],
            store: {
                type: 'basestore',
                model: 'Hc_Framework.model.ItgRoleList',
                autoLoad: true,
                proxy: {
                    url: Hc.basePath + 'itg_role_list/list.json'
                }
            },
            split: true,
            listeners: {
                'selectionchange': 'onSelectChange'
            }
        };

        //右面板

        //右上面板 : 未分配用户面板

        //构建右面板
        var rightPanel = {
            xtype: 'container',
            border: 'false',
            region: 'center',
            layout: 'border',
            items: [{
                title: '未分配用户',
                xtype: 'grid',
                reference: 'notusergrid',
                columnLines: true,
                split: true,
                columns: [
                    {dataIndex: 'userCode', header: '用户编号', width: 80},
                    {dataIndex: 'userName', header: '用户名称', width: 80},
                    {
  	            	  dataIndex: 'deptNo', 
  	            	  header: '所属部门', 
  	            	  width: 160,
  	            	  xtype:'bllookupedit',
  	            	  readOnly : true,
  	            	  estore: deptStore,
  	            	  gstore: deptStore,
  	            	  displaymember:'deptName',
  	            	  valuemember:'deptNo'
  	              	},
  	              	{
          				dataIndex: 'enableFlag',
          				header: '启用状态',
          				readOnly:true,
          				xtype:'bllookupedit',
          				displayvalue : "0=禁用:1=启用",
          				width: 60
  	              	},
                    {dataIndex: 'creator', header: '创建者', width: 80},
                    {dataIndex: 'createTime', header: '创建日期', width: 135},
                    {dataIndex: 'remarks', header: '备注', flex: 1}
                ],

                region: 'north',
                height: 300,
                bind: {
    	            store:'{store2}'
    	        },
                plugins: [],
                selModel: {
                    mode: 'MULTI',
                    allowDeselect: true
                },
                bbar: {
                    xtype: 'pagingtoolbar',
                    plugins: Ext.create('Ext.ux.ComboPageSize'),
                    displayInfo: true,
                    bind: {
        	            store:'{store2}'
        	        }
                },

                listeners: {
                    'selectionchange': 'onNotUserGridSelectionChange'
                },
                viewConfig: {
                    enableTextSelection: true
                }
            }, me.grid]
        };
        
        me.otherItems = [rolePanel, rightPanel, me.toolbar,me.searchPanel]
        me.items = me.otherItems;
        
        me.callParent();
    }
});
/**
 * Description: 角色分配用户管理 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgroleuser.ItgRoleUserController', {
	extend: 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itgroleuser',

	init:function(){
		this.callParent(arguments);
		var objlist = this.getReferences();
		//按钮处理
		objlist.btnAdd.setDisabled(true);
		objlist.btnDelete.setDisabled(true);
		
	},

	onSelectChange:function(item) {
		
		var me = this,
		objlist = me.getReferences();
		
		var rolegrid=me.lookupReference('rolegrid');
		var record = rolegrid.getSelectionModel().getSelection()[0];

		if(!record) {
			
			objlist.notusergrid.store.removeAll();
			objlist.notusergrid.disable();
			objlist.mastergrid.store.removeAll();
			objlist.mastergrid.disable();
			objlist.btnSearch.setDisabled(true);
			return ;
		}
		
		//按钮处理
		objlist.btnSearch.setDisabled(false);
		objlist.btnAdd.setDisabled(true);
		objlist.btnDelete.setDisabled(true);
		
		objlist.notusergrid.enable();
		objlist.mastergrid.enable();

		me.onBtnSearchClick();
	},

	//查询前处理函数
	beforeSearch: function (store) {
		var me = this;
		//已分配面板增加查询参数  : roleId
		var rolegrid=me.lookupReference('rolegrid');
		var role = rolegrid.getSelectionModel().getSelection()[0];
		
		if(!role) 
			return ;
		
		var roleId = role.get('roleId')
	
		store.proxy.extraParams["roleId"] = roleId;

		//未分配面板增加查询参数  : roleId
		var store2 = me.lookupReference('notusergrid').store;
		store2.proxy.extraParams["roleId"] = roleId;

		var searchPanel = me.lookupReference('commonsearch');
		if (searchPanel) {
			var formValue = searchPanel.getValues();
			for (var field in formValue) {
				if (formValue[field] !== '') {
					store2.proxy.extraParams[field] = formValue[field];
				} else {
					delete   store2.proxy.extraParams[field];
				}
			}
		}

		store2.load();
		return true;
	},

	//未分配用户notusergrid选中记录触发函数
	onNotUserGridSelectionChange : function(){
		var me = this,
		objlist = me.getReferences();
		objlist.btnAdd.setDisabled(false);
	},

	//已分配用户mastergrid选中记录触发函数
	onGridSelectionChange : function()	{
		var me = this,
		objList = me.getReferences();
		objList.btnDelete.setDisabled(false);
	},

	//将未分配用户记录添加到已分配用户列表中
	onBtnAddClick: function () {
		var me = this;
		var notusergrid = me.lookupReference('notusergrid');

		//获取选中的未分配角色
		var users = notusergrid.getSelectionModel().getSelection();

		if(users == null || users.length <= 0) {
			Ext.Msg.alert('系统提示','请选择未分配用户');
			return;
		}
		
		var rolegrid = me.lookupReference('rolegrid');
		var role = rolegrid.getSelectionModel().getSelection()[0];
		if(!role){
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
			
		var roleId = role.get('roleId');
		//获取已分配角用户grid对象
		var grid1 = me.lookupReference('mastergrid');
		
		Ext.Array.each(users,function(user){
			//向获取的记录增加字段 : _flag
			user.data._flag='A';

			//增加roleId字段值
			user.data.roleId = roleId;

			//新建插入对象
			var newobj=Ext.create(grid1.store.model);
			Ext.apply(newobj.data,user.data);

			//将数据增加到已分配角色中
			grid1.store.insert(0,newobj);

			//删除未分配角色的选中记录
			notusergrid.store.remove(user);
		});

		//显示保存按钮
		var objList = me.getReferences();
		objList.btnSave.setDisabled(false);
	},

	// 删除 如果是新增还没有保存的数据，直接删除，如果是已保存的数据，打上删除标识
	onBtnDeleteClick: function (btn) {
		var me = this,
		obj = me.workObject,
		store = obj.getStore(),
		delflag = false,
		items = obj.getSelectionModel().getSelection();

		if (items.length < 1) {
			Ext.Msg.alert('系统提示','请选择已分配用户');
			return;
		}
		if (!me.checkDelete(items)===false) return;

		Ext.Array.each(items, function (record) {
			var _flag = record.get('_flag');

			if (_flag == 'A') {
				var notusergrid = me.lookupReference('notusergrid');

				//新建插入对象
				var newobj=Ext.create(notusergrid.store.model);
				Ext.apply(newobj.data,record.data);

				notusergrid.store.insert(0,newobj);
				store.remove(record);
			} else {
				record.set('_flag', 'D');
				delflag = true;
			}
		});

		if (delflag) {
			obj.view.refresh();
		}
	},

	/*从写保存之后方法（保存完后，如果成功重新加载数据，失败则提示错误消息）*/
	afterSave:function(result,options) {
		var me = this;
		if (result.result.resultCode == "0") {
			objList = me.getReferences();
			objList.btnSave.setDisabled(true);
			objList.notusergrid.store.reload({afterSaveData:true});
			objList.mastergrid.store.reload({afterSaveData:true});
		} else {
			Hc.alert(result.result.msg);
		}
		me.callParent(arguments);
	}

});

/**
 * Description: 角色分配用户管理 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgroleuser.ItgRoleUserModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itgroleuser',
    
    stores: {
        store2: {
        	type:'basestore',
            model: 'Hc_Framework.model.ItgRoleList',
            proxy: {
                url:  Hc.basePath + 'itg_role_user/getUser.json?isExist=false'
            }
        }
    }

});
/**
 * Description: 用户分配角色管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itgroleuser.ItgUserRole", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itguserrole',

    

    controller: "itguserrole",

    viewModel: {
        type: "itguserrole"
    },
    
    customLayout:true,

    gridModel: 'Hc_Framework.model.ItgUserRole',
    gridPrimaryKey: 'userRoleId',
    gridLoadUrl: Hc.basePath + 'itg_user_role/getRole.json?isExist=true',
    gridSaveUrl: Hc.basePath + 'itg_user_role/batchOperate.json',
    gridExportUrl: Hc.basePath + 'itg_user_role/do_export.json',
    gridImportUrl: Hc.basePath + '',
    

    initComponent: function () {
        var me = this;
        
        var projectStore = Ext.create('Hc_Framework.store.ItgProject'); 
        
        Ext.apply(me,{
        	searchItems: [ 
        	{
        	    fieldLabel : '所属项目',
        	    name : 'projectCode',
        	    xtype:'extcombox',
        	    store: projectStore,
        	  	displaymember:'projectName',
        	  	valuemember:'projectCode'
        	},
        	{
        	    xtype: 'textfield', 
        	    fieldLabel: '角色名称', 
        	    name: 'roleName'
        	},
        	{
        	    xtype: 'textfield', 
        	    fieldLabel: '角色拥有者', 
        	    name: 'roleOwner'
        	},
        	{
        		xtype: 'combouseflag', 
        	    fieldLabel: '启用状态', 
        	    name: 'enableFlag'
        	}
        	],
        	              
        	gridColumns: [
        	              {dataIndex: 'roleName', header: '角色名称',width: 80},
        	              {dataIndex: 'roleOwner', header: '角色拥有者',width: 80},
        	              {
        	                	header: '所属项目', 
        	                	dataIndex: 'projectCode', 
        	                	xtype:'bllookupedit',
        	                	readOnly:true,
        	                	estore: projectStore,
        						gstore: projectStore,
        						displaymember:'projectName',
        						valuemember:'projectCode',
        		    			width:120
        	              },
        	              {
                				dataIndex: 'enableFlag',
                				header: '启用状态',
                				readOnly:true,
                				xtype:'bllookupedit',
                				displayvalue : "0=禁用:1=启用",
                				width: 60
        	              },
        	              {dataIndex: 'creator', header: '分配人员', width: 80},
        	              {dataIndex: 'createTime', header: '分配时间', width: 135},
        	              {dataIndex: 'remarks', header: '备注', flex: 1}
        	              ]
        });
        
        me.grid.title = "已分配角色";
        
      //未分配角色面板
        var gridPanel2 = {
        		title : '未分配角色',
        		xtype:'grid',        		
    	        reference: 'notrolegrid',
    	        columnLines: true,
    	        split: true,
    	        columns: [
    	                  {dataIndex: 'roleName', header: '角色名称',width: 80},
    	                  {dataIndex: 'roleOwner', header: '角色拥有者',width: 80},
    	                  {
    	                  	header: '所属项目', 
    	                  	dataIndex: 'projectCode', 
    	                  	xtype:'bllookupedit',
    	                  	readOnly:true,
    	                  	estore: projectStore,
    	  					gstore: projectStore,
    	  					displaymember:'projectName',
    	  					valuemember:'projectCode',
    	  	    			width:120
    	                  },
    	                  {
    	          			dataIndex: 'enableFlag',
    	          			header: '启用状态',
    	          			readOnly:true,
    	          			xtype:'bllookupedit',
    	          			displayvalue : "0=禁用:1=启用",
    	          			width: 60
    	  	              },
    	                  {dataIndex: 'creator', header: '创建者', width: 80},
    	                  {dataIndex: 'createTime', header: '创建日期', width: 135},
    	                  {dataIndex: 'remarks', header: '备注', flex: 1}
    	                  ],
    	                  
    	        region: 'north',
    	        
    	        height:350,
    	        bind: {
    	            store:'{store2}'
    	        },
    	        plugins: [],
    	        selModel: {        	         
    	            mode: 'MULTI',
    	            allowDeselect: true
    	        },
    	        //分页查询
    	        bbar: {
    	            xtype: 'pagingtoolbar',
    	            plugins: Ext.create('Ext.ux.ComboPageSize'),
    	            displayInfo: true,
    	            bind: {
    	                store:'{store2}'
    	            }
    	        },

    	        listeners: {
    	            'selectionchange': 'onNotUserGridSelectionChange'
    	        },
    	        viewConfig: {
    	            enableTextSelection: true        	           
    	        }
    	};
        
        //左右面板 : 左面板 --部门树 ,右面板--未分配角色 + 已分配角色
        
        //右面板--未分配角色 + 已分配角色
        var rightPanel = {
        	xtype: 'container',
        	border:'false',
        	region:'center',
        	layout:'border',
        	items:[gridPanel2,me.grid]
        };
        
        //左面板 --部门树
        var leftPanel = {
                xtype: 'treepanel',
                reference: 'usertree',
                width: 330,
                region: 'west',
                //rootVisible : false,
                columns: [
                    {text: '部门', dataIndex: 'text', flex: 1,xtype : 'treecolumn'}                
                ],
                //部门树 store
                store:{            	
                	type:'treebase',
                	proxy:{
                		url:Hc.basePath + 'itg_user_role/getNodeByDeptNo.json',
                		 reader: {
                	            type: 'json',
                	            rootProperty: 'children',
                	            totalProperty: 'totalCount'
                	        }
                	},
                	 root: {
                		 id:0,
                         text: 'hc',                 
                         expanded: false
                     }
                },
                split: true,
                //部门树监听方法
                listeners: {
                    'selectionchange': 'onSelectChange',
                }
            };

        me.otherItems = [leftPanel,rightPanel,me.toolbar,me.searchPanel];
        
        me.items=me.otherItems;

        me.callParent();
    }
});
/**
 * Description: 用户分配角色管理 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgroleuser.ItgUserRoleController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itguserrole',

	init:function(){
		var objlist = this.getReferences();
		//按钮处理
		objlist.btnAdd.setDisabled(true);
		objlist.btnDelete.setDisabled(true);
		//未分配角色面板,增加 选中记录selectchange 触发函数  onNotUserGridSelectionChange
		//objlist.notrolegrid.on("selectchange",this.onNotUserGridSelectionChange,this);
		
		this.callParent();
	},
	
	onSelectChange:function(item) {
		var me = this,
		objlist = me.getReferences();
		
		var usertree=me.lookupReference('usertree');
		var node = usertree.getSelectionModel().getSelection()[0];
		
		if(node){
			//如果叶子节点不是部门，是用户时,查询该用户的角色信息
			if(node.get('leaf')==true){
				objlist.btnSearch.setDisabled(false);
				objlist.notrolegrid.enable();
				objlist.mastergrid.enable();
				this.onBtnSearchClick();
			}
			else{
				objlist.btnSearch.setDisabled(true);
				objlist.notrolegrid.store.removeAll();
				objlist.mastergrid.store.removeAll();
			}
		}
		
		//按钮处理
		objlist.btnAdd.setDisabled(true);
		objlist.btnDelete.setDisabled(true);
		
	},
	
	beforeSearch: function (store) {
		var grid=this.lookupReference('usertree');
		var node = grid.getSelectionModel().getSelection()[0];
	
		//如果 不是叶子节点不查询
		if(!node || node.get('leaf') != true) return ;

		var nodeId = Ext.util.Format.substr(node.get('id'), 1, node.get('id').length);
		
		
		store.proxy.extraParams["userId"] = nodeId;

		var store2 = this.lookupReference('notrolegrid').store;
		store2.proxy.extraParams["userId"] = nodeId;
		
		var searchPanel = this.lookupReference('commonsearch');
		if (searchPanel) {
			var formValue = searchPanel.getValues();
			for (var field in formValue) {
				if (formValue[field] !== '') {
					store2.proxy.extraParams[field] = formValue[field];
				} else {
					delete   store2.proxy.extraParams[field];
				}
			}
		}
		
		store2.load();
		return true;
	},

	onBtnAddClick: function () {
		var me = this;
		var notrolegrid = me.lookupReference('notrolegrid');
		//获取选中的未分配角色
		var roles = notrolegrid.getSelectionModel().getSelection();
		if(roles == null || roles.length <= 0) {
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
		
		//获取已分配角色网格grid对象
		var grid1 = me.lookupReference('mastergrid');
		var usertree = me.lookupReference('usertree');
		var user = usertree.getSelectionModel().getSelection()[0];
		if(!user){
			Ext.Msg.alert('系统提示','请选择用户');
			return;
		}
		
		var userId = Ext.util.Format.substr(user.get('id'), 1, user.get('id').length);
		
		Ext.Array.each(roles, function (role) {
			//向获取的记录增加字段 : _flag
			role.data._flag='A';
			//增加userId字段值
			var usertree = me.lookupReference('usertree');
			role.data.userId = userId;
		
			//新建插入对象
			var newobj=Ext.create(grid1.store.model);
			Ext.apply(newobj.data,role.data);
		
			//将数据增加到已分配角色中
			grid1.store.insert(0,newobj);
			//删除未分配角色的选中记录
			notrolegrid.store.remove(role);
		});
		
		//显示保存按钮
		var objList = me.getReferences();
		objList.btnSave.setDisabled(false);
		
	},
	
	// 删除 如果是新增还没有保存的数据，直接删除，如果是已保存的数据，打上删除标识
    onBtnDeleteClick: function (btn) {
    	var me = this,
        	obj = me.workObject,
            store = obj.getStore(),
            delflag = false,
            items = obj.getSelectionModel().getSelection();

        if (items.length < 1) return;
        if (!me.checkDelete(items)===false) return;
        Ext.Array.each(items, function (record) {
            var _flag = record.get('_flag');
            if (_flag == 'A') {
            	var notrolegrid = me.lookupReference('notrolegrid');
            	//新建插入对象
        		var newobj=Ext.create(notrolegrid.store.model);
        		Ext.apply(newobj.data,record.data);
        		notrolegrid.store.insert(0,newobj);
                store.remove(record);
            } else {
                record.set('_flag', 'D');
                delflag = true;
            }
        });

        if (delflag) {
            obj.view.refresh();
        }
    },

	//未分配角色notrolegrid选中记录触发函数
	onNotUserGridSelectionChange : function(){
		var me = this,
		objlist = me.getReferences();
		objlist.btnAdd.setDisabled(false);
	},
	//已分配角色mastergrid选中记录触发函数
	onGridSelectionChange : function()	{
		var me = this,
		objList = me.getReferences();
		objList.btnDelete.setDisabled(false);
	},
	
	/*保存后处理方法*/
    afterSave:function(result,options){
    	var me = this,
		objList = me.getReferences();
		objList.btnSave.setDisabled(true);
		objList.notrolegrid.store.load();
		objList.mastergrid.store.load();
		
    },
    
    /*从写保存之后方法（保存完后，如果成功重新加载数据，失败则提示错误消息）*/
    afterSave:function(result,options) {
        var me = this;
        if (result.result.resultCode == "0") {
    		var objList = me.getReferences();
    		objList.btnSave.setDisabled(true);
    		objList.notrolegrid.store.reload({afterSaveData:true});
    		objList.mastergrid.store.reload({afterSaveData:true});
        } else {
            Hc.alert(result.result.msg);
        }
        me.callParent(arguments);
    }
    
});

/**
 * Description: 用户分配角色管理 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgroleuser.ItgUserRoleModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itguserrole',

    stores: {
        store2: {
        	type:'basestore',
            model: 'Hc_Framework.model.ItgUserRole',
            proxy: {
                url:  Hc.basePath + 'itg_user_role/getRole.json?isExist=false'
            }
        }
    }
});
/**
 * Description: 用户特权 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/09
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itguserprivilege.ItgUserPrivilege", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itguserprivilege',

    

    controller: "itguserprivilege",

    viewModel: {
        type: "itguserprivilege"
    },
    initComponent:function(){
        var me = this;

        me.gridModel = 'Hc_Framework.model.ItgUserPrivilege';
        me.gridColumns = [
            {dataIndex: 'moduleNo', header: '模块ID'},
            {dataIndex: 'moduleCode', header: '模块编号'},
            {dataIndex: 'moduleName', header: '模块编号', width: 60},
            {dataIndex: 'rightValue', header: '模块权限值', flex: 1},

            {dataIndex: 'addRightValue', header: '添加特权', width: 60},
            {dataIndex: 'rightValue', header: '减少特权', flex: 1},

            {dataIndex: 'creator', header: '分配人员', width: 70},
            {dataIndex: 'createTime', header: '分配日期', xtype: 'datecolumn', format: 'Y-m-d', width: 70},

        ];
        me.gridLoadUrl = Hc.basePath + 'itguserprivilege/list.json'
        me.gridSaveUrl = Hc.basePath + 'itguserprivilege/save.json';

        me.otherItems = [{
            xtype: 'grid',
            reference: 'usergrid',
            width: 150,
            region: 'west',
            split: true,
            columns: [
                {text: '用户编号', dataIndex: 'userCode', flex: 0.5},
                {text: '用户名称', dataIndex: 'userName', flex: 0.5}
            ],
            listeners: {
                'selectionchange': 'onSelectChange'
            }
        }];
        me.searchItems=[{xtype:'textfield',name:'creator',fieldLabel:'创建人员'}];
        me.callParent();
    }
});
/**
 * Description: 用户特权 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/09
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itguserprivilege.ItgUserPrivilegeController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itguserprivilege',

	onSelectChange:function(item) {
		this.onBtnSearchClick();
	},
	onBtnAddClick: function () {
		var me = this,
			user= me.lookupReference('usergrid').getSelectionModel().getSelection();
		if(user.length<1) {
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
		if (!me.win) {
			me.win = Ext.widget('uxrolelist');
		}
		me.win.show();
	},

	onChooseUserClick: function (btn) {
		var me = this,
			userid =  me.lookupReference('usergrid').getSelectionModel().getSelection()[0].get('userId'),
			roles = me.win.getComponent('roleList').getSelectionModel().getSelection(),
			store = me.getView().workObject.getStore(),
			model = store.getModel();
		Ext.Array.each(roles, function (obj) {

			if(store.findBy(function(record){return record.data.roleId==obj.data.roleId})==-1) {
				store.insert(0, new model({
					userId: userid,
					roleId: obj.data.roleId,
					roleName: obj.data.roleName,
					roleOwner: obj.data.roleOwner,
					enableFlag: obj.data.enableFlag,
					remarks: obj.data.remarks,
					_flag:'A'
				}));
			}
		});
		me.win.close();
	},

	customFilter: function (store,filterdata) {
		var item = this.lookupReference('usergrid').getSelection();
		if (item.length < 1)return false;
		filterdata.push({
			property: 'userId',
			value: item[0].get("userId")
		});
		return true;
	}

});

/**
 * Description: 用户特权 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/09
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itguserprivilege.ItgUserPrivilegeModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.itguserprivilege'
});
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
Ext.define('Hc_Framework.view.uchome.HomePage', {
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
/**
 * Description: 用户登陆页面view
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
Ext.define('Hc_Framework.view.uclogin.Login', {
    extend: 'Ext.window.Window',    
        
    viewModel: 'login',    
    controller: 'login',
    modal:true,
    bodyPadding: 10,
    title: '用户登录',
    closable: false,   
    autoShow:true,
    cls: 'login', 
    width:500,
    height:300,
    items: {
        xtype: 'form',
        reference: 'form',
        baseCls: 'x-plain',
        items: [{
            xtype: 'textfield',
            name: 'usercode',
           // bind: '{userCode}',
            fieldLabel: '用户名',
            allowBlank: false,
            enableKeyEvents: true,
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: '密码',
            allowBlank: false,
            enableKeyEvents: true,
            cls: 'password',
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }]
    },
    buttons: [{
        text: '登录',
        listeners: {
            click: 'onLoginbtnClick'
        }
    }]
});

/**
 * Description: 用户登陆页面ViewControll
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
Ext.define('Hc_Framework.view.uclogin.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',

    onLoginbtnClick: function () {
        var me = this,
            form = me.lookupReference('form'),
            formdata = form.getValues();

        if (!form.isValid()) return;

        //后端验证
        Ext.Ajax.request({
            url: '/login.json',
            method: 'POST',
            params: formdata,
            success: function (response,opts) {
            	console.info("执行了额咩有");
                me.onSuccess(formdata,Ext.decode(response.responseText));
            }
        });

        this.onSuccess(formdata,{username:'吴德锋'});
    },
    onSpecialKey: function (field, e) {
        if (e.getKey() === e.ENTER) {
            this.onLoginbtnClick();
        }
    },
    onSuccess: function (data, result) {
        var me = this,
            username = result.username,
            user = Ext.create('Hc_Framework.model.CurrentUser', {
                userCode: data.usercode,
                userName: username
            });
        user.save();
        me.getView().destroy();
        Ext.create('Hc_Framework.view.main.Main', {
            viewModel: {
                data: {
                    system: {
                        username: username
                    }
                }
            }
        });
    }
});

/**
 * Description: 用户登陆页面ViewModel
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
Ext.define('Hc_Framework.view.uclogin.LoginModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.login',
    data: {
        userCode: 'wu.df'
    }
});

/**
 * Description: 系统主框架 View
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

Ext.define('Hc_Framework.view.ucmain.Main', {
    extend: 'Ext.container.Viewport',

    

    id:'mainpage',
    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: 'border',

    items: [{
        xtype: 'maintop',
        region: 'north',
        height: 100
    }, {
        region: 'west',
        width: 180,
        split: true,
        collapsible: true,
        collapseMode: 'mini',
        title:'导航菜单',
        layout: 'fit',
        items: [{
            xtype: 'leftmenu'
        }]
    }, {
        region: 'center',
        xtype: 'maincenter'
    }],

    initComponent: function () {
    	console.info("这是我们的Main");
        Ext.setGlyphFontFamily('FontAwesome');
        this.callParent();
    }
});

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
/**
 * Description: 我的收藏夹菜单树
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/02/07
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.menu.MyFavorite', {
    extend: 'Ext.tree.Panel',

    xtype: 'myfavorite',

    header: {
        hidden: true
    },

    rootVisible: true,
    lines: true,
    hideHeaders: true,

    columns: [
        {dataIndex: 'menuName', xtype: 'treecolumn', flex: 1}
    ],

    store: {type:'myfavorite'},
    listeners: {
        itemclick: 'onTreeMenuClick'
    },

    initComponent: function () {
        this.callParent();
    }
});
/**
 * Description: 主框架工作台
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.region.Center', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.maincenter',

    uses: [
        'Hc_Framework.view.uchome.HomePage','Hc_Framework.view.itgloginuser.ItgLoginUser'
    ],

    closeAction: 'hide',
    autoDestroy: true,
    tabPosition: 'top',
    border: false,
    id: 'maintabpanel',

    plugins: [{
        ptype: 'tabclosemenu',
        closeAllTabsText: '关闭所有',
        closeOthersTabsText: '关闭其他',
        closeTabText: '关闭'
    },Ext.create('Ext.ux.TabReorderer')],

    initComponent: function () {

        this.items = [{
            glyph: Hc.Icon.btnHome,
            xtype: 'homepage', /*调试模块*/
         //   xtype: 'itgloginuser',
			reorderable: false
        }];

        this.callParent();
    }
});
/**
 * Description: 主框架左侧菜单
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.region.LeftMenu', {   
    extend:'Ext.Container',
    alias: 'widget.leftmenu',

    

    layout: 'fit',
    border: false,  

    items: [{           
            xtype: 'maintree',
            reorderable: false,
            border: false
        }],

    initComponent: function () {
        this.callParent();
    }
});
/**
 * Description: 主框架顶部
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.region.Top', {
    extend: 'Ext.Container',
    alias: 'widget.maintop',

    id: 'app-header',

    title: '怀臣生产管理系统',
    titleEn:'huaichen factory 1',

    layout: {
        type: 'hbox',
        align: 'middle'
    },

    initComponent: function () {
        document.title = this.title;

        this.items = [{
            xtype: 'component',
            id: 'app-header-logo'
        }, {
            xtype: 'component',
            html:'<span id="app-header-title-en"><span>'+this.titleEn+'<br /><span id="app-header-title">'+ this.title+'</span>'
        },{
            xtype:'component',
            id:'app-header-systemname',
            bind: {
                html: '{system.name}'
            }
        },{
            xtype:'component',
            id:'app-header-version',
            bind: {
                html: '<span onclick="Hc.openUrl(\'releaselog.html\',\'发布日志\')" style="cursor: pointer">{system.version}</span>'
            },
            flex: 1
        } , {
            xtype: 'toolbar',
            baseCls: 'x-place',
            style:'color:red',
            id:'app-header-toolbar',
            items: [{
                bind:{
                    text:'{currentUser.deptName}'
                },
                glyph:Hc.Icon.btnGroup
            }, {
                bind:{
                    text:'{currentUser.userName}'
                },
                glyph:Hc.Icon.btnUser
            }, {
                text:'通讯录',
                handler: 'onDoing',
                glyph:Hc.Icon.btnAddressList
            }, {
                text: '设置',
                glyph: Hc.Icon.btnSetting,
                handler: 'setUserPassword'
            }, {
                text: '退出',
                glyph: Hc.Icon.btnExit,
                handler: 'onExitButtonClick'
            }]
        }];

        this.callParent();
    }
});
/**
 * Description: 主框架应用程序入口
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
Ext.application({
    extend: 'Hc_Framework.Application',    
    appFolder:'resources/app',
    name: 'Hc_Framework'
   // autoCreateViewport: 'Hc_Framework.view.ucmain.Main'
});



