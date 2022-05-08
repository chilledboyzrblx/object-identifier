status="";
img='';

function preload(){
    img = loadImage("paris.png");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById('status').innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    status=true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}