/* Intermediate Algorithm */
// Sum All Numbers in a Range - First Challenge:
// Using Recursion
function sumAll(arr) {
  arr.sort((a,b) => a -b);
  var sum = arr[0];
  if(arr[0] == arr[1]){
    return sum;
  }else{
    sum++;
    return arr[0] + sumAll([arr[0]+1, arr[1]]);
  }
}
console.log(sumAll([10, 5]));

// Using for loop
function rangeSum(arr){
  arr.sort((a,b) => a - b);
  let sum = 0;
  for(let i = arr[0]; i <= arr[1]; i++){
    sum += i;
  }
  return sum;
}
console.log(rangeSum([10, 5]));

// Using for loop and spread operation
function sumRange(arr){
  let sum = 0;
  for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
    sum += i;
  }
  return sum;
}
console.log(sumRange([10, 5]));

// Diff Two Arrays : Second Challenge:
function diffArray(arr1, arr2) {
  var newArr = [];
  for(let i = 0; i < arr1.length; i++){
    if(!arr2.includes(arr1[i])){
      newArr.push(arr1[i]);
    }
  }
  for(let x = 0; x < arr2.length; x++){
    if(!arr1.includes(arr2[x])){
      newArr.push(arr2[x]);
    }
  }
return newArr;
}
console.log(diffArray([1, 2, 8,77, 3, 5], [1, 2, 3, 4, 5]));

// Another way
function diffArr(arr1, arr2){
  return arr1.concat(arr2).filter(a => !arr1.includes(a) || !arr2.includes(a));
}
console.log(diffArr([1, 2, 8,77, 3, 5], [1, 2, 3, 4, 5]));

// Seek and Destroy - Third Challenge:
function destroyer(arr) {
  let newArr = [...arguments].slice(1);
  return arr.filter(a => !newArr.includes(a));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// another way using from()
function destroy(arr){
  let newArr = Array.from(arguments).slice(1);
  return arr.filter(a => !newArr.includes(a));
}
console.log(destroy([1, 2, 3, 1, 2, 3], 2, 3));

// Examples: from() 
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]