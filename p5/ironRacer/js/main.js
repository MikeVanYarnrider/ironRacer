function preload() {
  console.log("preload");
  game.preload();
}

function setup() {
  console.log("setup");
  createCanvas(windowWidth - 200, windowHeight - 200);
  game.setup();
}

function draw() {
  console.log("draw");
  background("white");
  game.draw();
}

// starting game
const game = new Game();
