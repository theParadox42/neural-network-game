function Player(x){
    this.x = x;
    this.w = 30;
    this.h = this.w;
    this.y = -this.h;
    this.vx = 2;
    this.vy = 0;
    this.px = this.x - this.vx;
    this.py = this.y - this.vy;
    this.color = "rgb(" + Math.round(Math.random() * 200) + ", "
                + Math.round(Math.random() * 200) +", "
                + Math.round(Math.random() * 200) + ")";
    this.dead = false;
    this.points = 0;
};
Player.prototype.input = function(jump){
    if((typeof jump) == "number"){
        if(jump > 0.6) {
            this.jump();
        }
    } else if(jump) {
        this.jump();
    }
};
Player.prototype.jump = function(){
    if(this.y >= -this.h) {
        this.vy-=5;
    }
};
Player.prototype.update = function(){
    this.px = this.x;
    this.py = this.y;
    this.vy+=0.1;
    this.x+=this.vx;
    this.y+=this.vy;
    if(this.y >= -this.h){
        this.y = -this.h;
        this.vy = min(this.vy,0);
    }
    this.points ++;
};
Player.prototype.display = function(){
    push();

    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);

    pop();
};
Player.prototype.run = function(){
    this.input(keyIsPressed||mouseIsPressed);
    this.update();
    this.display();
};

let player = new Player(0, 0);
