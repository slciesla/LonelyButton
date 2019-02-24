import { Achievements } from './achievements';
import { Button } from './button';
import { Stats } from './stats';

export class Game {
  currencySleep = 0;
  currencySad = 0;
  currencyHappy = 0;
  currencyExcited = 0;
  currencyMad = 0;
  currencyAngry = 0;
  currencyPos = 0;
  currencyNeg = 0;
  button = new Button();
  stats = new Stats();
  achievements = new Achievements();
}
