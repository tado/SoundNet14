var sample = [];
var animation;
var num;

function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  sample[0] = loadSound('assets/se01.wav');
}

function draw() {
  background(0);
  if(animation){
    animation.draw();
  }
}

function keyTyped() {
  if (key == 'a') {
    sample[0].play();
    animation = new Anim_a();
  }
}
