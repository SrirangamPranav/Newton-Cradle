class rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){

        strokeWeight(1.5);
        stroke("black");
    
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
      
        var hang1X = pointA.x;
        var hang1Y = pointA.y;

        var hang2X = pointB.x+this.offsetX;
        var hang2Y = pointB.y+this.offsetY;
        
        line(hang1X,hang1Y,hang2X,hang2Y);
    }
}