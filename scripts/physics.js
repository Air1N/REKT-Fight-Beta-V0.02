	// Gravity //
	var gravity = 0.1;
	
	function Gravity() {
		if (player1.Y + player1.H > display.height/sizeOffset - (20*sizeOffset)) player1.Y = (display.height/sizeOffset - (20*sizeOffset) -  player1.H);
		if (player2.Y + player2.H > display.height/sizeOffset - (20*sizeOffset)) player2.Y = (display.height/sizeOffset - (20*sizeOffset) -  player2.H);
		fallSpeed1 += gravity;
		fallSpeed2 += gravity;
		if (player1.Y*sizeOffset + player1.H*sizeOffset < display.height - (20*sizeOffset)) {
			player1.Y += fallSpeed1;
			onGround1 = false;
		} else {
			onGround1 = true;
		}
		if (onGround1) {
			fallSpeed1 = 0;
			Jumping1 = false;
		}
		if (player2.Y*sizeOffset + player2.H*sizeOffset < display.height - (20*sizeOffset)) {
			player2.Y += fallSpeed2;
			onGround2 = false;
		} else {
			onGround2 = true;
		}
		if (onGround2) {
			fallSpeed2 = 0;
			Jumping2 = false;
		}
	}
	