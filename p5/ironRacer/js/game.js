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
    // if (keyDown(LEFT_ARROW)) {
    //   this.player.carRotation -= 4;
    //   console.log(this.player.carRotation);
    // }
    // if (keyDown(RIGHT_ARROW)) {
    //   this.carRotation += 4;
    // }
    if (keyDown(UP_ARROW)) {
      this.player.car.addSpeed(0.2, this.player.carRotation);
      console.log(this.player.carRotation);
    }

    // if (keyDown(DOWN_ARROW)) {
    //   this.car.addSpeed(-0.2, this.car.rotation);
    // }
  }
}
