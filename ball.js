class Ball{
    constructor(x,y,width,height){
        var options={
        isStatic:false,
        restitution:0.5,
        friction:1,
        density:1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.ball = loadImage("polygon.png")
        World.add(world,this.body)
        }
        
        display(){
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            //this.body.position.x = mouseX;
            //this.body.position.y = mouseY;
           this.ball.scale=2
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            fill(255);
            stroke("red");
            strokeWeight(3);
           image(this.ball,0, 0, this.width, this.height);
           pop();
          }
}