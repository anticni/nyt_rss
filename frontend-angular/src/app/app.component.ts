import {Component, OnInit} from '@angular/core';
import {GoogletranslateService} from "./services/googletranslate.service";
import {GoogleObj} from "./models/googletranslateobj";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private google: GoogletranslateService) {
  }

  title = 'nyt-rss-feed';
  currentDate = Date.now();
  private translateBtn: any;
  public selectedLanguage: string;

  ngOnInit(): void {
    this.translateBtn = document.getElementById("translatebtn");
    this.selectedLanguage ='us'
  }

  public onLanguageChange(val: string) {
    this.selectedLanguage = val;
  }

}

