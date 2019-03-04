function binarySearch(arr,elem){
  var start = 0;
  var end = arr.length-1;
  var middle = Math.floor((start + end)/2);
  while((arr[middle]!== elem)&&(start <= end)){
    if(elem <arr[middle])
    {
      end = arr[middle]-1;
    }
    else{
      start = arr[middle]+1;
    }
    middle = Math.floor((start + end)/2);
  }if(arr[middle] ===elem){
    return arr[middle]+ ": is at index->" +middle;
  }
    return -1;
}

var result = binarySearch([2,3,4,7,9,15],4);
console.log(result);
