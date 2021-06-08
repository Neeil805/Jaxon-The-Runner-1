
var track, trackImg;
var jaxon, jaxon_running, jaxon_collided
var rightInvisableGround,leftInvisableGround


function preload(){
  //pre-load images
  trackImg = loadImage("path.png")
  jaxon_running = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG",
                             "jake5.png")
  
  
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  track = createSprite(200,200);
  track.addImage(trackImg)
  track.scale = 1.2
  track.velocityY  = -2;

  jaxon = createSprite(200,310)
  jaxon.addAnimation("running",jaxon_running)
  jaxon.scale = 1
  jaxon.veloacityY = -2
  
  rightInvisableGround = createSprite(370,390,0,360)
  rightInvisableGround.visible = false;
  
  leftInvisableGround = createSprite(30,390,0,360)
  leftInvisableGround.visible = false;
  
  
  
}

function draw() {
  background(0);

  
  //console.log(track.y)  
  if (track.y < 0) {
    track.y = height/2;

    
  }
  
  if(keyDown(LEFT_ARROW)){
    jaxon.velocityX = -5
    jaxon.velocityY = 0
  }
  
  if(keyDown(RIGHT_ARROW)){
    jaxon.velocityX = 5
    jaxon.velocityY = 0
  }
  
  jaxon.collide(rightInvisableGround);
  jaxon.collide(leftInvisableGround);
  
  
  
  
  drawSprites ()
}