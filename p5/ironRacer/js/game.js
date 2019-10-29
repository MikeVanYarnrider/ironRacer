const WIDTH = 900;
const HEIGHT = 600;

class Game {
  constructor() {
    this.player = new Player(WIDTH / 2, HEIGHT / 2);
    this.background = new Background();
    this.obstacle = new Obstacles();
    this.startTime = [];
    this.lapTime = [];
    this.maxLaps = 5;
    this.raceTime = "00:00";
  }

  preload() {
    //
    // this.player.preload();
    this.background.preload();
    this.obstacle.preload();
  }

  setup() {
    //
    this.obstacle.setup();
    this.player.setup();
  }

  draw() {
    // background
    this.background.draw();

    // Racing stats
    this.finalTime = (
      (this.lapTime[this.lapTime.length - 1] - this.startTime) /
      60
    ).toFixed(2);
    if (this.startTime > 0) {
      this.raceTime = ((frameCount - this.startTime) / 60).toFixed(2);
    }
    this.lapCount = this.lapTime.length;

    // console.log("-----Lap: " + this.lapCount);
    // console.log(this.finalTime);
    //

    this.player.draw();

    // navigation
    if (this.lapCount < this.maxLaps) {
      // rotate left
      if (keyDown(37)) this.player.carSprite.rotation -= 5;

      // rotate right
      if (keyDown(39)) this.player.carSprite.rotation += 5;

      // move forward

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
        // console.log("----START----");
        this.startTime.push(frameCount);
        console.log(this.startTime);
      }
      if (this.obstacle.finish.overlap(this.player.carSprite)) {
        // console.log("----FINISH----");
        this.lapTime.push(frameCount);
        console.log(this.lapTime);
        console.log(this.finalTime);
      }
      lapCounter(this.lapCount, this.maxLaps);
      timeCounter(this.raceTime);
    }

    // console.log(this.raceTime);

    // collision detection
    this.obstacle.sprite1.displace(this.player.carSprite);

    this.obstacle.sprite2.displace(this.player.carSprite);

    // ----BORDER COLLISION
    this.obstacle.spriteBorderRight.displace(this.player.carSprite);

    this.obstacle.spriteBorderLeft.displace(this.player.carSprite);

    this.obstacle.spriteBorderTop.displace(this.player.carSprite);

    this.obstacle.spriteBorderBottom.displace(this.player.carSprite);
    // }

    drawSprites();
  }
}
