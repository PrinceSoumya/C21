var Square1,Square2,a,b,c,d;


function setup() {
  createCanvas(800,400);
  Square1=createSprite(400, 200, 50, 50);
  Square2=createSprite(200, 400, 50, 50);
  a=createSprite(100, 100, 50, 50);
  b=createSprite(150, 150, 50, 50);
  c=createSprite(200, 200, 50, 50);
  d=createSprite(250, 250, 50, 50);


  c.velocityX=5;
  c.velocityY=2;
  Square2.velocityX=5;
  Square2.velocityY=2;

}

function draw() {
  background("pink");  
 Square2.x=mouseX;
 Square2.y=mouseY;


 bouncee(c,Square2);
if (zero1(Square2,b)){
 Square2.shapeColor="red";
 b.shapeColor="blue";
}
else {
  Square2.shapeColor="grey";
  b.shapeColor="grey";

}
  drawSprites();
}

function zero1(object1,object2){
 if(object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object1.width/2+object2.width/2 && object1.y-object2.y<object1.height/2+object2.height/2 && object2.y-object1.y<object1.height/2+object2.height/2 ){

return true;
 }

 return false;
}


function bouncee(object1,object2){
  if(object1.x-object2.x<object1.width/2+object1.width/2 && object2.x-object1.x<object1.width/2+object2.width/2){
    object2.velocityX=object2.velocityX*-1;
    object1.velocityX=object1.velocityX*-1;
    
    }
    if(object1.y-object2.y<object1.height/2+object2.height/2 && object2.y-object1.y<object1.height/2+object2.height/2){
      object2.velocityY=object2.velocityY*-1;
      object1.velocityY=object1.velocityY*-1;
    
    }

}
