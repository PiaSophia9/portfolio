import { Component, inject } from '@angular/core';
import { TranslationService } from '../../service/translation/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
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
