var five = require("Johnny-five"),
	board = new five.Board();
 
	board.on ("ready", function() {
	var servo1 = new five.Servo(10)
	var servo2 = new five.Servo(11)
	
	

	servo1.to(0)

	servo2.to(0);
	

	this.repl.inject({
		servo1:servo1


	});




});