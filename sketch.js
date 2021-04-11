var a,b;

function setup() {
  createCanvas(800,400);
  a=createSprite(200, 200, 50, 80);
  a.shapeColor = "red";
  b=createSprite(400, 200, 80, 35);
  b.shapeColor = "red";
}

function draw() {
  background("skyblue");  

  b.x = World.mouseX;
  b.y = World.mouseY;

  if(b.x-a.x < a.width/2 + b.width/2 && a.x-b.x < a.width/2 + b.width/2 &&
    b.y-a.y < a.height/2 + b.height/2 && a.y-b.y < a.height/2 + b.height/2) 
  { 
    a.shapeColor="black"; 
    b.shapeColor="black"; 
  } 
  else
  { 
    a.shapeColor="red"; 
    b.shapeColor="red"; 
  }
  drawSprites();
}