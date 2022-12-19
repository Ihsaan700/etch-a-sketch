// selecting canvas
const canvas = document.querySelector('.canvas-draw');
const ctx = canvas.getContext('2d');

// setting up our canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.strokeStyle = '#000000'

ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(200,200);
ctx.stroke();
