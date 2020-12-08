class Bird{
constructor(x,y){
this.body=Bodies.rectangle(x,y,40,40)
World.add(world,this.body);
this.height=40
this.width=40

}
display(){
    var pos=this.body.position;
    var ang=this.body.angle;
    pos.y=mouseY
    pos.x=mouseX
    push()
    translate(pos.x,pos.y)
    angleMode(RADIANS);
    rotate(ang);
    rectMode(CENTER);
    fill("red")
    rect(0,0,40,40);
    

    pop()
}

}