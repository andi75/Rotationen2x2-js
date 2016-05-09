function Matrix2x2(a, b, c, d) {
	this.m = [ a, b, c, d ];
}

Matrix2x2.scale = function(s)
{
	return new Matrix2x2(s, 0, 0, s);
}

Matrix2x2.identity = function()
{
	return new Matrix2x2(1, 0, 0, 1);
}

Matrix2x2.rotate = function(phi)
{
	var mat = new Matrix2x2(cos(phi), -sin(phi), sin(phi), cos(phi));
	return mat;
}

Matrix2x2.multiply = function(left, right)
{
	return new Matrix2x2(
		left.m[0] * right.m[0] + left.m[1] * right.m[2],
		left.m[0] * right.m[1] + left.m[1] * right.m[3],
		left.m[2] * right.m[0] + left.m[3] * right.m[2],
		left.m[2] * right.m[1] + left.m[3] * right.m[3]
	);
}

