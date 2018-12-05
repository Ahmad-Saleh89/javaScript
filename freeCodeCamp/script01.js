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