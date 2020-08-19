
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trash, paper, ground, trashLeft, trashRight, trashBottom;

function preload()
{
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(85,650,15);
	ground = new Ground(400,680,800,10);
	trash = new Trashbin(730, 670);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(193, 247, 255);
  Engine.update(engine);
  
  ground.display();
  paper.display();
  trash.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paper.paper,paper.paper.position,{x:38,y:-38});
	}
} 