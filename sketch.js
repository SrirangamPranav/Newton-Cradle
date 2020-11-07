
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;
var diameter = 50;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800,500);
	var positionX = 400;
	var positionY = 400;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob(positionX - diameter*2,positionY, diameter);
	bob2 = new bob(positionX- diameter,positionY, diameter);
	bob3 = new bob(positionX,positionY,diameter);
	bob4 = new bob(positionX +  diameter, positionY, diameter);
	bob5 = new bob(positionX + diameter * 2, positionY,diameter);

	roof = new Roof(width/2, height/4, 250, 15);

	rope1 = new rope(bob1.body,roof.body,-diameter*2,0);
	rope2 = new rope(bob2.body,roof.body,-diameter*1,0);
	rope3 = new rope(bob3.body,roof.body,0,0); 
 	rope4 = new rope(bob4.body,roof.body,diameter*1,0); 
	rope5 = new rope(bob5.body,roof.body,diameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,250,250);
  Engine.update(engine);
  
  textSize(20);
  fill("black")
  text("Newton's cradle tells us about the principle of conservation of momentum.",70,50);

  textSize(20);
  fill("black")
  text("Press right-arrow to observe the working of Newton's cradle.",140,470);


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  drawSprites();
}

function keyPressed() { 
	if (keyCode === RIGHT_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-80}); } 
}

	
