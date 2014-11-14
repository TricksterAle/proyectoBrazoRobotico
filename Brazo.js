var v = require('vektor').vector;
var m = require('vektor').matrix;
var five = require("Johnny-five"),
	board = new five.Board();
 
	board.on ("ready", function() {
		var servo1 = new five.Servo(10);
		var servo2 = new five.Servo(11);

		this.repl.inject({
			servo:servo1
		});
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
};
 
 var p = new m(2,10)
 p.set(0,0,0.11);
 p.set(0,1,0.06);
 p.set(0,2,0.04);
 p.set(0,3,0);
 p.set(0,4,-0.04);
 p.set(0,5,-0.06);
 p.set(0,6,-0.11);
 p.set(0,7,-0.05);
 p.set(0,8,0.05);
 p.set(0,9,0.11);
 p.set(1,0,0.13);
 p.set(1,1,0.18);
 p.set(1,2,0.215);
 p.set(1,3,0.24);
 p.set(1,4,0.215);
 p.set(1,5,0.18);
 p.set(1,6,0.13);
 p.set(1,7,0.13);
 p.set(1,8,0.13);
 p.set(1,9,0.13);

 var v = new m(2,10)
 v.set(0,0,0);
 v.set(0,1,0);
 v.set(0,2,0);
 v.set(0,3,0);
 v.set(0,4,0);
 v.set(0,5,0);
 v.set(0,6,0);
 v.set(0,7,0);
 v.set(0,8,0);
 v.set(0,9,0);
 v.set(1,0,0);
 v.set(1,1,0);
 v.set(1,2,0);
 v.set(1,3,0);
 v.set(1,4,0);
 v.set(1,5,0);
 v.set(1,6,0);
 v.set(1,7,0);
 v.set(1,8,0);
 v.set(1,9,0);





 var n=20;
 var to=10;
 var dt=to/(n);
 var a2 = 0.11;
 var a3 = 0.13;

for(a=0; a<9;a++){



 var p_i = new m(3,1);
 p_i.set(0,0, p.get(0,a));
 p_i.set(1,0, p.get(1,a));
 p_i.set(2,0, 0.13);
 console.log(p_i)

 var p_f = new m(3,1);
 p_f.set(0,0, p.get(0,(a+1)));
 p_f.set(1,0, p.get(1,(a+1)));
 p_f.set(2,0, 0.2);
 
 console.log(p_f)

 var d2 = p_i.get(2,0);
 
 var v_i= new m(3, 1);
 v_i.set(0,0,0);
 v_i.set(1,0,0);
 v_i.set(2,0,0);
 
 var v_f = new m(3, 1);
 v_f.set(0,0,0);
 v_f.set(1,0,0);
 v_f.set(2,0,0);
 
 var a_x = p_i.get(0,0);
 var a_y = p_i.get(1,0);
 var b_x = v_i.get(0,0);
 var b_y = v_i.get(1,0);
 var c_x = (p_f.get(0,0)-p_i.get(0,0)-v_i.get(0,0)*to + (v_i.get(0,0)-v_f.get(0,0))*(to/3))/((Math.pow(to,2)/3));
 var d_x = (v_f.get(0,0)-v_i.get(0,0)-2*c_x*to)/(3*(Math.pow(to,2)));
 var c_y = (p_f.get(1,0)-p_i.get(1,0)-v_i.get(1,0)*to+(v_i.get(1,0)-v_f.get(1,0))*(to/3))/((Math.pow(to,2))/3);
 var d_y = (v_f.get(1,0)-v_i.get(1,0)-2*c_y*to)/(3*(Math.pow(to,2)));
 console.log('+++++++++++++++')
 console.log(c_y)

 console.log('+++++++++++++++')
for(k=0; k<=n; k++){
    var t=k*dt;
  
    //calculo de la posición cartesiana
    var x=a_x+(b_x*t)+(c_x*(Math.pow(t,2)))+(d_x*(Math.pow(t,3)));
    var y=a_y+(b_y*t)+(c_y*(Math.pow(t,2)))+(d_y*(Math.pow(t,3)));
    
    //cinemática inversa
    var r=Math.sqrt(Math.pow(x.toFixed(4),2)+Math.pow(y.toFixed(4),2));
    var D=(((Math.pow(r.toFixed(4),2))-(Math.pow(a2,2))-(Math.pow(a3,2)))/(2*a2*a3))
    var A=(((Math.pow(r.toFixed(4),2))+(Math.pow(a2,2))-(Math.pow(a3,2)))/(2*a2*r.toFixed(4)))
    var S=Math.sqrt(1-(Math.pow(D.toFixed(4),2)));
    var Th1 = Math.atan2(S.toFixed(4),D.toFixed(4));
    var Th0 = Math.atan2(y.toFixed(4),x.toFixed(4))-Math.atan2((Math.sqrt(1-Math.pow(A.toFixed(4),2))),A.toFixed(4));
    var d2 = d2 + ((p_f.get(2,0)-p_i.get(2,0))/n);
    var d1 = (0.25 - d2);
    
    this.wait(dt, function() {
    servo1.to(((Th0.toFixed(4)*180)/Math.PI),dt);
    servo2.to(((Th1.toFixed*180)/Math.PI),dt);
    console.log(t)
    console.log(x)
    console.log(Th0)

  	console.log((Th0.toFixed(4)*180)/Math.PI)
  	console.log(Th1)
    
  	console.log((Th1.toFixed(4)*180)/Math.PI)
  	console.log("-------------------------"); 

  });
	
	
  	
 };
};


}); 
