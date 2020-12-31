
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground ,  paper ;
var wall , wall1 , wall2 , wall3 ;



function setup() {
	createCanvas(1050, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new groundclass(width/2,600,width,20)
  	paper = new paperclass(40,500,50)

    wall = new dustbin(900,400);
    wall1 = new groundclass(900,580,300,20);
    wall2 = new groundclass(765,400,20,340);
    wall3 = new groundclass(1035,400,20,340);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  paper.display();
  wall.display();
  wall1.display();
  wall2.display();
  wall3.display();

 
}

function keyPressed() {
  if ( keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:145,y:-145});
  }
  
}

