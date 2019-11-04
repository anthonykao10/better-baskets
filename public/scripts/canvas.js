console.log('HI');

let c = document.getElementById("c");
let ctx = c.getContext("2d");

c.width = c.scrollWidth;
c.height = c.scrollHeight;


ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.strokeRect(1000, 350, 100, 100);

ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.strokeRect(1030, 380, 40, 40);
