import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from '../dropdown.directive';

@Component({
  selector: 'app-header',
  imports: [RouterModule, DropdownDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
}
