function setup() {
   createCanvas(800,400);
    fixedRect = createSprite(200, 200, 50, 80);
     fixedRect.shapeColor = "green";
      movingRect = createSprite(100, 20, 80, 30);
       movingRect.shapeColor = "green";
       }
      
  function draw() {
 background("black");
 movingRect.x = World.mouseX;
 movingRect.y = World.mouseY;
 if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
 &&movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 
 && fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2) 
 { 
 fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
} 
else { movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green"; 
 
}
drawSprites();
}