import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private game: Game;

  public get Game(): Game {
    return this.game ? this.game : this.loadGame();
  }

  constructor() { }

  saveGame() {
    const gameStr = this.encryptSave(this.game);
    localStorage.setItem('LonelyButtonGame', gameStr);
  }

  private loadGame(): Game {
    const game = this.decryptSave(localStorage.getItem('LonelyButtonGame'));
    this.game = game ? game : new Game();
    return this.game;
  }

  private decryptSave(gameStr: string): Game {
    if (!gameStr || gameStr.length === 0) {
      console.log('No Saved Game Found.');
      return undefined;
    }
    let retval = '';
    let i = 0;
    while (i !== gameStr.length) {
      retval += String.fromCharCode(parseInt(gameStr.substr(i, 2), 16));
      i += 2;
    }
    return _.assign(new Game(), JSON.parse(retval));
  }

  private encryptSave(game: Game): string {
    let retval = '';
    let i = 0;
    const gameStr = JSON.stringify(game);
    while (i !== gameStr.length) {
      retval += gameStr.charCodeAt(i++).toString(16);
    }
    return retval;
  }
}
