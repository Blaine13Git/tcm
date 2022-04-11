package com.tc.framework.entity.persistent;

import lombok.Data;

import java.util.Date;

/**
 * 备份
 *
 */
@Data
public class CaseBackup {
    private Long id;
    private Long caseId;
    private String title;
    private String creator;
    private Date gmtCreated;
    private String caseContent;
    private String recordContent;
    private String extra;
    private Integer isDelete;
}
