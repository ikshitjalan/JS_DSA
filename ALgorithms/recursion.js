function sumRange(num){
  if(num===1) return 1;
  return num + sumRange(num-1);
}

var result  = sumRange(3);
console.log(result);

// Factorial Recursion Function
function factorial(num){
  if(num===1) return 1; //Base Case
  return num*factorial(num-1); //Stack Callback using different variables
}

var result  = factorial(5);
console.log(result);
