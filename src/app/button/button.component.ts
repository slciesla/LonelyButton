import { Component, OnInit } from '@angular/core';

import { Button, MOOD } from '../models/button';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  button: Button;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.button = this.gameService.Game.button;
  }

  buttonClick() {
    this.gameService.Game.clicks++;
    if (this.button.mood === MOOD.SLEEPING) {
      this.button.angry();
      this.gameService.Game.negClicks++;
      this.gameService.Game.sleepClicks++;
    }
  }

}
