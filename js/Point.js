function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.transform = function(m)
{
	var newx = m.m[0] * this.x + m.m[1] * this.y;
	var newy = m.m[2] * this.x + m.m[3] * this.y;
	this.x = newx;
	this.y = newy;
}