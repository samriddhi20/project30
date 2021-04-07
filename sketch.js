const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function setup(){
var canvas = createCanvas(1200,500);
engine = Engine.create();
world = engine.world;
ground1 = new ground(700,330,390,20)
ground2 = new ground(600,480,1200,20)
box1 = new box(850,320,40,30)
box2 = new box(818,320,30,30)
box3 = new box(790,320,30,30)
box4 = new box(760,320,30,30)
box5 = new box(728,320,30,30)
box6 = new box(700,320,30,30)
box7 = new box(670,320,30,30)
box8 = new box(637,320,30,30)
box9 = new box(610,320,30,30)
box10 = new box(580,320,30,30)
box11 = new box(835,270,34,34)
box12 = new box(798,270,34,34)
box13 = new box(759,270,34,34)
box14 = new box(720,270,34,34)
box15 = new box(680,270,43,34)
box16 = new box(640,270,34,34)
box17 = new box(600,270,34,34)
box18 = new box(820,230,34,40)
box19 = new box(780,230,34,38)
box20 = new box(740,230,40,40)
box21 = new box(700,230,40,40)
box22 = new box(660,230,40,40)
box23 = new box(620,230,40,40)
box24 = new box(799,200,40,44)
box25 = new box(749,200,40,44)
box26 = new box(700,200,40,44)
box27 = new box(650,200,49,44)
box28 = new box(670,150,49,49)
box29 = new box(720,150,49,49)
box30 = new box(768,150,49,49)
box31 = new box(720,100,49,49)
ball1 = new Ball(70,300,50,50)
rope=new ROPE(ball1.body,{x:300,y:300})
}
function draw(){

    background("purple")

Engine.update(engine);
ground1.display();
ground2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();
box31.display();
ball1.display();
rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
   rope.fly();
}
function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(ball1.body,{x:70, y:300});
      rope.attach(ball1.body);
    }
  }
  function detectCollision(lstone,lmango){
    stoneBodyPosition = lstone.body.position;
    mangoBodyPosition = lmango.body.position;
  
    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if(distance <= lmango.r + lstone.r){
      Matter.Body.setStatic(lmango.body, false);
    }
  
  }
  