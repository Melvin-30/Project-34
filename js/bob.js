class bob{
    constructor(x,y,color){
        var options={
            restitution:1,
            friction:0,
            frictionAir:0,
            slop:1,
            inertia:Infinity
        }
        this.body=Bodies.rectangle(x,y,40,40,options)
        this.x=x
        this.y=y
        
        this.fill=color
        World.add(world,this.body);
    }
    display(){
        var angle=this.body;
        push()
        rotate(angle)
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS);
        fill(this.fill);
        ellipse(0,0,30,30)
        pop()
    }
}