const WIDTH = 900;
const HEIGHT = 600;
const xPFive = 0;
const yPFive = 0;
let pOneCounter = 0;
let pTwoCounter = 0;

class Game {
  constructor() {
    this.playerOne = new Player(1);
    this.playerTwo = new Player(2);
    this.background = new Background();
    this.obstacle = new Obstacles();
    this.startTime = [];
    this.maxLaps = 3;
  }

  preload() {
    this.background.preload();
    this.obstacle.preload();
  }

  setup() {
    //
    this.obstacle.setup();
    this.playerOne.setup();
    this.playerTwo.setup();
    this.background.setup();
  }

  draw() {
    // background
    this.background.draw();

    if (this.startTime > 0) {
      this.playerOne.raceTime = ((frameCount - this.startTime) / 60).toFixed(2);
      this.playerTwo.raceTime = ((frameCount - this.startTime) / 60).toFixed(2);
    }
    this.playerOne.lapCount = this.playerOne.lapTime.length;
    this.playerTwo.lapCount = this.playerTwo.lapTime.length;

    this.playerOne.draw();
    this.playerTwo.draw();

    // racing stats
    this.pOneFinalTime =
      (this.playerOne.lapTime[this.playerOne.lapTime.length - 1] -
        this.startTime) /
      60;

    this.pTwoFinalTime =
      (this.playerTwo.lapTime[this.playerTwo.lapTime.length - 1] -
        this.startTime) /
      60;

    // Player 1 navigation
    if (this.playerOne.lapCount - 1 < this.maxLaps) {
      // move forward
      if (keyDown(38)) {
        this.playerOne.carSprite.position.x +=
          sin(this.playerOne.carSprite.rotation) * this.playerOne.velocity;
        this.playerOne.carSprite.position.y -=
          cos(this.playerOne.carSprite.rotation) * this.playerOne.velocity;
      }
      if (keyDown(40)) {
        this.playerOne.carSprite.position.x +=
          sin(this.playerOne.carSprite.rotation) * -this.playerOne.velocity;
        this.playerOne.carSprite.position.y -=
          cos(this.playerOne.carSprite.rotation) * -this.playerOne.velocity;
      }
      if (keyDown(38)) {
        // rotate left
        if (keyDown(37)) this.playerOne.carSprite.rotation -= 5;
        // rotate right
        if (keyDown(39)) this.playerOne.carSprite.rotation += 5;
      }

      if (keyDown(40)) {
        // rotate left
        if (keyDown(37)) this.playerOne.carSprite.rotation += 5;
        // rotate right
        if (keyDown(39)) this.playerOne.carSprite.rotation -= 5;
      }

      // PLAYER 1 ---- start-finish line
      if (
        this.startTime.length < 1 &&
        this.obstacle.start.overlap(this.playerOne.carSprite)
      ) {
        console.log("----P1 START----");
        this.startTime.push(frameCount);
        // this.obstacle.start.visible = false;
      }
      if (
        this.obstacle.start.overlap(this.playerOne.carSprite) &&
        pOneCounter < 1
      ) {
        pOneCounter++;
        console.log("----P1 FINISH----");
        // console.log(this.playerOne.lapTime);
        this.playerOne.lapTime.push(frameCount);
        setTimeout(function() {
          pOneCounter = 0;
        }, 200);
      }
    }

    // Player 2 navigation
    if (this.playerTwo.lapCount - 1 < this.maxLaps) {
      // move forward
      if (keyDown(87)) {
        this.playerTwo.carSprite.position.x +=
          sin(this.playerTwo.carSprite.rotation) * this.playerTwo.velocity;
        this.playerTwo.carSprite.position.y -=
          cos(this.playerTwo.carSprite.rotation) * this.playerTwo.velocity;
      }

      if (keyDown(83)) {
        this.playerTwo.carSprite.position.x +=
          sin(this.playerTwo.carSprite.rotation) * -this.playerTwo.velocity;
        this.playerTwo.carSprite.position.y -=
          cos(this.playerTwo.carSprite.rotation) * -this.playerTwo.velocity;
      }
      if (keyDown(87)) {
        // rotate left
        if (keyDown(65)) this.playerTwo.carSprite.rotation -= 5;
        // rotate right
        if (keyDown(68)) this.playerTwo.carSprite.rotation += 5;
      }

      if (keyDown(83)) {
        if (keyDown(65)) this.playerTwo.carSprite.rotation += 5;

        // rotate right
        if (keyDown(68)) this.playerTwo.carSprite.rotation -= 5;
      }

      // PLAYER 2 ---- start-finish line
      if (
        this.obstacle.start.overlap(this.playerTwo.carSprite) &&
        this.startTime.length < 1
      ) {
        console.log("----P2 START----");
        this.startTime.push(frameCount);
        // this.obstacle.start.visible = false;

        // console.log(this.startTime);
      }
      if (
        this.obstacle.start.overlap(this.playerTwo.carSprite) &&
        pTwoCounter < 1
      ) {
        console.log("----P2 FINISH----");
        pTwoCounter++;
        this.playerTwo.lapTime.push(frameCount);
        setTimeout(function() {
          pTwoCounter = 0;
        }, 200);
      }
    }

    lapCounter(this.playerOne.lapCount, this.playerTwo.lapCount, this.maxLaps);

    timeCounter(
      this.pOneFinalTime,
      this.pTwoFinalTime,
      this.playerOne.raceTime,
      this.playerTwo.raceTime,
      this.playerOne.lapCount,
      this.playerTwo.lapCount,
      this.maxLaps
    );

    // collision detection
    this.obstacle.sprite1.displace(this.playerOne.carSprite);
    this.obstacle.sprite2.displace(this.playerOne.carSprite);
    this.obstacle.sprite3.displace(this.playerOne.carSprite);

    this.obstacle.sprite1.displace(this.playerTwo.carSprite);
    this.obstacle.sprite2.displace(this.playerTwo.carSprite);
    this.obstacle.sprite3.displace(this.playerTwo.carSprite);

    // ----BORDER COLLISION
    this.obstacle.spriteBorderRight.displace(this.playerOne.carSprite);
    this.obstacle.spriteBorderLeft.displace(this.playerOne.carSprite);
    this.obstacle.spriteBorderTop.displace(this.playerOne.carSprite);
    this.obstacle.spriteBorderBottom.displace(this.playerOne.carSprite);

    this.obstacle.spriteBorderRight.displace(this.playerTwo.carSprite);
    this.obstacle.spriteBorderLeft.displace(this.playerTwo.carSprite);
    this.obstacle.spriteBorderTop.displace(this.playerTwo.carSprite);
    this.obstacle.spriteBorderBottom.displace(this.playerTwo.carSprite);

    this.playerTwo.carSprite.displace(this.playerOne.carSprite);

    this.playerOne.carSprite.displace(this.playerTwo.carSprite);

    // ----BONUS OBSTACLES
    if (this.obstacle.oil1.overlap(this.playerOne.carSprite)) {
      this.playerOne.velocity = 2;
    }
    if (this.obstacle.oil1.overlap(this.playerTwo.carSprite)) {
      this.playerTwo.velocity = 2;
    }
    if (this.obstacle.boost1.overlap(this.playerOne.carSprite)) {
      this.playerOne.velocity = 9;
    }
    if (this.obstacle.boost1.overlap(this.playerTwo.carSprite)) {
      this.playerTwo.velocity = 9;
    }
    drawSprites();
  }
}
