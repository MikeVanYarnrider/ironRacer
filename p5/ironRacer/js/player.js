class Player {
  constructor() {
    // TODO fix width/height according to canvas
    this.xPlayer = WIDTH / 4;
    this.yPlayer = HEIGHT / 4;
    this.velocity = 7;
    this.rotation = 0;
  }

  setup() {
    // map background

    // player 1 car sprite setup
    this.carImg = loadImage("../assets/car1.png");
    this.carSprite = createSprite(350, 0, 50, 50);
    this.carSprite.addImage("normal", this.carImg);
    this.carSprite.setCollider("rectangle", 0, -10, 5, 5);
    this.carSprite.debug = true;
    this.carSprite.friction = 0.1;
  }

  draw() {
    translate(this.xPlayer, this.yPlayer);
    rotate(this.rotation);
  }
}
