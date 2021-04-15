var JerryImg, TomImg, Tom, Jerry;
var JerryRun, TomRest, Garden, GardenImg, taunt;
function preload() {
    //load the images here
    JerryImg = loadImage('images/mouse4.png');
    TomImg = loadImage('images/cat1.png');
    GardenImg = loadImage('images/garden.png');
    JerryRun = loadImage('images/mouse1.png');
    GardenImg = loadImage('images/garden.png');
    tauntImg = loadImage('images/mouse3.png');
    TomRest = loadImage('images/cat2.png')
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    Jerry = createSprite(20, 580, 10,30);
    Jerry.addImage('Jerry', JerryImg);
    Jerry.scale = 0.2;
    Tom = createSprite(900,600,40,70)
    Tom.addImage('Tom', TomRest)
    Tom.scale = 0.2;
    Tom.velocityX = 0;

Tom.debug = true;
Jerry.debug = true;

}

function draw() {

    background(GardenImg);
    //Write condition here to evalute if tom and jerry collide
    if (Jerry.isTouching(Tom)){
        Tom.velocityX = 0;
        Jerry.velocityX = 3;
        Jerry.addImage('Jerry', JerryRun);
    }

    


    drawSprites();

    
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === RIGHT_ARROW ){  
   Jerry.addImage("taunt", tauntImg);
    Tom.velocityX = -2;
    
}



}
