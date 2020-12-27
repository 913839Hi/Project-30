class Box4 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity = 255;
    }
    display(){
      fill(104,117,114);
     
      if(this.body.speed < 3){
        super.display();
       }
       else{
        World.remove(world, this.body);
        push();
this.Visiblity = this.Visiblity - 5;
tint(255,this.Visiblity);
var pos =this.body.position;
rect(this.body.position.x, this.body.position.y, 30, 40);
pop();
       }
      }
  };