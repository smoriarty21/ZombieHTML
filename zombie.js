$('#canvas').css('background','white');

var c = document.getElementById("canvas");
var canvas = c.getContext("2d");

var FPS = 60;
setInterval(function() {
	update();
	draw();
}, 1000/FPS);

function update(){
	player.update();
}

function draw() {
	canvas.clearRect(0, 0, canvasWidth, canvasHeight);
}