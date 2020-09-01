


function insertionSort() {
  // console.log("happy");
  c_delay = 0;

  for (var i = 1; i < array_size; i++) {
    let currVal = div_sizes[i];

    divUpdate(divs[i], div_sizes[i], "yellow");

    for (var j = i - 1; j >= 0 && div_sizes[j] > currVal; j--) {

      if (div_sizes[j] > currVal) {
        divUpdate(divs[j], div_sizes[j], "red"); // color change
        divUpdate(divs[j + 1], div_sizes[j + 1], "red"); // color change

        div_sizes[j + 1] = div_sizes[j];

        divUpdate(divs[j], div_sizes[j], "red"); //height change
        divUpdate(divs[j + 1], div_sizes[j + 1], "red"); //height change

        divUpdate(divs[j+1], div_sizes[j+1], "#3F5EFB"); //height change

      }
      
    }

    div_sizes[j + 1] = currVal;

    for(let k=0;k<i;k++){
      divUpdate(divs[k],div_sizes[k],"green");
    }
  }

  enableAllButtons();
}
