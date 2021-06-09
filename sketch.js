var wall,thickness;
var speed,weight,bullet;
function setup(){
 createCanvas(1600,400);  
 bullet=createSprite(50,200,40,20);
 wall=createSprite(1200,200,thickness,height/2);
 bullet.shapeColor='gray';
 wall.shapeColor='80,80,80'; 
 thickness=random(22,83);
 speed=random(223,321);
 weight=random(30,52);
 bullet.velocityX=speed;
 
}
function draw(){
background(0);
textSize(28);
 fill ('blue');
 text ('BULLET TEST',400,50);

if(wall.x-bullet.x<bullet.width/2+wall.width/2){
bullet.velocityX=0;
var damage;
damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage<10){
    wall.shapeColor='green';
    bullet.shapeColor='gray';
    textSize(25);
    fill ('green')
    text('wall is effective against bullet',100,100);

}
if(damage>10){
    wall.shapeColor='red';
    textSize(25);
    fill ('red')
    text('wall is not effective against bullet',100,100);
}
}
drawSprites();
}
