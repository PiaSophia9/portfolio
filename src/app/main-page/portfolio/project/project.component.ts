import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  projects: {
    imageSrc: string;
    title: string;
    technologies: string[];
    description: string;
    linkLiveTest: string;
    linkGithub: string;
    isReversed: boolean;
  }[] = [
    {
      imageSrc: './assets/img/portfolio/laptop.png',
      title: 'Join',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linkLiveTest: '',
      linkGithub: 'https://github.com/PiaSophia9/join_2.0',
      isReversed: false,
    },
    {
      imageSrc: './assets/img/portfolio/laptop.svg',
      title: 'El Pollo Loco',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description:
        'A Slack clone app that facilitates smooth team communication and collaboration through messaging, file sharing, and customizable channels to enhance workplace efficiency.',
      linkLiveTest: '',
      linkGithub: 'https://github.com/PiaSophia9/pollo_loco',
      isReversed: true,
    },
    {
      imageSrc: './assets/img/portfolio/laptop.svg',
      title: 'Pokedex',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description:
        'A Slack clone app that facilitates smooth team communication and collaboration through messaging, file sharing, and customizable channels to enhance workplace efficiency.',
      linkLiveTest: '',
      linkGithub: '',
      isReversed: false,
    },
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
