function mergeSort() {
  c_delay = 0;
  mergePartition(0, array_size - 1);
  enableAllButtons();
}

function merge(start, mid, end) {
  let p = start,
    q = mid + 1;
  var result = [],
    k = 0;
  
    
  for(let i=start;i<=end;i++){

       if(p>mid){
          result[k++] = div_sizes[q++];
          divUpdate(divs[q-1],div_sizes[q-1],"red")
        //   p++;
        //   k++;
      }
      else if(q>end){
          result[k++] = div_sizes[p++]
          divUpdate(divs[p-1],div_sizes[p-1],"red")
        //   q++;
        //   k++;
      }
      else if(div_sizes[p]<div_sizes[q]){
          result[k++] = div_sizes[p++];
          divUpdate(divs[p-1],div_sizes[p-1],"red")
        //   p++;
        //   k++;
      }
      else{
          result[k++] = div_sizes[q++];
          divUpdate(divs[q-1],div_sizes[q-1],"red")
        //   q++;
        //   k++;
      }

  }

  for (let i = 0; i < k; i++) {
    div_sizes[start] = result[i];
    divUpdate(divs[start], div_sizes[start], "green");
    start++;
  }
}

function mergePartition(start, end) {
  if (start >= end) return;
  else {
    let mid = Math.floor((start + end) / 2);
    divUpdate(divs[mid], div_sizes[mid], "yellow"); //showing middle value in yellow color

    mergePartition(start, mid);
    mergePartition(mid + 1, end);

    merge(start, mid, end);
  }
}
