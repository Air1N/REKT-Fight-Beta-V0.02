	function Button(img,x,y,w,h) {
		this.Cover = new Image();
		this.Cover.src = img;
		this.X = x;
		this.Y = y;
		this.W = w;
		this.H = h;
		this.isVisible = true;
		this.isOverlayed = true;
		Buttons[Buttons.length] = this;
		this.isPressed = function(clickX, clickY) {
			if (clickX > this.X*sizeOffset && clickX < this.X*sizeOffset + this.W*sizeOffset && clickY > this.Y*sizeOffset && clickY < this.Y*sizeOffset + this.H*sizeOffset) return true; else return false;
		}
		this.isHover = function(moveX, moveY) {
			if (moveX > this.X*sizeOffset && moveX < this.X*sizeOffset + this.W*sizeOffset && moveY > this.Y*sizeOffset && moveY < this.Y*sizeOffset + this.H*sizeOffset) return true; else return false;
		}
	}
	
	CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) { 
		if (w < 2 * r) r = w / 2;
		if (h < 2 * r) r = h / 2; 
		this.beginPath(); 
		this.moveTo(x+r, y); 
		this.arcTo(x+w, y, x+w, y+h, r); 
		this.arcTo(x+w, y+h, x, y+h, r);
		this.arcTo(x, y+h, x, y, r);
		this.arcTo(x, y, x+w, y, r); 
		this.closePath(); 
		return this;
	}
	
	// Click //
	window.onclick = function(e) {
      clickX = e.pageX - Math.round((window.innerWidth-display.width)/2)
      clickY = e.pageY
    }
	
	// Mouse Move //
    window.onmousemove = function(e) {
      moveX = e.pageX - Math.round((window.innerWidth-display.width)/2)
      moveY = e.pageY
    }
	
	window.onmousedown = function(e) {
      downX = e.pageX - Math.round((window.innerWidth-display.width)/2)
      downY = e.pageY
	  mousePressed = true;
    }
	
	window.onmouseup = function(e) {
      upX = e.pageX - Math.round((window.innerWidth-display.width)/2)
      upY = e.pageY
	  mousePressed = false;
    }
	
		function Projectile(img, X, Y, W, H, speed, damage, FPS, frames, fW, fH, frame) {
		this.Sprite = new Image();
		this.Sprite.src = img;
	
		this.X = X
		this.Y = Y
		this.W = W
		this.H = H
		this.frame = frame;
		this.frames = frames;
		this.fW = fW;
		this.fH = fH;
		this.FPS = FPS;
		this.Speed = speed;
		this.Damage = damage;
		this.isColl = function(obj) {
			if (this.X + this.W < obj.X) return false;
			if (this.X > obj.X + obj.W) return false;
			if (this.Y + this.H < obj.Y) return false;
			if (this.Y > obj.Y + obj.H) return false;
			return true;
		}
	}
	
	// Sprite - For Sprite Creation //
	function Sprite(img, X, Y, W, H, FPS, frames, fW, fH, frame) {
		this.Sprite = new Image();
		this.Sprite.src = img;
	
		this.X = X
		this.Y = Y
		this.W = W
		this.H = H
		this.frame = frame;
		this.frames = frames;
		this.fW = fW;
		this.fH = fH;
		this.FPS = FPS;
		this.isColl = function(obj) {
			if (this.X + this.W < obj.X) return false;
			if (this.X > obj.X + obj.W) return false;
			if (this.Y + this.H < obj.Y) return false;
			if (this.Y > obj.Y + obj.H) return false;
			return true;
		}
		SpriteArray[Sprites] = this;
		Sprites++
	}
	
	Array.prototype.contains = function(obj) {
		var i = this.length;
		while (i--) {
			if (this[i] == obj) {
				return true;
			}
		}
		return false;
	}