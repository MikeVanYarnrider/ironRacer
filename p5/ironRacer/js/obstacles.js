class Obstacles {
  constructor() {
    //
    this.xObstacle = 300;
    this.yObstacle = 100;
  }
  setup() {
    // start-finish line
    this.start = createSprite(500, -15, 200, 1);
    this.start.setCollider("rectangle", 0, 0, 200, 0.1);
    this.start.debug = true;
    this.finish = createSprite(500, 0, 200, 1);
    this.finish.setCollider("rectangle", 0, 0, 200, 0.1);
    this.finish.debug = true;

    // -----COLLISION BOXES
    this.sprite1 = createSprite(100, 0, 600, 200);
    this.sprite1.setCollider("rectangle", 0, 0, 600, 200);
    this.sprite1.debug = true;
    this.sprite2 = createSprite(-200, -50, 200, 500);
    this.sprite2.setCollider("rectangle", 0, 0, 200, 500);
    this.sprite2.debug = true;
    this.sprite3 = createSprite(-550, 300, 100, 200);
    this.sprite3.setCollider("rectangle", 0, 0, 100, 200);
    this.sprite3.debug = true;
    this.sprite4 = createSprite(550, -200, 100, 200);
    this.sprite4.setCollider("rectangle", 0, 0, 100, 200);
    this.sprite4.debug = true;
    this.sprite5 = createSprite(300, -350, 600, 100);
    this.sprite5.setCollider("rectangle", 0, 0, 600, 100);
    this.sprite5.debug = true;

    // ----BORDER COLLIDER
    this.spriteBorderRight = createSprite(600, 0, 25, 800);
    this.spriteBorderRight.setCollider("rectangle", 0, 0, 25, 800);
    this.spriteBorderRight.debug = true;
    this.spriteBorderTop = createSprite(0, -400, 1200, 25);
    this.spriteBorderTop.setCollider("rectangle", 0, 0, 1200, 25);
    this.spriteBorderTop.debug = true;
    this.spriteBorderLeft = createSprite(-600, 0, 25, 800);
    this.spriteBorderLeft.setCollider("rectangle", 0, 0, 25, 800);
    this.spriteBorderLeft.debug = true;
    this.spriteBorderBottom = createSprite(0, 400, 1200, 25);
    this.spriteBorderBottom.setCollider("rectangle", 0, 0, 1200, 25);
    this.spriteBorderBottom.debug = true;
  }

  draw() {
    //
  }
}
