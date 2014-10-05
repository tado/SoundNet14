var sample;

function preload() {
  sample = loadSound('assets/se01.wav');
}

function setup() {
  createCanvas(320, 240);
  sample.loop();
}

function draw() {
  background(200);
}
