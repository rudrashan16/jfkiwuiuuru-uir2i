class rope{
    constructor(bodyA,pointB){  
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
            
        }
        //this.body = Bodies.rectangle(x,y,w,h,options);
        this.pointB =pointB;
        this.ropes= Constraint.create(options);
        World.add(world,this.ropes); 
    }
    attach(body){
        this.ropes.bodyA =body;
        
    }
    fly(){
        this.ropes.bodyA = null;
    }
    display(){
        if(this.ropes.bodyA){

        
        var pointA = this.ropes.pointA.position;
        var pointB = this.pointB;
        push();
       /* translate(pos.x,pos.y);
        rotate(angle);*/
      //  rectMode(CENTER);
        strokeWeight(3.04);
        stroke(48,22,8);
       // fill("white");
        
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
        }
    }
}