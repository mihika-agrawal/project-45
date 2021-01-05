var cNote, csNote;
var dNote, dsNote;
var eNote;
var fNote, fsNote;
var gNote, gsNote;
var aNote, asNote
var bNote;
var cNote2,csNote2;
var dNote2, dsNote2;
var eNote2;
var cSound,csSound;
var touches=[];
function preload() {
   bg= loadImage("bg.png");
   border1= loadImage("border.png");
   cSound= loadSound("cnote.wav");
   csSound= loadSound("csnote.wav");
   dSound= loadSound("dnote.wav");
   dsSound= loadSound("dsnote.wav");
   eSound= loadSound("enote.wav");
   fSound= loadSound("fnote.wav");
   fsSound= loadSound("fsnote.wav");
   gSound= loadSound("gnote.wav");
   gsSound= loadSound("gsnote.wav");
   aSound= loadSound("anote.wav");
   asSound= loadSound("asnote.wav");
   bSound= loadSound("bnote.wav");
   cSound2= loadSound("cnote2.wav");
   csSound2= loadSound("csnote2.wav");
   dSound2= loadSound("dnote2.wav");
   dsSound2= loadSound("dsnote2.wav");
   eSound2= loadSound("enote2.wav");
}

function setup(){
    var canvas = createCanvas(1400,600);
    
bgs=createSprite(620,400,1400,800);
 bgs.addImage(bg);
 bgs.scale=1.5;

border= createSprite(600,250,2000,10);
border.addImage(border1);
border.scale=1.9;
console.log(border.x,border.y);

   cNote= createSprite(200,400,75,300); 
   cNote.shapeColor="white";
   
    
   dNote= createSprite(290,400,75,300); 
   dNote.shapeColor="white";
   eNote= createSprite(380,400,75,300); 
   eNote.shapeColor="white";
   fNote= createSprite(470,400,75,300); 
   fNote.shapeColor="white";
   gNote= createSprite(560,400,75,300); 
   gNote.shapeColor="white";
   aNote= createSprite(650,400,75,300); 
   aNote.shapeColor="white";
   bNote= createSprite(740,400,75,300); 
   bNote.shapeColor="white";
   cNote2= createSprite(830,400,75,300); 
   cNote2.shapeColor="white";
   dNote2= createSprite(920,400,75,300); 
   dNote2.shapeColor="white";
   eNote2= createSprite(1010,400,75,300); 
   eNote2.shapeColor="white";
   csNote= createSprite(245,350,60,200);
   csNote.shapeColor="black";
   dsNote= createSprite(335,350,60,200);
   dsNote.shapeColor="black";
   fsNote= createSprite(515,350,60,200);
   fsNote.shapeColor="black";
   gsNote= createSprite(605,350,60,200);
   gsNote.shapeColor="black";
   asNote= createSprite(695,350,60,200);
   asNote.shapeColor="black";
   csNote2= createSprite(875,350,60,200);
   csNote2.shapeColor="black";
   dsNote2= createSprite(965,350,60,200);
   dsNote2.shapeColor="black";
 
}

function draw(){
    background(0);
    fill(255);
    textSize(50);
    text("Piano",550,100);
    textSize(20)
    text("Use the keys in your keyboard to play a virtual piano",400,150);
    

    textSize(32);
    textAlign(CENTER, TOP);
    textFont("Courier New");
    fill("white");
    stroke("red");
    text("A", 10,550, 400, 400);
    text("S", 100,550, 400, 400);
    text("D", 190,550, 400, 400);
    text("F", 280,550, 400, 400);
    text("G", 370,550, 400, 400);
    text("H", 460,550, 400, 400);
    text("J", 550,550, 400, 400);
    text("K", 640,550, 400, 400);
    text("L", 730,550, 400, 400);
    text("M", 810,550, 400, 400);
    text("W", 55,200, 400, 400);
    text("E", 145,200, 400, 400);
    text("T", 325,200, 400, 400);
    text("Y", 415,200, 400, 400);
    text("U", 505,200, 400, 400);
    text("O", 685,200, 400, 400);
    text("P", 775,200, 400, 400);
    if(keyWentDown("A")|| touches.length > 0){
   cNote.shapeColor=(77,74,73);
cSound.play();
        touches=[];}
 else{
cNote.shapeColor="white";
   }
if(keyWentDown("W")){
csNote.shapeColor=(77,74,73);
 csSound.play();}
 else{
 csNote.shapeColor="black";
   } 
        if(keyWentDown("S")){
  dNote.shapeColor=(77,74,73);
 dSound.play();}
 else{
    dNote.shapeColor="white";
  }
if(keyWentDown("E")){
     dsNote.shapeColor=(77,74,73);
 dsSound.play();}
else{
 dsNote.shapeColor="black";
 }         
if(keyWentDown("D")){
 eNote.shapeColor=(77,74,73);
 eSound.play();}
 else{
 eNote.shapeColor="white";
 } 
   if(keyWentDown("F")){
   fNote.shapeColor=(77,74,73);
  fSound.play();}
 else{
   fNote.shapeColor="white";
   }  
   if(keyWentDown("T")){
    fsNote.shapeColor=(77,74,73);
    fsSound.play();}
    else{
    fsNote.shapeColor="black";
    } 
    if(keyWentDown("G")){
gNote.shapeColor=(77,74,73);
 gSound.play();}
 else{
 gNote.shapeColor="white";
 }    
if(keyWentDown("Y")){
gsNote.shapeColor=(77,74,73);
 gsSound.play();}
    else{
 gsNote.shapeColor="black";
 }   
 if(keyWentDown("H")){
    aNote.shapeColor=(77,74,73);
    aSound.play();}
    else{
    aNote.shapeColor="white";
    } 
    if(keyWentDown("U")){
 asNote.shapeColor=(77,74,73);
 asSound.play();}
else{
 asNote.shapeColor="black";
  } 
  if(keyWentDown("J")){
    bNote.shapeColor=(77,74,73);
    bSound.play();}
    else{
    bNote.shapeColor="white";
    } 
    if(keyWentDown("K")){
        cNote2.shapeColor=(77,74,73);
        cSound2.play();}
         else{
        cNote2.shapeColor="white";
           }
 if(keyWentDown("O")){
 csNote2.shapeColor=(77,74,73);
 csSound2.play();}
   else{
 csNote2.shapeColor="black";
               }    
if(keyWentDown("L")){
 dNote2.shapeColor=(77,74,73);
 dSound2.play();}
 else{
   dNote2.shapeColor="white";
   }  
   if(keyWentDown("P")){
    dsNote2.shapeColor=(77,74,73);
     dsSound2.play();}
     else{
     dsNote2.shapeColor="black";
       } 
       if(keyWentDown("M")){
        eNote2.shapeColor=(77,74,73);
         eSound2.play();}
         else{
        eNote2.shapeColor="white";
           } 
    drawSprites();
}
