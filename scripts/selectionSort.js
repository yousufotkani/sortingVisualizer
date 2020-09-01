function selectionSort() {
  c_delay = 0;

  for (var i = 0; i < array_size-1; i++) {
    var min = i;
    divUpdate(divs[min], div_sizes[min], "red");

    for (let j = i+1; j < array_size; j++) {
      divUpdate(divs[j], div_sizes[j], "yellow");

      if (div_sizes[j] < div_sizes[min]) {
        if (min != i) {
          divUpdate(divs[min], div_sizes[min], "blue");
        }

        min = j;
        divUpdate(divs[min], div_sizes[min], "red");
      } else {
        divUpdate(divs[j], div_sizes[j], "blue");
      }
    }

    if (min != i) {
      let temp = div_sizes[min];
      div_sizes[min] = div_sizes[i];
      div_sizes[i] = temp;

      divUpdate(divs[min], div_sizes[min], "red"); //height change
      divUpdate(divs[i], div_sizes[i], "red");      // height change
      divUpdate(divs[min], div_sizes[min], "blue"); //color change
    }
    divUpdate(divs[i], div_sizes[i], "green");
  }
  divUpdate(divs[i], div_sizes[i], "green");
  enableAllButtons();
}
