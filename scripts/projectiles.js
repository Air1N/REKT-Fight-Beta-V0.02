	// Projectiles //
	var Projectile1 = [];
	var Projectile2 = [];
	var DirMod1 = 1;
	var DirMod2 = -1;
	
	function Projectiles() {
		for (i = 0; i<Projectile1.length; i++) {
			Projectile1[i].X += Projectile1[i].Speed;
		}
		for (i = 0; i<Projectile2.length; i++) {
			Projectile2[i].X += Projectile2[i].Speed;
		}
		
		for (i = 0; i<Projectile1.length; i++) {
			if (Projectile1[i].isColl(player2) && !MatchOver) {
				Stats2[4] -= Projectile1[i].Damage;
				Projectile1.splice(i, 1);
			}
			
			if (Projectile1[i].X > display.width/sizeOffset || Projectile1[i] < 0) {
				Projectile1.splice(i, 1);
			}
		}
		
		for (i = 0; i<Projectile2.length; i++) {
			if (Projectile2[i].isColl(player1) && !MatchOver) {
				Stats1[4] -= Projectile2[i].Damage;
				Projectile2.splice(i, 1);
			}
			if (Projectile2[i].X > display.width/sizeOffset || Projectile2[i] < 0) {
				Projectile2.splice(i, 1);
			}
		}
	}