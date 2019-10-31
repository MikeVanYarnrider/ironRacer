class Background {
  constructor() {
    //
    this.soilImg;
  }

  preload() {
    this.soilImg = loadImage("ironRacer/assets/soil450x300.png");
  }

  draw() {
    image(this.soilImg, 0, 0, 450, 300);
    image(this.soilImg, 0, 300, 450, 300);
    image(this.soilImg, 450, 0, 450, 300);
    image(this.soilImg, 450, 300, 450, 300);
    // image(this.tribunesImg, 200, 0, 200, 400);
    // image(img, x, y, width, height);
  }
}
