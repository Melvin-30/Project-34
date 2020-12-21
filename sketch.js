
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
const MouseConstraint=Matter.MouseConstraint
const Mouse=Matter.Mouse
var mconstraint;

function setup() {
	createCanvas(windowWidth/2, windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;
	let canvasmouse=Mouse.create(canvas.elt);
	canvasmouse.pixelRatio=pixelDensity();
	let options={
		mouse:canvasmouse
	};
	mconstraint=MouseConstraint.create(engine,options)
	World.add(world,mconstraint)
	
	//Create the Bodies Here.
	
	bob1=new bob(35,300,"red")
	bob2=new bob(95,300,"blue")
	bob3=new bob(155,300,"lime")
	bob4=new bob(215,300,"skyblue")
	bob5=new bob(275,300,"orange")
	rope1=new sling(bob1.body,{x:35, y:100});
	rope2=new sling(bob2.body,{x:95, y:100});
	rope3=new sling(bob3.body,{x:155, y:100});
	rope4=new sling(bob4.body,{x:215, y:100});
	rope5=new sling(bob5.body,{x:275, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}



