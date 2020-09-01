// default blue for divs #3F5EFB

//get the input array size, array speed, or if random generate
// and assign it to js variables
var inp_as = document.getElementById("a_size");
var array_size = inp_as.value;
var inp_speed = document.getElementById("a_speed");
var inp_gen = document.getElementById("generate");

//create object to store all button inputs

var algoButtons = document.querySelectorAll(".algos button");

// Declare variables (not let as var can be used anywhere)
var divs = [];
var div_sizes = [];
var margin_size;

//get the array container where we are going to perform our visual sorting

var cont = document.getElementById("array-container");
// cont.style = "flex-direction: column";

//Add Event listeners for generate for click and update

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

// define the functions

function generate_array() {
  cont.innerHTML = "";
  for (let i = 0; i < inp_as.value; i++) {
    div_sizes[i] =
      Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style =
      "margin : 0%" +
      margin_size +
      "%; background-color : #3F5EFB; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      div_sizes[i] +
      "%;";
  }
}

// this function will turn once it finds a change in input

function update_array_size() {
  array_size = inp_as.value;
  generate_array();
}

// window will be refreshed once there is an input

window.onload = update_array_size();

//  running the algorithm by using algoButton object

for (let i = 0; i < algoButtons.length; i++) {
  algoButtons[i].addEventListener("click", runMyAlgo);
}

function runMyAlgo() {
  disableAllBttons();

  this.classList.add("button_selected");
  switch (this.innerHTML) {
    case "Bubble":
      bubbleSort();
      break;
    case "Selection":
      selectionSort();
      break;
    case "Merge":
      mergeSort();
      break;
    case "Insertion":
      insertionSort();
      break;
    case "Quick":
      quickSort();
      break;
  }
}

function disableAllBttons() {
  for (let i = 0; i < algoButtons.length; i++) {
    algoButtons[i].classList = [];
    algoButtons[i].classList.add("buttons_locked");

    algoButtons[i].disabled = true;
    inp_as.disabled = true;
    inp_gen.disabled = true;
    inp_speed.disabled = true;
  }
}
