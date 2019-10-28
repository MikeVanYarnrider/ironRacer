const WIDTH = 1200;
const HEIGHT = 800;

class Game {
  constructor() {
    this.player = new Player(WIDTH / 2, HEIGHT / 2);
    this.obstacle = new Obstacles();
    this.startTime = [];
    this.lapTime = [];
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

  raceTime() {
    if (keyDown(38)) {
      this.startTime.push(frameCount);
      // console.log(startTime);
    }
  }

  draw() {
    // Racing stats
    this.finalTime = (
      (this.lapTime[this.lapTime.length - 1] - this.startTime) /
      60
    ).toFixed(2);
    this.lapCount = this.lapTime.length;
    // console.log(this.lapCount);
    // console.log(this.finalTime);
    //
    this.player.draw();
    // this.obstacle.draw();

    // car navigation
    // rotate left
    if (keyDown(37)) this.player.carSprite.rotation -= 5;

    // rotate right
    if (keyDown(39)) this.player.carSprite.rotation += 5;

    // move forward
    // if (
    //   this.player.carSprite.position.x < 600 &&
    //   this.player.carSprite.position.y < 400 &&
    //   this.player.carSprite.position.x > -600 &&
    //   this.player.carSprite.position.y > -400
    // ) {
    if (keyDown(38)) {
      this.player.carSprite.position.x +=
        sin(this.player.carSprite.rotation) * this.player.velocity;
      this.player.carSprite.position.y -=
        cos(this.player.carSprite.rotation) * this.player.velocity;
    }

    // start-finish line
    if (
      this.obstacle.start.overlap(this.player.carSprite) &&
      this.startTime.length < 1
    ) {
      console.log("----START----");
      this.startTime.push(frameCount);
      console.log(this.startTime);
    }
    if (this.obstacle.finish.overlap(this.player.carSprite)) {
      console.log("----FINISH----");
      this.lapTime.push(frameCount);
      console.log(this.lapTime);
    }

    // end of race

    // collision detection
    this.obstacle.sprite1.displace(this.player.carSprite);

    this.obstacle.sprite2.displace(this.player.carSprite);

    this.obstacle.sprite3.displace(this.player.carSprite);

    this.obstacle.sprite4.displace(this.player.carSprite);

    this.obstacle.sprite5.displace(this.player.carSprite);

    // ----BORDER COLLISION
    this.obstacle.spriteBorderRight.displace(this.player.carSprite);

    this.obstacle.spriteBorderLeft.displace(this.player.carSprite);

    this.obstacle.spriteBorderTop.displace(this.player.carSprite);

    this.obstacle.spriteBorderBottom.displace(this.player.carSprite);
    // }

    drawSprites();
  }
}
