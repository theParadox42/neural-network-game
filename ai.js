
function AI(x, learn, net){
    Player.call(this, x);
    if(net) {
        this.net = net.copy();
    } else {
        this.net = new Network([2, 1]);
    }
    this.net.learn(learn||1);
    this.net.update();
};
AI.prototype = Object.create(Player.prototype);
AI.prototype.run = function(ob){
    this.net.setInput([0,1]);
    this.net.update();
    let out = this.net.getOutput()[0];
    this.input(out);
    this.update();
    this.display();
    this.net.display(this.x, this.y-this.h/2, this.w, this.h/5);
};
AI.ais = [];
AI.init = function(ais){
    for(var i = 0; i < ais; i ++){
        this.ais.push(new this(-40*i-50, 0.2));
    }
}
AI.run = function(){
    for(var i = 0; i < this.ais.length; i ++){
        this.ais[i].run({});
    }
}
