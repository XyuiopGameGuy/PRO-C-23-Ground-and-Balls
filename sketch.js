const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var block1;
var block2;
var rotator1;
var rotator2;
var rotator3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

    World.add(world, plane);
	World.add(world, block1);
	World.add(world, block2);
	World.add(world, rotator1);
	World.add(world, rotator2);
	World.add(world, rotator3);

    var plane_options={
    isStatic: true
	}

    block1.fill("black");
	block1.ellipseMode(RADIUS);
	block1.rectMode(CENTER)
	block2.position(200, 350)
	block2.size(100, 30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
 
}



