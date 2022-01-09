
function preload(){
  //pre-load images
  path = loadAnimation("path.png");
  power = loadImage("power.png");
  bomb = loadImage("bomb.png");
  coin = loadImage("coin.png");
  energyDrink = loadImage("energyDrink.png");
  Runner1 = loadAnimation("Runner-1.png");
  Runner2 = loadAnimation("Runner-2.png");
}

function setup(){

  createCanvas(400,400);
  //create sprites here
  
  
}

function draw() {
  background(0);
  

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;
  Runner1=createSprite(50,50);
  Runner1.loadAnimation(Runner1);
  Runner1.veloictyY=4; 
  path.scale=1.2;
}
