let timer = 5;
let mode = 2;

function preload() {
  game.preload();
  background.preload();
  console.log("preload");
}

function setup() {
  createCanvas(WIDTH, HEIGHT);

  createCanvas(WIDTH, HEIGHT);
  game.setup();
  console.log("setup");
}

function draw() {
  clear();
  if (mode === 0) {
    textAlign(CENTER, CENTER);
    textSize(200);
    text(timer, width / 2, height / 2);
    fill("yellow");
    if (frameCount % 60 == 0 && timer > 0) {
      timer--;
    }
    if (timer == 0) {
      mode = 1;
    }
  }
  if (mode === 1) {
    angleMode(DEGREES);
    game.draw();
    console.log("draw");
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    mode = 1;
  }
}

// starting game
const game = new Game();
