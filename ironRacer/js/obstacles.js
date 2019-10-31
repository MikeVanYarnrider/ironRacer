class Obstacles {
  constructor() {
    //
    this.xObstacle = 300;
    this.yObstacle = 100;
  }
  preload() {
    this.tribunesImg1 = loadImage("ironRacer/assets/tribunes400x200.png");
    this.tribunesImg2 = loadImage("ironRacer/assets/tribunes200x400.png");
    this.tribunesImg3 = loadImage("ironRacer/assets/grass150x100.png");
    this.startImg = loadImage("ironRacer/assets/start.png");
    this.borderTopImg = loadImage("ironRacer/assets/borderTop.png");
    this.borderBottomImg = loadImage("ironRacer/assets/borderBottom.png");
    this.borderLeftImg = loadImage("ironRacer/assets/borderLeft.png");
    this.borderRightImg = loadImage("ironRacer/assets/borderRight.png");
    this.oilImg = loadImage("ironRacer/assets/oil.png");
    this.boostImg = loadImage("ironRacer/assets/arrow_yellow.png");
    // console.log("draw tribunes");
  }

  setup() {
    // start-finish line
    this.start = createSprite(365, -22, 150, 1);
    this.start.addImage("start", this.startImg);
    this.start.setCollider("rectangle", 0, 0, 300, 0.01);
    // this.start.debug = true;

    // -----MAP COLLIDER
    this.sprite1 = createSprite(100, 0, 400, 200);
    this.sprite1.addImage("tribunesFlat", this.tribunesImg1);
    this.sprite1.setCollider("rectangle", -20, 0, 400, 180);
    // this.sprite1.debug = true;
    this.sprite2 = createSprite(-200, 10, 200, 400);
    this.sprite2.addImage("tribunesHigh", this.tribunesImg2);
    this.sprite2.setCollider("rectangle", 0, 0, 180, 380);
    // this.sprite2.debug = true;

    this.sprite3 = createSprite(200, 150, 100, 150);
    this.sprite3.addImage("tribunesHigh", this.tribunesImg3);
    this.sprite3.setCollider("rectangle", 0, 0, 80, 130);
    // this.sprite3.debug = true;

    // ----BORDER COLLIDER
    this.spriteBorderRight = createSprite(440, 0, 25, 800);
    this.spriteBorderRight.addImage("borderRight", this.borderRightImg);
    this.spriteBorderRight.setCollider("rectangle", 0, 0, 10, 800);
    // this.spriteBorderRight.debug = true;

    this.spriteBorderTop = createSprite(0, -290, 900, 25);
    this.spriteBorderTop.addImage("borderTop", this.borderTopImg);
    this.spriteBorderTop.setCollider("rectangle", 0, 0, 900, 10);
    // this.spriteBorderTop.debug = true;

    this.spriteBorderLeft = createSprite(-440, 0, 25, 600);
    this.spriteBorderLeft.addImage("borderLeft", this.borderLeftImg);
    this.spriteBorderLeft.setCollider("rectangle", 0, 0, 10, 600);
    // this.spriteBorderLeft.debug = true;

    this.spriteBorderBottom = createSprite(0, 290, 900, 25);
    this.spriteBorderBottom.addImage("borderBottom", this.borderBottomImg);
    this.spriteBorderBottom.setCollider("rectangle", 0, 0, 900, 10);
    // this.spriteBorderBottom.debug = true;

    // Bonus Obstacles
    this.oil1 = createSprite(0, 220, 20, 20);
    this.oil1.addImage("oil", this.oilImg);
    this.oil1.setCollider("circle", 0, 0, 45);
    // this.oil1.debug = true;

    this.boost1 = createSprite(0, -220, 20, 20);
    this.boost1.addImage("oil", this.boostImg);
    this.boost1.setCollider("rectangle", 0, 0, 15, 30);
    // this.boost1.debug = true;
  }

  draw() {
    //
  }
}
