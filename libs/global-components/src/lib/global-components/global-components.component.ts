import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-global-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-components.component.html',
  styleUrl: './global-components.component.css',
})
export class GlobalComponentsComponent {}
