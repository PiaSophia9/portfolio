import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skills: { name: string; src: string }[] = [
    { name: 'Angular', src: './assets/img/skills/Angular.svg' },
    { name: 'TypeScript', src: './assets/img/skills/TypeScript.svg' },
    { name: 'JavaScript', src: './assets/img/skills/JavaScript.svg' },
    { name: 'HTML', src: './assets/img/skills/html.svg' },
    { name: 'Firebase', src: './assets/img/skills/Firebase.svg' },
    { name: 'GIT', src: './assets/img/skills/git.svg' },
    { name: 'CSS', src: './assets/img/skills/css.svg' },
    { name: 'Rest-Api', src: './assets/img/skills/api.svg' },
    { name: 'Scrum', src: './assets/img/skills/scrum.svg' },
    {
      name: 'Material Design',
      src: './assets/img/skills/material_design.svg',
    },
  ];
}
