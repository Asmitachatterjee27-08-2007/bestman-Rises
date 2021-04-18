class Drops {
    constructor(x,y){
        var options ={
            friction:0.1
        }
        this.body=Bodies.circle(x,y,2,options);
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,2,2);

    }
    update(){
        if(this.body.position.y>700){
            Matter.Body.setPosition(this.body,{x:random(10,400),y:random(10,700)})
        }
    }
}
