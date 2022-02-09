var spaceImg, space;
var asteroidImg, asteroid, asteroidGroup;
var rocket, rocketImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var score;


function preload(){
  spaceImg = loadImage("milky-way-2695569__480.jpg");
  asteroidImg = loadImage("149-1497507_meteor-transparent-background-clipart.png");
  rocketImg = loadImage("f1c2225b0461fa6c9b90fd2a36deffa6.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  space = createSprite(width/2,200);
  space.addImage("space",spaceImg);
  space.scale = 1.7

  space.velocityY = 1;
  
  asteroidsGroup = new Group();
  invisibleBlockGroup = new Group();
  
  rocket = createSprite(windowWidth/2,windowHeight/2,50,50);
  rocket.scale = 0.075;
  rocket.addImage("rocket", rocketImg);
  score = 0;
}


function draw() {
  background(0);
 if(space.y > 400) {
      space.y = 300
    } 
    
   
  if (gameState === "play") {
    
    if(keyDown("Left_Arrow")){
        rocket.x = rocket.x - 3;

      // write a code to move left when left arrow is pressed
    }
    if(keyDown("Right_Arrow")){
  
          rocket.x = rocket.x + 3;

      // write a code to move left when right arrow is pressed
      
    }
    if(keyDown("UP_Arrow")){
  
         rocket.velocityY = -10;

      // write a code to move up when space arrow is pressed
      
    }
    score = score + Math.round(getFrameRate()/60);

  rocket.velocityY = rocket.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling space
    
      spawnasteroids();

  
//write a code to make invisibleBlockGroup collide with rocket destroy the rocket and make gamestate to end.
    if(invisibleBlockGroup.isTouching(rocket) || rocket.y > windowHeight){
      rocket.destroy();
      gameState = "end"
    }
    
  
  drawSprites();
  stroke("Yellow")
    fill("Yellow")
    text("Score: "+ score, windowWidth-100,50);
}
  if (gameState === "end"){
    stroke("Cyan");
    fill("Cyan");
    textSize(50);
    text("Game Over", windowWidth/2,windowHeight/2)
  }
}

function spawnasteroids()
 {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var asteroid = createSprite(200,10);
    asteroid.scale = 0.5;
    var invisibleBlock = createSprite(400,15);
    invisibleBlock.visible=false;
    invisibleBlock.width = asteroid.width*2;
    invisibleBlock.height = 250;
    //add the random function
    asteroid.x = Math.round(random(120,windowWidth-120))
    invisibleBlock.x = asteroid.x
    invisibleBlock.y = asteroid.y+100
    asteroid.addImage(asteroidImg);
    
    asteroid.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //change the depth of the rocket and asteroid
    
     
    rocket.depth = asteroid.depth;
    rocket.depth =1;
    
    //assign lifetime for the  asteroid and invisible block

    asteroid.lifetime = 800;
    invisibleBlock.lifetime = 800;
    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are asteroid and invisible block
    
     asteroidsGroup.add(asteroid);
    invisibleBlock.debug = true;
    invisibleBlockGroup.add(invisibleBlock);
  }
}

