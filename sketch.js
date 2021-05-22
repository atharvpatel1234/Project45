function preload(){
  bgimage = loadImage("pad_screenshot.png");
  jake1image = loadImage("Jake1.webp");
  jake2image = loadImage("images.jpg");
}



function setup() {
  createCanvas(displayWidth,displayHeight);
  
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  bg.addImage(bgimage)
  bg.velocityY = 3;

  jake = createSprite(displayWidth/2,displayHeight-80,50,50)
  jake.addImage(jake1image)
  
  
}


function draw() {
  background(0);  
  drawSprites();
  if(keyDown(RIGHT_ARROW)){
    jake.x = jake.x+14;
  }
  if(keyDown(LEFT_ARROW)){
    jake.x = jake.x-14;
  }
  if(bg.y>displayHeight/2){
    bg.y = 200
  }
}