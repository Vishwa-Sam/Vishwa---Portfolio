import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contacts = [
    {
      icon: 'bi bi-envelope',
      label: 'Email',
      value: 'vishwa.r.ramesh@email.com',
    },
    {
      icon: 'bi bi-telephone',
      label: 'Phone',
      value: '+91 9080658140',
    },
    {
      icon: 'bi bi-geo-alt',
      label: 'Location',
      value: 'Chennai, India',
    },
  ];
}
