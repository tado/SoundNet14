var sample;

function preload() {
  sample = loadSound('assets/se01.wav');
}

function setup() {
  createCanvas(640,480);
  sample.loop();
}

function draw() {
  background(127);
}