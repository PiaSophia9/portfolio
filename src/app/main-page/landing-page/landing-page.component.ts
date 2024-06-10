import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
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

// href="mailto:mail@sophia-brouwers.de"
