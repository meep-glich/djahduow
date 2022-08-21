objects = [];
status = "";
video = "";
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}
function modelLoaded(){
    console.log("model Loaded!")
    status = true;
}
function draw(){
    image(vide0, 0, 0, 480, 380);
    if(status != ""){
        objectDetector.detect(video, gotResults);
        for(r = 0; r < objects.length; r++){
            document.getElementById("status").innerHTML = "status : detecting objects";
            document.getElementById("noo").innerHTML = "noo detected objects are : "+objects.length;

            fill("#FF0000")
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label +" "+ percent + "%", objects[i].x + 15,  objects[i].y + 15);
            noFill();
            stroke("FF0000")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].hieght);
        }
    }
}
function gotResults(error, results){
    if (error){
        console.log(error)
    }
    console.log(results);
    objects = results;
}
