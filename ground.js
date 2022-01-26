class Ground{

 constructor(x, y, w, h){

 this.body = Bodies.rectangle;

 this.w = w;

 this.h = h;

 World.add(world, this.body);

}
show(){
    var pos= this.body.position;
    Matter.body.rotate(this.body, angle);
    rect(pos.x, pos.y, this.w, this.h);
}
}

