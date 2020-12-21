class sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            angularstiffness: 1,
            length: 220
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
     }
     display(){
         if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(255,255,255)
            strokeWeight(3.5);
            line(pointA.x, pointA.y-25, pointB.x, pointB.y);
            pop()
         }        
     }
    }