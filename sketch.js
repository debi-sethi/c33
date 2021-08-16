
 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 var score=0
 var engine, world;
var bgimg;
var snow=[];
 function preload(){
  bgimg=loadImage("snow3.jpg")
}


 function setup() {
  createCanvas(1200,1200);
  engine = Engine.create();
  world = engine.world;

if(frameCount%100===0){
      for(var i=0;i<100;i++ ){
        snow.push(new Snow(random(0,1200),random(0,1200)))
      }

    }
 
  
}

function draw() {
  background(bgimg); 
  Engine.update(engine); 
  if(frameCount%50===0){
  
    for(var j=0;j<100;j++ ){
      
      snow[j].showsnow()
      snow[j].UpdateY()
    }
  }
  drawSprites();
}