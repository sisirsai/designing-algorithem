var a,b;
function setup() {
  createCanvas(1200,800);
 a= createSprite(400, 800, 100, 50);
 a.velocityY=5;
 b= createSprite(400, 100, 100, 50);
 b.velocityY=-5;
}

function draw() {
  background("black");  
  if(a.x-b.x<a.width/2+b.width/2
  &&b.x-a.x<a.width/2+b.width/2){
  a.velocityX=a.velocityX*(-1);
  b.velocityX=b.velocityX*(-1);
  }
  if(a.y-b.y<a.height/2+b.height/2
    &&b.y-a.y<a.height/2+b.height/2){
      a.velocityY=a.velocityY*(-1);
      b.velocityY=b.velocityY*(-1);
    }
  drawSprites();
}