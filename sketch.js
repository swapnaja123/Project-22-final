const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var heli,pack,package;

function preload(){
  heli = loadImage("helicopter.png");
  package = loadImage("package.png");
}


function setup(){
    createCanvas(400,400);
   
   engine = Engine.create();
    world = engine.world;
  
  var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
  
  var pack_options ={
        restitution: 0.40
    }
  
  pack = Bodies.circle(200,100,20, pack_options);
 //pack.addImage(package);
    World.add(world,pack);
  pack.scale = 0.1

  helicopter = createSprite(200,100,20,20);
  helicopter.addImage(heli);
  helicopter.scale = 0.5
  
}

function draw(){
    background("white");
  
   Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
  
   ellipseMode(RADIUS);
    ellipse(pack.position.x, pack.position.y, 20, 20);
  
  
  

  
  drawSprites();

}

