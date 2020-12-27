
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand1,stand2;
var b1,b2,b3,b4,b5,b6,b7;
var b8,b9,b10,b11,b12;
var b13,b14,b15;
var b16;
var b17,b18,b19,b20,b21;
var b22,b23,b24,b25;
var polygon,slingShot;
var gameState="onSling";

function setup() {
	createCanvas(1400, 800);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
stand1=new Ground(500,600,270,30);
stand2=new Ground(900, 300, 210, 30);

b1=new Box1(410, 590, 30,40);
b2=new Box1(440, 590, 30,40);
b3=new Box1(470, 590, 30,40);
b4=new Box1(500, 590, 30,40);
b5=new Box1(530, 590, 30,40);
b6=new Box1(560, 590, 30,40);
b7=new Box1(590, 590, 30,40);

b8=new Box2(450, 530, 30,40);
b9=new Box2(480, 530, 30,40);
b10=new Box2(510, 530, 30,40);
b11=new Box2(520, 530, 30,40);
b12=new Box2(550, 530, 30,40);

b13=new Box3(470, 470, 30,40);
b14=new Box3(500, 470, 30,40);
b15=new Box3(530, 470, 30,40);

b16=new Box4(500, 430, 30,40);

b17=new Box1(840, 290, 30,40);
b18=new Box1(870, 290, 30,40);
b19=new Box1(900, 290, 30,40);
b20=new Box1(930, 290, 30,40);
b21=new Box1(960, 290, 30,40);

b22=new Box3(870, 230, 30,40);
b23=new Box3(900, 230, 30,40);
b24=new Box3(930, 230, 30,40);

b25=new Box2(900, 220, 30,40);

polygon= Bodies.circle(50,200,20)
World.add(world,polygon); 

slingShot=new SlingShot(this.polygon,{x:100,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
stand1.display();
 stand2.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 b13.display();
 b14.display();
 b15.display();
 b16.display();
 b17.display();
 b18.display();
 b19.display();
 b20.display();
 b21.display();
 b22.display();
 b23.display();
 b24.display();
 b25.display();
rect(polygon.position.x,polygon.position.y,40,40);
slingShot.display();
}

function mouseDragged(){
	if(gameState!=="launched"){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}}

function mouseReleased(){
	slingShot.fly();
	gameState="onSling";
}

function keyPressed(){
    if(keyCode === 32){
		slingShot.attach(this.polygon);
    }
}

