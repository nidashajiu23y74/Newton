
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
  bobObject1= new bob(10,20,50,50);
  bobObject2= new bob(60,20,50,50);
  bobObject3= new bob(110,20,50,50);
  bobObject4= new bob(160,20,50,50);
  bobObject5= new bob(210,20,50,50);
  roofObject= new Roof(400,630,650,10)
  rope1=new rope(bobObject1.body,roofObject.body = bobdiameter^2.0 )

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function preload() {
  rectMode(CENTER);
  background(0);
  bobObject1= new bob(10,20,50,50);
  bobObject2= new bob(60,20,50,50);
  bobObject3= new bob(110,20,50,50);
  bobObject4= new bob(160,20,50,50);
  bobObject5= new bob(210,20,50,50);
  roofObject= new Roof(400,630,650,10)
  rope1=new rope(bobObject1.body,roofObject.body = bobdiameter^2.0 )
}
function draw(){
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();
  
  rope1.display();
}
function keyPressed(){
	if(keycode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.Body,paperObject.position,{x:85,y:-85});
	}
}

