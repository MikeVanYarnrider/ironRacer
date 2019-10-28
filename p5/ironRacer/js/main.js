function preload() {
  console.log("preload");
  game.preload();
}

function setup() {
  console.log("setup");
  createCanvas(WIDTH, HEIGHT);
  game.setup();
}

function draw() {
  console.log("draw");
  background("white");
  game.draw();
}

// starting game
const game = new Game();
