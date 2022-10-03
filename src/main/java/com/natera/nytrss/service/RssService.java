package com.natera.nytrss.service;

import com.natera.nytrss.dto.NyTimesNewsArticle;
import com.natera.nytrss.mapper.RssMapper;
import com.rometools.rome.feed.synd.SyndEntry;
import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.FeedException;
import com.rometools.rome.io.SyndFeedInput;
import com.rometools.rome.io.XmlReader;
import org.jdom2.Attribute;
import org.jdom2.Element;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RssService {

    public List<NyTimesNewsArticle> getNytTechnologyNews() throws IOException, FeedException {
        URL feedSource = new URL("https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml");
        SyndFeedInput input = new SyndFeedInput();
        SyndFeed feed = input.build(new XmlReader(feedSource));
        List<NyTimesNewsArticle> articles = feed.getEntries().stream().map(RssMapper::mapToArticle).collect(Collectors.toList());
        return articles;
    }

}
