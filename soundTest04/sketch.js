var sample = [];

function setup() {
  createCanvas(320, 240);
  sample[0] = loadSound('assets/se01.wav');
  sample[1] = loadSound('assets/se02.wav');
  sample[2] = loadSound('assets/se03.wav');
  sample[3] = loadSound('assets/se04.wav');
}

function draw() {
  background(200);
}

function keyTyped() {
  if (key == 'a') {
    sample[0].play();
  }
  if (key == 's') {
    sample[1].play();
  }
  if (key == 'd') {
    sample[2].play();
  }
  if (key == 'f') {
    sample[3].play();
  }
}
