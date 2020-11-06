
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  paperObject = new Paper(200,450,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  boxLeftSprite=createSprite(450,610,20,100);
  boxLeftSprite.shapeColor="lightpink";

  boxRightSprite=createSprite(650,610,20,100);
  boxRightSprite.shapeColor="lightpink";

  boxMiddleSprite=createSprite(550,650,200,20);
  boxMiddleSprite.shapeColor="lightpink";

  box1MiddleSprites=createSprite(600,610,20,100);
  boxRightSprite.shapeColor="lightpink";
 
  box2MiddleSprites=createSprite(550,610,20,100);
  boxRightSprite.shapeColor="lightpink";
 
  box3MiddleSprites=createSprite(500,610,20,100);
  boxRightSprite.shapeColor="lightpink";
 


  paperObject.display();

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-55});
   }
  }
