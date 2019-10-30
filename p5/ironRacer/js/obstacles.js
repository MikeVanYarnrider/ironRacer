class Obstacles {
  constructor() {
    //
    this.xObstacle = 300;
    this.yObstacle = 100;
  }
  preload() {
    this.tribunesImg1 = loadImage("../assets/tribunes400x200.png");
    this.tribunesImg2 = loadImage("../assets/tribunes200x400.png");
    this.startImg = loadImage("../assets/start.png");
    this.borderTopImg = loadImage("../assets/borderTop.png");
    this.borderBottomImg = loadImage("../assets/borderBottom.png");
    this.borderLeftImg = loadImage("../assets/borderLeft.png");
    this.borderRightImg = loadImage("../assets/borderRight.png");
    console.log("draw tribunes");
  }

  setup() {
    // start-finish line
    this.start = createSprite(365, -22, 150, 1);
    this.start.addImage("start", this.startImg);
    this.start.setCollider("rectangle", 0, 0, 300, 0.01);
    // this.start.debug = true;
    // this.finish = createSprite(365, 5, 150, 1);
    // this.finish.setCollider("rectangle", 0, 15, 300, 0.01);
    // this.finish.debug = true;

    // -----MAP COLLIDER
    this.sprite1 = createSprite(100, 0, 400, 200);
    this.sprite1.addImage("tribunesFlat", this.tribunesImg1);
    this.sprite1.setCollider("rectangle", 0, 0, 400, 200);
    // this.sprite1.debug = true;
    this.sprite2 = createSprite(-200, 10, 200, 400);
    this.sprite2.addImage("tribunesHigh", this.tribunesImg2);
    this.sprite2.setCollider("rectangle", 0, 0, 200, 400);

    // ----BORDER COLLIDER
    this.spriteBorderRight = createSprite(440, 0, 25, 800);
    this.spriteBorderRight.addImage("borderRight", this.borderRightImg);
    this.spriteBorderRight.setCollider("rectangle", 0, 0, 25, 800);
    // this.spriteBorderRight.debug = true;

    this.spriteBorderTop = createSprite(0, -290, 900, 25);
    this.spriteBorderTop.addImage("borderTop", this.borderTopImg);
    this.spriteBorderTop.setCollider("rectangle", 0, 0, 900, 25);
    // this.spriteBorderTop.debug = true;

    this.spriteBorderLeft = createSprite(-440, 0, 25, 600);
    this.spriteBorderLeft.addImage("borderLeft", this.borderLeftImg);
    this.spriteBorderLeft.setCollider("rectangle", 0, 0, 25, 600);
    // this.spriteBorderLeft.debug = true;

    this.spriteBorderBottom = createSprite(0, 290, 900, 25);
    this.spriteBorderBottom.addImage("borderBottom", this.borderBottomImg);
    this.spriteBorderBottom.setCollider("rectangle", 0, 0, 900, 25);
    // this.spriteBorderBottom.debug = true;
  }

  draw() {
    //
  }
}
