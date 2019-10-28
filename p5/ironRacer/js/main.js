function preload() {
  console.log("preload");
  game.preload();
}

function setup() {
  console.log("setup");
  createCanvas(WIDTH, HEIGHT);

  // function call
  game.setup();
  game.raceTime();
}

function draw() {
  angleMode(DEGREES);
  console.log("draw");
  background("white");

  // function call
  game.draw();
}

// starting game
const game = new Game();
