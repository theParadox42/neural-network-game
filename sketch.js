

var testNet;

var canvas;

function setup(){
    testNet = new Network([1,3,2]);
    canvas = createCanvas(windowWidth,windowHeight)
};

function draw(){
    background(240);

    testNet.display();

    if(canvas.height != windowHeight || canvas.width != windowWidth){
        canvas = resizeCanvas(windowWidth, windowHeight)
    }
};

function mouseReleased(){
    if(!fullscreen()){
        fullscreen(true);
    }
};
