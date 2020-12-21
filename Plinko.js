class Plinko {
    constructor(x,y,radius){
        var options = {
            restitution:0.8,
            friction:1,
            density:2
            
        }
       this.body = Bodies.circle(x,y,radius,options);
       this.radius = 10;
       World.add(world,this.body)

    }
    display (){
        var angle = this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10,10);
        pop();
    }
}