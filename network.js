
//==================//
// NEURONS or NODES //
//==================//

{

function Node(bias, index, outOf){
	this.bias = bias;
	this.index = index;
	this.outOf = outOf;
	this.inputs = [];
	this.weights = [];
	this.val = 0;
};
Node.prototype.set = function(val){
	this.val = val;
};
Node.prototype.addInput = function(inNode){
	var inputIndex = this.inputs.length;
	this.inputs.push(inNode);
	this.weights[inputIndex] = Math.random()*10-5;
};
Node.prototype.update = function(){
	var val = 0;
	for(var i = 0; i < this.inputs.length; i ++){
		val += (this.inputs[i].val||0)*(this.weights[i]||0);
	}
	this.val = sigmoid(val);
};
Node.prototype.display = function(x,y,d){
	fill(this.val*255);
	ellipse(x,y,d,d);
};

}

//================//
// NETWORK LAYERS //
//================//

{

function Layer(nodes){
	this.nodes = [];
	for(var i = 0; i < nodes; i ++){
		this.nodes[i] = new Node(Math.random()*10-5, i, nodes);
	}
	this.inputLayer = [];
};
Layer.prototype.set = function(arr){
	for(var i = 0; i < this.nodes.length; i ++){
		if(arr[i] != undefined){
			this.nodes[i].val = arr[i] || 0;
		}
	}
};
Layer.prototype.setInput = function(layer){
	this.inputLayer = layer;
	for(var i = 0; i < this.nodes.length; i ++){
		for(var j = 0; j < layer.nodes.length; j ++){
			this.nodes[i].addInput(layer.nodes[j]);
		}
	}
};
Layer.prototype.update = function(){
	for(var i = 0; i < this.nodes.length; i ++){
		this.nodes[i].update();
	}
};
Layer.prototype.display = function(x,px){
	var nh = 20;
	for(var i = 0; i < this.nodes.length; i ++){
		for(var j = 0; j < this.nodes[i].inputs.length; j ++){
			var w = this.nodes[i].weights[j];

			strokeWeight(abs(w)*nh/50);
			if(w>0){
				stroke(0, 255, 0);
			} else {
				stroke(255, 0, 0);
			}
			var n = this.nodes[i].inputs[j];
			var mn = this.nodes[i];
			line(px,map(n.index,0,n.outOf,-n.outOf*nh,n.outOf*nh)+height/2,x,map(mn.index,0,mn.outOf,-mn.outOf*nh,mn.outOf*nh)+height/2);
		}
	}
	strokeWeight(nh/20);
  stroke(0);
	for(var i = 0; i < this.nodes.length; i ++){
		fill(this.val*255);
		var mn = this.nodes[i];
		var y = map(mn.index,0,mn.outOf,-mn.outOf*nh,mn.outOf*nh)+height/2;
		this.nodes[i].display(x,y,nh);
	}
};
Layer.prototype.get = function(){
	var out = [];
	for(var i = 0; i < this.nodes.length; i ++){
		out.push(this.nodes[i].val);
	}
	return out;
};
Layer.prototype.evolve = function(learn){
	for(var i = 0; i < this.nodes.length; i ++){

	}
};

}

//================//
// NEURAL NETWORK //
//================//

{

function Network(layers) {
	if(layers.length < 2) {
		return alert("Not enough layers for a Network");
	}
	this.inputLayer = new Layer(layers[0]);
	this.outputlayer = new Layer(layers[layers.length-1]);
	if(layers.length > 2) {
		this.hiddenLayers = [];
		for(var i = 1; i < layers.length-1; i ++){
			this.hiddenLayers[i-1] = new Layer(layers[i]);
			if(i == 1){
				this.hiddenLayers[i-1].setInput(this.inputLayer)
			} else {
				this.hiddenLayers[i-1].setInput(this.hiddenLayers[i-2]);
			}
		}
	} else {
		this.outputLayer.setInput(this.inputLayer);
	}
};
Network.prototype.setInput = function(data){
	this.inputLayer.set(data);
};
Network.prototype.getOutput = function() {
	return this.outputLayer.get();
};
Network.prototype.update = function(){

};

}
