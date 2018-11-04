function convertToInt(str){
  console.log(parseInt(str));
}
convertToInt("56");

var printNumTwo;
for (var i = 0; i < 3; i++){
  if(i === 2){
    printNumTwo = function(){
      return i;
    }
  }
}
console.log(printNumTwo());

// Square only positive integers --- First way
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = function(arr) {
  "use strict";
  const squaredIntegers = arr.filter(function(num){
    if(Number.isInteger(num)){
      return num > 0;
    }
    //OR: return (num > 0 && num/parseInt(num) === 1);
  }).map(function(x){
    return Math.pow(x, 2);
  });
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


// Square only positive integers --- ES6 another way
const realNumbers = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squared = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter((num) => num > 0 && num/parseInt(num) === 1).map((val) => Math.pow(val,2));
  return squaredIntegers;
}
const squaredNumbers = squared(realNumbers);
console.log(squaredNumbers);

// The rest operator: ES6
/* With the rest operator you can create functions that take a
variable number of arguments. These arguments are STORED IN an ARRAY
that can be accessed later from inside the function */
const sum = (() => {
  return (...args)=>{
    return args.reduce((a,b) => a + b, 0);
  }
})();
console.log(sum(1,2,3));

// Understanding reduce() method
  let numbers = [5,23,33,2];
  function getSum(accumulator, num){
    return accumulator + num;
  }
  var addIt = numbers.reduce(getSum);
  console.log(addIt);
  /*
    *The reduce() method reduces the array to a SINGLE VALUE.
    *The reduce() method REQUIRES a function to execute for each value
    of the array (from left to right)
    *The executed function "in this case getSum()" requires 2 parameters,
    the first one called the accumulator, the second one represents each
    value of the array.
    *The first value of the accumulator will be by default the first
    element of the array.
  */
//  If you want ot initiate another value you can do so:
var addIt = numbers.reduce(getSum, 3);
console.log(addIt);

// Finding the max val using reduce()
function findMax(accumulator, val){
  if(val > accumulator){
    accumulator = val;
  }
  return accumulator;
}
var maxNum = numbers.reduce(findMax);
console.log(maxNum);

// Another way to write it:
var maxNum = numbers.reduce((accumulator, val) => {
  if(val > accumulator){
    accumulator = val;
  }
  return accumulator;
});
console.log(maxNum);

// Third way to write it using the ternary operator:
var maxNum = numbers.reduce((accumulator, val) => val > accumulator ? val : accumulator);
console.log(maxNum);
/* This line means: if (b > a) return b ,,, if not return a */