import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../service/translation/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectInfoService } from '../../../service/project-info/project-info.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  translate = inject(TranslationService);
  projectInfo = inject(ProjectInfoService);
}
