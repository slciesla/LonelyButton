import { Achievements } from './achievements';
import { Button } from './button';
import { Stats } from './stats';

export class Game {
  currencyHappy = 0;
  currencyExcited = 0;
  currencySleep = 0;
  currencySad = 0;
  currencyMad = 0;
  currencyAngry = 0;
  currencyModifier = 1.0;
  reputation = 0.0;
  reputationModifier = 1.0;
  currencyHappyTouched = false;
  currencyExcitedTouched = false;
  currencySleepTouched = false;
  currencySadTouched = false;
  currencyMadTouched = false;
  currencyAngryTouched = false;
  reputationTouched = false;
  critChance = 1.0;
  superCritChance = 0.1;
  epicCritChance = 0.01;
  critModifier = 1.5;
  superCritModifier = 2.5;
  epicCritModifier = 5.0;
  button = new Button();
  stats = new Stats();
  lifetimeStats = new Stats();
  achievements = new Achievements();
}
