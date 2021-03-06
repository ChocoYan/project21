
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var box1
var box2
var box3

var groundObj,leftSide,rightSide


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		
	}
		

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    groundObj = new Ground(width/2,670,width,20)
	leftSide = new Ground(700,600,20,100)
	rightSide = new Ground(500,600,20,100)

    ball = Bodies.circle(100,150,30,ball_options)
	World.add(world, ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x, ball.position.y,20)
  groundObj.show()
  leftSide.show()
  rightSide.show()

}

function keyPressed(){
  if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:90,y:-90})

  }
}

