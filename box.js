class box{
    constructor(x,y,w,h){  
        var options ={
            restitution:0.009,
            friction:1.0000,
            density:0.0004
            
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
        stroke("orange");
        fill("white");
        
        rect(pos.x,pos.y,this.w,this.h);
        pop();

    }
}