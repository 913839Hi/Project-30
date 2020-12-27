class Box1 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity = 255;
    }
    display(){ 
      fill(66,212,245);

        if(this.body.speed < 3){
          super.display();
         }
         else{
          World.remove(world, this.body);
          push();
this.Visiblity = this.Visiblity - 5;
tint(255,this.Visiblity);
var pos =this.body.position;
rect(pos.x, pos.y, this.width, this.height);
pop();
         }
         
    }
  };