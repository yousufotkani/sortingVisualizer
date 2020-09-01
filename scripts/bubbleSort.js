function bubbleSort(){

    c_delay = 0
    for(var i=0;i<array_size-1;i++){
        // console.log("happy")
        for( var j=0;j<array_size-i-1;j++){

            divUpdate(divs[j],div_sizes[j],"yellow"); //the current element to be compared

            if(div_sizes[j] > div_sizes[j+1]){
                divUpdate(divs[j],div_sizes[j],"red")  // making the comparing element red
                divUpdate(divs[j+1],div_sizes[j+1],"red")  // making the comparing element red

                let temp = div_sizes[j];
                div_sizes[j] = div_sizes[j+1];
                div_sizes[j+1] = temp;

                divUpdate(divs[j],div_sizes[j],"red")   // showing the changed element in teal
                divUpdate(divs[j+1],div_sizes[j+1],"red")
            }
            divUpdate(divs[j],div_sizes[j],"#3F5EFB");
        }
        divUpdate(divs[j],div_sizes[j],"green")
    }
    divUpdate(divs[0],div_sizes[0],"green")

    enableAllButtons();
}