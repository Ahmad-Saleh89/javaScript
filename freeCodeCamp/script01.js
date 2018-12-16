/* *** Regular Expressions ***** */
// Using the Test Method
let myString = "Ahmad is a smart person";
let myRegex = /is/;
let result = myRegex.test(myString);
console.log(result);

// Another way to use test method
let myReg2 = new RegExp("smart");
let res = myReg2.test(myString);
console.log(res);

// Match literal (exact) string
let waldo = "Somewhere waldo is hiding in this text";
let waldoReg = new RegExp('waldo');
let waldoResult = waldoReg.test(waldo);
console.log(waldoResult);

// Match a literal string with different possibilities
let petStr = "James has a pet cat";
let petReg = /cat|dog|bird|fish/;
let petResult = petReg.test(petStr);
console.log(petResult);

// Ignore case while matching, using i flag
let someStr = "AhmadIsANiceWebDeveloper";
let someReg = /isanice/i;
let someRes = someReg.test(someStr);
console.log(someRes);

// Extract Matches with match method
let extractStr = "Ahmad is an awesome web developer";
let webReg = /web/;
let extractResult = extractStr.match(webReg);
console.log(extractResult);

// Find more than the first match using the global g flag
let ahmadStr = "ahmad is awesome, Ahmad is amazing, ahMad is briliant";
let gReg = /ahmad/gi; // --> i is used to ignore case
let gResult = ahmadStr.match(gReg);
console.log(gResult);

// Match anything with wildcard Period/Dot
let anyStr = "let us have some fun with sun un";
let unReg = /.un/g;
let unResult = anyStr.match(unReg);
let funResult = unReg.test(anyStr);
console.log(funResult);
console.log(unResult);

// Match single character with multiple possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelReg = /[aeiou]/gi;
let vowelResult = quoteSample.match(vowelReg);
console.log(vowelResult);

// Match letters of the alphabet
let quoteStr = "The quick brown fox jumps over the lazy dog";
let alphabetReg = /[a-k]/gi;
let alphaResult = quoteStr.match(alphabetReg);
console.log(alphaResult);

// Match Range of numbers and letters
let mixedStr = "Blueberry 3.44 are 99 delicious";
let mixedReg = /[h-s2-6]/ig;
let mixedResult = mixedStr.match(mixedReg);
console.log(mixedResult);

// Match Not Specified Characters using ^
let randomStr = "3 Blind mice!@#";
let randomReg = /[^aeiou0-9 ]/gi; // No vowels, no numbers, no spaces
let randomResult = randomStr.match(randomReg);
console.log(randomResult);

// Match Characters that occur one or more times using +
let city = "Mississippi is a nice city ssss";
let sReg = /s+/ig;
let sResult = city.match(sReg);
console.log(sResult);

// Match Characters that occur zero or more times using *
let soccerWord = "gooooooooal";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goReg = /go*/;
console.log(soccerWord.match(goReg));
console.log(gPhrase.match(goReg));
console.log(oPhrase.match(goReg));

// Check this out
let titanic = "titanic tgghhhabb";
let tiReg = /t[a-z]*a/g; // --> /t whatever a/g
let tiResult = titanic.match(tiReg);
console.log(tiResult);

// See the difference with and without ?
let text = "<h1>Winter is coming</h1>";
let lazyRegex = /<?.h1>/g; 
let lazyResult = text.match(lazyRegex);
console.log(lazyResult);

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(5);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
    row = [];
  }

  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

let thisArray = [3,5,6];
let thatArray = [...thisArray];
console.log(thatArray);


/* Only push subArrays that don't contain the elem */
function filteredArray(arr, elem) {
  let newArr = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i].indexOf(elem) === -1){
       newArr.push(arr[i]);
      }
    }
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 6));
console.log(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter"));

/*******   Basic Data Structures *********** */
// Add Key-Value Pairs to Objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
console.log(foods);

// Modify an Object nested within an Object
let userActivity = {
  id: 534346,
  date: 'Jan 1, 2017',
  data: {
    totalUsers: 89,
    online: 71,
    onlineStatus: {
      active: 55,
      away: 16
    }
  }
}
userActivity.data.totalUsers = 92;
userActivity.data.onlineStatus.active = 50;
console.log(userActivity);

// Access Property Names with Bracket Notation
/* @@@@ Using the same foods Objects @@@@@
 Return the price of scanned item */
function checkInventory(scannedItem){
  return foods[scannedItem];
}
console.log(checkInventory('apples'));

// Remove Object properties
delete foods.strawberries;

// Check if an Object has a property
let users = {
  Alan: {
    age: 25,
    online: true
  },
  Jeff: {
    age: 34,
    online: true
  },
  Sarah: {
    age: 55,
    online: true
  },
  Ryan: {
    age: 18,
    online: true
  }
}

function isEveryonehere(objArray, obj){
  // First way to solve it
  // for(let i = 0; i < objArray.length; i++){
  //   if(obj.hasOwnProperty(objArray[i]) === false){
  //     console.log('Sorry but ' + objArray[i] + ' is not among the users!');
  //     return false;
  //   }
  // }
  // console.log('All users are here! Yaaay!');
  // return true;


  let myBoolean = true;
  objArray.forEach(function(user){
    if(obj.hasOwnProperty(user) === false){
      console.log(user + ' does not exist in the list');
      myBoolean = false;
    }
  });
  return myBoolean;

}
console.log(isEveryonehere(['hala', 'Sarah', 'Jeff', 'Ryan', 'Brittany'] , users));
console.log(isEveryonehere(['Sarah', 'Jeff', 'Ryan', 'Alan'] , users));

function isSomeuserhere(user, obj){
  return user in obj;
}
console.log(isSomeuserhere('Jeff', users));
console.log(isSomeuserhere('Ahmad', users));

function countOnline(obj) {
  let count = 0;
for(let user in obj){
  if(obj[user].online === true){
   count++;
  }
}
 return count;
}
console.log(countOnline(users));

// Generate an Array of all Object keys with Object.keys()
function getArrayOfUsers(obj){
  console.log(Object.keys(obj));
  return Object.keys(obj);
}
getArrayOfUsers(users);

// Modify an Array Stored in an Object
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend){
  userObj.data.friends.push(friend);
  console.log(userObj.data.friends);
  return userObj.data.friends;
}
addFriend(user, 'pete');

/***************************************/
/****  Basic Algorithm Scripting   ****/
/***************************************/

// Convert Celsius to Fahrenheit
function convertToF(celsius){
  return celsius * (9/5) + 32;
}
console.log(convertToF(-30));

// Reverse a String
function reverseString(str){
 str = str.split("").reverse().join("");
  console.log(str);
  return str;
}
reverseString('Ahmad');

// Factorialize a Number 
function factorialize(num){
  let result = 1;
  if (num > 0 && Number.isInteger(num)){
    for (let i = 1; i <= num; i++){
      result = result * i;
    }
  }else if(num == 0){
    console.log(1);
    return 1;
  }else{
    console.log(num + " cannot be factorialized!")
    return false;
  }
  console.log(result);
}
factorialize(6);

// Factorializing using Recursion
function factor(num){
  // Termination condition
  if(num < 0 || Number.isInteger(num) === false){
    console.log("Boooo!")
    return false;
  }
  // A Base Case: 
  else if(num == 0){
    return 1;
  }
  // The Recursion
  else{
   return num * factor(num-1);
  }
}
console.log(factor(5));

// Find the Longest Word in a String
// First Way: ES5
function findLongestWord(str){
  function elemLength(elem){
    return elem.length;
  }
  // split str and find the length of each element
  var strArray = str.split(" ").map(elemLength);
  // Return the max num
  var max = strArray.reduce(function(a,b){
    return Math.max(a,b);
  });
  return max;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// Second Way: ES6
function longestWord(str){
  let strArray = str.split(" ").map((elem) => elem.length);
  return Math.max(...strArray);
}
console.log(longestWord("The quick brown fox jumped over the lazy dog"));

// Return Largest Numbers in Arrays:
function largestOfFour(arr) {
  let oneArray = arr.map(function(elem){
    return Math.max(...elem);
  });
  return oneArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// Confirm the Ending
function confirmEnding(str, target){
  for(let i = 0; i <= target.length-1; i++){
    if(target[i] !== str[str.length-target.length + i]){
      console.log(target[i]);
      console.log(str[str.length-target.length+i]);
      return false;
    }
  }
  return true; 
}
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "pen"));

// Confirm the Ending: Another way
function confirmEnd(str, target){
  // Here we are returning the comparson result: true or false
  return str.slice(str.length - target.length) === target;
}
console.log(confirmEnd("He has to give me a new name", "nami"));

// Simplest way is to use the built-in endsWith()
function confirmEndd(str, target){
  return str.endsWith(target);
}
console.log(confirmEndd("He has to give me a new name", "nami"));
console.log(confirmEndd("He has to give me a new name", "name"));

// Repeat a String: using for loop
function repeatStringNumTimes(str, num){
  if(num < 0){
    return "";
  }
  let repeatedStr = str;
  for(let i = 1; i < num; i++){
   str += repeatedStr;
  }
  return str;
}
console.log(repeatStringNumTimes("abc", 3));

// Repeat a string using recursion:
function repeatIt(str, num){
  if(num < 0){
    return "";
  }else if(num === 1){
    return str;
  }else{
    return str + repeatIt(str, num-1);
  }
}
console.log(repeatIt("ahmad", 3));

// Repeat a string using built-in repeat() method
function repeatMe(str, num){
  if(num < 0){
    return "";
  }else{
    return str.repeat(num);
  }
}
console.log(repeatMe("Hello ", 3));

// Truncate a String
function truncateString(str, num){
  if(num >= str.length){
    return str;
  }
  return str.substr(0,num) + "...";
}
console.log(truncateString("ahmadsaleh", 8));

// Find Element
function findElement(arr, func) {
for(let i = 0; i < arr.length; i++){
  if(func(arr[i]) === true){
    return arr[i];
  }
}
return undefined;
}
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));

// Boo Who Challenge: check if a value is boolean
function boowho(bool){
  if(bool === true || bool === false){
    return true;
  }
  return false;
}
console.log(boowho(null));

// check if a value is boolean: using typeof
function isBoolean(bool){
  if(typeof bool === Boolean){
    return true;
  }
  return false;
}
console.log(isBoolean(null));

// Title Case a Sentence
function titleCase(str){
  return str.split(" ").map(function(elem){
    var firstLetter = elem.charAt(0).toUpperCase();
    var  word = firstLetter + elem.slice(1).toLowerCase();
    return word;
  }).join(" ");
}
console.log(titleCase("Ahmad saleh is awesome"));

// Title Case a Sentence: another way
function capitalizeIt(str){
  return str.split(" ").map(function(elem){
    return elem.toLowerCase().replace(elem.charAt(0), elem.charAt(0).toUpperCase());
  }).join(" ");
}
console.log(capitalizeIt("ahmad is really an awesome person"));

// Slice and Splice
function frankenSplice(arr1, arr2, n){
  return arr2.slice(0,n).concat(arr1).concat(arr2.slice(n));
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));

// Falsy Bouncer
function bouncer(arr){
  return arr.filter(function(elem){
    if (Boolean(elem) === true){
      return elem;
    }
  });
}
console.log(bouncer([7, "ate", "", false, 9]));

// Falsy Bouncer:
function bouncerIt(arr){
  return arr.filter(Boolean);
}
console.log(bouncerIt([7, "ate", "", false, 9]));

// Where do I belong
function getIndex(arr, num){
  arr.push(num);
  return arr.sort((a,b) => a - b).indexOf(num);
}
console.log(getIndex([2, 5, 10], 15));

// Where do I belong
function getIndexOf(arr, num){
  return arr.concat(num).sort((a,b) => a - b).indexOf(num);
}
console.log(getIndexOf([2, 20, 10], 19));

// Mutations
function mutation(arr){
for(let i = 0; i < arr[1].length; i++){
  let mutatReg = new RegExp(arr[1][i], "gi");
  let mutatResult = mutatReg.test(arr[0]);
  if(mutatResult === false){
    return false;
  }
}return true;
}
console.log(mutation(["hello", "hell"]));

// Mutations: another way
function mutation2(arr){
  for (let i = 0; i < arr[1].length; i++){
    if(arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase())== -1){
      return false;
    }
  }return true;
}
console.log(mutation2(["AHmad is great", "gbae"]));

// Chunky Monkey
function chunky(arr, size){
  let chunked = []
  for(let i = 0; i < arr.length; i+=size){
    chunked.push(arr.slice(i, i+size));
  }
return chunked;
}
console.log(chunky(["a", "b", "c", "d", "h"], 2));

// Chunky Monkey: recursion
function chunk(arr, size){
  if(arr.length <= size){
    return [arr];
  }
  return [arr.slice(0, size)].concat(chunk(arr.slice(size), size));
}
console.log(chunk(["a", "b", "c", "d", "h"], 2));
