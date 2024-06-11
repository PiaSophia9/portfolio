import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../service/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  translate = inject(TranslationService);

  constructor() {
    this.logFunction();
  }

  logFunction() {
    console.log('this.translate.isGerman', this.translate.isGerman);
  }
}
