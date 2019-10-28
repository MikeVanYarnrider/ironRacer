const WIDTH = 1000;
const HEIGHT = 1000;

class Game {
  constructor() {
    this.player = new Player(WIDTH / 2, HEIGHT / 2);
  }

  preload() {
    //
    this.player.preload();
  }

  setup() {
    //
    this.player.setup();
  }

  draw() {
    //
    this.player.draw();

    // car navigation
    // rotate left

    if (keyDown(37)) this.player.carSprite.rotation -= 3;
    console.log(this.player.carSprite.rotation);

    // rotate right
    if (keyDown(39)) this.player.carSprite.rotation += 3;

    // move forward
    if (keyDown(38)) {
      this.player.carSprite.position.x +=
        sin(this.player.carSprite.rotation) * this.player.velocity;
      this.player.carSprite.position.y -=
        cos(this.player.carSprite.rotation) * this.player.velocity;
    }
    // if (keyDown(40)) {
    //   this.player.carSprite.addSpeed(-0.2, 0);
    // }

    drawSprites();
  }
}
