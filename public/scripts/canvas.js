let canvas = document.getElementById("c");
let ctx = c.getContext("2d");

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;


ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.strokeRect(1000, 350, 100, 100);

ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.strokeRect(1030, 380, 40, 40);
