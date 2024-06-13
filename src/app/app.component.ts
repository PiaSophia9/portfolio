import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { LandingPageComponent } from './main-page/landing-page/landing-page.component';
import { AboutMeComponent } from './main-page/about-me/about-me.component';
import { MySkillsComponent } from './main-page/my-skills/my-skills.component';
import { PortfolioComponent } from './main-page/portfolio/portfolio.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    LandingPageComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    MainPageComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  ngOnInit() {
    AOS.init();
  }
}
