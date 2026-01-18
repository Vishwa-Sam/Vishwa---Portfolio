import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = [
    {
      name: 'HTML',
      desc: 'Building semantic and accessible structures and SEO-friendly structure.',
    },
    {
      name: 'CSS',
      desc: 'Responsive and modern UI styling and Modern layouts with Flexbox, Grid.',
    },
    {
      name: 'JavaScript',
      desc: 'Core logic, DOM manipulation, and async programming.Interactive and dynamic experiences.',
    },
    {
      name: 'TypeScript',
      desc: 'Type-safe coding and scalable application structure.',
    },
    {
      name: 'Angular',
      desc: 'Component-based architecture, routing, and services.',
    },
    {
      name: 'Git & GitHub',
      desc: 'Version control, branching, and collaborative workflows.',
    },
    {
      name: 'Tailwind CSS',
      desc: 'Utility-first styling for fast and consistent UI.',
    },
    {
      name: 'Bootstrap',
      desc: 'Quick responsive UI components and layouts.',
    },
  ];
}
