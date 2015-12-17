package com.hc.scm.uc.service;

import java.util.List;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.uc.dao.entity.ItgLoginUser;
import com.hc.scm.uc.dao.model.DepartmentTreeModel;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     jinwen
 * @date:  2015-03-07 13:30:53
 * @version 1.0.0
 */
public interface ItgLoginUserService extends BaseCrudService {
	public List<DepartmentTreeModel> getDeptTreeByParDeptNo(int deptNo) throws ServiceException; 
	
	/**
	 * 添加对象带前置AOP验证
	 * @param model
	 * @return
	 * @throws ServiceException
	 */
	public int addWithValid(ItgLoginUser model) throws ServiceException;
	
	/**
	 * 返回SystemUser对象
	 * @param loginName
	 * @param loginPassword
	 * @return
	 * @throws ServiceException
	 */
	public SystemUser getSystemUserByName(String loginName,String loginPassword) throws ServiceException;
	
	/**
	 * 修改密码
	 * @param model 
	 * @param user TODO
	 * @return
	 * @throws ServiceException
	 */
	public int changePassword(ItgLoginUser model, SystemUser user) throws ServiceException;
}