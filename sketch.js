var x = [2,3,[5,"kartik"],9,"jindal"]
console.log(x[2][1]) ;





const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;
const Constraint = Matter.Constraint ;
var engine , world , object ;
var box1, box2 , ground , bird ; 
var backgroundImage, platform ;
var  score, slingShot ;
var gameState = "onSling" ;

function preload() {
  getTime() ;

}

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create() ;
  world = engine.world ;
  platform =  new Ground(150,305,300,170)	;
  //log5 = new Log(230,180,80,PI/2)

  box1 = new Box(700,320,70,70) ;
  box2 = new Box(920,320,70,70) ;
  ground = new Ground(600,390,1200,20) ;
  pigs = new Pigs(810,350) ;
  log = new Log(810,260,300,PI/2) ;
  log2 = new Log(810,180,300,PI/2) ;
  pigs2 = new Pigs(810,220)
  box3 = new Box(700,240,70,70) ;
  box4 = new Box(920,240,70,70) ;
  box5 = new Box(810,160,70,70) ;
  log3 = new Log(760,120,150,PI/7) ;
  log4 = new Log(870,120,150,-PI/7) ;
  bird = new Bird(200,50,50,50) ;
  slingShot = new SlingShot(bird.body,{x:200,y:50}) ;

 score = 0 ;
 

}

function draw() {
  if(backgroundImage)
  background(backgroundImage);  
  noStroke() ;
  textSize(35) ;
  fill(255) ;
  text("Score: "+score,width-300,50) ;
Engine.update(engine) ;

box1.display() ;
box2.display() ;
ground.display() ;
pigs.display() ;
log.display() ;
log2.display() ;
box3.display() ;
box4.display() ;
pigs2.display() ;
log3.display() ;
log4.display() ;
box5.display() ;
bird.display() ;
platform.display();
//log5.display() ;
slingShot.display() ;
pigs.score() ;
pigs2.score() ;

}


function mouseDragged() {
  //if(gameState!=="launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY}) ;

 // }
 
  
  }
function mouseReleased(){
slingShot.fly() ;
gameState="launched";

}

function keyPressed() {
  if(keyCode===32 && bird.body.speed < 1){
    bird.trajectory = [] ;
    Matter.Body.setPosition(bird.body,{x:200,y:50}) ;
    slingShot.attach(bird.body) ;
  }
}
async function getTime() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Europe/London")  ;
  var jsonData = await response.json() ;
  console.log(jsonData) ;
  var dateTime = jsonData.datetime ;
  console.log(dateTime) ;
  var hour = dateTime.slice(11,13) ;
  console.log(hour) ;
  if(hour >= 06 && hour <= 19) {
    bg = "sprites/bg.png" ;
  }
  else{
    bg = "sprites/bg2.jpg" ;
  }
  backgroundImage = loadImage(bg) ;
}
