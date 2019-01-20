// PART I
// Chapter 1
console.log(typeof NaN); // NaN is a number.... cool right?
console.log(NaN == NaN); // returns false
// Ternary Operator: ?
console.log(true ? 1 : 2); // returns 1
console.log(false ? 1 : 2); // returns 2
console.log(null == undefined); // returns true
console.log(null === undefined); // returns false

// Chapter 2
// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " + theNumber * theNumber);

// Breaking out of a loop @@@ IMPORTANT
for (let i = 10; ; i++){
  if(i % 7 == 0){
    console.log(i);
    break;
  }
}

// Exercises page 37
// Looping a triabgle
let sharp = "#";
for(let x = 0; x < 7; x++){
  console.log(sharp);
  sharp = sharp+ "#";
}

// FizzBuzz
let fizzBuzz = [];
for(let i = 1; i <= 16; i++){
  if(i % 5 != 0 && i % 3 == 0){
    fizzBuzz.push("Fizz");
  }else if(i % 3 != 0 && i % 5 == 0){
    fizzBuzz.push("Buzz");
  }else if(i % 3 == 0 && i % 5 == 0){
    fizzBuzz.push("FizzBuzz");
  }else{
    fizzBuzz.push(i);
  }
}
console.log(fizzBuzz);

// Chess Board
function makeChess(height, width){
  for(let j = 0; j < height; j++){
    let chess = "";
    for(let k = 0; k < width; k++){
      if(k % 2 == 0){
        chess = chess + "#";
      }else{
        chess = chess + " ";
      }
    }
    if(j % 2 == 0){
      console.log(" " + chess);
    }else{
      console.log(chess);
    }
  }
}
makeChess(8,8);

// Chapter 3
// var vs let
if(true){
  let xxx = "Only visible here";
  var vvv = "Visible every where";
  console.log(xxx + " "+ vvv);
}
console.log(vvv);
// console.log(xxx); will through an error

// Optional Arguments: Review page 47
function minus(a, b){
  if(b === undefined){
    return -a;
  }
  return a - b;
}
console.log(minus(5));
console.log(minus(8,3));
console.log(minus(2,9));

// Closure
function multiplier(factor){
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(4));
let triple = multiplier(3);
console.log(triple(4));

// Recursion
function power(base, exponent){
  if(exponent == 0){
    return 1;
  }else{
    return base * power(base, exponent - 1);
  }
}
console.log(power(2,4));

// Growing Functions
/* Generate 3 digits starting with 0 */
function zeroPad(number, width){
  let num = String(number);
  while(num.length < width){
    num = "0" + num;
  }
  return num;
}
function farmInventory(cows, chicken, pigs){
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chicken, 3)} Chicken`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

farmInventory(7,16,3);

// Chapter 3 Exercises Page 56
// Minimum
function minValue(val1,val2){
  if(val1 < val2){
    return val1;
  }
  return val2;
}
console.log(minValue(13,8));

// Recursion
function isEven(num){
  if(num == 0){
    return true;
  }else if(num == 1 || num < 0){
    return false;
  }else{
    return isEven(num - 2);
  }
}
console.log(isEven(6));

// Bean Counting
function countBs(str){
  return `There is ${countChar(str, "B")} in ${str}`;
}
console.log(countBs("BeanBnnb"));

function countChar(str, char){
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === char){
      count += 1;
    }
  }
  return count;
}
console.log(countChar("AhmadSAleh", "A"));

// Chapter 4
// padStart()
const someNum = '5';
console.log(someNum.padStart(3,0));
// Practical Example:
const fullNum = '2034399002125581';
const last4digits = fullNum.slice(-4);
console.log(last4digits);
const maskedNum = last4digits.padStart(fullNum.length, "*");
console.log(maskedNum);

// repeat()
console.log("LA ".repeat(3));

// Interesting way to access Object's property
let person = {
  name: "Ahmad",
  age: 29,
  job: "Web Developer"
};
let {job} = person;
console.log(job); // -> Web Developer

// Chapter 4 Excercises PAGE 78
// The sum of a range
function range(start, end, increment = 1){
  let rangeArr = [];
  for(let i = start; i <= end; i+= increment){
    rangeArr.push(i);
  }
  return rangeArr;
}
console.log(range(2,8,2));

function sum(arr){
  let total = 0;
  for(let i of arr){
    total += i;
  }
  return total;
}
console.log(sum(range(1,10)));

// Reversing an Array
/* This function reverses an array without changing the original */
function reverseArray(arr){
  let reversed = [];
  for(let i = arr.length-1 ; i >= 0; i--){
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray(["A", "B", "C"]));

/* This function reverses an array and changes the original */
let arrayValue = [1, 2, 3, 4, 5];
function reverseItself(arr){
  let reversed = reverseArray(arr);
  for(let i = 0; i < arr.length; i++){
    arr[i] = reversed[i];
  }
  return arr;
}
reverseItself(arrayValue);
console.log(arrayValue);

// Array to List or "Object", Page 79
function arrayToList(arr){
  function createList(arr, i){
    if(i == arr.length -1){
      return {
        value: arr[i],
        rest: null
      }
    }else{
      return {
        value: arr[i],
        rest: createList(arr, i+1)
      }
    }
  }
 return createList(arr, 0);
}
let myList = arrayToList([10,20,30]);
console.log(myList);

// List to Array
function listToArray(obj){
  let myArr = [];
  let objKeys = Object.keys(obj);
  function pushIt(myObj){
    if(myObj[objKeys[1]] === null){
      myArr.push(myObj[objKeys[0]]);
    }else{
      myArr.push(myObj[objKeys[0]]);
      pushIt(myObj[objKeys[1]]);
    }
  }
  pushIt(obj);
  return myArr;
}
console.log(listToArray(myList));

// Prepend to a List
function prepend(elem, obj){
  return {
    value: elem,
    rest: obj
  }
}
let prepended = prepend(5, myList);
console.log(prepended);
console.log(listToArray(prepended));

// nth function
function nth(list, val){
  return listToArray(list)[val];
}
console.log(nth(myList, 1));

// Another way:
// Array to List
function arrToList(arr){
  let list = null;
  for(let i = arr.length -1; i >= 0; i--){
    list = {
      value: arr[i], // First loop will produce value: 30
      rest: list // First loop will produce rest: null
    };
  }
  return list;
}
console.log(arrToList([10,20,30]));

// List to Array @@@@@@@ VERY IMPORTANT @@@@@@@@
function listToArr(list){
  let arr = [];
  for(let node = list; node; node = node.rest){
    arr.push(node.value);
  }
  return arr;
}
console.log(listToArr(myList));



// Objects Comparison
let obj01 = {
  here: {
    is: "an",
    hi: {
      name: "Ahmad"
    }
  },
  object: null
};

let obj02 = {
  object: null,
  here: {
    is: "an",
    hi: {
      name: "Ahmad"
    }
  }
};
/* Although they look alike but they are not same */
console.log(obj01 == obj02); // returns false
/* So, I will create a function that compares 2 objects and return
true if they look alike */

function deepEqual(a, b) {
  console.log(a);
  console.log(b);
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object"){
        console.log(a);
        console.log(b);
        return false;
      } 

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    console.log(key);
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])){
      return false;
    } 
  }

  return true;
}
console.log(deepEqual(obj01, obj02));

// Chapter 5:
// Higher Order Functions
function greaterThan(n){
  return m => m > n;
}
// function greaterThan(n){
//   return function(m){
//     return m > n;
//   }
// }
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(15)); // -> true

/* This function converts the arguments into an array, then it passes that array to fn as an argument to do something with it.
NOTE that fn has to be a function that accepts an array as an argument */
function noisy(fn){
  return function(...args){
    let result = fn(...args);
    return result;
  };
}
console.log(noisy(Math.min)(3,2,1));

// Chapter 5 Excercises
// Flattening
let myArray = [[1, 2, 3], [4, 5], [6]];
function flatten(arr){
  return arr.join(",").split(",").map(x => parseInt(x));
}
console.log(flatten(myArray));

// OR:
function flattening(arr){
  return arr.reduce((a,b) => a.concat(b));
}
console.log(flattening(myArray));

// Your Own Loop
function loop(start, test, update, body){
  for(let i = start; test(i); i = update(i)){
    body(i);
  }
}
loop(3, n => n > 0, n => n - 1, console.log);

// Everything using for loop
function every(array, test){
  for(let elem of array){
    if(!test(elem)) return false;
  }
  return true;
}
console.log(every([1, 3, 5], n => n < 10));

// Everything using some method
function everything(array, test){
  if(array.some(n => !test(n))){
    return false;
  }
  return true;
}
console.log(everything([1, 3, 5], n => n < 10));

// Check This Out
var SCRIPTS = [
  {
    name: "Armenian",
    ranges: [[1329, 1367], [1369, 1376], [1377, 1416], [1418, 1419], [1421, 1424], [64275, 64280]],
    direction: "ltr",
    year: 405,
    living: true,
    link: "https://en.wikipedia.org/wiki/Armenian_alphabet"
  },
  {
    name: "Arabic",
    ranges: [[1536, 1541], [1542, 1548], [1549, 1563], [1564, 1565], [1566, 1567], [1568, 1600], [1601, 1611], [1622, 1648], [1649, 1757], [1758, 1792], [1872, 1920], [2208, 2229], [2230, 2238], [2260, 2274], [2275, 2304], [64336, 64450], [64467, 64830], [64848, 64912], [64914, 64968], [65008, 65022], [65136, 65141], [65142, 65277], [69216, 69247], [126464, 126468], [126469, 126496], [126497, 126499], [126500, 126501], [126503, 126504], [126505, 126515], [126516, 126520], [126521, 126522], [126523, 126524], [126530, 126531], [126535, 126536], [126537, 126538], [126539, 126540], [126541, 126544], [126545, 126547], [126548, 126549], [126551, 126552], [126553, 126554], [126555, 126556], [126557, 126558], [126559, 126560], [126561, 126563], [126564, 126565], [126567, 126571], [126572, 126579], [126580, 126584], [126585, 126589], [126590, 126591], [126592, 126602], [126603, 126620], [126625, 126628], [126629, 126634], [126635, 126652], [126704, 126706]],
    direction: "rtl",
    year: 400,
    living: true,
    link: "https://en.wikipedia.org/wiki/Arabic_script"
  },
  {
    name: "Latin",
    ranges: [[65, 91], [97, 123], [170, 171], [186, 187], [192, 215], [216, 247], [248, 697], [736, 741], [7424, 7462], [7468, 7517], [7522, 7526], [7531, 7544], [7545, 7615], [7680, 7936], [8305, 8306], [8319, 8320], [8336, 8349], [8490, 8492], [8498, 8499], [8526, 8527], [8544, 8585], [11360, 11392], [42786, 42888], [42891, 42927], [42928, 42936], [42999, 43008], [43824, 43867], [43868, 43877], [64256, 64263], [65313, 65339], [65345, 65371]],
    direction: "ltr",
    year: -700,
    living: false,
    link: "https://en.wikipedia.org/wiki/Latin_script"
  },
];

function characterScript(code){
  for(let script of SCRIPTS){
    if(script.ranges.some(function([from, to]){
      return code >= from && code < to;
    })){ // if some() is true -> return script
      return script;
    }
  }
  return null;
}
console.log(characterScript(121));
console.log(String.fromCharCode(121)); // FYI
