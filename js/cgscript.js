var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square"); //variable that selects all squaes
var colorDisplay = document.getElementById("colorDisplay");//selects span containing color
var messageDisplay = document.querySelector("#message"); //selects span with message
var resetButton = document.querySelector("#reset"); //selects the reset button
var h1 = document.querySelector("h1");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode button event listeners
	setUpModeButtons();
	//set up squares
	setUpSquares();
	reset();
}
function setUpModeButtons(){
	for(i=0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}
function setUpSquares(){
	for(i=0; i < squares.length; i++){ //loop to select squares
	//add event listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to clicked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!"
			resetButton.textContent = "Play again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
	}
}
function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colordisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){ //sets logic for when button is clicked
	reset();
})


function changeColors(color){ //function for changing all colors to picked color
	//loop through all squares
	for(i=0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){ //picks number for 1-6 or 1-3 as winning color
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//Make an array
	var arr = [];
	//add num random colors to array
	for(i=0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

//OLD VERSION OF BUTTON EVENT LISTENERS
// easyButton.addEventListener("click", function(){
// 	easyButton.classList.add("selected");
// 	hardButton.classList.remove("selected");
// 	numSquares = 3
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(i=0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
		
// 	}
// 	h1.style.backgroundColor = "steelblue";
// 	messageDisplay.textContent = "";
// 	resetButton.textContent = "New Colors";
// })
// hardButton.addEventListener("click", function(){
// 	hardButton.classList.add("selected");
// 	easyButton.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(i=0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// 	h1.style.backgroundColor = "steelblue";
// 	messageDisplay.textContent = "";
// 	resetButton.textContent = "New Colors";
// })