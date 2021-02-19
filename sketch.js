const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint

var world,engine,body;
var polygon1;
var sling1;
var b1,b2,b3,b4,b5,b6,b7;
var b8,b9,b10,b11,b12;
var b13,b14,b15;
var b16;
var B1,B2,B3,B4,B5;
var B6,B7,B8;
var B9;
function setup(){
    createCanvas(1400,700);

    engine=Engine.create();
    world=engine.world;

   

}
 
function draw(){

push();
fill(137, 161, 255)
textSize(30);
stroke(10);
strokeWeight(10)
text("Drag the Hexagonal Stone and Release it,to launch it towards the blocks",10,50)
pop();
push();
fill(245, 245, 245);
textSize(25);
stroke(10);
strokeWeight(5);
text("Press Space to get a second Chance to Play",850,580);
pop();
ground1.display();
ground2.display();
ground3.display();
polygon1.display();
sling1.display();
push();
fill(0, 229, 255)
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
pop();
push();
fill(85, 124, 224)
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
pop();
push();
fill(195, 255, 0)
b13.display();
b14.display();
b15.display();
pop()
push()
fill(239, 117, 150)
b16.display();
pop();
push();
fill(255, 178, 79);
B1.display();
B2.display();
B3.display();
B4.display();
B5.display();
pop();
push();
fill(252, 5, 108);
B6.display();
B7.display();
B8.display();
pop();
push();
fill(238, 255, 130)
B9.display();
pop();
drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling1.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling1.attach(polygon1.body);
    }
}