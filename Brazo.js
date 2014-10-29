var v = require('vektor').vector;
var m = require('vektor').matrix;
var five = require("Johnny-five"),
	board = new five.Board();
 
	board.on ("ready", function() {
var ax=0;
var ay=0;
var az=0;
var thx=0;
var thy=0;
var thz=0;

//Construcción de matrices de rotación y desplazamiento
var dx = new m(4);
var dy = new m(4);
var dz = new m(4);
var Rx = new m(4);
var Ry = new m(4);
var Rz = new m(4);


function desx(ax){
	dx.set(0, 0, 1);
	dx.set(0, 1, 0);
	dx.set(0, 2, 0);
	dx.set(0, 3, ax);
	dx.set(1, 0, 0);
	dx.set(1, 1, 1);
	dx.set(1, 2, 0);
	dx.set(1, 3, 0);
	dx.set(2, 0, 0);
	dx.set(2, 1, 0);
	dx.set(2, 2, 1);
	dx.set(2, 3, 0);
	dx.set(3, 0, 0);
	dx.set(3, 1, 0);
	dx.set(3, 2, 0);
	dx.set(4, 3, 1);
}

function desy(ay){
	dy.set(0, 0, 1);
	dy.set(0, 1, 0);
	dy.set(0, 2, 0);
	dy.set(0, 3, 0);
	dy.set(1, 0, 0);
	dy.set(1, 1, 1);
	dy.set(1, 2, 0);
	dy.set(1, 3, ay);
	dy.set(2, 0, 0);
	dy.set(2, 1, 0);
	dy.set(2, 2, 1);
	dy.set(2, 3, 0);
	dy.set(3, 0, 0);
	dy.set(3, 1, 0);
	dy.set(3, 2, 0);
	dy.set(4, 3, 1);
}

function desz(az){
	dz.set(0, 0, 1);
	dz.set(0, 1, 0);
	dz.set(0, 2, 0);
	dz.set(0, 3, 0);
	dz.set(1, 0, 0);
	dz.set(1, 1, 1);
	dz.set(1, 2, 0);
	dz.set(1, 3, 0);
	dz.set(2, 0, 0);
	dz.set(2, 1, 0);
	dz.set(2, 2, 1);
	dz.set(2, 3, az);
	dz.set(3, 0, 0);
	dz.set(3, 1, 0);
	dz.set(3, 2, 0);
	dz.set(4, 3, 1);
}

function rotx(thx){
	Rx.set(0, 0, 1);
	Rx.set(0, 1, 0);
	Rx.set(0, 2, 0);
	Rx.set(0, 3, 0);
	Rx.set(1, 0, 0);
	Rx.set(1, 1, cos(thx));
	Rx.set(1, 2, -sin(thx));
	Rx.set(1, 3, 0);
	Rx.set(2, 0, 0);
	Rx.set(2, 1, sin(thx));
	Rx.set(2, 2, cos(thx));
	Rx.set(2, 3, 0);
	Rx.set(3, 0, 0);
	Rx.set(3, 1, 0);
	Rx.set(3, 2, 0);
	Rx.set(4, 3, 1);
}

function roty(thy){
	Ry.set(0, 0, cos(thy));
	Ry.set(0, 1, 0);
	Ry.set(0, 2, sin(thy));
	Ry.set(0, 3, 0);
	Ry.set(1, 0, 0);
	Ry.set(1, 1, 1);
	Ry.set(1, 2, 0);
	Ry.set(1, 3, 0);
	Ry.set(2, 0, -sin(thy));
	Ry.set(2, 1, 0);
	Ry.set(2, 2, cos(thy));
	Ry.set(2, 3, 0);
	Ry.set(3, 0, 0);
	Ry.set(3, 1, 0);
	Ry.set(3, 2, 0);
	Ry.set(4, 3, 1);
}

function rotz(thz){
	Rz.set(0, 0, cos(thz));
	Rz.set(0, 1, -sin(thz));
	Rz.set(0, 2, 0);
	Rz.set(0, 3, 0);
	Rz.set(1, 0, sin(thz));
	Rz.set(1, 1, cos(thx));
	Rz.set(1, 2, 0);
	Rz.set(1, 3, 0);
	Rz.set(2, 0, 0);
	Rz.set(2, 1, 0);
	Rz.set(2, 2, 1);
	Rz.set(2, 3, 0);
	Rz.set(3, 0, 0);
	Rz.set(3, 1, 0);
	Rz.set(3, 2, 0);
	Rz.set(4, 3, 1);
}
});