function Anim_a() {
  //初期設定
  this.r = 0;
  this.g = 0;
  this.b = 255;
  rectMode(CORNER);
}

Anim_a.prototype.draw = function() {
  //アニメーションの描画
  fill(this.r, this.g, this.b);
  rect(0, 0, width, height);
  this.r = (this.r + 2) % 255;
  this.b = (this.b - 2) % 255;
};
