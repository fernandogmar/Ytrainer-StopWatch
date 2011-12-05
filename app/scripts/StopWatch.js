window.StopWatch = function(){
	this.reset();
};

window.StopWatch.prototype.getTime = function(){
	return this.counter;
};

window.StopWatch.prototype.start = function(){
	this.counter = 1;
};

window.StopWatch.prototype.reset = function(){
	this.counter = 0;
};