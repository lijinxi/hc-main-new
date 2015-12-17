package com.hc.scm.uc.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-25 08:39:49
 * @version 1.0.0
 */
public class ItgCommonLog {
    /**
     * 
     */
    private Integer logId;

    /**
     * 
     */
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date logTime;

    /**
     * 
     */
    private String logUser;

    /**
     * 
     */
    private String logModelType;

    /**
     * 
     */
    private String logContent;

    /**
     * 
     * {@linkplain #logId}
     *
     * @return the value of itg_common_log.log_id
     */
    public Integer getLogId() {
        return logId;
    }

    /**
     * 
     * {@linkplain #logId}
     * @param logId the value for itg_common_log.log_id
     */
    public void setLogId(Integer logId) {
        this.logId = logId;
    }

    /**
     * 
     * {@linkplain #logTime}
     *
     * @return the value of itg_common_log.log_time
     */
    public Date getLogTime() {
        return logTime;
    }

    /**
     * 
     * {@linkplain #logTime}
     * @param logTime the value for itg_common_log.log_time
     */
    public void setLogTime(Date logTime) {
        this.logTime = logTime;
    }

    /**
     * 
     * {@linkplain #logUser}
     *
     * @return the value of itg_common_log.log_user
     */
    public String getLogUser() {
        return logUser;
    }

    /**
     * 
     * {@linkplain #logUser}
     * @param logUser the value for itg_common_log.log_user
     */
    public void setLogUser(String logUser) {
        this.logUser = logUser;
    }

    /**
     * 
     * {@linkplain #logModelType}
     *
     * @return the value of itg_common_log.log_model_type
     */
    public String getLogModelType() {
        return logModelType;
    }

    /**
     * 
     * {@linkplain #logModelType}
     * @param logModelType the value for itg_common_log.log_model_type
     */
    public void setLogModelType(String logModelType) {
        this.logModelType = logModelType;
    }

    /**
     * 
     * {@linkplain #logContent}
     *
     * @return the value of itg_common_log.log_content
     */
    public String getLogContent() {
        return logContent;
    }

    /**
     * 
     * {@linkplain #logContent}
     * @param logContent the value for itg_common_log.log_content
     */
    public void setLogContent(String logContent) {
        this.logContent = logContent;
    }
}