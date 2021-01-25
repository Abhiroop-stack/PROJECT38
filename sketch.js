const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var man,manImg;
var alien,alienImg;
var backgr,backgrImg;
var fire,fireImg;

function preload(){
   backgrImg = loadImage("space.png");
   alienImg = loadImage("alien.png");
   manImg = loadImage("man.png");
   fireImg = loadImage("fire.png");
}
function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
   
      backgr = Bodies.rectangle(800,800);
      backgr.addImage(backgrImg);

      

      man =  Bodies.rectangle(100,400,20,20);
      man.addImage(alienImg);
      
      
     
  }

 

function draw() {
    background(0);
    Engine.update(engine);
  
  if(keyDown("space")){
    fire =  Bodies.rectangle(110,400,20,20);
    fire.addImage(fireImg);
    
    if(fire.isTouching(alien)){
       text("+1POINT!!",400,400)
    }
    alien();
  }
}

function alien(){
  if(World.frameCount%80 == 0){
      alien.y=Math.round(random(1,2));
      alien =  Bodies.rectangle(700,400,20,20);
      alien.addImage(alienImg);
      if (position === 1){
        alien.x=400;
        alien.velocityX=-(7+(score/4));
      }
      else{
        if (position === 2){
          alien.x=0;
          alien.velocityX=(7+(score/4));
        }
      }
  }
}

