import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ResumeComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const elements = document.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right, .reveal-down',
    );

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      },
    );

    elements.forEach((el) => observer.observe(el));

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();

          if (rect.top < window.innerHeight * 0.9) {
            if (el.classList.contains('home-reveal')) {
              setTimeout(() => el.classList.add('active'), 120);
            }
            else {
              el.classList.add('active');
            }
          }
        });
      });
    });
  }
}
