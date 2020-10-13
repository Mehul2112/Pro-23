const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;  
var engine, world, Ground, Ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var Ground_options = {isStatic:true};
  var Ball_options = {restitution:1.0};
  Ground = Bodies.rectangle(200,390,400,20,Ground_options);
  Ball = Bodies.circle(200,100,20,Ball_options);

  console.log(Ball);

  World.add(world,Ground);
  World.add(world,Ball);
  
}
function draw() {
  background("blue");
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);

    rect(Ground.position.x,Ground.position.y,400,20);
    ellipse(Ball.position.x,Ball.position.y,20,20);
    drawSprites();
}