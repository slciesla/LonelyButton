import { Component, OnInit } from '@angular/core';

import { Button } from '../models/button';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  button: Button;
  private test = 0;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.button = this.gameService.Game.button;
  }

  buttonClick() {
    this.test++;
    switch (this.test) {
      case 0:
        this.button.sleep();
        break;
      case 1:
        this.button.sad();
        break;
      case 2:
        this.button.happy();
        break;
      case 3:
        this.button.excited();
        break;
      case 4:
        this.button.angry();
        break;
      case 5:
        this.button.tableFlip();
        this.test = 0;
        break;
    }
  }

}
