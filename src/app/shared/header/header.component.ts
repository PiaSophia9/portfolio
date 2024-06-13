import { Component, HostListener, inject } from '@angular/core';
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
  isScreenSmall: boolean = false;
  open = false;

  translate = inject(TranslationService);

  checkSize() {
    window.innerWidth <= 700;
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isScreenSmall = window.innerWidth <= 700;
  }

  toggleMenu() {
    if (this.open == false) {
      this.open = true;
    } else {
      this.open = false;
    }
  }

  closeMenu() {
    this.open = false;
  }
}
