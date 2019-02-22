import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  buttonText: string;
  buttonFace: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.buttonText = this.gameService.Game.buttonText;
    this.buttonFace = this.gameService.Game.buttonFace;
  }

}
