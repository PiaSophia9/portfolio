import { Component, inject } from '@angular/core';
import { TranslationService } from '../../service/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  translate = inject(TranslationService);
}
