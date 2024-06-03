var paddle2 =10,paddle1=10;

var paddle1X = 10,paddle1Height = 110;
var paddle2Y = 685,paddle2Height = 70;

var score1 = 0, score2 =0;
var paddle1Y;

var  playerscore =0;

var pcscore =0;

var ball = {
    x:350/2,
    y:480/2,
    r:20,
    dx:3,
    dy:3
}

rightWristY = 0;
rightWristX = 0;
scoreRightWrist = 0;

game_status = "";

function preload(){
ball_touch_paddel = loadSound("ball_touch_padell.wav");
missed = loadSound("missed.wav");

}

function setup(){
    var canvas =  createCanvas(700,600);
    canvas.parent('canvas');
    
    
    //colocar el video con createCapture() 
    video = createCapture(VIDEO);
    video.size(700, 600);
    video.hide();
    
    poseNet = ml5 = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
    
}

function draw(){

    //colocar el comando que indica que se dibuje el canvas en la pantalla: 
    background(0); 
    image(video, 0, 0, 700, 600);
    
    if(game_status == "start"){
        background("purple");
        image(video, 0, 0, 700, 600);

        fill("blue");
        stroke("black");
        rect(680, 0, 20, 700);

        if(scoreRightWrist > 0.2){
            fill("red");
            stroke("white");
            circle(rightWristX, rightWristY, 30);
        }



        paddleInCanvas();

        //left paddle 
        fill(250, 0,0);
        stroke(0,0,250);
        strokeWheight("0.5");
        paddle1Y = rightWristY;
        rect(paddle1X,paddle1Y,paddle1Height,100);




        //computer paddle
        fill("#FFA500");
        stroke("#FFA500");
        var paddle2 = ball.y-paddle2Height/2;
        // CODIGO INCOMPLETO
        rect(paddle2Y, paddle2y, paddle)
    }
    
}

function modelLoaded(){
    console.log(" MODEL OK! ")
}

fu