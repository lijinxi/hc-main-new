package com.hc.scm.uc.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.hc.scm.common.annotation.ReadCacheAnnotation;
import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.constans.SysConstans;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.exception.ValidException;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.CommonUtil;
import com.hc.scm.uc.dao.dal.ItgDepartmentDao;
import com.hc.scm.uc.dao.dal.ItgLoginUserDao;
import com.hc.scm.uc.dao.dal.ItgMenuListDao;
import com.hc.scm.uc.dao.entity.ItgLoginUser;
import com.hc.scm.uc.dao.model.DepartmentTreeModel;
import com.hc.scm.uc.service.ItgLoginUserService;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-07 13:30:53
 * @version 1.0.0
 */
@Service("itgLoginUserService")
class ItgLoginUserServiceImpl extends BaseCrudServiceImpl implements ItgLoginUserService {
    @Resource
    private ItgLoginUserDao itgLoginUserDao;
    @Resource
    private ItgDepartmentDao itgDepartmentDao;
    @Resource
    private ItgMenuListDao itgMenuListDao;
    
    @Override
    public BaseCrudDao init() {
        return itgLoginUserDao;
    }

	@Override
	public List<DepartmentTreeModel> getDeptTreeByParDeptNo(int deptNo)
			throws ServiceException {
		List<DepartmentTreeModel> tree = itgDepartmentDao.getDeptByParDeptNo(deptNo);
		if(tree != null && tree.size() > 0){
			for(DepartmentTreeModel model : tree){
				this.buildDeptTree(model);
			}
		}
		else
			tree = null;
		return tree;
	}

	private void buildDeptTree(DepartmentTreeModel model) {
		if(model != null){
			int deptNo = model.getDeptNo();
			model.setExpanded("true");
			model.setId(String.valueOf(deptNo));
			model.setParentId(String.valueOf(model.getParentId()));
			List<DepartmentTreeModel> childTree = itgDepartmentDao.getDeptByParDeptNo(deptNo);
			if(childTree != null && childTree.size() > 0){
				for(DepartmentTreeModel temp : childTree){
					this.buildDeptTree(temp);
				}
				model.setChildren(childTree);
				model.setLeaf("false");
			}
			else{
				model.setChildren(null);
				model.setLeaf("true");
			}
		}
	}

	@Override
	public int addWithValid(ItgLoginUser model) throws ServiceException {
		return itgLoginUserDao.add(model);
	}
	
	@Override
	@ReadCacheAnnotation(assignCacheKey = SysConstans.REDIS_CACHE_USER+"+$(0)", remoteExpire = 7200)
	public SystemUser getSystemUserByName(String loginName,String loginPassword){
		SystemUser loginUser=null;
		Map<String,Object> params=new HashMap<String,Object>();
		params.put("userCode", loginName);
		if(StringUtils.isNotEmpty(loginPassword)){
			params.put("password", loginPassword);
		}
		List<Object> list=itgLoginUserDao.findByBiz(null,params);
		if(list!=null){
			String userJson=JSON.toJSONString(list.get(0));//数据库取用户信息
			loginUser=JSON.parseObject(userJson,SystemUser.class);
			
			//获取当前用户所有模块
			//TODO
			/*List<UserMenuTreeModel> modules = itgMenuListDao.selectUserModuleList("hcginUser.getUserId());
			if(modules!=null && modules.size()>0){
				HashMap<String, String> userMenuMap=new HashMap<>();
				for(UserMenuTreeModel temp:modules){
					userMenuMap.put(temp.getUrl().replace("#", ""), temp.getRightValue().toString());
				}
			}*/
		}
		return loginUser;
	}

	@Override
	public int changePassword(ItgLoginUser model, SystemUser user) throws ServiceException {
		int ret = 0;
		Map<String, Object> params = new HashMap<String, Object>();
		String oldPassword = model.getOldPassword();
		int userId = model.getUserId();
		String  userCode=model.getUserCode();
		String encryptedOldPwd = CommonUtil.md5(oldPassword);	//加密
		params.put("userId", userId);
		params.put("password", encryptedOldPwd);
	//	params.put("userCode", userCode);
		//校验原密码
		System.out.println("信息输出:"+userId+":"+encryptedOldPwd+":"+oldPassword+":"+userCode);
		int count = 0;
		try {			
			count = itgLoginUserDao.findCount(params);
			System.out.println("校验count值="+count);
		} catch (DaoException  e) {
			throw new ServiceException(e.getMessage(), e);
		}
		if(count == 0){
			throw new ValidException("原密码错误");
		}
		//更新密码
		String encryptedPwd = CommonUtil.md5(model.getPassword());
		model.setPassword(encryptedPwd);
		model.setModifyTime(new Date());
		model.setCreator(user.getUserName());
		try {
			ret = itgLoginUserDao.modifyById(model);
		} catch (DaoException e) {
			throw new ServiceException(e.getMessage(), e);
		}
		return ret;
	}

}