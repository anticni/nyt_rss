package com.natera.nytrss.dto;

import lombok.Data;

import java.util.Date;

@Data
public class NyTimesNewsArticle {

    private String title;
    private String description;
    private String link;
    private String creator;
    private String imgUrl;
    private Date publishedDate;



}
