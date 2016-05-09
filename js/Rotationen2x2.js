var phi = 0;

function setup() 
{
  createCanvas(400, 400);
    
  background(255);
  stroke(0);
  fill(127);
  
  frameRate(10);
}

function drawShape(points) 
{
  var s = 1;
  beginShape();
  for(var i in points)
  {
    vertex(s * points[i].x, s * points[i].y);
  }  
  endShape(CLOSE);
}

function draw()
{	
  var dimension = min(width, height);
  translate(width/2, height/2);
  scale(dimension / 2, dimension / 2);
  strokeWeight(0.02);
  
  var k = 0.2;
  var p = [
     new Point(1, 0),
     new Point(k, k),
     new Point(0, 1),
     new Point(-k, k),
     new Point(-1, 0),
     new Point(-k, -k),
     new Point(0, -1),
     new Point(k, -k),
     new Point(1, 0)
  ];
  
  phi += PI / 36;
  var s = sin(1.5 * phi);
  fill(144 + 72 * s);
    
  var left = Matrix2x2.rotate(phi);
  var right = Matrix2x2.scale(s);
  var m = Matrix2x2.multiply(left, right);
  
  for(var i in p)
  {
    p[i].transform(m);
  }
  
  drawShape(p);
}