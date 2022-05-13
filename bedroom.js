status="";
img='';
objects=[];

function preload(){
    img = loadImage("bedroom.png");
}

function setup(){
    canvas = createCanvas(640,400);
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
    objects = results;
}

function draw(){
    image(img,0,0,640,400);
    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Objects Detected"
            fill("#FF0000");
            noFill();
            stroke("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[0].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
