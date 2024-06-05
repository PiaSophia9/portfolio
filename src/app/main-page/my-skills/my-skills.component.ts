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
    { name: 'Angular', src: './assets/img/skills/Angular.svg' },
    { name: 'Angular', src: './assets/img/skills/Angular.svg' },
    { name: 'Angular', src: './assets/img/skills/Angular.svg' },
    { name: 'Angular', src: './assets/img/skills/Angular.svg' },
    { name: 'Angular', src: './assets/img/skills/Angular.svg' },
    { name: 'Angular', src: './assets/img/skills/Angular.svg' },
  ];
}
