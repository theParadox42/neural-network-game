
function AI(x, learn, net){
    Player.call(this, x);
    if(net) {
        this.net = net.copy();
    } else {
        this.net = new Network([1, 1]);
    }
    this.net.learn(learn||1);
    this.net.update();
};
AI.prototype = Object.create(Player.prototype);
AI.prototype.run = function(ob){
    if(!this.dead){
        var inOb = 0;
        if(ob){
            inOb = map(ob.x-this.x,width/5,0,0,1);
        }
        this.net.setInput([inOb,1]);
        this.net.update();
        let out = this.net.getOutput()[0];
        this.input(out);
        this.update();
        this.display();
        this.net.display(this.x, this.y-this.h/2, this.w, this.h/5);
    }
};
AI.ais = [];
AI.init = function(ais){
    for(var i = 0; i < ais; i ++){
        this.ais.push(new this(-40*i-50, 0.2));
    }
}
AI.run = function(){
    for(var i = this.ais.length-1; i > -1; i --){
        var ai = this.ais[i];
        var nearest;
        var nearestDistance = width*width;
        for(var j = 0; j < Obstacle.obstacles.length; j ++){
            var o = Obstacle.obstacles[j];
            if(o.x > ai.x && abs(o.x-ai.x) < nearestDistance){
                nearest = o;
                nearestDistance = abs(o.x-ai.x);
            }
        }
        ai.run(nearest);
    }
}
AI.reset = function(){
    this.ais.sort(function(ai1, ai2){
        return ai1.points-ai2.points;
    })
    console.log(this.ais);
}
