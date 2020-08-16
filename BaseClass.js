class BaseClass{
    constructor(x,y,width,height,angle) {
        var option = {
    restitution : 0.8 ,
    friction : 2.0 ,
    density : 1.0  
    }
     this.body = Bodies.rectangle(x,y,width,height,option) ;
     this.height = height ;
     this.width = width ;
     this.image = loadImage("sprites/face1.webp") ;
     World.add(world,this.body) ;
     
    }    
display(){
    var pos = this.body.position ;
    var angle = this.body.angle
    push() ;
    translate(pos.x,pos.y) ;
    rotate(angle) ;
    imageMode(CENTER) ;
   // fill("red") ;
    image(this.image,0,0,this.width,this.height) ;
    pop() ; 






}

}