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