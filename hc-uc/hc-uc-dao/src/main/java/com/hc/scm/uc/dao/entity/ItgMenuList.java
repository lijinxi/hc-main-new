package com.hc.scm.uc.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-06 15:42:11
 * @version 1.0.0
 */
public class ItgMenuList {
    /**
     * 菜单编号
     */
    private Integer menuNo;

    /**
     * 菜单名称(如为模块，与模块名称保持同步)
     */
    private String menuName;

    /**
     * 所属应用编号(如按项目建菜单则失效，默认为0)
     */
    private Integer appNo;

    /**
     * 所属项目编码(如按应用建菜单则失效，默认为0)
     */
    private String projectCode;

    /**
     * 模块编号(如不为空，说明是菜单一个实际的模块，其下不可再挂子菜单)
     */
    private Integer moduleNo;

    /**
     * 启用状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

    /**
     * 父菜单编号
     */
    private Integer parentMenuNo;

    /**
     * 检索码(由系统根据规则维护，间隔位为4，提高检索效率)
     */
    private String searchCode;

    /**
     * 级别号(1,2,3,4,5...)
     */
    private Integer levelNo;

    /**
     * 菜单分组(0=否 1=是 即在菜单加入之前增加一个分组栏)
     */
    private Integer beginGroup;

    /**
     * 排列序号
     */
    private Integer orderNo;

    /**
     * 建档人
     */
    private String creator;

    /**
     * 建档时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    /**
     * 修改人
     */
    private String modifier;

    /**
     * 修改时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #menuNo}
     *
     * @return the value of itg_menu_list.menu_no
     */
    public Integer getMenuNo() {
        return menuNo;
    }

    /**
     * 
     * {@linkplain #menuNo}
     * @param menuNo the value for itg_menu_list.menu_no
     */
    public void setMenuNo(Integer menuNo) {
        this.menuNo = menuNo;
    }

    /**
     * 
     * {@linkplain #menuName}
     *
     * @return the value of itg_menu_list.menu_name
     */
    public String getMenuName() {
        return menuName;
    }

    /**
     * 
     * {@linkplain #menuName}
     * @param menuName the value for itg_menu_list.menu_name
     */
    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    /**
     * 
     * {@linkplain #appNo}
     *
     * @return the value of itg_menu_list.app_no
     */
    public Integer getAppNo() {
        return appNo;
    }

    /**
     * 
     * {@linkplain #appNo}
     * @param appNo the value for itg_menu_list.app_no
     */
    public void setAppNo(Integer appNo) {
        this.appNo = appNo;
    }

    /**
     * 
     * {@linkplain #projectCode}
     *
     * @return the value of itg_menu_list.project_code
     */
    public String getProjectCode() {
        return projectCode;
    }

    /**
     * 
     * {@linkplain #projectCode}
     * @param projectCode the value for itg_menu_list.project_code
     */
    public void setProjectCode(String projectCode) {
        this.projectCode = projectCode;
    }

    /**
     * 
     * {@linkplain #moduleNo}
     *
     * @return the value of itg_menu_list.module_no
     */
    public Integer getModuleNo() {
        return moduleNo;
    }

    /**
     * 
     * {@linkplain #moduleNo}
     * @param moduleNo the value for itg_menu_list.module_no
     */
    public void setModuleNo(Integer moduleNo) {
        this.moduleNo = moduleNo;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of itg_menu_list.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for itg_menu_list.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #parentMenuNo}
     *
     * @return the value of itg_menu_list.parent_menu_no
     */
    public Integer getParentMenuNo() {
        return parentMenuNo;
    }

    /**
     * 
     * {@linkplain #parentMenuNo}
     * @param parentMenuNo the value for itg_menu_list.parent_menu_no
     */
    public void setParentMenuNo(Integer parentMenuNo) {
        this.parentMenuNo = parentMenuNo;
    }

    /**
     * 
     * {@linkplain #searchCode}
     *
     * @return the value of itg_menu_list.search_code
     */
    public String getSearchCode() {
        return searchCode;
    }

    /**
     * 
     * {@linkplain #searchCode}
     * @param searchCode the value for itg_menu_list.search_code
     */
    public void setSearchCode(String searchCode) {
        this.searchCode = searchCode;
    }

    /**
     * 
     * {@linkplain #levelNo}
     *
     * @return the value of itg_menu_list.level_no
     */
    public Integer getLevelNo() {
        return levelNo;
    }

    /**
     * 
     * {@linkplain #levelNo}
     * @param levelNo the value for itg_menu_list.level_no
     */
    public void setLevelNo(Integer levelNo) {
        this.levelNo = levelNo;
    }

    /**
     * 
     * {@linkplain #beginGroup}
     *
     * @return the value of itg_menu_list.begin_group
     */
    public Integer getBeginGroup() {
        return beginGroup;
    }

    /**
     * 
     * {@linkplain #beginGroup}
     * @param beginGroup the value for itg_menu_list.begin_group
     */
    public void setBeginGroup(Integer beginGroup) {
        this.beginGroup = beginGroup;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of itg_menu_list.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for itg_menu_list.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of itg_menu_list.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for itg_menu_list.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of itg_menu_list.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for itg_menu_list.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of itg_menu_list.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for itg_menu_list.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of itg_menu_list.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for itg_menu_list.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of itg_menu_list.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for itg_menu_list.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}