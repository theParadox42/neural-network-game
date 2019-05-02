

var canvas;

function setup(){
    canvas = createCanvas(windowWidth,windowHeight)
    AI.init(5);
};

function draw(){
    fill(255,255,255);
    rect(0,0,width,height);

    translate(width/2, height/2);

    push();
    translate(-player.x, 0);

    player.run();
    AI.run();

    pop();

    fill(200,160,0);
    noStroke();
    rect(-width/2,0,width,height/2+20);

    resetMatrix();

    updateCanvas();
};

function updateCanvas(){
    if(canvas.height != windowHeight || canvas.width != windowWidth){
        resizeCanvas(windowWidth, windowHeight)
    }
}

function mouseReleased(){
    if(!fullscreen()){
        fullscreen(true);
    }
};
