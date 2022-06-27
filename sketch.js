var shooterAnimation = [];
var shooterSpritedata, shooterSpritesheet;
var shooter, speed
var angle=0
var shooterFrames

function preload(){
    bgImage=loadImage("assets/blue_sky.jpg")
    shooterSpritedata = loadJSON("assets/shooter/giphy.json");
    shooterSpritesheet = loadImage("assets/shooter/shooter.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight)
  

  var shooterFrames = shooterSpritedata.frames;
  //console.log(shooterFrames )

  for (let frame in shooterFrames) {
   var pos=(shooterFrames[frame].frame)
 
    var img = shooterSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    shooterAnimation.push(img);
 }


  speed= 0.5

}

function draw(){

background(bgImage)
    
    index=shooterDisplay()
    shootBullet(index)

drawSprites()

}



function shooterDisplay(){
    speed += 0.5;
    var index = floor(speed % shooterAnimation.length);
    //console.log(index)
    push();
    translate(width-180, World.mouseY);
    rotate(angle);
    imageMode(CENTER);
    image(shooterAnimation[index], 0,0);
    pop();
    return index
  }

  function shootBullet(index){

        if (index===14){
            bullet= createSprite(width-450, World.mouseY-30, 40,10)
    bullet.shapeColor='black'
    bullet.velocityX= -10
    bullet.lifetime=1000
        }
    }

    

  