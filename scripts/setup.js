// Setup Cavas for Rendering //
	var display = document.getElementById("screen")
	var ctx = display.getContext('2d')
	
	var overlay1 = document.getElementById("overlay1")
	var drawOverlay1 = overlay1.getContext('2d')
	var overlay2 = document.getElementById("overlay2")
	var drawOverlay2 = overlay2.getContext('2d')
	
	// Pre-Match //
	var MatchBegan = false;
	var Playing = false;
	var ControlsOpen = false;
	var CreditsOpen = false;
	
	var sizeOffset = 0;
	
	if (window.innerHeight/963 < window.innerWidth/1920) {
			sizeOffset = window.innerHeight/963;
		} else {
			sizeOffset = window.innerWidth/1920;
	}
