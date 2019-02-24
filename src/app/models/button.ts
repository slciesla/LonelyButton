export enum MOOD {
  SLEEPING = 0,
  SAD,
  HAPPY,
  EXCITED,
  MAD,
  ANGRY
}

export class Button {
  face: string;
  text: string;
  class: string;
  mood: MOOD;

  constructor() {
    this.sleep();
  }

  sleep(text = 'Please don\'t wake me!') {
    this.face = '(︶︹︺)';
    this.text = text;
    this.class = 'sleeping';
    this.mood = MOOD.SLEEPING;
  }

  sad(text = 'Aww...') {
    this.face = '(╯︵╰,)';
    this.text = text;
    this.class = 'sad';
    this.mood = MOOD.SAD;
  }

  happy(text = 'I\'m happy!') {
    this.face = '(◕‿◕✿)';
    this.text = text;
    this.class = 'happy';
    this.mood = MOOD.HAPPY;
  }

  excited(text = 'Woo!') {
    this.face = '＼（＾○＾）／';
    this.text = text;
    this.class = 'excited';
    this.mood = MOOD.EXCITED;
  }

  mad(text = 'Don\'t do that again!') {
    this.face = '(ಠ_ಠ)';
    this.text = text;
    this.class = 'mad';
    this.mood = MOOD.MAD;
  }

  angry(text = 'RAAH!') {
    this.face = '(╯ಠ_ಠೃ)╯彡┻━┻';
    this.text = text;
    this.class = 'angry';
    this.mood = MOOD.ANGRY;
  }


}
