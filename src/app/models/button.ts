export class Button {
  face: string;
  text: string;
  class: string;

  constructor() {
    this.sleep();
  }

  sleep(text = 'Please don\'t wake me!') {
    this.face = '(︶︹︺)';
    this.text = text;
    this.class = 'sleeping';
  }

  sad(text = 'Aww...') {
    this.face = '(╯︵╰,)';
    this.text = text;
    this.class = 'sad';
  }

  happy(text = 'I\'m happy!') {
    this.face = '(◕‿◕✿)';
    this.text = text;
    this.class = 'happy';
  }

  excited(text = 'Woo!') {
    this.face = '＼（＾○＾）／';
    this.text = text;
    this.class = 'excited';
  }

  angry(text = 'Don\'t do that again!') {
    this.face = '(ಠ_ಠ)';
    this.text = text;
    this.class = 'angry';
  }

  tableFlip(text = 'RAWR!') {
    this.face = '(╯ಠ_ಠೃ)╯彡┻━┻';
    this.text = text;
    this.class = 'table-flip';
  }


}
