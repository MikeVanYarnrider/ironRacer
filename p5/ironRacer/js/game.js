class Game {
  constructor() {
    this.player = new Player();
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

    if (keyDown(37)) this.player.rotation -= 0.1;
    // console.log(this.player.rotation);

    // rotate right
    if (keyDown(39)) this.player.rotation += 0.1;

    // // move forward
    // if (keyDown(38)) {
    //   this.player.addSpeed(0.2, this.player.rotation);
    // }

    drawSprites();
  }
}
