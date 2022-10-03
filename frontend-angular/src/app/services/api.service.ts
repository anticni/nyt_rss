import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public data = new BehaviorSubject<any[]>([]);


  constructor() {
    this.fetchRss();
  }

  fetchRss() {
    fetch("http://localhost:8080/api/rss/nyt").then(r => r.json()).then(json => {
      this.data.next(json);
    });
  }

}
