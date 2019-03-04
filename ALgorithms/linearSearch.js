function linearSearch(arr,val){
    for(var i=0;i<arr.length;i++){
      if(arr[i]===val) return "Element is Found at index:" + i ;
    }
    return -1;
}
var arr = [1,2,3,4,5,6];
var result = linearSearch(arr,3);
console.log(result);
