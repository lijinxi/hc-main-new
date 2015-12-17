package com.hc.scm.uc.dao.entity;

import java.util.Date;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hcopyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     peng.hz
 * @date:  2015-03-19 10:49:45
 * @version 1.0.0
 */
public class ItgDictDtl {
    /**
     * 字典明细id
     */
    private Integer dictDtlId;

    /**
     * 字典id
     */
    private Integer dictId;

    /**
     * 明细编码
     */
    private String itemCode;

    /**
     * 明细名称
     */
    private String itemName;

    /**
     * 启用状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

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
    private Date createTime;

    /**
     * 修改人
     */
    private String modifier;

    /**
     * 修改时间
     */
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #dictDtlId}
     *
     * @return the value of itg_dict_dtl.dict_dtl_id
     */
    public Integer getDictDtlId() {
        return dictDtlId;
    }

    /**
     * 
     * {@linkplain #dictDtlId}
     * @param dictDtlId the value for itg_dict_dtl.dict_dtl_id
     */
    public void setDictDtlId(Integer dictDtlId) {
        this.dictDtlId = dictDtlId;
    }

    /**
     * 
     * {@linkplain #dictId}
     *
     * @return the value of itg_dict_dtl.dict_id
     */
    public Integer getDictId() {
        return dictId;
    }

    /**
     * 
     * {@linkplain #dictId}
     * @param dictId the value for itg_dict_dtl.dict_id
     */
    public void setDictId(Integer dictId) {
        this.dictId = dictId;
    }

    /**
     * 
     * {@linkplain #itemCode}
     *
     * @return the value of itg_dict_dtl.item_code
     */
    public String getItemCode() {
        return itemCode;
    }

    /**
     * 
     * {@linkplain #itemCode}
     * @param itemCode the value for itg_dict_dtl.item_code
     */
    public void setItemCode(String itemCode) {
        this.itemCode = itemCode;
    }

    /**
     * 
     * {@linkplain #itemName}
     *
     * @return the value of itg_dict_dtl.item_name
     */
    public String getItemName() {
        return itemName;
    }

    /**
     * 
     * {@linkplain #itemName}
     * @param itemName the value for itg_dict_dtl.item_name
     */
    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of itg_dict_dtl.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for itg_dict_dtl.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of itg_dict_dtl.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for itg_dict_dtl.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of itg_dict_dtl.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for itg_dict_dtl.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of itg_dict_dtl.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for itg_dict_dtl.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of itg_dict_dtl.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for itg_dict_dtl.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of itg_dict_dtl.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for itg_dict_dtl.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of itg_dict_dtl.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for itg_dict_dtl.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}