const canvas = document.querySelector('#canvas');
//container definitions
const ctx = canvas.getContext('2d');

//color next draw
ctx.fillStyle ="rgba(255,25,255,0.5)";
//draw rec -> x coordinate, y coordinate, width and height -> (x,y,width,height)
ctx.fillRect(0, 0, 100, 50);

//color next draw
//ctx.fillStyle ="rgba(67,50,255,0.5)";
//draw rec 
//ctx.fillRect(50, 20, 80, 80);

ctx.fillStyle ="rgba(167,150,255,0.5)";
ctx.fillRect(150, 120, 80, 80);
//clearRec - skip some part or entire rec
ctx.clearRect(150, 120, 20, 20);

//draw a shape with lines
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(100,100);
ctx.lineTo(200,50);
ctx.lineTo(200,20);
//fill the space between lines
ctx.fillStyle ="rgba(44,155,255,0.5)";
ctx.fill();
//ctx.stroke();

//draw a line
ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(200,100);
ctx.stroke();

//daw a circle -> cxt.arc(x,y,radious (width), begin angle (in radians), end angle)
ctx.fillStyle ="rgba(167,150,255,0.5)";
ctx.strokeStyle = 'black';
ctx.beginPath();
//draw a shape with lines
ctx.arc(145, 145, 50, 0, 2 * Math.PI)
ctx.stroke();
ctx.fill()

//reference shapes
ctx.fillStyle = "rgba(2,15,25,0.5)"
ctx.strokeStyle = 'yellow'
const newRec = new Path2D();
newRec.rect(0, 0, 100, 100);
ctx.fill(newRec)
ctx.stroke(newRec)



