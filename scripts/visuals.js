var speed = 10; //default
var timeDelay;

inp_speed.addEventListener("input", visualSpeed);


function visualSpeed() {
  switch (parseInt(inp_speed.value)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }
  timeDelay = 10000 / (Math.floor(array_size / 10) * speed);
}

timeDelay = 10000 / (Math.floor(array_size / 10) * speed);
var c_delay = 0;

function divUpdate(cont, height, color) {
  window.setTimeout(function () {
    cont.style =
      "margin : 0%" +
      margin_size +
      "%;background-color:" +
      color +
      ";width:"  + (100 / array_size - 2 * margin_size) +
      "%; height:" +
      height +
      "%;";
  }, c_delay += timeDelay);
}

function enableAllButtons() {
  window.setTimeout(function () {
    for (let i = 0; i < algoButtons.length; i++) {
      algoButtons[i].classList = [];
      algoButtons[i].classList.add("buttons_deselected");

      algoButtons[i].disabled = false;
      inp_as.disabled = false;
      inp_gen.disabled = false;
      inp_speed.disabled = false;
    }
  },c_delay+=timeDelay);
}
