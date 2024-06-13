import { Component, inject } from '@angular/core';
import { TranslationService } from '../../service/translation.service';
import { TranslateModule } from '@ngx-translate/core';
// import Aos from 'aos';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  translate = inject(TranslationService);

  // ngOnInit() {
  //   Aos.init();
  // }
}
