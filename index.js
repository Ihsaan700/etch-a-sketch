// selecting canvas
const canvas = document.querySelector('.canvas-draw');
const ctx = canvas.getContext('2d');

// setting up our canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.strokeStyle = '#000000'

// getting the width and height of the canvas to draw from random points
const width = canvas.width;
const height = canvas.height;

// using math.random to choose random points to start drawing
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// drawing a point in our canvas
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

