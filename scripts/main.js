	// Variables //
	// Animation //
	var Sprites = 0;
	var SpriteArray = [];
	var isA = false;
	var isLeft = false;
	
	// Backgrounds //
	var Background = new Image();
	var BackgroundPick = Math.random();
	
	// Timer //
	var time = 6000;
	
	// Winning //
	var winner = "";
	var MatchOver = false;
	var Dead1 = false;
	var Dead2 = false;
	
	// Sprite Format //
	// Image, X, Y, W, H, FPS, frames, frameW, frameH //
	var player1 = new Sprite("images/base.png", 20, window.innerHeight-871/3-30, 352/3, 871/3, 8, 4, 352, 871, 0);
	var player2 = new Sprite("images/base.png", window.innerWidth-352/3-20, window.innerHeight-871/3-30, 352/3, 871/3, 8, 4, 352, 871, 3);
	var minion1 = new Sprite("images/base.png", 20, window.innerHeight-871/3-30, 352/2, 871/2, 8, 4, 352, 871, 0);
	var minion2 = new Sprite("images/base.png", window.innerWidth-352/3-20, window.innerHeight-871/3-30, player2.W/3, player2.H/3, 8, 4, 352, 871, 3);
	var TimerBg = new Sprite("images/timerbg.png", 500, 500, 250, 100);
	var Hat1Sprite = new Sprite("images/wizard.png", 20, 20, 340/1.5, 220/1.5);
	var Hat2Sprite = new Sprite("images/wizard.png", 20, 20, 340/1.5, 220/1.5);
	
	// Selection //
	var Weapons = ["bow", "sword", "hammer"];
	var Hats = ["none", "miner", "warrior", "wizard"];
	var Clothes = ["none", "shirt", "underwear", "pants"];
	var WeaponCycle1 = 0;
	var WeaponCycle2 = 0;
	var HatCycle1 = 0;
	var HatCycle2 = 0;
	var ClothesCycle1 = 0;
	var ClothesCycle2 = 0;
	var Colors = ["rgb(0, 0, 0)", "rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(0, 255, 255)", "rgb(255, 0, 255)", "rgb(255, 255, 255)"]
	var Weapon1 = "bow"
	var Weapon2 = "bow"
	var Hat1 = "none"
	var Hat2 = "none"
	var Clothes1 = "none"
	var Clothes2 = "none"
	var Color1 = "rgb(0, 0, 0)"
	var Color2 = "rgb(0, 0, 0)"
	
	// Minions //
	var MinionTimeout1 = 0;
	var MinionTimeout2 = 0;
	
	// Minion Gravity //
	var minionfallSpeed1 = 0;
	var minionfallSpeed2 = 0;
	var minionOnGround1 = false;
	var minionOnGround2 = false;
	var minionJumping1 = false;
	var minionJumping2 = false;
	var minionSlide1 = 0;
	var minionSlide2 = 0;
	
	// Main //
	function Main() {
		if (BackgroundPick >= 0.5 && BackgroundPick < 1) {
			Background.src = "images/bg1.jpg"
		}
		if (BackgroundPick < 0.5 && BackgroundPick > 0) {
			Background.src = "images/bg2.jpg"
		}
		if (window.innerHeight/963 < window.innerWidth/1920) {
			sizeOffset = window.innerHeight/963;
		} else {
			sizeOffset = window.innerWidth/1920;
		}
		if (!MatchBegan) PreMatch();
		if (MatchBegan) Timer();
		if (MatchBegan) Combos();
		if (MatchBegan) Gravity();
		if (MatchBegan) Movement();
		if (MatchBegan) Attack();
		if (MatchBegan) Projectiles();
		if (!MatchBegan && !Playing && !CreditsOpen && !ControlsOpen) mainMenu();
		if (!MatchBegan && Playing) Selection();
		if (ControlsOpen) ControlsMenuF();
		Player1();
		Player2();
		HatSetup();
		ColorSlider();
		if (minion1.X > -100) Minion1();
		if (minion2.X > -100) Minion2();
    }
	
	function Minion1() {
		if (MinionTimeout1 < 500) minion1.X = -10000;
	}
	
	function Minion2() {
		if (MinionTimeout2 < 500) minion2.X = -10000;
	}
	
	function HatSetup() {
		Hat1Sprite.X = player1.X + (Hat1Sprite.W/7.5*DirMod1)
		Hat1Sprite.Y = player1.Y - (Hat1Sprite.H/1.3)
		
		if (Hat1 == "warrior") Hat1Sprite.Y += Hat1Sprite.H/2
		
		if (Dir1 == "Left") {
			Hat1Sprite.Sprite.src = "images/" + Hat1 + "_hat_left.png"
		}
		if (Dir1 == "Right") {
			Hat1Sprite.Sprite.src = "images/" + Hat1 + "_hat_right.png"
		}
		
		Hat2Sprite.X = player2.X + (Hat2Sprite.W/7*DirMod2)
		Hat2Sprite.Y = player2.Y - (Hat2Sprite.H/1.3)
		
		if (Hat2 == "warrior") Hat2Sprite.Y += Hat2Sprite.H/2
		
		if (Dir2 == "Left") {
			Hat2Sprite.Sprite.src = "images/" + Hat2 + "_hat_left.png"
		}
		if (Dir2 == "Right") {
			Hat2Sprite.Sprite.src = "images/" + Hat2 + "_hat_right.png"
		}
		
		if (Dead1 && Dir1 == "Right") Hat1Sprite.X -= 250
		if (Dead1) Hat1Sprite.Y += 80
		if (Dead1 && Dir1 == "Left") Hat1Sprite.X += 250 + player1.W
		if (Dead2 && Dir2 == "Right") Hat2Sprite.X -= 250
		if (Dead2) Hat2Sprite.Y += 80
		if (Dead2 && Dir2 == "Left") Hat2Sprite.X += 250 + player2.W
	}
	
	
	function PreMatch() {
		player1.Y = 80+100;
		player1.W = 352/1.5;
		player1.H = 831/1.5;
		player1.X = 175+500/2-player1.W/2;
		player2.Y = 80+100;
		player2.W = 352/1.5;
		player2.H = 831/1.5;
		player2.X = 1920-175-player2.W-500/2+player2.W/2;
		StartButton.X = (display.width/2)/sizeOffset-(StartButton.W/2)
		minion1.X = -10000;
		minion2.X = -10000;
		minion1.W = 352/6;
		minion1.W = 831/6;
		minion2.W = 352/6;
		minion2.W = 831/6;
	}
	
	
	function Timer() {
		if (time > 0 && !MatchOver) time--;
		if (time == 0) {
			if (Stats1[4] > Stats2[4]) {
				winner = "PLAYER 1 WINS";
				Dead2 = true;
				MatchOver = true;
				if (Stats2[4] >= 0) Stats2[4] -= 0.85;
			} else if (Stats2[4] > Stats1[4]) {
				winner = "PLAYER 2 WINS";
				Dead1 = true;
				MatchOver = true;
				if (Stats1[4] >= 0) Stats1[4] -= 0.85;
			} else if (Stats1[4] == Stats2[4]) {
				winner = "DRAW";
				MatchOver = true;
			}
		}
	}
	
	function Player1Setup() {
		// Jump //
		Stats1[0] = 15;
		// Speed //
		Stats1[1] = 4;
		// Base Attack //
		Stats1[2] = 0.5;
		// Max HP //
		Stats1[3] = 100;
		// HP //
		Stats1[4] = 100;
	}
	
	function Player2Setup() {
		// Jump //
		Stats2[0] = 15;
		// Speed //
		Stats2[1] = 4;
		// Base Attack //
		Stats2[2] = 0.5;
		// Max HP //
		Stats2[3] = 100;
		// HP //
		Stats2[4] = 100;
	}
	
	// Player 1 //
    function Player1() {
		if (Hat1 == "wizard") {
			Stats1[1] = 6;
			Stats1[2] = 0.5;
			if (!MatchBegan) {
				Stats1[3] = 100;
				Stats1[4] = 100;
			}
		}
		if (!MatchBegan && Hat1 == "warrior") {
			Stats1[1] = 4;
			Stats1[2] = 0.5;
			if (!MatchBegan) {
				Stats1[3] = 150;
				Stats1[4] = 150;
			}
		}
		if (Hat1 == "miner") {
			Stats1[1] = 4;
			Stats1[2] = 0.6;
			if (!MatchBegan) {
				Stats1[3] = 100;
				Stats1[4] = 100;
			}
		}
		if (Dir1 == "Left") DirMod1 = -1;
		if (Dir1 == "Right") DirMod1 = 1;
		player1.X += knockbackX1;
		player1.Y += knockbackY1;
		if (knockbackX1 > 0) knockbackX1 -= 0.1;
		if (knockbackY1 > 0) knockbackY1 -= 0.5;
		if (knockbackX1 < 0) knockbackX1 += 0.1;
		if (knockbackY1 < 0) knockbackY1 += 0.5;
		
		if (knockbackX1 < 0.1 && knockbackX1 > -0.1) knockbackX1 = 0;
		if (knockbackY1 < 0.1 && knockbackY1 > -0.1) knockbackY1 = 0;
		
		if (Dead1 && Dir1 == "Left") {
			player1.Sprite.src = "images/base_dead.png"
			player1.W = 871/3;
			player1.H = 352/3;
			player1.fW = 871;
			player1.fH = 352;
			player1.frame = 1;
		}
		if (Dead1 && Dir1 == "Right") {
			player1.Sprite.src = "images/base_dead.png"
			player1.W = 871/3;
			player1.H = 352/3;
			player1.fW = 871;
			player1.fH = 352;
			player1.frame = 0;
		}
		if (Stats1[4] == 0) {
			winner = "PLAYER 2 WINS"
			Dead1 = true;
			MatchOver = true;
		}
		if (Dead1) {
			W = false;
			S = false;
			A = false;
			D = false;
		}
    }
	
	// Player 2 //
	function Player2() {
			if (Hat2 == "wizard") {
			Stats2[1] = 6;
			Stats2[2] = 0.5;
			if (!MatchBegan) {
				Stats2[3] = 100;
				Stats2[4] = 100;
			}
		}
		if (!MatchBegan && Hat2 == "warrior") {
			Stats2[1] = 4;
			Stats2[2] = 0.5;
			if (!MatchBegan) {
				Stats2[3] = 150;
				Stats2[4] = 150;
			}
		}
		if (Hat2 == "miner") {
			Stats2[1] = 4;
			Stats2[2] = 0.6;
			if (!MatchBegan) {
				Stats2[3] = 100;
				Stats2[4] = 100;
			}
		}
		if (Dir2 == "Left") DirMod2 = -1;
		if (Dir2 == "Right") DirMod2 = 1;
		player2.X += knockbackX2;
		player2.Y += knockbackY2;
		if (knockbackX2 > 0) knockbackX2 -= 0.1;
		if (knockbackY2 > 0) knockbackY2 -= 0.5;
		if (knockbackX2 < 0) knockbackX2 += 0.1;
		if (knockbackY2 < 0) knockbackY2 += 0.5;
		if (knockbackX2 < 0.1 && knockbackX2 > -0.1) knockbackX2 = 0;
		if (knockbackY2 < 0.1 && knockbackY2 > -0.1) knockbackY2 = 0;
		
		if (Dead2 && Dir2 == "Left") {
			player2.Sprite.src = "images/base_dead.png"
			player2.W = 871/3;
			player2.H = 352/3;
			player2.fW = 871;
			player2.fH = 352;
			player2.frame = 1;
		}
		if (Dead2 && Dir2 == "Right") {
			player2.Sprite.src = "images/base_dead.png"
			player2.W = 871/3;
			player2.H = 352/3;
			player2.fW = 871;
			player2.fH = 352;
			player2.frame = 0;
		}
		if (Stats2[4] == 0) {
			winner = "PLAYER 1 WINS"
			Dead2 = true
			MatchOver = true;
		}
		if (Dead2) {
			Up = false;
			Down = false;
			Left = false;
			Right = false;
		}
    }
		

	
	function Movement() {
		player1.X += Slide1/20;
		player2.X += Slide2/20;
		if (!A && !D) player1.X += Slide1/80;
		if (!Left && !Right) player2.X += Slide2/80;
		if (Slide1 < 0 && !A) Slide1 += 1.5;
		if (Slide1 > 0 && !D) Slide1 -= 1.5;
		if (Slide1 < 0 && Q) Slide1 += 1.5;
		if (Slide1 > 0 && Q) Slide1 -= 1.5;
		if (Slide1 <= 2 && Slide1 >= -2 &&!A && !D) Slide1 = 0;
		if (Slide2 < 0 && !Left) Slide2 += 1.5;
		if (Slide2 > 0 && !Right) Slide2 -= 1.5;
		if (Slide2 < 0 && Shift) Slide2 += 1.5;
		if (Slide2 > 0 && Shift) Slide2 -= 1.5;
		if (Slide2 <= 2 && Slide2 >= -2 && !Left && !Right) Slide2 = 0;
		if (!Q) {
		if (W && onGround1) {
			Jumping1 = true;
		}
		if (Jumping1) {
			player1.Y -= Stats1[0] - fallSpeed1;
		}
		
		if (D) {
			player1.X += Stats1[1];
			Slide1 += 1;
		}
		if (A) {
			player1.X -= Stats1[1];
			Slide1 -= 1;
		}
		}
		
		if (!Shift) {
		if (Up && onGround2) {
			Jumping2 = true;
		}
		if (Jumping2) {
			player2.Y -= Stats2[0] - fallSpeed2;
		}
		
		if (Right) {
			player2.X += Stats2[1];
			Slide2 += 1;
		}
		if (Left) {
			player2.X -= Stats2[1];
			Slide2 -= 1;
		}
		}
		
		if (player1.X*sizeOffset + player1.W*sizeOffset >= display.width) {
			player1.X -= Slide1/20 + Stats1[1] + knockbackX1;
			Slide1 = 0;
		}
		if (player1.X*sizeOffset <= 0) {
			player1.X -= Slide1/20 - Stats1[1] + knockbackX1;
			Slide1 = 0;
		}
		if (player2.X*sizeOffset + player2.W*sizeOffset >= display.width) {
			player2.X -= Slide2/20 + Stats1[1] + knockbackX2;
			Slide2 = 0;
		}
		if (player2.X*sizeOffset <= 0) {
			player2.X -= Slide2/20 - Stats1[1] + knockbackX2;
			Slide2 = 0;
		}
	}
	
	function Attack() {
		if (PunchTime1 >= 5) {
			PunchReady1 = true;
		}
		if (!PunchReady1) PunchTime1++
		if (PunchReady1) PunchTime1 = 0;
		
		if (PunchTime2 >= 5) {
			PunchReady2 = true;
		}
		if (!PunchReady2) PunchTime2++
		if (PunchReady2) PunchTime2 = 0;
		if (Stats2[4] <= 0.5) Stats2[4] = 0.0;
		if (!MatchOver) {
		if(player1.isColl(player2) && SpriteArray[0].frame == 8 || player1.isColl(player2) && SpriteArray[0].frame == 11) {
			Stats2[4] -= Stats1[2];
			knockbackX2 = 8*DirMod1;
			knockbackY2 = -5;
			PunchTime2 = -20;
			PunchReady2 = false;
			if (Dir2 == "Left") SpriteArray[1].frame = 3;
			if (Dir2 == "Right") SpriteArray[1].frame = 0;
		}
		if (Stats1[4] <= 0.5) Stats1[4] = 0.0;
		if(player2.isColl(player1) && SpriteArray[1].frame == 8 || player2.isColl(player1) && SpriteArray[1].frame == 11) {
			Stats1[4] -= Stats2[2];
			knockbackX1 = 8*DirMod2;
			knockbackY1 = -5;
			PunchTime1 = -20;
			PunchReady1 = false;
			if (Dir1 == "Left") SpriteArray[0].frame = 3;
			if (Dir1 == "Right") SpriteArray[0].frame = 0;
		}
		}
	}
	
	function Sprite0() {
		if (!Q) {
		if (A || D) {
			SpriteArray[0].frame++;
		}
		if (D) {
			SpriteArray[0].frames = 3;
			if(SpriteArray[0].frame >= SpriteArray[0].frames)
			SpriteArray[0].frame = 0;
		}
		
		if (!isA && A) {
			SpriteArray[0].frame = 3;
		}
		
		if (!A) {
			isA = false;
		}
		
		if (A) {
			isA = true;
			SpriteArray[0].frames = 6;
			if(SpriteArray[0].frame >= SpriteArray[0].frames)
			SpriteArray[0].frame = 3;
		}
		
		if (!Q && SpriteArray[0].frame >= 6) {
			if (Dir1 == "Left") SpriteArray[0].frame = 3;
			if (Dir1 == "Right") SpriteArray[0].frame = 0;
		}
		}
		if (!Dead1) {
		if (Q && PunchReady1) {
			if (SpriteArray[0].frame < 6) {
				if (Dir1 == "Right") {
					SpriteArray[0].frame = 6;
					SpriteArray[0].frames = 9;
				}
				if (Dir1 == "Left") {
					SpriteArray[0].frame = 9;
					SpriteArray[0].frames = 12;
				}
			}
			
			SpriteArray[0].frame++;
			if(SpriteArray[0].frame >= SpriteArray[0].frames && Dir1 == "Right") {
				SpriteArray[0].frame = 0;
				PunchReady1 = false;
			}
			if(SpriteArray[0].frame >= SpriteArray[0].frames && Dir1 == "Left") {
				SpriteArray[0].frame = 3;
				PunchReady1 = false;
			}
		}
		}
		setTimeout(Sprite0,1000/SpriteArray[0].FPS);
	}
	
	function Sprite1() {
		if (!Shift) {
		if (Left || Right) {
			SpriteArray[1].frame++;
		}
		if (Right) {
			SpriteArray[1].frames = 3;
			if(SpriteArray[1].frame >= SpriteArray[1].frames)
			SpriteArray[1].frame = 0;
		}
		
		if (!isLeft && Left) {
			SpriteArray[1].frame = 3;
		}
		
		if (!Left) {
			isLeft = false;
		}
		
		if (Left) {
			isLeft = true;
			SpriteArray[1].frames = 6;
			if(SpriteArray[1].frame >= SpriteArray[1].frames)
			SpriteArray[1].frame = 3;
		}
		
		if (!Shift && SpriteArray[1].frame >= 6) {
			if (Dir2 == "Left") SpriteArray[1].frame = 3;
			if (Dir2 == "Right") SpriteArray[1].frame = 0;
		}
		}
		if (!Dead2) {
		if (Shift && PunchReady2) {
			if (SpriteArray[1].frame < 6) {
				if (Dir2 == "Right") {
					SpriteArray[1].frame = 6;
					SpriteArray[1].frames = 9;
				}
				if (Dir2 == "Left") {
					SpriteArray[1].frame = 9;
					SpriteArray[1].frames = 12;
				}
			}
			
			SpriteArray[1].frame++;
			if(SpriteArray[1].frame >= SpriteArray[1].frames && Dir2 == "Right") {
				SpriteArray[1].frame = 0;
				PunchReady2 = false;
			}
			if(SpriteArray[1].frame >= SpriteArray[1].frames && Dir2 == "Left") {
				SpriteArray[1].frame = 3;
				PunchReady2 = false;
			}
		}
		}
		setTimeout(Sprite1,1000/SpriteArray[1].FPS);
	}
	
	function Combos() {
		MinionTimeout1--
		MinionTimeout2--
		ComboTimeout1--
		if (ComboTimeout1 <= 0) {
			ComboTimeout1 = 0;
			CanCombo1 = true;
		} else {
			CanCombo1 = false;
		}
		ComboTimeout2--
		if (ComboTimeout2 <= 0) {
			ComboTimeout2 = 0;
			CanCombo2 = true;
		} else {
			CanCombo2 = false;
		}
		if (WCount > 0 || ACount > 0 || SCount > 0 || DCount > 0) {
			ComboTimer1++;
		}
		if (UpCount > 0 || LftCount > 0 || DnCount > 0 || RtCount > 0) {
			ComboTimer2++;
		}
		
		if (ComboTimer1 > 50) {
			ComboTimer1 = 0;
			WCount = 0;
			ACount = 0;
			SCount = 0;
			DCount = 0;
			QCount = 0;
			Combo1 = [];
		}
		
		if (ComboTimer2 > 50) {
			ComboTimer2 = 0;
			UpCount = 0;
			LftCount = 0;
			DnCount = 0;
			RtCount = 0;
			ShftCount = 0;
			Combo2 = [];
		}
		
		// PLAYER 1 //
		// TP Smack //
		if (!Q) {
		if (Combo1.toString() == "S,W" && CanCombo1) {
			player1.Y = -500;
			player1.X = player2.X;
			fallSpeed1 = 20;
			Combo1 = [];
			PunchTime1 = -500;
			PunchReady1 = false;
			if (!MatchOver) Stats2[4] -= 15;
			ComboTimeout1 = 500;
		}
		
		// Sprint //
		if (Combo1.toString() == "D" && D) {
			Stats1[1] = 4;
			Stats1[1] = Stats1[1]*1.5;
			Slide1 += 2;
		}
		
		if (Combo1.toString() == "A" && A) {
			Stats1[1] = 4;
			Stats1[1] = Stats1[1]*1.5;
			Slide1 -= 2;
		}
		}
		if (Combo1.toString() == "S,S,D" && CanCombo1) {
			// Image, X, Y, W, H, FPS, frames, frameW, frameH //// Image, X, Y, W, H, FPS, frames, frameW, frameH //// Image, X, Y, W, H, FPS, frames, frameW, frameH //// Image, X, Y, W, H, FPS, frames, frameW, frameH //
			if (Weapon1 != "hammer" && Weapon1 != "none") Projectile1[Projectile1.length] = new Projectile("images/" + Weapon1 + "_shot_right.png", player1.X, player1.Y + player1.H/2 - 30, 100, 20, 12, 10);
			if (Weapon1 == "hammer") Projectile1[Projectile1.length] = new Projectile("images/" + Weapon1 + "_shot_right.png", player1.X, player1.Y + player1.H/2 - 30, 152, 60, 6, 10);
			Combo1 = [];
			ComboTimeout1 = 100;
		}
		if (Combo1.toString() == "S,S,A" && CanCombo1) {
			// Image, X, Y, W, H, FPS, frames, frameW, frameH //// Image, X, Y, W, H, FPS, frames, frameW, frameH //// Image, X, Y, W, H, FPS, frames, frameW, frameH //// Image, X, Y, W, H, FPS, frames, frameW, frameH //
			if (Weapon1 != "hammer" && Weapon1 != "none") Projectile1[Projectile1.length] = new Projectile("images/" + Weapon1 + "_shot_left.png", player1.X, player1.Y + player1.H/2 - 30, 100, 20, -12, 10);
			if (Weapon1 == "hammer") Projectile1[Projectile1.length] = new Projectile("images/" + Weapon1 + "_shot_left.png", player1.X, player1.Y + player1.H/2 - 30, 152, 60, -6, 10);
			Combo1 = [];
			ComboTimeout1 = 100;
		}
		if (Combo1.toString() == "A,S,S" && MinionTimeout1 < 0) {
			minion1.X = player1.X - player1.W;
			minion1.Y = player1.Y;
			minion1.W = player1.W/2;
			minion1.H = player1.H/2
			MinionTimeout1 = 1500;
		}
		
		// PLAYER 2 //
		if (!Shift) {
		if (Combo2.toString() == "Dn,Up" && CanCombo2) {
			player2.Y = -500;
			player2.X = player1.X;
			fallSpeed2 = 20;
			Combo2 = [];
			PunchTime2 = -500;
			PunchReady2 = false;
			if (!MatchOver) Stats1[4] -= 15;
			ComboTimeout2 = 500;
		}
		
		// Sprint //
		if (Combo2.toString() == "Lft" && Left) {
			Stats2[1] = 4;
			Stats2[1] = Stats2[1]*1.5;
			Slide2 -= 2;
		}
		
		if (Combo2.toString() == "Rt" && Right) {
			Stats2[1] = 4;
			Stats2[1] = Stats2[1]*1.5;
			Slide2 += 2;
		}
		}
		if (Combo2.toString() == "Dn,Dn,Rt" && CanCombo2) {
			// Image, X, Y, W, H, FPS, frames, frameW, frameH //// Image, X, Y, W, H, FPS, frames, frameW, frameH //// Image, X, Y, W, H, FPS, frames, frameW, frameH //// Image, X, Y, W, H, FPS, frames, frameW, frameH //
			if (Weapon2 != "hammer" && Weapon2 != "none") Projectile2[Projectile2.length] = new Projectile("images/" + Weapon2 + "_shot_right.png", player2.X, player2.Y + player2.H/2 - 30, 100, 20, 12, 10);
			if (Weapon2 == "hammer") Projectile2[Projectile2.length] = new Projectile("images/" + Weapon2 + "_shot_right.png", player2.X, player2.Y + player2.H/2 - 30, 152, 60, 6, 10);
			Combo2 = [];
			ComboTimeout2 = 100;
		}
		if (Combo2.toString() == "Dn,Dn,Lft" && CanCombo2) {
			// Image, X, Y, W, H, FPS, frames, frameW, frameH //// Image, X, Y, W, H, FPS, frames, frameW, frameH //// Image, X, Y, W, H, FPS, frames, frameW, frameH //// Image, X, Y, W, H, FPS, frames, frameW, frameH //
			if (Weapon2 != "hammer" && Weapon2 != "none") Projectile2[Projectile2.length] = new Projectile("images/" + Weapon2 + "_shot_left.png", player2.X, player2.Y + player2.H/2 - 30, 100, 20, -12, 10);
			if (Weapon2 == "hammer") Projectile2[Projectile2.length] = new Projectile("images/" + Weapon2 + "_shot_left.png", player2.X, player2.Y + player2.H/2 - 30, 152, 60, -6, 10);
			Combo2 = [];
			ComboTimeout2 = 100;
		}
	}
	
	function Setup() {
		// Size Offset //
		if (window.innerHeight/963 < window.innerWidth/1920) {
			sizeOffset = window.innerHeight/963;
		} else {
			sizeOffset = window.innerWidth/1920;
		}
		display.width = 1920*sizeOffset;
		display.height = 963*sizeOffset;
	}
	
	Sprite0();
	Sprite1();
	// Format for Animating //
	Setup();
	setInterval(Main, 1000/100);
	setInterval(Render, 1000/60);
	Player1Setup();
	Player2Setup();