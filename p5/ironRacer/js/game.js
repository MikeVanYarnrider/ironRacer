const WIDTH = 900;
const HEIGHT = 600;
const xPFive = 0;
const yPFive = 0;

class Game {
  constructor() {
    this.playerOne = new Player(WIDTH / 2, HEIGHT / 2);
    this.playerTwo = new Player(WIDTH / 2, HEIGHT / 2);
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
    this.playerOne.setup();
    this.playerTwo.setup();
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

    this.playerOne.draw();
    this.playerTwo.draw();

    // Player 1 navigation
    if (this.lapCount < this.maxLaps) {
      // rotate left
      if (keyDown(37)) this.playerOne.carSprite.rotation -= 5;

      // rotate right
      if (keyDown(39)) this.playerOne.carSprite.rotation += 5;

      // move forward

      if (keyDown(38)) {
        this.playerOne.carSprite.position.x +=
          sin(this.playerOne.carSprite.rotation) * this.playerOne.velocity;
        this.playerOne.carSprite.position.y -=
          cos(this.playerOne.carSprite.rotation) * this.playerOne.velocity;
      }

      // start-finish line
      if (
        this.obstacle.start.overlap(this.playerOne.carSprite) &&
        this.startTime.length < 1
      ) {
        // console.log("----START----");
        this.startTime.push(frameCount);
        console.log(this.startTime);
      }
      if (this.obstacle.finish.overlap(this.playerOne.carSprite)) {
        // console.log("----FINISH----");
        this.lapTime.push(frameCount);
        console.log(this.lapTime);
        console.log(this.finalTime);
      }

      // Player 2 navigation
      if (keyDown(65)) this.playerTwo.carSprite.rotation -= 5;

      // rotate right
      if (keyDown(68)) this.playerTwo.carSprite.rotation += 5;

      // move forward

      if (keyDown(87)) {
        this.playerTwo.carSprite.position.x +=
          sin(this.playerTwo.carSprite.rotation) * this.playerTwo.velocity;
        this.playerTwo.carSprite.position.y -=
          cos(this.playerTwo.carSprite.rotation) * this.playerTwo.velocity;
      }

      // start-finish line
      if (
        this.obstacle.start.overlap(this.playerTwo.carSprite) &&
        this.startTime.length < 1
      ) {
        // console.log("----START----");
        this.startTime.push(frameCount);
        console.log(this.startTime);
      }
      if (this.obstacle.finish.overlap(this.playerTwo.carSprite)) {
        // console.log("----FINISH----");
        this.lapTime.push(frameCount);
        console.log(this.lapTime);
        console.log(this.finalTime);
      }
    }
    lapCounter(this.lapCount, this.maxLaps);
    timeCounter(this.raceTime);

    // console.log(this.raceTime);

    // collision detection
    this.obstacle.sprite1.displace(this.playerOne.carSprite);

    this.obstacle.sprite2.displace(this.playerOne.carSprite);
    this.obstacle.sprite1.displace(this.playerTwo.carSprite);

    this.obstacle.sprite2.displace(this.playerTwo.carSprite);

    // ----BORDER COLLISION
    this.obstacle.spriteBorderRight.displace(this.playerOne.carSprite);

    this.obstacle.spriteBorderLeft.displace(this.playerOne.carSprite);

    this.obstacle.spriteBorderTop.displace(this.playerOne.carSprite);

    this.obstacle.spriteBorderBottom.displace(this.playerOne.carSprite);
    this.obstacle.spriteBorderRight.displace(this.playerTwo.carSprite);

    this.obstacle.spriteBorderLeft.displace(this.playerTwo.carSprite);

    this.obstacle.spriteBorderTop.displace(this.playerTwo.carSprite);

    this.obstacle.spriteBorderBottom.displace(this.playerTwo.carSprite);
    // }

    drawSprites();
  }
}
