// ------------------------------------------------------
// Animation A
function Anim_a() {
  this.x = width / 2;
  this.y = height / 2;
  this.diameter = 0;
  this.speed = 10;
}

Anim_a.prototype.draw = function() {
  noStroke();
  fill(0, 127, 255);
  ellipse(this.x, this.y, this.diameter, this.diameter);
  this.diameter += this.speed;
};

// ------------------------------------------------------
// Animation S
function Anim_s() {
  this.width = 0;
  this.speed = 80;
}

Anim_s.prototype.draw = function() {
  noStroke();
  fill(255, 0, 0);
  rectMode(CORNER);
  rect(0, 0, this.width, height);
  this.width += this.speed;
};

// ------------------------------------------------------
// Animation D
function Anim_d() {
  this.rotate = 0;
  this.size = 0;
  this.speed = 50;
}

Anim_d.prototype.draw = function() {
  push();
  fill(255, 255, 0);
  noStroke();
  translate(width / 2, height / 2);
  rotate(radians(this.rotate));
  rectMode(CENTER);
  rect(0, 0, this.size, this.size);
  pop();
  this.rotate += this.speed;
  this.size += this.speed;
};

// ------------------------------------------------------
// Animation F
function Anim_f() {
  this.bgColor = 255;
  this.speed = -2;
}

Anim_f.prototype.draw = function() {
  noStroke();
  fill(this.bgColor);
  rect(0, 0, width, height);
  this.bgColor += this.speed;
};
