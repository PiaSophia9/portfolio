import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../service/translation/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss',
})
export class DataComponent {
  translate = inject(TranslationService);

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
