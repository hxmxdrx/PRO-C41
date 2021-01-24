

function preload(){
    thunderbolt1 = loadImage("1.png");
    thunderbolt2 = loadImage("2.png");
    thunderbolt3 = loadImage("3.png");
    thunderbolt4 = loadImage("4.png");

    walking_1 = loadImage("walking_1.png");
    walking_2 = loadImage("walking_2.png");
    walking_3 = loadImage("walking_3.png");
    walking_4 = loadImage("walking_4.png");
    walking_5 = loadImage("walking_5.png");
    walking_6 = loadImage("walking_6.png");
    walking_7 = loadImage("walking_7.png");
    walking_8 = loadImage("walking_8.png");
}

function setup(){
   
   canvas = createCanvas(displayHeight, displayWidth);
    
}

function draw(){
    var human = createSprite(10,displayWidth/2,50,250);
    var thunder = createSprite(displayHeight-10,displayWidth/2,25,150);
    
    var walkSequence;
    

    var thunderSequence;

    var raindrop;
    raindrop.createSprite(displayWidth/2,displayHeight/2,5,5);
    ellipse(displayWidth/2,displayHeight/2,5,5);
    raindrop.shapeColor("blue");

}   

