class Background {
  constructor() {
    //
    this.soilImg;
    this.song;
  }

  preload() {
    // img
    this.soilImg = loadImage("ironRacer/assets/soil450x300.png");
    // music
    this.song = loadSound("ironRacer/assets/catchy.ogg");
  }

  setup() {
    // this.song.loop();
  }

  draw() {
    // Background sound

    // Background Images
    image(this.soilImg, 0, 0, 450, 300);
    image(this.soilImg, 0, 300, 450, 300);
    image(this.soilImg, 450, 0, 450, 300);
    image(this.soilImg, 450, 300, 450, 300);
  }
}
