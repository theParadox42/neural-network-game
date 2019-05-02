
var transX = 0;
var canvas;

function setup(){
    canvas = createCanvas(windowWidth,windowHeight)
    AI.init(5);
};

function draw(){
    fill(255,255,255);
    rect(0,0,width,height);

    translate(width/2, height/2);

    transX -= player.vx;
    push();
    translate(transX, 0);

    player.run();
    AI.run();
    Obstacle.run([player].concat(AI.ais))

    pop();

    fill(100,60,0);
    noStroke();
    rect(-width/2,0,width,height/2+20);

    resetMatrix();

    updateCanvas();
};

function reset(){
    player = new Player();
};

function updateCanvas(){
    if(canvas.height != windowHeight || canvas.width != windowWidth){
        resizeCanvas(windowWidth, windowHeight)
    }
};

function mouseReleased(){
    if(!fullscreen()){
        fullscreen(true);
    }
};
