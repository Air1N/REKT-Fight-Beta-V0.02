// Controls //
	// Keyboard //
	var A = false, B = false, C = false, D = false, E = false, F = false, G = false, H = false, I = false, J = false, K = false, L = false, M = false, N = false, O = false, P = false, Q = false, R = false, S = false, T = false, U = false, V = false, W = false, X = false, Y = false, Z = false, Up = false, Down = false, Left = false, Right = false, Shift = false;
	var keysDown = [];
	// Mouse //
	var clickX = 0, clickY = 0;
	var moveX = 0, moveY = 0;
	var downX = 0, downY = 0;
	var upX = 0, upY = 0;
	var mousePressed = false;
	
	var Left1Key = 65;
	var Left2Key = 37;
	var Right1Key = 68;
	var Right2Key = 39;
	var Up1Key = 87;
	var Up2Key = 38;
	var Down1Key = 83;
	var Down2Key = 40;
	var Attack1Key = 81;
	var Attack2Key = 16;
	
	var Left1KeyRender = "A";
	var Left2KeyRender = String.fromCharCode(parseInt('21E6', 16));
	var Right1KeyRender = "D";
	var Right2KeyRender = String.fromCharCode(parseInt('21E8', 16));
	var Up1KeyRender = "W";
	var Up2KeyRender = String.fromCharCode(parseInt('21E7', 16));;
	var Down1KeyRender = "S";
	var Down2KeyRender = String.fromCharCode(parseInt('21E9', 16));
	var Attack1KeyRender = "Q";
	var Attack2KeyRender = "Shift";
	
	var SpecialKeys = {16:"Shift",37:String.fromCharCode(parseInt('21E6', 16)),38:String.fromCharCode(parseInt('21E7', 16)), 39:String.fromCharCode(parseInt('21E8', 16)), 40:String.fromCharCode(parseInt('21E9', 16)), 192:"`", 189:"-", 187:"=", 32:"Space", 20:"CLock", 17:"Ctrl", 91:"Spcl", 18:"Alt", 93:"Spcl", 188:",", 190:".", 191:"/", 186:";", 222:"'", 219:"[", 221:"]", 220:"\\", 8:"BkSpc", 45:"Insrt", 36:"Home", 46:"Dlt", 35:"End", 33:"PgUp", 34:"PgDn", 97:"Num 1", 98:"Num 2", 99:"Num 3", 100:"Num 4", 101:"Num 5", 102:"Num 6", 103:"Num 7", 104:"Num 8", 105:"Num 9", 106:"Num *", 107:"Num +", 109:"Num -", 111:"Num /", 13:"Enter", 110:"Num .", 96:"Num 0", };
	
	function keyUp(e) {
	if (e.keyCode = 27 && ControlsOpen) {
		ControlsOpen = false;
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
		PlayButton.isVisible = true;
		ControlsButton.isVisible = true;
	}
	if (WaitingForKey[0]) {
		Left1Key = e.keyCode;
		WaitingForKey[0] = false;
		if (!SpecialKeys.hasOwnProperty(e.keyCode)) {
			Left1KeyRender = String.fromCharCode(Left1Key); 
		} else {
			Left1KeyRender = SpecialKeys[(e.keyCode.toString())];
		}
	}
	if (WaitingForKey[1]) {
		Right1Key = e.keyCode; 
		WaitingForKey[1] = false;
		if (!SpecialKeys.hasOwnProperty(e.keyCode)) {
			Right1KeyRender = String.fromCharCode(Right1Key);
		} else {
			Right1KeyRender = SpecialKeys[(e.keyCode.toString())];
		}
	}
	if (WaitingForKey[2]){
		Up1Key = e.keyCode; 
		WaitingForKey[2] = false;
		if (!SpecialKeys.hasOwnProperty(e.keyCode)) {
			Up1KeyRender = String.fromCharCode(Up1Key);
		} else {
			Up1KeyRender = SpecialKeys[(e.keyCode.toString())];
		}
	}
	if (WaitingForKey[3]) {
		Down1Key = e.keyCode; 
		WaitingForKey[3] = false;
		if (!SpecialKeys.hasOwnProperty(e.keyCode)) {
			Down1KeyRender = String.fromCharCode(Down1Key);
		} else {
			Down1KeyRender = SpecialKeys[(e.keyCode.toString())];
		}
	}
	if (WaitingForKey[4]) {
		Attack1Key = e.keyCode;
		WaitingForKey[4] = false;
		if (!SpecialKeys.hasOwnProperty(e.keyCode)) {
			Attack1KeyRender = String.fromCharCode(Attack1Key);
		} else {
			Attack1KeyRender = SpecialKeys[(e.keyCode.toString())];
		}
	}
	if (WaitingForKey[5]) Left2Key = e.keyCode; WaitingForKey[5] = false;
	if (WaitingForKey[6]) Right2Key = e.keyCode; WaitingForKey[6] = false;
	if (WaitingForKey[7]) Up2Key = e.keyCode; WaitingForKey[7] = false;
	if (WaitingForKey[8]) Down2Key = e.keyCode; WaitingForKey[8] = false;
	if (WaitingForKey[9]) Attack2Key = e.keyCode; WaitingForKey[9] = false;
	
	
	if (!Dead1) {
      if (e.keyCode == Up1Key) {
        W = false;
		Combo1[Combo1.length] = "W";
		WCount++
      }
      if (e.keyCode == Attack1Key) {
        Q = false;
		Combo1[Combo1.length] = "Q";
		QCount++
      }
      if (e.keyCode == Down1Key) {
        S = false;
		Combo1[Combo1.length] = "S";
		SCount++
      }
      if (e.keyCode == Left1Key) {
        A = false;
		Stats1[1] = 4;
		Combo1[Combo1.length] = "A";
		ACount++
      }
      if (e.keyCode == Right1Key) {
        D = false;
		Stats1[1] = 4;
		Combo1[Combo1.length] = "D";
		DCount++
      }
	}
	if (!Dead2) {
      if (e.keyCode == Up2Key) {
        Up = false;
		Combo2[Combo2.length] = "Up";
		UpCount++
      }
      if (e.keyCode == Down2Key) {
        Down = false;
		Combo2[Combo2.length] = "Dn";
		DnCount++
      }
      if (e.keyCode == Left2Key) {
        Left = false;
		Stats2[1] = 4;
		Combo2[Combo2.length] = "Lft";
		LftCount++
      }
      if (e.keyCode == Right2Key) {
        Right = false;
		Stats2[1] = 4;
		Combo2[Combo2.length] = "Rt";
		RtCount++
      }
	  if (e.keyCode == Attack2Key) {
		  Shift = false;
		  Combo2[Combo2.length] = "Shft";
		  ShftCount++
	  }
	}
    }

    function keyDown(e) {
		ComboTimer1 = 0;
      if (String.fromCharCode(e.keyCode) == "O") {
        if (!muted) muted = true; else muted = false;
      }
      if (String.fromCharCode(e.keyCode) == "P") {
	  if (!paused) paused = true; else paused = false;
      }
	  if (!Dead1) {
      if (e.keyCode == Up1Key) {
        W = true;
      }
      if (e.keyCode == Attack1Key) {
        Q = true;
      }
      if (e.keyCode == Down1Key) {
        S = true;
      }
      if (e.keyCode == Left1Key) {
		if (!A) SpriteArray[0].frame = 3;
        A = true;
		Dir1 = "Left"
      }
      if (e.keyCode == Right1Key) {
		if (!D) SpriteArray[0].frame = 0;
        D = true;
		Dir1 = "Right"
      }
	  }
	  if (!Dead2) {
      if (e.keyCode == Up2Key) {
        Up = true;
      }
      if (e.keyCode == Down2Key) {
        Down = true;
      }
      if (e.keyCode == Left2Key) {
		if (!Left) SpriteArray[1].frame = 3;
        Left = true;
		Dir2 = "Left"
      }
      if (e.keyCode == Right2Key) {
		if (!Right) SpriteArray[1].frame = 0;
        Right = true;
		Dir2 = "Right"
      }
	  if (e.keyCode == Attack2Key) {
		  Shift = true;
	  }
	  }
    }