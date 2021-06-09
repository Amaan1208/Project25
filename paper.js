class Paper{

constructor(x,y,width,height){
	var options={
		restitution:0.3,
		friction:0,
		density:1.2,
	}
  this.body=Bodies.rectangle(x,y,width,height,options);
  this.height=height;
  this.width=width;
  
	this.image=loadImage("paper.png")
  World.add(world,this.body);
 }


display(){

 var pos=this.body.position;

 push();
 translate(pos.x,pos.y);
 //rectMode(CENTER); 
 //rect(pos.x,pos.y,this.width,this.height);
 imageMode(CENTER);
 image(this.image,0,0,this.width,this.height)
pop();
}

}