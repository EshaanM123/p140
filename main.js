var mario = document.getElementById("mario");
var gameArea = document.getElementById("game-area");

document.onkeydown = function(e) {
	switch (e.keyCode) {
		case 37:
			// Left arrow
			mario.style.left = (mario.offsetLeft - 10) + "px";
			break;
		case 38:
			// Up arrow
			mario.style.bottom = (mario.offsetTop + 10) + "px";
			break;
		case 39:
			// Right arrow
			mario.style.left = (mario.offsetLeft + 10) + "px";
			break;
		case 40:
			// Down arrow
			mario.style.bottom = (mario.offsetTop - 10) + "px";
			break;
	}
};
