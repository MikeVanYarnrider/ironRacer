class Background {
  constructor() {
    //
    this.soilImg;
    this.bgSong;
    // this.btnEffect;
  }

  preload() {
    // img
    this.soilImg = loadImage("ironRacer/assets/soil450x300.png");
    // music
    this.bgSong = loadSound("ironRacer/assets/catchy.ogg");
    // this.btnEffect = loadSound("ironRacer/assets/carstartgarage.mp3");
  }

  setup() {
    this.bgSong.loop();
    // this.btnEffect.start();
  }

  draw() {
    // Background Images
    image(this.soilImg, 0, 0, 450, 300);
    image(this.soilImg, 0, 300, 450, 300);
    image(this.soilImg, 450, 0, 450, 300);
    image(this.soilImg, 450, 300, 450, 300);
  }
}
