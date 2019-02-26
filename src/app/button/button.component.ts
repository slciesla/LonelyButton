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
    this.gameService.Game.stats.clicks.manual.inc();
    switch (this.button.mood) {
      case MOOD.SLEEPING:
        this.button.angry();
        this.gameService.Game.stats.negClicks.manual.inc();
        this.gameService.Game.stats.sleepClicks.manual.inc();
        this.gameService.Game.reputation -= 1.0 * this.gameService.Game.reputationModifier;
        this.gameService.Game.currencySleep += 1.0 * this.gameService.Game.currencyModifier;
        break;
      case MOOD.ANGRY:
        this.gameService.Game.stats.negClicks.manual.inc();
        this.gameService.Game.stats.angryClicks.manual.inc();
        this.gameService.Game.reputation -= 1.0 * this.gameService.Game.reputationModifier;
        this.gameService.Game.currencyAngry += 1.0 * this.gameService.Game.currencyModifier;
        break;
    }
  }

}
