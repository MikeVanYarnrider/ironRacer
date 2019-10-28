class Player {
  constructor() {
    // TODO fix width/height according to canvas
    this.xPlayer = WIDTH / 2;
    this.yPlayer = HEIGHT / 2;
    this.velocity = 7;
    this.rotation = 0;
  }

  preload() {}

  setup() {
    // sprite setup
    this.carImg = loadImage("../assets/car1.png");
    this.carSprite = createSprite(500, 200, 50, 50);
    this.carSprite.addImage("normal", this.carImg);
    this.carSprite.setCollider("rectangle", 0, 0, 25, 50);
    this.carSprite.debug = true;
  }

  draw() {
    translate(this.xPlayer, this.yPlayer);
    rotate(this.rotation);
  }
}
