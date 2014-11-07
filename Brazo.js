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
	Rx.set(1, 1, Math.cos(thx));
	Rx.set(1, 2, Math.asin(thx));
	Rx.set(1, 3, 0);
	Rx.set(2, 0, 0);
	Rx.set(2, 1, Math.sin(thx));
	Rx.set(2, 2, Math.cos(thx));
	Rx.set(2, 3, 0);
	Rx.set(3, 0, 0);
	Rx.set(3, 1, 0);
	Rx.set(3, 2, 0);
	Rx.set(4, 3, 1);
}

function roty(thy){
	Ry.set(0, 0, Math.cos(thy));
	Ry.set(0, 1, 0);
	Ry.set(0, 2, Math.sin(thy));
	Ry.set(0, 3, 0);
	Ry.set(1, 0, 0);
	Ry.set(1, 1, 1);
	Ry.set(1, 2, 0);
	Ry.set(1, 3, 0);
	Ry.set(2, 0, Math.asin(thy));
	Ry.set(2, 1, 0);
	Ry.set(2, 2, Math.cos(thy));
	Ry.set(2, 3, 0);
	Ry.set(3, 0, 0);
	Ry.set(3, 1, 0);
	Ry.set(3, 2, 0);
	Ry.set(4, 3, 1);
}

function rotz(thz){
	Rz.set(0, 0, Math.cos(thz));
	Rz.set(0, 1, Math.asin(thz));
	Rz.set(0, 2, 0);
	Rz.set(0, 3, 0);
	Rz.set(1, 0, Math.sin(thz));
	Rz.set(1, 1, Math.cos(thx));
	Rz.set(1, 2, 0);
	Rz.set(1, 3, 0);
	Rz.set(2, 0, 0);
	Rz.set(2, 1, 0);
	Rz.set(2, 2, 1);
	Rz.set(2, 3, 0);
	Rz.set(3, 0, 0);
	Rz.set(3, 1, 0);
	Rz.set(3, 2, 0);
	Rz.set(3, 3, 1);
}
 var n=0;
 var to=5;
 var dt=to/(n-1);
 var a2 = 0.10;
 var a3 = 0.15;

 
 var p_i = new m(3,1);
 p_i.set(0,0, 0);
 p_i.set(1,0, 0.2);
 p_i.set(2,0, 0.1);
 var p_f = new m(3,1);
 p_f.set(0,0, 0.15);
 p_f.set(1,0, 0.2);
 p_f.set(2,0, 0.1);
 var d2 = p_i.get(2);
 var v_i= new m(3, 1);
 p_f.set(0,0, 0);
 p_f.set(1,0, 0);
 p_f.set(2,0, 0);
 var v_f = new m(3, 1);
 p_f.set(0,0, 0);
 p_f.set(1,0, 0.1);
 p_f.set(2,0, 0.1);
 
 var a_x = p_i.get(0);
 var a_y = p_i.get(1);
 var b_x = v_i.get(0);
 var b_y = v_i.get(1);
 var c_x = (p_f.get(0)-p_i.get(0)-v_i.get(0) * to + (v_i.get(0)-v_f.get(0))*(to/3)/((to^2)/3));
 var d_x = (v_f.get(0)-v_i.get(0)-2*c_x*to)/(3*(to^2));
 var c_y = (p_f.get(1)-p_i.get(1)-v_i.get(1)*to+(v_i.get(1)-v_f.get(1))*(to/3)/((to^2)/3));
 var d_y = (v_f.get(1)-v_i.get(1)-2*c_y*to)/(3*(to^2));

for(k=0; k<(n-1); k++){
    var t=k*dt;
    var tp=t;
    //calculo de la posición cartesiana
    x=a_x+b_x*t+c_x*(t^2)+d_x*(t^3);
    y=a_y+b_y*t+c_y*(t^2)+d_y*(t^3);
    

    //calculo de cinemática inversa
    var r=Math.sqrt((x^2)+(y^2));
    var D=(((r^2)-(a2^2)-(a3^2))/(2*a2*a3))
    var A=(((r^2)+(a2^2)-(a3^2))/(2*a2*r))
    var S=Math.sqrt(1-(D^2));
    var Th1 = Math.atan2(S,D);
    var Th0 = Math.atan2(y,x)-Math.atan2((sqrt(1-A^2)),A);
    var d2 = d2 + ((p_f.get(2)-p_i.get(2))/n);
    var d1 = (0.25 - d2);
    servo.to(Th0,dt);
    servo.to(Th0,dt);
  
    
 };

}); 