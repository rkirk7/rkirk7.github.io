  let ball = document.getElementById("ball");
  var velocity = 10;
var position = 300;
var forwards = true;

var colors = ["yellow", "green", "orange", "blue", "purple", "red", "black"];


function moveBall() {
  if (position > 1000) {
    forwards = false;
    changeColor();
  } else if (position <=300 ) {
    forwards = true;
    changeColor();
  }
  if (forwards == true) {
  position = position + velocity;
ball.style.left = position + 'px';
  } else {
    position = position - velocity;
ball.style.left = position + 'px';
  }
}

function changeColor() {
  let index = colors.indexOf(ball.style.background);
  if (index == 6) {
    index = 0;
  } else {
    index++
  }
  ball.style.background = colors[index];
}

setInterval(moveBall, 50);

