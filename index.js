// selecting canvas
const canvas = document.querySelector('.canvas-draw');
const ctx = canvas.getContext('2d');

// clear button
const clearButton = document.querySelector("a.button-clear")

// knob buttons
const knob = document.querySelectorAll("div.knob")
// const secondKnob = document.querySelector("div.knob_inner-right")

// setting up our canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 25;

// the color of the stroke
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

const MOVE_AMOUNT = 10;

// getting the width and height of the canvas to draw from random points
const width = canvas.width;
const height = canvas.height;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// drawing a point in our canvas
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// draw function
function draw(options) {
	console.log(options.key);

	// incrementing the hue
	hue += 10;
	ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;

	// start path
	ctx.beginPath();
	ctx.moveTo(x, y);

	// x and y depend on arrow key input
	switch (options.key) {
		case "ArrowUp":
			y -= MOVE_AMOUNT;
			break
		case "ArrowRight":
			x += MOVE_AMOUNT;
			break
		case "ArrowDown":
			y += MOVE_AMOUNT;
			break
		case "ArrowLeft":
			x -= MOVE_AMOUNT;
			break
		default:
			break;
	}

	ctx.lineTo(x, y);
	ctx.stroke()	
}

// clear the canvas
function clearCanvas() {
	ctx.clearRect(0, 0, width, height);
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x, y);
	ctx.stroke();
}

// a function to handle arrow keys input
function handleKey(e) {
	if (e.key.includes("Arrow")) {
		draw({key: e.key});
		console.log("handle key");
		e.preventDefault()
	}

	// adding animation to the knobs according to arrow input
	switch (e.key) {
		case "ArrowLeft":
			// specifics toggles classes are made in webflow
			knob[0].classList.toggle("rotate-left");
			break;
		case "ArrowRight":
			knob[0].classList.toggle("rotate-right");
			break;
		case "ArrowUp":
			knob[1].classList.toggle("rotate-right");
			break;
		case "ArrowDown":
			knob[1].classList.toggle("rotate-left");
			break;
		default:
			break;
	}
};

window.addEventListener("keydown", handleKey);
clearButton.addEventListener("click", clearCanvas)
