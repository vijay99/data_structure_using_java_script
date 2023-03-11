const array = [1,4,8,9,12,14,15];
function binarySearch(){
    
    const target = 12;
    var index=search(target);

    if(index ===-1)
        console.log("Element is not present in array.")
    else
        console.log("Target element is at index :"+index);
}

binarySearch();

function search(target){
    var start_index=0;
    var end_index =array.length-1;
    var mid = (start_index + end_index)/2;

    while(start_index <= end_index){
        if(array[mid]===target)
            return mid;
        else if(target > array[mid]){
            start_index=mid+1;
        }
        else if(target < array[mid]){
            end_index = mid-1;
        }

        mid = (start_index + end_index)/2;
    }
    return -1;

}