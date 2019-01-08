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