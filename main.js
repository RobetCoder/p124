
difference=0;
rightwrist=0;
leftwrist=0;
function setup(){
    video= createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
    document.getElementById("square_side").innerHTML ="Width And Height of a square will be = "+difference+"px";
    background('#808080');
    fill("F90093");
    stroke("F90093");
    textSize(difference);
    text("Prem", 50, 400);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results){
if(results.length>0)
{
    console.log(results);
    rightwristX = results[0].pose.rightWrist.x;
    leftwristx = results[0].pose.leftWrist.x;
    difference = floor(leftwristx-rightwristX);
    console.log("leftWristX = "+leftwristx+  "rightWristX ="+rightwristX+"difference = "+difference);
}
}