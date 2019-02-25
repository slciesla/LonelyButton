import { Achievements } from './achievements';
import { Button } from './button';
import { Stats } from './stats';

export class Game {
  currencyHappy: number;
  currencyExcited: number;
  currencySleep: number;
  currencySad: number;
  currencyMad: number;
  currencyAngry: number;
  reputation = 0;
  currencyHappyTouched = false;
  currencyExcitedTouched = false;
  currencySleepTouched = false;
  currencySadTouched = false;
  currencyMadTouched = false;
  currencyAngryTouched = false;
  reputationTouched = false;
  button = new Button();
  stats = new Stats();
  achievements = new Achievements();
}
