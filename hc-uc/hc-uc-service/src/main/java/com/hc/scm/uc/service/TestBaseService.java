package com.hc.scm.uc.service;

import com.hc.scm.uc.dao.entity.ItgApplication;
import com.github.pagehelper.Page;

public interface TestBaseService {
	
	public Page<ItgApplication> getList(String appCode);
	
	public void removeRedis(String appCode);
	
	public Page<ItgApplication>  updateRedis(String appCode);

}
