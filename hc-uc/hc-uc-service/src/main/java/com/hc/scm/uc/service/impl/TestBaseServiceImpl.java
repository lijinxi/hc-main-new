package com.hc.scm.uc.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.hc.scm.common.annotation.ReadCacheAnnotation;
import com.hc.scm.common.annotation.RemoveCacheAnnotation;
import com.hc.scm.common.annotation.UpdateCacheAnnotation;
import com.hc.scm.uc.dao.dal.ItgApplicationDao;
import com.hc.scm.uc.dao.entity.ItgApplication;
import com.hc.scm.uc.service.TestBaseService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

@Service("testBaseService")
public class TestBaseServiceImpl implements TestBaseService {

	@Resource
    private ItgApplicationDao itgApplicationDao;
	
	@Override
	@ReadCacheAnnotation(assignCacheKey = "hcApplication_CACHE_+$(0)", remoteExpire = 6000)
	public Page<ItgApplication> getList(String appCode) {
		 Map<String, Object> params=new HashMap<String, Object>();
		 if(StringUtils.isNotEmpty(appCode)){
			 params.put("appCode", appCode);
		 }
		PageHelper.startPage(1, 10);
		return (Page)itgApplicationDao.findByPage(null, null, null, params);
	}

	@Override
	@RemoveCacheAnnotation(assignCacheKey="hchchcication_CACHE_+$(0)")
	public void removeRedis(String appCode) {
		
		
	}

	@Override
	@UpdateCacheAnnotation(assignCacheKey="hc_Ihcplhcion_CACHE_+$(0)", remoteExpire = 6000)
	public Page<ItgApplication>  updateRedis(String appCode) {
		 Map<String, Object> params=new HashMap<String, Object>();
		 if(StringUtils.isNotEmpty(appCode)){
			 params.put("appCode", appCode);
		 }
		 PageHelper.startPage(1, 10);
		return (Page)itgApplicationDao.findByPage(null, null, null, params);
		
	}

}
