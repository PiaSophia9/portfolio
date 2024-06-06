import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  SocialIconsSrc: string[] = [
    './assets/img/social_icons/github_big.svg',
    './assets/img/social_icons/email_big.svg',
    './assets/img/social_icons/linkedIn_big.svg',
  ];
}
