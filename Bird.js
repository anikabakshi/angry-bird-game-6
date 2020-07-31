class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this. smoke= loadImage("sprites/smoke.png");
    this.path= []
  }

  display() {

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
      var pos=[this.body.position.x,this.body.position.y];
    this.path.push(pos);
    }
    for(var I=0;I<this.path.length;I++){
      image (this.smoke,this.path[I][0],this.path[I][1]);
      
    }

  }
}
