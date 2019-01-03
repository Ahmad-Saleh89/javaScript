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