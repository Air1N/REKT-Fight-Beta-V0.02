	// Rendering //
	var xOffset, yOffset;
	var sizeOffset;
	
	// Render //
    function Render() {
		display.width = 1920*sizeOffset;
		display.height = 963*sizeOffset;
		overlay1.width = 1920*sizeOffset;
		overlay1.height = 963*sizeOffset;
		overlay2.width = 1920*sizeOffset;
		overlay2.height = 963*sizeOffset;
		display.style.cssText = "position:absolute;top:0px;left:" + ((window.innerWidth-display.width)/2).toString() + "px;"
		ctx.clearRect(0,0,display.width,display.height);
		drawOverlay1.save();
		// Draw mask to buffer
		drawOverlay1.clearRect(0, 0, overlay1.width, overlay1.height);
		drawOverlay1.drawImage(SpriteArray[0].Sprite,SpriteArray[0].frame*SpriteArray[0].fW,0,SpriteArray[0].fW, SpriteArray[0].fH, SpriteArray[0].X*sizeOffset, SpriteArray[0].Y*sizeOffset, SpriteArray[0].W*sizeOffset, SpriteArray[0].H*sizeOffset);
		drawOverlay1.drawImage(SpriteArray[2].Sprite,SpriteArray[2].frame*SpriteArray[2].fW,0,SpriteArray[2].fW, SpriteArray[2].fH, SpriteArray[2].X*sizeOffset, SpriteArray[2].Y*sizeOffset, SpriteArray[2].W*sizeOffset, SpriteArray[2].H*sizeOffset);
		//ctx.drawImage(SpriteArray[1].Sprite,SpriteArray[1].frame*SpriteArray[1].fW,0,SpriteArray[1].fW, SpriteArray[1].fH, SpriteArray[1].X*sizeOffset, SpriteArray[1].Y*sizeOffset, SpriteArray[1].W*sizeOffset, SpriteArray[1].H*sizeOffset);
		// Draw the color only where the mask exists (using source-in)
		drawOverlay1.globalCompositeOperation = "source-in";
		drawOverlay1.fillStyle = Color1;
		drawOverlay1.fillRect(0, 0, overlay1.width, overlay1.height); 
		drawOverlay1.restore();
		drawOverlay2.save();
		// Draw mask to buffer
		drawOverlay2.clearRect(0, 0, overlay2.width, overlay2.height); 
		drawOverlay2.drawImage(SpriteArray[1].Sprite,SpriteArray[1].frame*SpriteArray[1].fW,0,SpriteArray[1].fW, SpriteArray[1].fH, SpriteArray[1].X*sizeOffset, SpriteArray[1].Y*sizeOffset, SpriteArray[1].W*sizeOffset, SpriteArray[1].H*sizeOffset);
		drawOverlay2.drawImage(SpriteArray[3].Sprite,SpriteArray[3].frame*SpriteArray[3].fW,0,SpriteArray[3].fW, SpriteArray[3].fH, SpriteArray[3].X*sizeOffset, SpriteArray[3].Y*sizeOffset, SpriteArray[3].W*sizeOffset, SpriteArray[3].H*sizeOffset);
		//ctx.drawImage(SpriteArray[1].Sprite,SpriteArray[1].frame*SpriteArray[1].fW,0,SpriteArray[1].fW, SpriteArray[1].fH, SpriteArray[1].X*sizeOffset, SpriteArray[1].Y*sizeOffset, SpriteArray[1].W*sizeOffset, SpriteArray[1].H*sizeOffset);
		// Draw the color only where the mask exists (using source-in)
		drawOverlay2.globalCompositeOperation = "source-in";
		drawOverlay2.fillStyle = Color2;
		drawOverlay2.fillRect(0, 0, overlay2.width, overlay2.height); 
		drawOverlay2.restore();
		ctx.drawImage(Background,-25*sizeOffset,-5*sizeOffset,display.width+50*sizeOffset,display.height+50*sizeOffset)
		
		ctx.fillStyle = "#990000";
		ctx.roundRect(5*sizeOffset,25*sizeOffset,(100*7.5*sizeOffset),35*sizeOffset,25*sizeOffset).fill();
		ctx.fillStyle = "#009900";
		if (Stats1[4] > 0) ctx.roundRect(5*sizeOffset,25*sizeOffset,((Stats1[4]/Stats1[3])*100*7.5*sizeOffset),35*sizeOffset,25*sizeOffset).fill();
		ctx.strokeStyle = "#000000"
		ctx.roundRect(5*sizeOffset,25*sizeOffset,(100*7.5*sizeOffset),35*sizeOffset,25*sizeOffset).stroke();
		
		
		ctx.fillStyle = "#990000";
		ctx.roundRect(display.width-(5*sizeOffset)-(100*7.5*sizeOffset),25*sizeOffset,(100*7.5*sizeOffset),35*sizeOffset,25*sizeOffset).fill();
		ctx.fillStyle = "#009900";
		if (Stats2[4] > 0) ctx.roundRect(display.width-(5*sizeOffset)-((Stats2[4]/Stats2[3])*100*7.5*sizeOffset),25*sizeOffset,((Stats2[4]/Stats2[3])*100*7.5*sizeOffset),35*sizeOffset,25*sizeOffset).fill();
		ctx.strokeStyle = "#000000"
		ctx.roundRect(display.width-(5*sizeOffset)-(100*7.5*sizeOffset),25*sizeOffset,(100*7.5*sizeOffset),35*sizeOffset,25*sizeOffset).stroke();
		
		ctx.fillStyle = "#333333"
		ctx.fillRect(0,display.height - (40*sizeOffset),display.width,40*sizeOffset)
		
		ctx.fillStyle = "#000000"
		ctx.textAlign = "center"
		ctx.font = (30*sizeOffset).toString() + "px Bold Shadowcard Gothic";
		ctx.drawImage(TimerBg.Sprite,((display.width)/2)-(TimerBg.W*sizeOffset)/2,(52.5*sizeOffset)-(TimerBg.H*sizeOffset)/2-10*sizeOffset, TimerBg.W*sizeOffset, TimerBg.H*sizeOffset);
		ctx.fillText(Math.round(time/100),((display.width)/2),52.5*sizeOffset)
		ctx.fillStyle = "#ffffff"
		if (Stats1[4] > 0) ctx.fillText(Math.round(Stats1[4]/Stats1[3]*100) + "%",(5*sizeOffset)+((100*7.5*sizeOffset)/2),52.5*sizeOffset)
		if (Stats2[4] > 0) ctx.fillText(Math.round(Stats2[4]/Stats2[3]*100) + "%",display.width-(10*sizeOffset)-((100*7.5*sizeOffset)/2),52.5*sizeOffset)
		if (Stats1[4] <= 0)	ctx.fillText("DEAD",(5*sizeOffset)+((100*7.5*sizeOffset)/2),52.5*sizeOffset)
		if (Stats2[4] <= 0) ctx.fillText("DEAD",display.width-(10*sizeOffset)-((100*7.5*sizeOffset)/2)-(23/3)*sizeOffset*4+(35*sizeOffset),52.5*sizeOffset)
		
		for (i = 0; i<Projectile1.length; i++) {
			ctx.drawImage(Projectile1[i].Sprite, Projectile1[i].X*sizeOffset, Projectile1[i].Y*sizeOffset, Projectile1[i].W*sizeOffset, Projectile1[i].H*sizeOffset);
		}
		for (i = 0; i<Projectile2.length; i++) {
			ctx.drawImage(Projectile2[i].Sprite, Projectile2[i].X*sizeOffset, Projectile2[i].Y*sizeOffset, Projectile2[i].W*sizeOffset, Projectile2[i].H*sizeOffset);
		}
		
		ctx.font = (250*sizeOffset).toString() + "px Bold Shadowcard Gothic";
		
		if (!MatchBegan) {
			ctx.drawImage(CharacterSelect,0,0,display.width,display.height);
			ctx.font = (45*sizeOffset).toString() + "px Bold Shadowcard Gothic";
			ctx.fillText("Hat",((display.width)/2),310*sizeOffset);
			ctx.fillText("Weapon",((display.width)/2),515*sizeOffset);
			ctx.fillText("Clothes",((display.width)/2),715*sizeOffset);
			ctx.font = (20*sizeOffset).toString() + "px Bold Shadowcard Gothic";
			ctx.fillText(Hat1.toUpperCase(),((HatRight1.X)+(HatRight1.W/2)-20)*sizeOffset,(HatRight1.Y+HatRight1.H+30)*sizeOffset);
			ctx.fillText(Weapon1.toUpperCase(),((WeaponRight1.X)+(WeaponRight1.W/2)-20)*sizeOffset,(WeaponRight1.Y+WeaponRight1.H+30)*sizeOffset);
			ctx.fillText(Clothes1.toUpperCase(),((ClothesRight1.X)+(ClothesRight1.W/2)-20)*sizeOffset,(ClothesRight1.Y+ClothesRight1.H+30)*sizeOffset);
			ctx.fillText(Hat2.toUpperCase(),((HatLeft2.X)+(HatLeft2.W/2)+20)*sizeOffset,(HatLeft2.Y+HatLeft2.H+30)*sizeOffset);
			ctx.fillText(Weapon2.toUpperCase(),((WeaponLeft2.X)+(WeaponLeft2.W/2)+20)*sizeOffset,(WeaponLeft2.Y+WeaponLeft2.H+30)*sizeOffset);
			ctx.fillText(Clothes2.toUpperCase(),((ClothesLeft2.X)+(ClothesLeft2.W/2)+20)*sizeOffset,(ClothesLeft2.Y+ClothesLeft2.H+30)*sizeOffset);
		}
		for(i=0;i<SpriteArray.length;i++) {
			ctx.drawImage(SpriteArray[i].Sprite,SpriteArray[i].frame*SpriteArray[i].fW,0,SpriteArray[i].fW, SpriteArray[i].fH, SpriteArray[i].X*sizeOffset, SpriteArray[i].Y*sizeOffset, SpriteArray[i].W*sizeOffset, SpriteArray[i].H*sizeOffset);
		}
		ctx.drawImage(overlay1, 0, 0)
		ctx.drawImage(overlay2, 0, 0)
		ctx.drawImage(Hat1Sprite.Sprite, Hat1Sprite.X*sizeOffset, Hat1Sprite.Y*sizeOffset, Hat1Sprite.W*sizeOffset, Hat1Sprite.H*sizeOffset)
		ctx.drawImage(Hat2Sprite.Sprite, Hat2Sprite.X*sizeOffset, Hat2Sprite.Y*sizeOffset, Hat2Sprite.W*sizeOffset, Hat2Sprite.H*sizeOffset)
		if (Stats1[4] == 0 || Stats2[4] == 0 || time == 0) {
			ctx.fillStyle = "rgba(0,0,0,0.7)";
			ctx.fillRect(0,display.height/2-200*sizeOffset,display.width,display.height/2-250*sizeOffset);
			ctx.fillStyle = "#ffffff";
			ctx.fillText(winner,((display.width)/2),(display.height/2));
		}
		if (!Playing && !CreditsOpen && !ControlsOpen) {
			ctx.drawImage(MainMenu,0,0,display.width,display.height);
		}
		ctx.fillStyle = "rgb(255,255,255)";
		ctx.font = (250*sizeOffset).toString() + "px Bold Shadowcard Gothic";
		if (ControlsOpen) {
			ctx.drawImage(ControlsMenu,0,0,display.width,display.height)
			ctx.font = (150*sizeOffset).toString() + "px Bold Shadowcard Gothic"; 
			ctx.fillText("Controls", display.width/2, 150*sizeOffset);
			ctx.textAlign = "left"
			ctx.font = (100*sizeOffset).toString() + "px Bold Shadowcard Gothic"; 
			ctx.fillText("Player 1", 275*sizeOffset, 350*sizeOffset);
			ctx.fillText("Player 2", display.width-475*sizeOffset, 350*sizeOffset);
			ctx.font = (50*sizeOffset).toString() + "px Bold Shadowcard Gothic";
			ctx.fillText("Press ESC", 20*sizeOffset, 80*sizeOffset);			
			ctx.fillText("Left: ", 275*sizeOffset, 450*sizeOffset);
			ctx.fillText("Right: ", 275*sizeOffset, 550*sizeOffset);
			ctx.fillText("Left: ", display.width-475*sizeOffset, 450*sizeOffset);
			ctx.fillText("Right: ", display.width-475*sizeOffset, 550*sizeOffset);
			ctx.fillText("Up: ", 275*sizeOffset, 650*sizeOffset);
			ctx.fillText("Down: ", 275*sizeOffset, 750*sizeOffset);
			ctx.fillText("Up: ", display.width-475*sizeOffset, 650*sizeOffset);
			ctx.fillText("Down: ", display.width-475*sizeOffset, 750*sizeOffset);
			ctx.fillText("Attack: ", 275*sizeOffset, 850*sizeOffset);
			ctx.fillText("Attack: ", display.width-475*sizeOffset, 850*sizeOffset);
			ctx.textAlign = "center"
			ctx.fillText(Right1KeyRender, 575*sizeOffset, 552*sizeOffset);
			ctx.fillText(Left1KeyRender, 575*sizeOffset, 452*sizeOffset);
			ctx.fillText(Right2KeyRender, (1920-175)*sizeOffset, 552*sizeOffset);
			ctx.fillText(Left2KeyRender, (1920-175)*sizeOffset, 452*sizeOffset);
			ctx.fillText(Up1KeyRender, 575*sizeOffset, 652*sizeOffset);
			ctx.fillText(Down1KeyRender, 575*sizeOffset, 752*sizeOffset);
			ctx.fillText(Up2KeyRender, (1920-175)*sizeOffset, 652*sizeOffset);
			ctx.fillText(Down2KeyRender, (1920-175)*sizeOffset, 752*sizeOffset);
			ctx.fillText(Attack1KeyRender, 575*sizeOffset, 852*sizeOffset);
			ctx.fillText(Attack2KeyRender, (1920-175)*sizeOffset, 852*sizeOffset);
		}
		ctx.textAlign = "center"
		if (!Playing && !ControlsOpen && !CreditsOpen) ctx.fillText("TITLE", 350*sizeOffset, 250*sizeOffset)
			for (i = 0; i<Buttons.length; i++) {
			if (Buttons[i].isVisible) ctx.drawImage(Buttons[i].Cover, Buttons[i].X*sizeOffset, Buttons[i].Y*sizeOffset, Buttons[i].W*sizeOffset, Buttons[i].H*sizeOffset);
			if (Buttons[i].isHover(moveX, moveY) && Buttons[i].isVisible && Buttons[i].isOverlayed) {
				ctx.fillStyle = "rgba(255,255,255,0.3)";
				ctx.fillRect(Buttons[i].X*sizeOffset, Buttons[i].Y*sizeOffset, Buttons[i].W*sizeOffset, Buttons[i].H*sizeOffset)
			}
		}
		if (StartButton.isHover(moveX, moveY) && StartButton.isVisible) {
				ctx.fillStyle = "rgba(255,255,255,0.1)";
				StartButton.W = 250;
				StartButton.H = 150+150/4;
				StartButton.Y = 750
				ctx.fillRect(StartButton.X*sizeOffset, StartButton.Y*sizeOffset, StartButton.W*sizeOffset, StartButton.H*sizeOffset)
		} else {
			StartButton.W = 200;
			StartButton.H = 150;
			StartButton.Y = 775
		}
	}