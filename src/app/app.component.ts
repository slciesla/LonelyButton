import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LonelyButton';
  navLinks = [
    { label: 'The Button', path: '/button' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Stats', path: '/stats' },
    { label: 'Options', path: '/options' }
  ];
}
