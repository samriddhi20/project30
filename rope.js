class ROPE{
    constructor(body1,point2){
    var options={
    bodyA:body1,
    pointB:point2,
    stiffness:0.04,
    length:5
    }
    this.rope=Constraint.create(options)
    World.add (world,this.rope);
    this.pointB=point2
    }
   
    display(){
    if(this.rope.bodyA){
        fill ("black")
        textSize(20)
        text("drag the mouse to shoot the stone",100,50)
   text("press space key for 2 chance",900,450)
    strokeWeight(4)
    var pointA = this.rope.bodyA.position
    var pointB = this.pointB
    line(pointA.x,pointA.y,pointB.x,pointB.y)

}
    }
attach(body){
    this.rope.bodyA = body;
    
}
fly(){
    this.rope.bodyA = null;
   
}
}
