import {Component, Input, OnChanges} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {GoogletranslateService} from "../../services/googletranslate.service";

/**
 * @title Card with media size
 */
@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})
export class CardComponent implements OnChanges {
  public constructor(private apiService: ApiService, private google: GoogletranslateService) {
  }

  @Input() language: string;

  cards = this.apiService.data;

  ngOnChanges(): void {
    this.translateText()
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  translateText() {
    let translated: any[] = Object.assign([], this.cards.value);
    translated.forEach((translation) => {
        this.google.translate({q: translation.title, target: this.language}).subscribe(
          (res: any) => {
            translation.title = res.data.translations[0].translatedText;
          });
        this.google.translate({q: translation.description, target: this.language}).subscribe(
          (res: any) => {
            translation.description = res.data.translations[0].translatedText;
          });
      }
    )
    this.cards.next(translated);
  }
}
