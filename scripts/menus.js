	// Buttons //
	var Buttons = [];
	var HatRight1 = new Button("images/ButtonRight.png",725,250,150,100)
	var WeaponRight1 = new Button("images/ButtonRight.png",725,450,150,100)
	var ClothesRight1 = new Button("images/ButtonRight.png",725,650,150,100)
	var HatLeft1 = new Button("images/ButtonLeft.png",25,250,150,100)
	var WeaponLeft1 = new Button("images/ButtonLeft.png",25,450,150,100)
	var ClothesLeft1 = new Button("images/ButtonLeft.png",25,650,150,100)
	
	var HatRight2 = new Button("images/ButtonRight.png",1745,250,150,100)
	var WeaponRight2 = new Button("images/ButtonRight.png",1745,450,150,100)
	var ClothesRight2 = new Button("images/ButtonRight.png",1745,650,150,100)
	var HatLeft2 = new Button("images/ButtonLeft.png",1045,250,150,100)
	var WeaponLeft2 = new Button("images/ButtonLeft.png",1045,450,150,100)
	var ClothesLeft2 = new Button("images/ButtonLeft.png",1045,650,150,100)
	
	var PlayButton = new Button("images/PlayButton.png",20,450,250,63)
	var StartButton = new Button("images/Go.png",0,775,200,150)
	var ControlsButton = new Button("images/ControlsButton.png",20,550,250,63)
	var ColorSlider1 = new Button("images/color_picker.jpg",275,775,350,100)
	var ColorSlider2 = new Button("images/color_picker_flip.jpg",1920-625,775,350,100)
	var Left1 = new Button("", 550, 410, 50, 50)
	var Left2 = new Button("", 1920-200, 410, 50, 50)
	var Right1 = new Button("", 550, 510, 50, 50)
	var Right2 = new Button("", 1920-200, 510, 50, 50)
	var Up1 = new Button("", 550, 610, 50, 50)
	var Up2 = new Button("", 1920-200, 610, 50, 50)
	var Down1 = new Button("", 550, 710, 50, 50)
	var Down2 = new Button("", 1920-200, 710, 50, 50)
	var Attack1 = new Button("", 550, 810, 50, 50)
	var Attack2 = new Button("", 1920-200, 810, 50, 50)
	var CharacterSelect = new Image();
	var ButtonOverlay = new Image();
	var MainMenu = new Image();
	var ControlsMenu = new Image();
	ColorSlider1.isOverlayed = false;
	ColorSlider2.isOverlayed = false;
	ButtonOverlay.src = "images/ButtonOverlay.png"
	CharacterSelect.src = "images/CharacterSelect.jpg"
	MainMenu.src = "images/MainMenu.jpg"
	ControlsMenu.src = "images/ControlsMenu.jpg"
	
	// Disable Buttons //
	StartButton.isVisible = false;
	WeaponRight1.isVisible = false;
	WeaponLeft1.isVisible = false;
	WeaponRight2.isVisible = false;
	WeaponLeft2.isVisible = false;
	HatRight1.isVisible = false;
	HatLeft1.isVisible = false;
	HatRight2.isVisible = false;
	HatLeft2.isVisible = false;
	ClothesRight1.isVisible = false;
	ClothesLeft1.isVisible = false;
	ClothesRight2.isVisible = false;
	ClothesLeft2.isVisible = false;
	ColorSlider1.isVisible = false;
	ColorSlider2.isVisible = false;
	Left1.isVisible = false;
	Left2.isVisible = false;
	Right1.isVisible = false;
	Right2.isVisible = false;
	Up1.isVisible = false;
	Up2.isVisible = false;
	Down1.isVisible = false;
	Down2.isVisible = false;
	Attack1.isVisible = false;
	Attack2.isVisible = false;
	var WaitingForKey = [];
	// Main Menu //
	function mainMenu() {
		if (PlayButton.isPressed(clickX, clickY)) {
			Playing = true;
			clickX = 0;
			clickY = 0;
			PlayButton.isVisible = false;
			StartButton.isVisible = true;
			WeaponRight1.isVisible = true;
			WeaponLeft1.isVisible = true;
			WeaponRight2.isVisible = true;
			WeaponLeft2.isVisible = true;
			HatRight1.isVisible = true;
			HatLeft1.isVisible = true;
			HatRight2.isVisible = true;
			HatLeft2.isVisible = true;
			ClothesRight1.isVisible = true;
			ClothesLeft1.isVisible = true;
			ClothesRight2.isVisible = true;
			ClothesLeft2.isVisible = true;
			ColorSlider1.isVisible = true;
			ColorSlider2.isVisible = true;
			Left1.isVisible = false;
			Left2.isVisible = false;
			Right1.isVisible = false;
			Right2.isVisible = false;
			Up1.isVisible = false;
			Up2.isVisible = false;
			Down1.isVisible = false;
			Down2.isVisible = false;
			Attack1.isVisible = false;
			Attack2.isVisible = false;
			ControlsButton.isVisible = false;
		}
		
		if (ControlsButton.isPressed(clickX, clickY)) {
			ControlsOpen = true;
			ControlsButton.isVisible = false;
			PlayButton.isVisible = false;
			Left1.isVisible = true;
			Left2.isVisible = true;
			Right1.isVisible = true;
			Right2.isVisible = true;
			Up1.isVisible = true;
			Up2.isVisible = true;
			Down1.isVisible = true;
			Down2.isVisible = true;
			Attack1.isVisible = true;
			Attack2.isVisible = true;
			clickX = 0;
			clickY = 0;
		}
	}
	
	
	function ControlsMenuF() {
		if(Left1.isPressed(clickX, clickY)) {
			clickX = 0;
			clickY = 0;
			
			// Player 1 Controls //
			WaitingForKey[0] = true;
			WaitingForKey[1] = false;
			WaitingForKey[2] = false;
			WaitingForKey[3] = false;
			WaitingForKey[4] = false;
			
			// Player 2 Controls //
			WaitingForKey[5] = false;
			WaitingForKey[6] = false;
			WaitingForKey[7] = false;
			WaitingForKey[8] = false;
			WaitingForKey[9] = false;
		}
		if(Right1.isPressed(clickX, clickY)) {
			clickX = 0;
			clickY = 0;
			// Player 1 Controls //
			WaitingForKey[0] = false;
			WaitingForKey[1] = true;
			WaitingForKey[2] = false;
			WaitingForKey[3] = false;
			WaitingForKey[4] = false;
			
			// Player 2 Controls //
			WaitingForKey[5] = false;
			WaitingForKey[6] = false;
			WaitingForKey[7] = false;
			WaitingForKey[8] = false;
			WaitingForKey[9] = false;
		}
		if(Up1.isPressed(clickX, clickY)) {
			clickX = 0;
			clickY = 0;
			// Player 1 Controls //
			WaitingForKey[0] = false;
			WaitingForKey[1] = false;
			WaitingForKey[2] = true;
			WaitingForKey[3] = false;
			WaitingForKey[4] = false;
			
			// Player 2 Controls //
			WaitingForKey[5] = false;
			WaitingForKey[6] = false;
			WaitingForKey[7] = false;
			WaitingForKey[8] = false;
			WaitingForKey[9] = false;
		}
		if(Down1.isPressed(clickX, clickY)) {
			clickX = 0;
			clickY = 0;
			// Player 1 Controls //
			WaitingForKey[0] = false;
			WaitingForKey[1] = false;
			WaitingForKey[2] = false;
			WaitingForKey[3] = true;
			WaitingForKey[4] = false;
			
			// Player 2 Controls //
			WaitingForKey[5] = false;
			WaitingForKey[6] = false;
			WaitingForKey[7] = false;
			WaitingForKey[8] = false;
			WaitingForKey[9] = false;
		}
		if(Attack1.isPressed(clickX, clickY)) {
			clickX = 0;
			clickY = 0;
			// Player 1 Controls //
			WaitingForKey[0] = false;
			WaitingForKey[1] = false;
			WaitingForKey[2] = false;
			WaitingForKey[3] = false;
			WaitingForKey[4] = true;
			
			// Player 2 Controls //
			WaitingForKey[5] = false;
			WaitingForKey[6] = false;
			WaitingForKey[7] = false;
			WaitingForKey[8] = false;
			WaitingForKey[9] = false;
		}
		if(Left2.isPressed(clickX, clickY)) {
			clickX = 0;
			clickY = 0;
			
			// Player 1 Controls //
			WaitingForKey[0] = false;
			WaitingForKey[1] = false;
			WaitingForKey[2] = false;
			WaitingForKey[3] = false;
			WaitingForKey[4] = false;
			
			// Player 2 Controls //
			WaitingForKey[5] = true;
			WaitingForKey[6] = false;
			WaitingForKey[7] = false;
			WaitingForKey[8] = false;
			WaitingForKey[9] = false;
		}
		if(Right2.isPressed(clickX, clickY)) {
			clickX = 0;
			clickY = 0;
			// Player 1 Controls //
			WaitingForKey[0] = false;
			WaitingForKey[1] = false;
			WaitingForKey[2] = false;
			WaitingForKey[3] = false;
			WaitingForKey[4] = false;
			
			// Player 2 Controls //
			WaitingForKey[5] = false;
			WaitingForKey[6] = true;
			WaitingForKey[7] = false;
			WaitingForKey[8] = false;
			WaitingForKey[9] = false;
		}
		if(Up2.isPressed(clickX, clickY)) {
			clickX = 0;
			clickY = 0;
			// Player 1 Controls //
			WaitingForKey[0] = false;
			WaitingForKey[1] = false;
			WaitingForKey[2] = false;
			WaitingForKey[3] = false;
			WaitingForKey[4] = false;
			
			// Player 2 Controls //
			WaitingForKey[5] = false;
			WaitingForKey[6] = false;
			WaitingForKey[7] = true;
			WaitingForKey[8] = false;
			WaitingForKey[9] = false;
		}
		if(Down2.isPressed(clickX, clickY)) {
			clickX = 0;
			clickY = 0;
			// Player 1 Controls //
			WaitingForKey[0] = false;
			WaitingForKey[1] = false;
			WaitingForKey[2] = false;
			WaitingForKey[3] = false;
			WaitingForKey[4] = false;
			
			// Player 2 Controls //
			WaitingForKey[5] = false;
			WaitingForKey[6] = false;
			WaitingForKey[7] = false;
			WaitingForKey[8] = true;
			WaitingForKey[9] = false;
		}
		if(Attack2.isPressed(clickX, clickY)) {
			clickX = 0;
			clickY = 0;
			// Player 1 Controls //
			WaitingForKey[0] = false;
			WaitingForKey[1] = false;
			WaitingForKey[2] = false;
			WaitingForKey[3] = false;
			WaitingForKey[4] = false;
			
			// Player 2 Controls //
			WaitingForKey[5] = false;
			WaitingForKey[6] = false;
			WaitingForKey[7] = false;
			WaitingForKey[8] = false;
			WaitingForKey[9] = true;
		}
	}
	
	
	// Selection Menu //
	function Selection() {
		if (StartButton.isPressed(clickX, clickY)) {
			MatchBegan = true;
			
			player1.W = 352/3
			player1.H = 831/3
			player2.W = 352/3
			player2.H = 831/3
			player1.X = 20*sizeOffset
			player1.Y = (display.height-(871/3*sizeOffset)-15*sizeOffset)/sizeOffset;
			player2.X = (display.width-(352/3*sizeOffset)-20*sizeOffset)/sizeOffset;
			player2.Y = (display.height-(871/3*sizeOffset)-15*sizeOffset)/sizeOffset;
			Hat1Sprite.W = Hat1Sprite.W/3*1.5
			Hat1Sprite.H = Hat1Sprite.H/3*1.5
			Hat2Sprite.W = Hat2Sprite.W/3*1.5
			Hat2Sprite.H = Hat2Sprite.H/3*1.5
			clickX = 0;
			clickY = 0;
			StartButton.isVisible = false;
			WeaponRight1.isVisible = false;
			WeaponLeft1.isVisible = false;
			WeaponRight2.isVisible = false;
			WeaponLeft2.isVisible = false;
			HatRight1.isVisible = false;
			HatLeft1.isVisible = false;
			HatRight2.isVisible = false;
			HatLeft2.isVisible = false;
			ClothesRight1.isVisible = false;
			ClothesLeft1.isVisible = false;
			ClothesRight2.isVisible = false;
			ClothesLeft2.isVisible = false;
			ColorSlider1.isVisible = false;
			ColorSlider2.isVisible = false;
		}
		if (WeaponRight1.isPressed(clickX, clickY)) {
			WeaponCycle1++;
			if (WeaponCycle1 >= Weapons.length) WeaponCycle1 = 0;
			Weapon1 = Weapons[WeaponCycle1];
			clickX = 0;
			clickY = 0;
		}
		if (WeaponLeft1.isPressed(clickX, clickY)) {
			WeaponCycle1--;
			if (WeaponCycle1 < 0) WeaponCycle1 = Weapons.length - 1;
			Weapon1 = Weapons[WeaponCycle1];
			clickX = 0;
			clickY = 0;
		}
		if (WeaponRight2.isPressed(clickX, clickY)) {
			WeaponCycle2++;
			if (WeaponCycle2 >= Weapons.length) WeaponCycle2 = 0;
			Weapon2 = Weapons[WeaponCycle2];
			clickX = 0;
			clickY = 0;
		}
		if (WeaponLeft2.isPressed(clickX, clickY)) {
			WeaponCycle2--;
			if (WeaponCycle2 < 0) WeaponCycle2 = Weapons.length - 1;
			Weapon2 = Weapons[WeaponCycle2];
			clickX = 0;
			clickY = 0;
		}
		if (HatRight1.isPressed(clickX, clickY)) {
			HatCycle1++;
			if (HatCycle1 >= Hats.length) HatCycle1 = 0;
			Hat1 = Hats[HatCycle1];
			clickX = 0;
			clickY = 0;
		}
		if (HatLeft1.isPressed(clickX, clickY)) {
			HatCycle1--;
			if (HatCycle1 < 0) HatCycle1 = Hats.length - 1;
			Hat1 = Hats[HatCycle1];
			clickX = 0;
			clickY = 0;
		}
		if (HatRight2.isPressed(clickX, clickY)) {
			HatCycle2++;
			if (HatCycle2 >= Hats.length) HatCycle2 = 0;
			Hat2 = Hats[HatCycle2];
			clickX = 0;
			clickY = 0;
		}
		if (HatLeft2.isPressed(clickX, clickY)) {
			HatCycle2--;
			if (HatCycle2 < 0) HatCycle2 = Hats.length - 1;
			Hat2 = Hats[HatCycle2];
			clickX = 0;
			clickY = 0;
		}
		if (ClothesRight1.isPressed(clickX, clickY)) {
			ClothesCycle1++;
			if (ClothesCycle1 >= Clothes.length) ClothesCycle1 = 0;
			Clothes1 = Clothes[ClothesCycle1];
			clickX = 0;
			clickY = 0;
		}
		if (ClothesLeft1.isPressed(clickX, clickY)) {
			ClothesCycle1--;
			if (ClothesCycle1 < 0) ClothesCycle1 = Clothes.length - 1;
			Clothes1 = Clothes[ClothesCycle1];
			clickX = 0;
			clickY = 0;
		}
		if (ClothesRight2.isPressed(clickX, clickY)) {
			ClothesCycle2++;
			if (ClothesCycle2 >= Clothes.length) ClothesCycle2 = 0;
			Clothes2 = Clothes[ClothesCycle2];
			clickX = 0;
			clickY = 0;
		}
		if (ClothesLeft2.isPressed(clickX, clickY)) {
			ClothesCycle2--;
			if (ClothesCycle2 < 0) ClothesCycle2 = Clothes.length - 1;
			Clothes2 = Clothes[ClothesCycle2];
			clickX = 0;
			clickY = 0;
			
		}
	}
	
	// Color Selection //
	function ColorSlider() {
		if (!MatchBegan) {
			if (ColorSlider1.isPressed(moveX, moveY) && mousePressed) {
				Color1 = "rgb(" + ctx.getImageData(moveX,moveY,1,1).data[0] + "," + ctx.getImageData(moveX,moveY,1,1).data[1] + "," + ctx.getImageData(moveX,moveY,1,1).data[2] + ")";
			}
		}
		if (!MatchBegan) {
			if (ColorSlider2.isPressed(moveX, moveY) && mousePressed) {
				Color2 = "rgb(" + ctx.getImageData(moveX,moveY,1,1).data[0] + "," + ctx.getImageData(moveX,moveY,1,1).data[1] + "," + ctx.getImageData(moveX,moveY,1,1).data[2] + ")";
			}
		}
	}