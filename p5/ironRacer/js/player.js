class Player {
  constructor() {
    // TODO fix width/height according to canvas
    this.xPlayer = 1000 / 2;
    this.yPlayer = 1000 / 2;
    this.velocity = 4;
    this.rotation = -90;
  }

  preload() {}

  setup() {
    // sprite setup
    this.carImg = loadImage("../assets/car1.png");
    this.carSprite = createSprite(0, 0, 50, 50);
    this.carSprite.addImage("normal", this.carImg);
    this.carSprite.maxSpeed = 6;
    this.carSprite.friction = 0.98;
  }

  draw() {
    angleMode(DEGREES);
    translate(this.xPlayer, this.yPlayer);
    console.log(this.rotation);
    rotate(this.rotation);
    drawSprites();
  }
}
