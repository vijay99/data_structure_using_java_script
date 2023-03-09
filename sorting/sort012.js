//input arr {0,1,2,0,1,2} output ;{0,0,1,1,2,2}

function sortZeroOneTwo(){
    var low = 0;
    var high = array.length-1;
    var mid =0;
    var temp=-1;

    while(mid <= high){
        if(array[mid]===0){
            temp = array[mid];
            array[mid] = array[low];
            array[low]= temp;
            low++;
            mid++;
        }
        else if(array[mid]===1){
            mid++;
        }
        else if(array[mid]===2){
            temp = array[mid];
            array[mid] = array[high];
            array[high] = temp;
            high--;
        }
    }

    array.forEach(element => {
        console.log(element);
    });

}

const array = [0,1,2,0,1,2]
sortZeroOneTwo();