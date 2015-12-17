package com.hc.scm.uc.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.hc.scm.common.annotation.ReadCacheAnnotation;
import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.constans.SysConstans;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.uc.dao.dal.ItgMenuListDao;
import com.hc.scm.uc.dao.dal.ItgUserRoleDao;
import com.hc.scm.uc.dao.entity.ItgMenuList;
import com.hc.scm.uc.dao.model.UserMenuTreeModel;
import com.hc.scm.uc.service.ItgMenuListService;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-03-06 15:42:11
 * @version 1.0.0
 */
@Service("itgMenuListService")
class ItgMenuListServiceImpl extends BaseCrudServiceImpl implements ItgMenuListService {
    @Resource
    private ItgMenuListDao itgMenuListDao;
    @Resource
    private ItgUserRoleDao itgUserRoleDao;

    @Override
    public BaseCrudDao init() {
        return itgMenuListDao;
    }

	@Override
	@ReadCacheAnnotation(assignCacheKey = SysConstans.REDIS_CACHE_USERMENULIST+"+$(0)", remoteExpire = 7200)
	public List<UserMenuTreeModel> getUserMenuList(String loginName,String projectCode,
			int userId) throws ServiceException {
		List<UserMenuTreeModel> retList = new ArrayList<UserMenuTreeModel>();
		//1.增加超级管理员逻辑：若当前用户为拥有超级管理员角色，则加载所有菜单所有模块所有权限
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("userId", userId);
		params.put("roleId", SysConstans.SUPER_ADMIN_ROLE_ID);
		int count = itgUserRoleDao.findCount(params);
		if(count > 0){
			retList = itgMenuListDao.selectAllMenuList(projectCode);
		}else{
			/**
			 * 2.若非超级管理员则需根据用户权限进行获取   当前用户所有模块 
			 * 	调用通过sql语句生成的菜单列表
			 * 	通过反向遍历生成的菜单没法维持其菜单次序
			 *  通过模块的search_code关联出其所有菜单列表
			 */
			retList = itgMenuListDao.selectUserMenuListBySQL(projectCode, userId);
			//2.若非超级管理员则需根据用户权限进行获取   当前用户所有模块
			/*List<UserMenuTreeModel> modules = itgMenuListDao.selectUserModuleList(projectCode, userId);
			if(modules!=null && modules.size()>0){
				//遍历模块清单，反向生成相应菜单列表
				Map<Integer, UserMenuTreeModel> menuMap = new HashMap<Integer, UserMenuTreeModel>();
				for(UserMenuTreeModel model : modules){
					model.setLeaf("true");
					model.setExpanded("true");
					generateMenuList(model, menuMap, retList);
				}
			}*/
		}
		
		return retList;
	}
	
	public void generateMenuList(UserMenuTreeModel curModel, Map<Integer, UserMenuTreeModel> menuMap, List<UserMenuTreeModel> menus){
		Integer curMenuNo = curModel.getMenuNo();
		Integer parentMenuNo = curModel.getParentMenuNo();
		//若递归至菜单树root节点，直接return，不通过递归生成root节点，直接写死
		if(curMenuNo == 0){
			return;
		}
		if(menuMap.containsKey(curMenuNo)){
			return;
		}else{
			//若当前节点不在menuMap中，则需将当前节点加入至所有菜单列表中
			menus.add(curModel);
			menuMap.put(curMenuNo, curModel);
			//获取父节点的菜单信息，进入下次递归遍历
			ItgMenuList entity = new ItgMenuList();
			entity.setMenuNo(parentMenuNo);
			ItgMenuList parentEntity = itgMenuListDao.findById(entity);
			if(parentEntity != null){
				UserMenuTreeModel parentModel = new UserMenuTreeModel();
				parentModel.setMenuNo(parentEntity.getMenuNo());
				parentModel.setMenuName(parentEntity.getMenuName());
				parentModel.setParentMenuNo(parentEntity.getParentMenuNo());
				parentModel.setLeaf("false");
				parentModel.setExpanded("true");
				generateMenuList(parentModel, menuMap, menus);
			}
		}
	}
}