var snake = document.getElementById("snake");
var food = document.getElementById("food");
var xPos = 0;
var yPos = 0;

snake.style.left = xPos + "px";
snake.style.top = yPos + "px";

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37: // left
      xPos -= 10;
      break;
    case 38: // up
      yPos -= 10;
      break;
    case 39: // right
      xPos += 10;
      break;
    case 40: // down
      yPos += 10;
      break;
  }

  snake.style.left = xPos + "px";
  snake.style.top = yPos + "px";
};
