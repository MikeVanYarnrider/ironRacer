function preload() {
  game.preload();
  console.log("preload");
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setup();
  console.log("setup");
}

function draw() {
  angleMode(DEGREES);
  game.draw();
  console.log("draw");
}

// starting game
const game = new Game();
