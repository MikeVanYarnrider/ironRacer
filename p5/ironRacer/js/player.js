class Player {
  constructor(id) {
    // TODO fix width/height according to canvas
    this.xPlayer = WIDTH / 4;
    this.yPlayer = HEIGHT / 4;
    this.velocity = 7;
    this.rotation = 0;
    this.lapTime = [];
    this.raceTime = "00:00";
    this.playerId = id;
  }

  setup() {
    if (this.playerId === 1) {
      // player 1 car sprite setup
      this.carImg = loadImage("../assets/car1.png");
      this.carSprite = createSprite(390, 0, 50, 50);
      this.carSprite.addImage("p1", this.carImg);
      this.carSprite.setCollider("rectangle", 0, 0, 15, 30);
      // this.playerOne.carSprite.debug = true;
    }

    if (this.playerId === 2) {
      // player 2 car sprite setup
      this.carImg = loadImage("../assets/car2.png");
      this.carSprite = createSprite(350, 0, 50, 50);
      this.carSprite.addImage("p2", this.carImg);
      this.carSprite.setCollider("rectangle", 0, 0, 15, 30);
      // this.carSprite.debug = true;
    }
  }

  draw() {
    translate(this.xPlayer, this.yPlayer);
    rotate(this.rotation);
  }
}
