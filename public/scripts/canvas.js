//var is needed here
var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.width = c.scrollWidth;
c.height = c.scrollHeight;

console.log('C:', c.width)
console.log('C:', c.height)

ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.strokeRect(500, 175, 50, 50);

ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.strokeRect(515, 190, 20, 20);