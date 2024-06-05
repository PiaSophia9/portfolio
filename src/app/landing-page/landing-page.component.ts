import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  SocialIconsSrc: string[] = [
    './assets/img/social_icons/github_big.svg',
    './assets/img/social_icons/email_big.svg',
    './assets/img/social_icons/linkedIn_big.svg',
  ];
}
