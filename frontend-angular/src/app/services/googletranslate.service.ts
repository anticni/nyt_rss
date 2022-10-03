import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GoogleObj} from "../models/googletranslateobj";

@Injectable({
  providedIn: 'root'
})
export class GoogletranslateService {

  url = "https://translation.googleapis.com/language/translate/v2?key=";
  key = "AIzaSyABn_Y-iLfC7gSrRSPLKKiZprRPA9eyU7o";

  constructor(private http: HttpClient) {
  }

  translate(obj: GoogleObj) {
    return this.http.post(this.url + this.key, obj);
  }
}
