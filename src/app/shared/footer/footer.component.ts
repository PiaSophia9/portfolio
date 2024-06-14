import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../service/translation/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  translate = inject(TranslationService);

  SocialIcons: { imageSrc: string; link: string }[] = [
    {
      imageSrc: './assets/img/social_icons/github_big.svg',
      link: 'https://github.com/PiaSophia9',
    },
    {
      imageSrc: './assets/img/social_icons/email_big.svg',
      link: 'mailto:mail@sophia-brouwers.de',
    },
    {
      imageSrc: './assets/img/social_icons/linkedIn_big.svg',
      link: 'https://www.linkedin.com/in/sophia-brouwers/',
    },
  ];
}
