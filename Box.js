class Box{
    constructor(x,y,width,height){
        //list properties
        var options ={
            restitution:1
        }
        
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }



}