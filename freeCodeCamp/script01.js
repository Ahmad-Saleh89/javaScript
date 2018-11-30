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
let anyStr = "let us have some fun with sun";
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


let text = "<h1>Winter is coming</h1>";
let lazyRegex = /<?.h1>/g; 
let lazyResult = text.match(lazyRegex);
console.log(lazyResult);

