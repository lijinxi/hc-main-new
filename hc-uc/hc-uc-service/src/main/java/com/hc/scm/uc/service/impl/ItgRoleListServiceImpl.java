package com.hc.scm.uc.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.model.ItgRoleListModel;
import com.hc.scm.common.model.ItgUserRoleModel;
import com.hc.scm.uc.dao.dal.ItgRoleListDao;
import com.hc.scm.uc.dao.dal.ItgUserRoleDao;
import com.hc.scm.uc.dao.entity.ItgRoleList;
import com.hc.scm.uc.dao.entity.ItgUserRole;
import com.hc.scm.uc.service.ItgRoleListService;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-09 15:22:57
 * @version 1.0.0
 */
@Service("itgRoleListService")
class ItgRoleListServiceImpl extends BaseCrudServiceImpl implements ItgRoleListService {
    @Resource
    private ItgRoleListDao itgRoleListDao;
    @Resource
    private ItgUserRoleDao itgUserRoleDao;
    
    @Override
    public BaseCrudDao init() {
        return itgRoleListDao;
    }

	@Override
	public List<ItgUserRoleModel> getItgRoleListByLoginUser(String userId) {
		Map<String, Object> params=new HashMap<String, Object>();
		params.put("userId",Integer.valueOf(userId));
		List<ItgUserRole> itgUserRoleList=itgUserRoleDao.findByBiz(null, params);
		List<ItgUserRoleModel> retlist=new ArrayList<ItgUserRoleModel>();
		ItgUserRoleModel destObj=new ItgUserRoleModel();
		for(ItgUserRole tmp:itgUserRoleList){
			 destObj=new ItgUserRoleModel();
			 destObj.setUserRoleId(tmp.getUserRoleId());
			 destObj.setUserId(tmp.getUserId());
			 destObj.setRoleId(tmp.getRoleId());
			 destObj.setItgRoleList(getItgRoleListModelById(userId));
			 retlist.add(destObj);
		}
		return retlist;
	}
	
	/**
	 * 转换为ItgRoleListModel
	 * @param userId
	 * @return
	 */
	private List<ItgRoleListModel> getItgRoleListModelById(String userId){
		Map<String, Object> params=new HashMap<String, Object>();
		params.put("userId",Integer.valueOf(userId));
		List<ItgRoleList> srcList=itgRoleListDao.findByBiz(null, params);
		List<ItgRoleListModel> retlist=new ArrayList<ItgRoleListModel>();
		ItgRoleListModel destObj=new ItgRoleListModel();
		for(ItgRoleList tmp:srcList){
			 destObj=new ItgRoleListModel();
			 destObj.setRoleId(tmp.getRoleId());
			 destObj.setRoleName(tmp.getRoleName());
		}
		return retlist;
		
	}
}