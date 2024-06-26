import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { GlobalComponentsComponent } from '@be-fit-web/global-components';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, GlobalComponentsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'homepage';
}
