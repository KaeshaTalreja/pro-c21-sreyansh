var movingRect,fixedRect;//global declaration
var rect1;
var r1,r2,r3,r4;
var n1=10,n2=30;

function setup(){
	createCanvas(600,600);
	//create the objects
	movingRect=createSprite(10,10,20,100);
	fixedRect=createSprite(300,300,40,200);
	movingRect.debug=true;
	fixedRect.debug=false;

	rect1=createSprite(50,50,40,80);

	r1=createSprite(20,300,30,30);
	r2=createSprite(580,300,40,30);
	r1.velocityX=+4;
	r2.velocityX=-3;

	r3=createSprite(300,20,30,30);
	r4=createSprite(300,580,40,30);
	r3.velocityY=+2;
	r4.velocityY=-5;
}
function draw(){
	background("white");
	fill("red");
	text("Moving rectangle position:   ("+movingRect.x+","+movingRect.y+")",20,120);
  	text("Fixed rectangle position:     ("+fixedRect.x+","+fixedRect.y+")",20,160);
  	fill("black")
  	text("Gap betweem them....",20,200)
  	text("Horizontal:"+(movingRect.x-fixedRect.x),20,240);
  	text("Vertical:"+(movingRect.y-fixedRect.y),20,280);
  	text(fixedRect.width,fixedRect.x,(fixedRect.y-fixedRect.height/2-5));
  	text(fixedRect.height,(fixedRect.x-fixedRect.width/2-25),fixedRect.y);

  	text(movingRect.width,movingRect.x,(movingRect.y-movingRect.height/2-5));
  	text(movingRect.height,(movingRect.x-movingRect.width/2-25),movingRect.y);
	movingRect.x=World.mouseX;
	movingRect.y=World.mouseY;
	
	bounceOff(r1,r2);
	bounceOff(r3,r4);

	if(isTouching(movingRect,fixedRect)===true){
		movingRect.shapeColor="red";
  	  fixedRect.shapeColor="red";
	}
	else if(isTouching(movingRect,rect1)===true){
		movingRect.shapeColor="red";
  	  rect1.shapeColor="red";
	}
	else{
		movingRect.shapeColor="green";
		fixedRect.shapeColor="green";
		rect1.shapeColor="green";
	}
add(n1,n2);
add(34,67);
add(87,98);

	drawSprites();
}
