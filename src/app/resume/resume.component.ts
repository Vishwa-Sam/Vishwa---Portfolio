import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  education = [
  {
    degree: 'MBA',
    field: 'Human Resource & Operations Management',
    college: 'Gojan School of Business and Technology',
    period: '2022 - 2024',
    desc: 'Focused on management, operations, organizational behavior, and business strategy.'
  },
  {
    degree: 'B.E',
    field: 'Mechanical Engineering',
    college: 'Veammal Engineering College',
    period: '2017 - 2021',
    desc: 'Strong foundation in engineering principles, problem solving, and analytical thinking.'
  }
];

academicProjects = [
   {
    title: "Impact of Teamwork on Organization's Productivity",
    year: '2023',
    desc: 'Research study on teamwork, team development stages and productivity improvement strategies.',
    degree: 'MBA',
  },
  {
    title: 'Study on Quality Management',
    year: '2024',
    desc: 'Focused on customer satisfaction, process improvement and regulatory compliance in business systems.',
    degree: 'MBA',
  },
  {
    title: 'FEA Analysis and Experimental Investigation of Ceramic Coating on Brake',
    year: '2021',
    desc: 'Investigated thermal and structural stress distribution of disc brakes using ANSYS with ceramic coatings.',
    degree: 'Mechanical Engineering'
  },
  {
    title: 'Design and Fabrication of Gear Test Rig Mechanism',
    year: '2021',
    desc: 'Studied wear, tear and corrosion behavior of gears under controlled machine conditions.',
    degree: 'Mechancial Engineering'
  },
 
];

}
