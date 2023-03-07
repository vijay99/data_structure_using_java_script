//input arr {1,0,1,0,1,0} output {0,0,0,1,1,1}

function sort0And1() {
    const array =[1,0,1,0,1,0];
    var start_index=0;
    var end_index=array.length-1;
    var temp_value=-1;

    while (start_index < end_index) {
        while(array[start_index]===0 && start_index < end_index){
            start_index++;
        }

        while(array[end_index]===1 && start_index < end_index){
            end_index--;
        }

        if(start_index < end_index){
            temp_value=array[start_index];
            array[start_index]=array[end_index];
            array[end_index]=temp_value;
            start_index++;
            end_index--;
        }
        
    }

    array.forEach( (element) => { 
            console.log(element);
    });

}


sort0And1();