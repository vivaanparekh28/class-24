const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,550,50,50,"yellow");
    box2 = new Box(750,550,50,50,"yellow");
    ground = new Ground(600,height,1200,20);
    bird= new Bird(200,200);
    pig=new Pig(825,550);
    log=new Log(825,500,250,PI/2);
    box3=new Box(900,450,50,50,"yellow");
    box4=new Box(750,450,50,50,"yellow");
    pig2=new Pig(825,450);
    log2=new Log(825,400,250,PI/2);
    box5=new Box(825,350,50,50,"yellow");
    
    log3=new Log(800,350,150,PI/6);
    log4=new Log(875,350,150,-PI/6)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig.display();
    pig2.display();
    log.display();
    log2.display();
    box3.display();
    box4.display();
    box5.display();
    
    log3.display();
    log4.display();

}