class Player {
  constructor() {
    // TODO fix width/height according to canvas
    this.xPlayer = 1000 / 2;
    this.yPlayer = 1000 / 2;
    // this.speed = 0;
    this.rotation = 0;
  }

  preload() {}

  setup() {
    // sprite setup
    this.carImg = loadImage("../assets/car1.png");
    this.carSprite = createSprite(0, 0, 50, 50);
    this.carSprite.addImage("normal", this.carImg);
  }

  draw() {
    translate(this.xPlayer, this.yPlayer);
    console.log(this.rotation);
    rotate(this.rotation);
    drawSprites();
  }
}
