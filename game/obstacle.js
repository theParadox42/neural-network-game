function Obstacle(x){
    this.x = x;
    this.w = 20;
    this.h = 30;
    this.y = -this.h;
}
Obstacle.prototype.display = function(){
    push();
    noStroke();
    fill(0);
    rect(this.x,this.y,this.w,this.h);
    pop();
}
Obstacle.prototype.collide = function(p){

}
Obstacle.obstacles = [];
Obstacle.run = function(players){
    for(var i = this.obstacles.length-1; i > -1; i --){
        var o = this.obstacles[i];
        o.display();
        for(var j = 0; j < players.length; j ++){
            o.collide(players[j]);
        }
        if(o.x+this.w<-width/2-5+player.x){
            this.obstacles.splice(i, 1);
        }
    }
};
