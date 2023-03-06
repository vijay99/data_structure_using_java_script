(function findMaxAndSecondMaxInArray() {
    const array =[4,6,9,1,3];
    var max1=-1;
    var max2=-1;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        //console.log(element);
        if(element > max1){
            max2=max1;
            max1=element;
        }
        else if(element > max2){
            max2=element;
        }
        
    }

    console.log("max1 is :",max1,"max2 is:",max2);

})(); //it is self calling style


//method call

//findMaxAndSecondMaxInArray();