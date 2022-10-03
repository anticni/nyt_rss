package com.natera.nytrss.controller;

import com.natera.nytrss.dto.NyTimesNewsArticle;
import com.natera.nytrss.service.RssService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController("/api/rss")
public class RssController {

    private final RssService rssService;

    @SneakyThrows
    @GetMapping("/nyt")
    public List<NyTimesNewsArticle> getNYTimesRss() {
        return rssService.getNytTechnologyNews();
    }

}
