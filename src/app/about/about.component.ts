import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  cards = [
    {
      icon: 'bi bi-code-slash',
      title: 'Angular',
      desc: 'Building modular and scalable Angular applications.',
    },
    {
      icon: 'bi bi-layout-text-window',
      title: 'UI Development',
      desc: 'Clean, modern, and user-friendly interfaces.',
    },
    {
      icon: 'bi bi-phone',
      title: 'Responsive Design',
      desc: 'Mobile-first and fully responsive layouts.',
    },
    {
      icon: 'bi bi-lightbulb',
      title: 'Learning Mindset',
      desc: 'Continuously improving and adapting to new technologies.',
    },
  ];
}
