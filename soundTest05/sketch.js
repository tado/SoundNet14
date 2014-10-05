var sample = [];
var animation;
var num;

function setup() {
  createCanvas(640, 480);
  sample[0] = loadSound('assets/se01.wav');
  sample[1] = loadSound('assets/se02.wav');
  sample[2] = loadSound('assets/se03.wav');
  sample[3] = loadSound('assets/se04.wav');
}

function draw() {
  background(0);
  animation.draw();
}

function keyTyped() {
  if (key == 'a') {
    sample[0].play();
    animation = new Anim_a();
  }
  if (key == 's') {
    sample[1].play();
    animation = new Anim_s();
  }
  if (key == 'd') {
    sample[2].play();
    animation = new Anim_d();
  }
  if (key == 'f') {
    sample[3].play();
    animation = new Anim_f();
  }
}
