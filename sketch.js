

var canvas;

function setup(){
    canvas = createCanvas(windowWidth,windowHeight)
};

function draw(){
    background(10);


    if(canvas.height != windowHeight || canvas.width != windowWidth){
        canvas = resizeCanvas(windowWidth, windowHeight)
    }
};

function mouseReleased(){
    if(!fullscreen()){
        fullscreen(true);
    }
};
