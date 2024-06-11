import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  isGerman = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  public switchLanguage(language: string): void {
    this.translate.use(language);
    if (language == 'de') {
      this.isGerman = true;
    } else {
      this.isGerman = false;
    }
    console.log('is German', this.isGerman);
  }
}
