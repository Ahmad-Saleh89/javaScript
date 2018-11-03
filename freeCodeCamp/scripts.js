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