var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1,log2,log3;
var gameState = "move";

function preload()
{

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

}

function setup() {

	createCanvas(800, 700);
	rectMode(CENTER);
	
    packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible = false;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

		packageBody = Bodies.circle(width/2,200,5,{restitution:0.5, isStatic:true});
	World.add(world,packageBody);
	
  
	log2 = new log(500,650,20,100,"red");
	log3 = new log(295,650,20,100,"red");
	log1 = new log(400,690,200,20,"red");

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  background(0);

log1.display();
log2.display();
log3.display();

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.x= helicopterSprite.position.x 
  

  drawSprites();

 if(gameState==="move"){
  helicopterSprite.velocityX = 0;

  if (keyDown(LEFT_ARROW)) {
	helicopterSprite.velocityX = -10;
  }

  if (keyDown(RIGHT_ARROW)) {
	helicopterSprite.velocityX = 10;
  }
	
 }
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody,false);  
	packageSprite.visible = true;
	gameState = "stop";
	helicopterSprite.velocityX = 0;
	
  }
}