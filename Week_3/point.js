function MutablePoint3D(x,y,z){

	this.getX = function(){
		return x;
	}
	this.getY = function(){
		return y;
	}
	this.getZ = function(){
		return z;
	}

	this.move = function(dx, dy, dz){
		x += dx;
		y += dy;
		z += dz;
	}
}

MutablePoint3D.prototype.toString = function(){
	return [this.getX(),this.getY(),this.getZ()].join(" ");
}


var myPoint = new MutablePoint3D(0, 0, 0);
console.log(myPoint.toString());
myPoint.move(0, 0, -1);
console.log(myPoint.toString());


