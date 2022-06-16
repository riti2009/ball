var ball = {
  x : 200,
  y : 200,
  diameter : 50,
  c : ['#F0F8FF','#FFF0F5','#E6E6FA'],
  xspeed : 0,
  yspeed : 0
}
var ran 





function setup() {
  createCanvas(400, 400);
  ran = Math.round(random(0,2));
}

function draw() {
  background(0);
fill(ball.c[ran]);
ellipse (ball.x, ball.y, ball.diameter, ball.diameter);

ball.xspeed = 3;
ball.x += ball.xspeed;
ball.yspeed = -3;
ball.y += ball.yspeed;

}