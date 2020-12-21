const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight = 300;

var particles = [];
var plinkos =[];
var divisions = [];

for(var k = 0; k <= width;k= k+80){
  divisions.push(new Divisions(k,480 - divisionHeight/2,10,divisionHeight))
  
}

for (var j= 40;j<= width; j= j+50){
  plinkos.push(new Plinko(j,75,10));
  
}

for (var j= 15; j<= width-10;j= j +50){
  plinkos.push(new Plinko(j,175,10));
  
}
console.log(plinkos)

  

function setup() {
  var canvas = createCanvas(480,800);
  
  
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,785,height,25);
  division1 = new Divisions(0,130,0,300);

  
  
  
}

function draw() {
  background("black"); 

  ground.display();
  division1.display();
  
  drawSprites();
}