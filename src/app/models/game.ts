import { Achievements } from './achievements';
import { Button } from './button';
import { Stats } from './stats';

export class Game {
  clicks = 0;
  ignores = 0;
  button = new Button();
  stats = new Stats();
  achievements = new Achievements();
}
