function tailAndHead(arr){
  // Parameters used in redue(accumulator, current value, current index, array)
  return arr.reduce((prod, num, i, a) => 
  // is index is short of end of array
  // num % 10 get remainder when dividing by 10 whihc equals the last digit
  // String(a [i + 1])[0] get the first digit of the next number
  // Number() turns it back into a number from a string
  // multiple the sums together using reduce
  i < a.length - 1 ? prod * ((num % 10) + Number(String(a [i + 1])[0])) : prod, 1);
  
}