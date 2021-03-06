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

// Wherefore art thou : Challenge 4
/* Return a collection of objects that contains the provided source / keys & values must match */
function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source); // Returns an array of source keys ["apple", "bat"]
  return collection.filter(obj => { // Remember that filter returns true or false
    for(let i = 0; i < sourceKeys.length; i++){
        if(!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]){
        return false; // test failed
      }
    }
    return true; // test passed
  }); 
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));

// Spinal Tap Case : Challenge 5
function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().split(/[^A-Za-z0-9]/).join("-");
}
console.log(spinalCase('AllThe-small Things'));

// Pig Latin Language : Challenge 6
function translatePigLatin(str) {
  // Detect only the first vowel and split
  let splitIt = str.split(/[aeiou]/, 1);
  // if the first char is a vowel
  if(splitIt[0].length == 0){
    return str + "way";
  }
  // anything else
  return str.slice(splitIt[0].length) + splitIt[0] + "ay";
}
console.log(translatePigLatin("eight"));

// Search and Replace : Challenge 7
function myReplace(str, before, after) {
  // Check case if lower or upper
  if(before !== before.toLowerCase()){ // if upper
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));

// DNA Pairing : Challenge 8
function pairElement(str) {
  let dnaArr = [...str];
  let finalArr = [];
  for(let i = 0; i < dnaArr.length; i++){
    var paired;
    switch (dnaArr[i]){
      case "C":
        paired = "G";
        break;
      case "A":
        paired = "T";
        break;
      case "G":
        paired = "C";
        break;
      case "T":
        paired = "A";
        break;
      default:
        paired = "N/A";
    }
    finalArr.push([dnaArr[i], paired]);
  }
  return finalArr;
}
console.log(pairElement("GCG"));

// DNA Pairing: using for loop and Object
function pairDna(str){
  let dnaArr = [...str];
  let dnaObj = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }
  let finalArr = [];
  for(let i = 0; i < dnaArr.length; i++){
    finalArr.push([dnaArr[i], dnaObj[dnaArr[i]]]);
  }
  return finalArr;
}
console.log(pairDna("GCG"));

// DNA pairing: another way
function dnaPair(str){
  var pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }
  var arr = str.split("");
  return arr.map(x => [x , pairs[x]]);
}
console.log(dnaPair("GCG"));

// Missing Letters : Challenge 9
function fearNotLetter(str) {
  let strArr = [...str];
  let uniCode = strArr.map(x => str.charCodeAt(strArr.indexOf(x)));

  for(let i = 0; i < uniCode.length; i++){
    if(uniCode[i+1] - uniCode[i] >= 2){
     return String.fromCharCode(uniCode[i] + 1);
    }
  }
}

console.log(fearNotLetter("abce"));

// Sorted Union : Challenge 10
function uniteUnique(arr) {
  let args = [...arguments];
  let slicedArgs = args.slice(1);
  console.log(slicedArgs);
  let final = slicedArgs.map(elem => { // loop through the sliced
       return elem.filter(x => { // return true of false
        for(let i = 0; i < args[0].length; i++){
         if(x === args[0][i]){
          return false;
        }
      }
      return true;
    });
  });

  let result =[];
  for(var item in final){
    for(var val of final[item]){
      if(final[item].length > 0){
        result.push(val);
      }
    }
  }
  return args[0].concat(result);
}
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));

// Less confusing code
function uniteThem(arr) {
  let args = [...arguments];
  let slicedArgs = args.slice(1);
  console.log(slicedArgs);
  let final = [];
  slicedArgs.map(elem => {
    for(let i = 0; i < elem.length; i++){
      if(!args[0].includes(elem[i])){
        final.push(elem[i]);
      }
    }
  });
  return args[0].concat(final);
}
console.log(uniteThem([1, 3, 2], [1, [5]], [2, [4]]));

// Another way:
function unite(){
  let args = [...arguments];
  let concatArgs = []; // join() doesn't help here
  for(let i = 0; i < args.length; i++){
    concatArgs = concatArgs.concat(args[i]);
  }
  // Look for the repeated elements and return false
  let final = concatArgs.filter(function(item, index){
    /*the indexof the repeated elem will not equal 'index' 
    because indexOf() will catch the first appearance only, so: */
    return concatArgs.indexOf(item) === index;
  });
  return final;
}
console.log(unite([1, 3, 2], [1, [5]], [2, [4]]));

// Convert HTML Entities : Challenge 11
function convertHTML(str) {
  let htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  let strArr = str.split("");
  let newArr = strArr.map(x => {
    for(var entity in htmlEntities){
      if(x === entity){
        return htmlEntities[entity];
      }
    }
    return x;
  });
  return newArr.join("");
}
console.log(convertHTML("Dolce< & Gabbana"));

// Convert HTML Entities : advanced
function convertEntities(str){
  let htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  return str.split("").map(x => htmlEntities[x] || x).join('');
}
console.log(convertEntities("Dolce< & Gabbana"));

// Sum All Odd Fibonacci Numbers : Challenge 12
function sumFibs(num) {
  if(num === 1){
    return 1;
  }
  // First get all fibonacci numberes (odds & evens)
  let fibonacci = [1,1];
  for(let i = 0; i<= num; i++){
    if(fibonacci[i+1] <= num){
      fibonacci.push(fibonacci[i] + fibonacci[i+1]);
    }
  }
  // Then get only odds and less than provided num
  fibonacci= fibonacci.filter(x => x <= num && x % 2 == 1);
  // return sum
  return fibonacci.reduce((total, item) => total+item);
}
console.log(sumFibs(1000));


// Sum all primes : Challenge 13
function sumPrimes(num) {
  let myNums = [];
  for(let i = 3; i <= num; i+=2){
    myNums.push(i);
  }
 myNums = myNums.filter(x => {
    if(x === 3 || x === 5 || x === 7 || x === 11){
      return true;
    }else if(x % 3 === 0 || x % 5 === 0 || x % 7 === 0 || x % 11 === 0){
      return false;
    }
    return true;
  });
  let j = 4;
  while(Math.pow(myNums[j],2) < num){
    myNums.splice(myNums.indexOf(Math.pow(myNums[j],2)),1);
    j++;
  }
  let u = 4;
  let h = u + 1;
  while(myNums[u] * myNums[h] <= num){
    while(myNums[u] * myNums[h] <= num){
      myNums.splice(myNums.indexOf(myNums[u] * myNums[h]),1);
      h++;
    }
    u++;
    h = u+1;
  }
  console.log(myNums);
  return 2 + myNums.reduce((x,y) => x+y);
}
console.log(sumPrimes(10));


// Here is a GREAT way to solve it. Try to understand it. It's really easy
function sumPrime(num) {
  // Function to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [2];
    for (i = 3; i <= max; i+=2) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          // make all multiples equal true, so they don't get pushed
          sieve[j] = true; 
        }
      }
    }
    return primes;
  }
  // Sum All primes
  var primes = getPrimes(num);
  return primes.reduce((total, item) => total + item);
}
console.log(sumPrime(977));

// Smallest Common Multiple: Challenge 14
/* Review "Euclidean Algorithm" in order to understand it.
gcd is "Greatest Common Diviser".
lcd is "Lowest Common Multiple" */
function smallestCommon(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
  range.push(i);
  }

  // can use reduce() in place of this block
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
  var GCD = gcd(lcm, range[i]);
  // debugger;
  lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {    // Implements the Euclidean Algorithm
    if(x%y === 0){
      return y;
    }else{
      return gcd(y, x%y);
    }
  }
}
console.log(smallestCommon([2,10]));

/* The coming approach is long, however it is more efficent.
The main idea is to apply the "Euclidean Algorithm" , check YouTube to understand it. 
@In this Approach:
- It is easier if the first elem in newArr is an even number
- Also, for the first 3 elem, no need to apply "Euclidean Algorithm" on each elem (it is redundant)... just return product.
- No need to apply "Euclidean Algorithm" on elements smaller than (1/2 of the biggest even element) Ex: if the number is divisble by 8 -> it is divisible by 4 for sure  */

function smallestCommons(arr) {
  let newArr = [];
  for(let i = Math.max(...arr); i >= Math.min(...arr); i--){
    newArr.push(i);
  }
  let odd = 1;
  if(newArr[0]%2 !== 0){
    odd = newArr[0];
    newArr.splice(0,1);
  }
  if(newArr.length === 2){
    return odd * newArr[0] * newArr[1];
  }

  let product = (odd * newArr[0] * newArr[1] * newArr[2]) /2;

  if(newArr.length === 3){
    return product;
  }else if(Math.min(...newArr) <= newArr[0]/2){
    newArr = newArr.filter(x => x > newArr[0]/2);
    if(newArr.length <= 3){
      return odd * smallestCommons(newArr);
    }
  }
    for(let i = 3; i < newArr.length; i++){
      var greatestCD = gcd(product, newArr[i]);
      product = product * newArr[i]/greatestCD;
    }
    return product;

    function gcd(x, y) {
   // Implements the Euclidean Algorithm
      if (y === 0)
          return x;
      else
          return gcd(y, x%y);
      }
}
console.log(smallestCommons([9,13]));

// ******************************************** //
// Drop It: Challenge 15
function dropElements(arr, func) {
  let myArr = arr.map(func);
  arr.splice(0,myArr.indexOf(true));
  if(arr.length === myArr.length && myArr[myArr.length-1] === false){
    return [];
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));

// Here is also another basic way to do it:
function dropIt(arr, func) {
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift(); // delete first elem
    }
  }
  return arr;
}
console.log(dropIt([1, 2, 3, 4], function(n) {return n >= 3;}));

// Advanced way:
function dropThem(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift(); // Delete first element
  }
  return arr;
}
console.log(dropThem([1, 2, 3, 4], function(n) {return n >= 3;}));

// **************************************** //
// SteamRoller : Challenge 16
function steamrollArray(arr) {
  let steamed = [];
  function checkType(elem){
    if(typeof elem !== "object"){
      steamed.push(elem);
    }else if(typeof elem === "object" && elem.length === undefined){
      steamed.push(elem);
    }
    else if(Array.isArray(elem) && elem.length === 1){
       checkType(elem[0]);
    }else if(elem.length > 1){
       elem.map(x => checkType(x));
    }
    return steamed;
  }
  return checkType(arr);
}
console.log(steamrollArray([1, {}, [3, [[4]]]]));

// Another interesting way:
// Basically convert arr into a string and do some modifications
function steamroller(arr) {
  return arr.toString()
    .replace(',,', ',')       // "1,2,,3" => "1,2,3"
    .split(',')               // ['1','2','3']
    .map(function(v) {
      if (v == '[object Object]') { // bring back empty objects
        return {};
      } else if (isNaN(v)) {        // if not a number (string)
        return v;
      } else {
        return parseInt(v);         // if a number in a string, convert it
      }
    });
}
console.log(steamroller([1, {}, [3, [[4]]]]));

/* ****************************************** */
// Binary Agent: Challenge 17
function binaryAgent(str) {
  let myArr =  str.split(" ");
  let decimal = [128,64,32,16,8,4,2,1];
  myArr = myArr.map(elem => {
    let biToDec = 0;
    for(let i = 0; i < elem.length; i++){
      if(elem[i] == 0){
        biToDec = biToDec;
      }else{
        biToDec += decimal[i];
      }
    }
    return biToDec;
  });
  return myArr.map(x => String.fromCharCode(x)).join("");

}
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// Another way:
function biAgent(str) {
  biString = str.split(' ');
  uniString = [];

/* The second parameter in parseInt() determines which numeral system to be used and it's called the radix*/

  for(i=0;i < biString.length;i++){
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  return uniString.join('');
}
console.log(biAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// ************************************ //
// Truth Check: Challenge 18
function truthCheck(collection, pre) {

  let truthy = collection.filter(obj => obj[pre]); // filters only the true ones
  return truthy.length === collection.length; // check boolean
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

// Another way:
function truthyTruth(collection, pre){
  return collection.every(obj => obj[pre]);
}
console.log(truthyTruth([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

// ************************************** //
// Arguments Optional : Challenge 19
function addTogether(){
  let args = [...arguments];
  let filtered = args.filter(x => Number.isInteger(x));
  if(filtered.length < args.length){
    return undefined;
  }
  if(args.length === 1){
    return function(y){
      if(Number.isInteger(y)){
        return args[0] + y;
      }
     return undefined;
    }
  }
  return args.reduce((a,b) => a+b);
}
console.log(addTogether(2,3));
console.log(addTogether(5,[6])); // returns undefined
console.log(addTogether(3) ([6])); // returns udefinded
console.log(addTogether(3)(6)); // return 9

// ************************************** //
// Make a Person : Challenge 20
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
bob.setFirstName("ahmad");
bob.getFirstName();
bob.setFullName("John Doe");
bob.getFullName();

// ************************************//
// Map the Debris: Challenge 21
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
 return arr.map(obj => {
  let latitude = obj.avgAlt;
  delete obj.avgAlt;
  obj.orbitalPeriod = latitude;
  return obj;
  // Not finished yet
 });
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));

// ****************************************** //
// Advanced Algorithms

// Roman Numeral Conventer: 
function convertToRoman(num) {
  const roman = [["I","II","III","IV","V","VI","VII","VIII","IX","X"],["X","XX","XXX","XL","L","LX","LXX","LXXX","XC","C"],["C","CC","CCC","CD","D","DC","DCC","DCCC","CM","M"],["M"]];
  if(num <=10){
    return roman[0][num-1];
  }
  if(num > 10){
    let splited =  num.toString().split("").reverse();
    splited = splited.map(x => parseInt(x));
 
  let result = [];
  for(let b = 0; b < splited.length; b++){
    if(b < 3){
      result.push(roman[b][parseInt(splited[b])-1]);
    }else if(b === 3){
      for(let i = 0; i < splited[3]; i++){
        result.push("M");
      }
    }else{
      return undefined;
    }
  }
return result.reverse().join("");
}
}

convertToRoman(36);


// ***************************************//
// Phone Number Validator:
/* Note: this is very long way to solve it. The more elegent way is to use RegEx */
function telephoneCheck(str) {
  if(str.length > 16 || str.length < 10){
    return false;
  }
  let phoneArr = str.split("");
  let validNum = [];
  for(let i = 0; i < phoneArr.length; i++){
    if(Number.isInteger(parseInt(phoneArr[i])) || phoneArr[i] === "(" || phoneArr[i] === ")" || phoneArr[i] === " " || phoneArr[i] === "-"){
      validNum.push(phoneArr[i]);
    }
  }
  if(!Number.isInteger(parseInt(validNum[0])) && validNum[0] !== "("){
    return false;
  }
  let paranth = [];
  for(let x = 0; x < validNum.length; x++){
    if(x < 3 && validNum[x] === "("){
      paranth.push(validNum[x]);
    }else if(x >= 3 && x < 7 && validNum[x] === ")"){
      paranth.push(validNum[x]);
    }
  }
  if(paranth.length === 1){
    return false;
  }
 let  onlyNums = validNum.filter(x => parseInt(x) || x === "0");
  if(onlyNums.length > 10 && onlyNums[0] !== "1"){
    return false;
  }
  return validNum.length === phoneArr.length;
}

console.log(telephoneCheck("0 (757) 622-7382"));

// ****************************************//
// Cash Register
// There is shorter way: Check FreeCodeCamp site.
function checkCashRegister(price, cash, cid) {
  let cost = price;
  let givinCash = cash;
  let allCash = 0;
  for(let i = 0; i < cid.length; i++){
    allCash += cid[i][1];
  }
  allCash = allCash.toFixed(2);
  console.log(allCash);
  let fund = givinCash - cost;
  // First Condition: 
  if(fund > allCash){
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }
  let standard = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];

  fund = fund.toFixed(2);
  console.log(fund);
  if(fund === allCash){
    return {
      status: "CLOSED",
      change: cid
    }
  }
let change = [];
  for(let x = 8; x >= 0; x--){
    if(fund > standard[x][1]){
      if(fund >= cid[x][1]){
        change.push([cid[x][0],cid[x][1]]);
        fund = (fund - cid[x][1]).toFixed(2);
      }else if(fund < cid[x][1]){
        let available = (fund - (fund % standard[x][1])).toFixed(2);
        fund = (fund % standard[x][1]).toFixed(2)
        console.log(fund);
        change.push([cid[x][0], parseFloat(available)]);
      }
    }
  }

  let finalCheck = 0;
  for(let j = 0; j < change.length; j++){
    finalCheck += change[j][1];
  }
  finalCheck = finalCheck.toFixed(2);
  fund = givinCash - cost;
  if(finalCheck != fund){
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }
  return {
    status: "OPEN",
    change: change
  }

}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
