import { Component } from '@angular/core';

export interface Project {
  title: string;
  subtitle: string;
  image: string;
  live: string;
  github: string;
  description: string[];
  features: string[];
  tech: string[];
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Luxro Car Rental',
      subtitle: 'Angular Indian Car Renting Application',
      image: '/assets/project1.png',
      live: 'https://luxro-car-rental.netlify.app',
      github: 'https://github.com/your-username/luxro',
      description: [
        'Luxro Car Rental is a modern, responsive car rental web application built using Angular 21. The project demonstrates real-world features such as car browsing, filtering, detailed car pages, user authentication flow, favorites, and booking confirmation.',
        'The application follows a clean component-based architecture with Angular routing, lazy loading, and optimized production builds. It is fully deployed on Netlify with client-side routing configuration for seamless navigation.',
      ],
      features: [
        'Car listing with detailed pages',
        'Dynamic routing with Angular Router',
        'Favorites and booking flow',
        'Responsive UI',
        'Lazy loading & modular architecture',
        'Netlify SPA deployment',
      ],
      tech: [
        'Angular 21',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Tailwind Css',
        'Netlify',
        'Firebase Authentication',
        'Git & GitHub',
      ],
    },
    {
      title: 'RecipyRealm',
      subtitle: 'Angular Recipe Management Application',
      image: '/assets/project2.png',
      live: 'https://recipyrealm.netlify.app',
      github: 'https://github.com/your-username/recipyrealm',
      description: [
        'RecipyRealm is a modern recipe management web application built using Angular with standalone components and lazy-loaded routes. The application allows users to browse recipes, view detailed instructions, manage a shopping list, and explore categorized food content with a smooth and responsive UI.',
        'The project demonstrates real-world Angular concepts such as routing, lazy loading, modular architecture, component communication, and production deployment using Netlify with proper SPA routing configuration.',
      ],
      features: [
        'Recipe listing with detailed recipe pages',
        'Shopping list management',
        'Category-based browsing',
        'Lazy loaded feature modules',
        'Responsive design',
        'Client-side routing with refresh support',
        'Optimized production build',
      ],
      tech: [
        'Angular',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Bootstrap / Angular Material',
        'Netlify Hosting',
        'Git & GitHub',
        'Firebase Authentication',
      ],
    },
    {
      title: 'BookBuddy',
      subtitle: 'Book Discovery Web Application',
      image: '/assets/project3.png',
      live: 'https://bookbuddy-app.netlify.app',
      github: 'https://github.com/your-username/bookbuddy',
      description: [
        'BookBuddy is a lightweight and responsive book discovery web application built using HTML, CSS, and JavaScript. The project allows users to explore books, view details, and interact with a clean, user-friendly interface designed for fast performance and simplicity.',
        'This project demonstrates strong fundamentals of front-end development, including DOM manipulation, responsive layout design, and clean UI structuring without relying on any frameworks.',
      ],
      features: [
        'Book browsing interface',
        'Interactive UI using vanilla JavaScript',
        'Responsive layout for all devices',
        'Clean and minimal design',
        'Fast loading performance',
        'Deployed on Netlify',
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Netlify Hosting'],
    },
  ];
}
