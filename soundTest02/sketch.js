var sample;

function preload() {
  sample = loadSound('assets/se01.wav');
}

function setup() {
  createCanvas(640,480);
}

function draw() {
  background(127);
}

function keyPressed(k) {
  sample.play();
}