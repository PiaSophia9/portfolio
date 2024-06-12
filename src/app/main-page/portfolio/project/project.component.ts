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
      imageSrc: './assets/img/portfolio/laptop.png',
      title: 'Join',
      technologies: ['JavaScript | HTML | CSS'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      beschreibung:
        'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      linkLiveTest: '',
      linkGithub: 'https://github.com/PiaSophia9/join_2.0',
      isReversed: false,
    },
    {
      imageSrc: './assets/img/portfolio/lapto_pollo_loco.svg',
      title: 'El Pollo Loco',
      technologies: ['JavaScript | HTML | CSS'],
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the giant Chicken.',
      beschreibung:
        'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      linkLiveTest: '',
      linkGithub: 'https://github.com/PiaSophia9/pollo_loco',
      isReversed: true,
    },
    // {
    //   imageSrc: './assets/img/portfolio/laptop.svg',
    //   title: 'Pokedex',
    //   technologies: ['JavaScript | HTML | CSS'],
    //   description:
    //     'A Slack clone app that facilitates smooth team communication and collaboration through messaging, file sharing, and customizable channels to enhance workplace efficiency.',
    //   beschreibung:
    //     'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
    //   linkLiveTest: '',
    //   linkGithub: 'https://github.com/PiaSophia9/pokedex',
    //   isReversed: false,
    // },
  ];

  project!: {
    imageSrc: string;
    title: string;
    technologies: string[];
    description: string;
    linkLiveTest: string;
    linkGithub: string;
  };
}
