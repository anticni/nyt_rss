package com.natera.nytrss.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {

    @RequestMapping("/frontend-angular")
    public String angular() {
        return "frontend-angular/index.html";
    }

    @RequestMapping("/frontend-react")
    public String react() {
        return "frontend-react/index.html";
    }
}
