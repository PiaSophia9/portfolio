import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../service/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  translate = inject(TranslationService);

  projects: {
    imageSrc: string;
    title: string;
    technologies: string[];
    description: string;
    beschreibung: string;
    linkLiveTest: string;
    linkGithub: string;
    isReversed: boolean;
  }[] = [
    {
      imageSrc: './assets/img/portfolio/laptop_join.png',
      title: 'Join',
      technologies: ['JavaScript | HTML | CSS'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      beschreibung:
        'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      linkLiveTest: 'https://sophia-brouwers.de/join/',
      linkGithub: 'https://github.com/PiaSophia9/join_2.0',
      isReversed: false,
    },
    {
      imageSrc: './assets/img/portfolio/laptop_pollo_loco.png',
      title: 'El Pollo Loco',
      technologies: ['JavaScript | HTML | CSS'],
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the giant Chicken.',
      beschreibung:
        'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      linkLiveTest: 'https://sophia-brouwers.de/el-pollo-loco/',
      linkGithub: 'https://github.com/PiaSophia9/pollo_loco',
      isReversed: true,
    },
  ];
}
