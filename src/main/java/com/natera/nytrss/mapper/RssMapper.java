package com.natera.nytrss.mapper;

import com.natera.nytrss.dto.NyTimesNewsArticle;
import com.rometools.rome.feed.synd.SyndEntry;
import org.jdom2.Attribute;
import org.jdom2.Element;

public class RssMapper {

    public static NyTimesNewsArticle mapToArticle(SyndEntry syndEntry) {
        NyTimesNewsArticle article = new NyTimesNewsArticle();
        article.setTitle(syndEntry.getTitle());
        article.setPublishedDate(syndEntry.getPublishedDate());
        article.setLink(syndEntry.getLink());
        article.setDescription(syndEntry.getDescription().getValue());
        article.setCreator(syndEntry.getAuthor());
        for (Element element : syndEntry.getForeignMarkup()) {
            Attribute urlAttribute = element.getAttribute("url");
            Attribute mediumAttribute = element.getAttribute("medium");
            if (urlAttribute != null && mediumAttribute != null && "image".equalsIgnoreCase(mediumAttribute.getValue())){
                article.setImgUrl(urlAttribute.getValue());
            }
        }
        return article;
    }

}
