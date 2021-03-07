function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 80, 50);
  rect2=createSprite(200,200,50,70)
  rect1.shapeColor="blue"
  rect2.shapeColor="yellow"
}

function draw() {
  background("red");  
  rect1.x = World.mouseX
  rect1.y = World.mouseY
  //console.log (rect1.x-rect2.x)
  if (isTouching ( rect1,rect2 ) ) {
    rect1.shapeColor= "green"
    text ("touched",100,100)
    rect1.width = 200
  }
  else {
    rect1.shapeColor = "blue"
  }
  drawSprites();
}

