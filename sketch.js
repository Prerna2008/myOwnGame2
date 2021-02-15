var Play=1;
var End=2;
var Bonus=3;
var gameState=Play;
var c1Gr,c1Img;
var e1Gr,e2Gr,e3Gr;
var a,b,c;
var e1,e2,e3;
var e1Img,e2Img,e3Img;
var car1,burst;
var car1Img,cars;
var trackImg,track,coin;
var power,powerGr,burstImg,Img,over;
var score;
var heart=3;
var game;
function preload(){
  bg=loadImage("track.png")
  car1Img=loadImage("car2.png");
  c1Img=loadImage("download.png");
  e1Img=loadImage("car_yellow.png")
  e2Img=loadImage("car_green.png");
  e3Img=loadImage("car_black.png");
  trackImg=loadImage("track.jpg");
  burstImg=loadImage("burst.png");
  Img=loadImage("bolt.png");
  game=loadImage("gameOver.png");
}
function setup() {
  createCanvas(900,700);
  score=0;
  track=createSprite(375,350,10,10)
  track.addImage(trackImg);
  track.scale=1.3;

  car1=createSprite(325,600,10,10);
  car1.addImage(car1Img);

  burst=createSprite(375,350,10,10);
  burst.addImage(burstImg);
  burst.visible=false;

  over=createSprite(350,200,10,10);
  over.scale=1.5;
  over.addImage(game);
  over.visible = false;

  e1Gr=new Group();
  e2Gr=new Group();
  e3Gr=new Group();
  powerGr=new Group();
  c1Gr=new Group();
}

function draw() {
  background("white");
  textSize(20);
  fill("black");
  text("Score :" +score,800,400);
  text("Lives :" +heart,800,600);
  if(gameState===Play){
  if(keyDown(LEFT_ARROW)){
    car1.x=car1.x-5;
  }
  if(keyDown(RIGHT_ARROW)){
    car1.x=car1.x+5;
  }
  if(car1.isTouching(e1Gr)){
    heart=heart-1;
    e1Gr.destroyEach();
  }
  if(car1.isTouching(e2Gr)){
    heart=heart-1;
    e2Gr.destroyEach();
  }
  if(car1.isTouching(e3Gr)){
    heart=heart-1;
    e3Gr.destroyEach();
  }
  if(heart===0){
    burst.visible=true;
    gameState=End;
  }
  if(car1.isTouching(c1Gr)){
    c1Gr.destroyEach();
    score=score+1;
  }
  if(car1.isTouching(powerGr)){ 
    gameState=Bonus;
    powerGr.destroyEach();
  }
  if(score/5===0){
    e1Gr.velocityY=e1Gr.velocityY+10;
    e3Gr.velocityY=e3Gr.velocityY+10;
    e2Gr.velocityY=e2Gr.velocityY+10;
  }
  cars1();
  cars2();
  cars3();
  coins();
  powers();
  drawSprites();
}

else if(gameState===End){
  background("white");
  fill("black");
  textSize(30);
  text("Your Score ="+ score,350,500);
text("Game Ended",300,300);
}

else if(gameState===Bonus){
background("blue");
car1.velocityY=car1.velocityY-0.0005;
if(keyDown(LEFT_ARROW)){
  car1.x=car1.x-5;
}
if(keyDown(RIGHT_ARROW)){
  car1.x=car1.x+5;
}
if(heart===0){
  burst.visible=true;
  gameState=End;
}
if(car1.isTouching(c1Gr)){
  c1Gr.destroyEach();
  score=score+1;
}
if(car1.isTouching(powerGr)){ 
  gameState=Bonus;
  powerGr.destroyEach();
}
cars1();
cars2();
cars3();
coins();
powers();
drawSprites();
if(car1.isTouching(e1Gr)||car1.isTouching(e2Gr)||car1.isTouching(e3Gr)){
score=score+5;
if(car1.isTouching(e1Gr)){
  e1Gr.destroyEach();
}
if(car1.isTouching(e2Gr)){
  e2Gr.destroyEach();
}
if(car1.isTouching(e3Gr)){
  e3Gr.destroyEach();
}
}
if(car1.y<0){
  gameState=Play;
  car1.velocityY=0;
  car1.x=325;
  car1.y=600;
}
textSize(30);
fill("white");
text("BonusLevel",375,100);
textSize(15);
text("Now if you touch the cars your score will incerease.",95,200);
}
}
function cars1(){
if(frameCount%70===0){
e1=createSprite(0,0,10,10);
e1.addImage(e1Img);
e1.x=Math.round(random(10,740))
e1.velocityY=4;
e1.lifeTime=100;
e1Gr.add(e1);
}
}
function cars2(){
  if(frameCount%300===0){
  e2=createSprite(0,0,10,10);
  e2.addImage(e2Img);
  e2.x=Math.round(random(10,740))
  e2.velocityY=4;
  e2.lifeTime=100;
  e2Gr.add(e2);
}}
function cars3(){
    if(frameCount%200===0){
    e3=createSprite(0,0,10,10);
    e3.addImage(e3Img);
    e3.x=Math.round(random(10,740))
    e3.velocityY=4;
    e3.lifeTime=100;
    e3Gr.add(e3);
}}
function coins(){
    if(frameCount%200===0){
    coin=createSprite(0,0,10,10);
    coin.addImage(c1Img);
    coin.x=Math.round(random(10,740))
    coin.velocityY=4;
    coin.lifeTime=100;
    c1Gr.add(coin);
}}
function powers(){
  if(frameCount%400===0){
  power=createSprite(0,0,10,10);
  power.addImage(Img);
  power.x=Math.round(random(10,740))
  power.velocityY=4;
  power.lifeTime=100;
  powerGr.add(power);
}}