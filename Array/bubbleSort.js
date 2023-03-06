function bubbleSort() {
    var array =[5,8,9,1,6,4];
    var isSorted = true;
    var temp;

    for (let i = 0; i < array.length; i++) {
        isSorted=true;
        for(let j =0;j<array.length-i-1 ;j++){
            //if next element in array is greater then swap
            if(array[j]>array[j+1]){
                isSorted = false;
                temp = array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }

        }
        //if array is sorted then break to come out of processing
        if(isSorted) break;
         
    }

    //printing sorted array element
    array.forEach(element => {
        console.log(element);
    });

}


//function cal
bubbleSort();