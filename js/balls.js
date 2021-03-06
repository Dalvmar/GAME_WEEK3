function Balls(game, x, y) {
  this.game = game;

  this.x = x ;
  this.y = y ;

  this.r = 5;

  this.vx = 10;
  this.vy = 1;

  this.a = 0.25;
}

Balls.prototype.draw = function() {
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = "green";
  this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  this.game.ctx.fill();
  this.game.ctx.closePath();
} 

Balls.prototype.move = function() {
  this.x += this.vx;

  this.vy += this.a;
  this.y += this.vy;

  if (this.y > this.game.player.y0 + this.game.player.h) {
    this.vy *= -1;
  }
};