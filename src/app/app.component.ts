import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LonelyButton';
  navLinks = [
    { label: 'The Button', path: '/button' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Stats', path: '/stats' },
    { label: 'Options', path: '/options' }
  ];
  private start: number;
  private clock = 0;
  private frameTime = 100;

  ngOnInit() {
    this.start = Date.now();

    setTimeout(this.gameLoop.bind(this), this.frameTime);
  }


  private gameLoop() {
    const now = Date.now();
    this.clock += this.frameTime;
    let dif = now - this.start - this.clock;

    this.gameUpdate();

    while (dif >= this.frameTime) {
      this.gameUpdate();
      this.clock += this.frameTime;
      dif -= this.frameTime;
    }

    setTimeout(this.gameLoop.bind(this), this.frameTime);
  }

  private gameUpdate() {

  }

}
