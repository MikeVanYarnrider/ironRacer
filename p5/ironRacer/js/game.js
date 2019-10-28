const WIDTH = 1200;
const HEIGHT = 800;

class Game {
  constructor() {
    this.player = new Player(WIDTH / 2, HEIGHT / 2);
    this.obstacle = new Obstacles();
  }

  preload() {
    //
    this.player.preload();
  }

  setup() {
    //
    this.player.setup();
    this.obstacle.setup();
  }

  draw() {
    //
    this.player.draw();
    this.obstacle.draw();

    // car navigation
    // rotate left
    if (keyDown(37)) this.player.carSprite.rotation -= 5;

    // rotate right
    if (keyDown(39)) this.player.carSprite.rotation += 5;

    // move forward
    if (
      this.player.carSprite.position.x < 600 &&
      this.player.carSprite.position.y < 400 &&
      this.player.carSprite.position.x > -600 &&
      this.player.carSprite.position.y > -400
    ) {
      if (keyDown(38)) {
        this.player.carSprite.position.x +=
          sin(this.player.carSprite.rotation) * this.player.velocity;
        this.player.carSprite.position.y -=
          cos(this.player.carSprite.rotation) * this.player.velocity;
      }

      // collision detection
      if (this.obstacle.sprite1.displace(this.player.carSprite)) {
        console.log("hit");
      }
      if (this.obstacle.sprite2.displace(this.player.carSprite)) {
        console.log("hit");
      }
      if (this.obstacle.sprite3.displace(this.player.carSprite)) {
        console.log("hit");
      }

      // ----BORDER COLLISION
      if (this.obstacle.spriteBorderRight.displace(this.player.carSprite)) {
        console.log("hit");
      }
      if (this.obstacle.spriteBorderLeft.displace(this.player.carSprite)) {
        console.log("hit");
      }
      if (this.obstacle.spriteBorderTop.displace(this.player.carSprite)) {
        console.log("hit");
      }
      if (this.obstacle.spriteBorderBottom.displace(this.player.carSprite)) {
        console.log("hit");
      }
    }

    drawSprites();
  }
}
