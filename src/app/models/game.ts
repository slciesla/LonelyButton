import { Achievements } from './achievements';
import { Stats } from './stats';
import { FACES } from './faces';

export class Game {
  clicks = 0;
  ignores = 0;
  buttonText = 'Please Don\'t Click Me';
  buttonFace = FACES.sleeping;
  stats: Stats = new Stats();
  achievements: Achievements = new Achievements();
}
