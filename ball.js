class ball{
    constructor(x,y,w,h){  
        var options ={
           
            frictionAir:0.005,
            density:1
            
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body); 
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3.04);
        stroke("blue");
        fill("white");
        
        ellipse(pos.x,pos.y,this.w,this.h);
        pop();

    }
}