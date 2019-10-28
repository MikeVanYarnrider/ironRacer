class Player {
  constructor() {
    // TODO fix width/height according to canvas
    this.xPlayer = 1000 / 2;
    this.yPlayer = 1000 / 2;
    console.log(this.xPlayer);
  }

  preload() {
    this.carImg = loadImage("../assets/car1.png");
  }

  setup() {
    // car size
    this.xCar = 50; //this.carImg.width / 14;
    this.yCar = 50; //this.carImg.height / 14;

    // sprite setup

    this.carSprite = createSprite(
      this.xPlayer,
      this.yPlayer,
      this.xCar,
      this.yCar
    );

    // ads image to sprite
    this.carSprite.addImage(this.carImg);
    // this.carSprite.width(20);
    // this.carRotation = -90;
    // this.carMaxSpeed = 1.2;
    // this.carFriction = 0.03;
    // console.log(this.carSprite);
  }

  draw() {
    drawSprites();
  }
}
