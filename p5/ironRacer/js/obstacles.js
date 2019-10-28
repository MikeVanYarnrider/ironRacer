class Obstacles {
  constructor() {
    //
    this.xObstacle = 300;
    this.yObstacle = 100;
  }
  setup() {
    this.sprite1 = createSprite(0, 0, 400, 200);
    this.sprite1.setCollider("rectangle", 0, 0, 400, 200);
    // this.sprite1.debug = true;
    this.sprite2 = createSprite(-200, -50, 200, 500);
    this.sprite2.setCollider("rectangle", 0, 0, 200, 500);
    // this.sprite2.debug = true;
    this.sprite3 = createSprite(-550, 300, 100, 200);
    this.sprite3.setCollider("rectangle", 0, 0, 100, 200);
    // this.sprite3.debug = true;

    // ----BORDER COLLIDER
    this.spriteBorderRight = createSprite(600, 0, 25, 800);
    this.spriteBorderRight.setCollider("rectangle", 0, 0, 25, 800);
    // this.spriteBorderRight.debug = true;
    this.spriteBorderTop = createSprite(0, -400, 1200, 25);
    this.spriteBorderTop.setCollider("rectangle", 0, 0, 1200, 25);
    // this.spriteBorderTop.debug = true;
    this.spriteBorderLeft = createSprite(-600, 0, 25, 800);
    this.spriteBorderLeft.setCollider("rectangle", 0, 0, 25, 800);
    // this.spriteBorderLeft.debug = true;
    this.spriteBorderBottom = createSprite(0, 400, 1200, 25);
    this.spriteBorderBottom.setCollider("rectangle", 0, 0, 1200, 2);
    // this.spriteBorderBottom.debug = true;
  }

  draw() {
    //
  }
}
