var sample;

function preload() {
  sample = loadSound('assets/se01.wav');
}

function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(200);
}

function mousePressed() {
  sample.play();
}
