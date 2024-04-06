var background_img
var table
var chair1
var chair2
var chair3
var chair4
var bed
var wood1
var wood2
var wood3
var wood4
var bench1
var bench2
var bench3
var bench4
var bench5
var bench6



function preload(){
  background_img=loadImage("images/background.png");

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  table= createSprite(width/2-35,height/2-15,485,55);
  table.visible=false;

  bench3=createSprite(width/2-440,height/2+340,150,55)
  bench3.rotation=35
  bench3.visible=false;

}

function draw(){
  background(background_img);
  
  drawSprites();
}
