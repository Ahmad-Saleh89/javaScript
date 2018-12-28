/* Functional Programing - Free Code Camp */
/**
 * A long process to prepare Green tea.
 * @return {string} A cup of green tea.
 */
const prepareGreenTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 */
const getGreenTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups++){
    const teaCup = prepareGreenTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4teamFCC = getGreenTea(10);

console.log(tea4teamFCC);

// Now let's make our (getGreenTea) function more flexible
/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 */
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function(): string} prepareTea the type of tea preparing function
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 */
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups++){
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
// Now let's prepare 5 cups of Green tea, and 7 of balck tea.
const greenTea4Team = getTea(prepareGreenTea, 5);
console.log(greenTea4Team);
const blackTea4Team = getTea(prepareBlackTea, 7);
console.log(blackTea4Team);

/* One of the main principles of functional programming is not
to alter a variable or an object */
// Let's take this example:
var bookList = ["Baskervilles", "The Electrodynamics", "Philosophiæ Naturalis", "Disquisitiones"];
// Our goal is: NO mutation occurs for bookList after adding or removing
function addBook(list, bookName){
  let newList = [...list];
  newList.push(bookName);
  return newList;
}
var myNewList = addBook(bookList, "Crime and Punishment");
console.log(myNewList);

function removeBook(list, bookName){
  let newList = [...list];
  if(newList.indexOf(bookName) >= 0){
    newList.splice(newList.indexOf(bookName), 1);
    return newList;
  }
}
var myNewerList = removeBook(bookList, "Philosophiæ Naturalis");
console.log(myNewerList);

var myNewestList = removeBook(addBook(bookList, "Learn JS"), "Baskervilles");
console.log(myNewestList);

// Advanced Way:
function add(list, bookName){
  return [...list, bookName];
}
var newBookList = add(bookList, 'History of Time');
console.log(newBookList);

function remove(list, bookName){
  return list.filter(a => a !== bookName);
}
var newerBookList = remove(bookList, 'The Electrodynamics');
console.log(newerBookList);
console.log(bookList);

// ///////////////////////////

var watchList = [
  {  
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Director": "Christopher Nolan",
    "imdbRating": "8.8"
 },
 {  
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Director": "Christopher Nolan",
    "imdbRating": "8.6"
 },
 {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Director": "Christopher Nolan",
    "imdbRating": "9.0"
 },
 {  
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Director": "Christopher Nolan",
    "imdbRating": "8.3"
 },
 {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Director": "James Cameron",
    "imdbRating": "7.9"
 }
];

var rating = [];
rating = watchList.map((obj) => {
  return { // --> return only title & rating
    "title": obj["Title"],
    "rating": obj["imdbRating"]
  }
}).filter((obj) => { // return rating >= 8 only
  return obj.rating >= 8;
});
// Here is another way to do the maping only / No Filter
// for(var i=0; i < watchList.length; i++){
//   rating.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
// }
console.log(rating); 

/* Use reduce to find the average IMDB rating of the movies 
directed by Christopher Nolan. */
// Filter Nolan's movies
let nolan = watchList.filter((obj) => obj["Director"] === "Christopher Nolan");
let nolanAvg = nolan.reduce(function(sum, item){
  return sum + parseFloat(item.imdbRating) / nolan.length;
}, 0);
console.log(nolan);
console.log(nolanAvg);


// Passing Functions as parameters
var s = [23, 65, 98, 5];

/* Trying to make a function acts like map() method */
Array.prototype.myMap = function(func){
  var newArray = [];
// this.forEach(a => newArray.push(callback(a)));
this.forEach(function(x){
  newArray.push(func(x));
});
  return newArray;
};
var new_s = s.myMap(function(item){
  return item * 2;
});
console.log(new_s);

/* Trying to make a function acts like filter() method */
var ftr = [23, 65, 98, 5];
Array.prototype.myFilter = function(func){
  var newArray = [];
  this.forEach(function(x){
    if(func(x) === true){
      newArray.push(x);
    }
  });
  return newArray;
}
var new_ftr = ftr.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_ftr);

// Slice Method
function sliceArray(arr, begin, end){
  var newArr = arr;
  return newArr.slice(begin, end);
}
var inputAnim = ["cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));

// Note that slice doesn't mutate the original array
function noMutate(cities){
  return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(noMutate(inputCities));

// Combine 2 arrays using concat() ---- Also does not mutate the original
function useConcat(original, attach){
  return original.concat(attach);
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(useConcat(first, second));

// sort method : it mutates the original
function alphabetical(arr){
  return arr.sort();
}
console.log(alphabetical(["a", "d", "c", "a", "z", "g"]));

// Sorting without mutation
var anyArr = [5, 6, 3, 2, 9, 11];
function noMutateSort(arr){
  let passedArr = [];
  return passedArr.concat(arr).sort((a, b) => a - b);
}
console.log(noMutateSort(anyArr));

// Split
function splitify(str) {
  return str.split(/\W/);
  // return str.split(/[^A-Za-z0-9_]/);
}
console.log(splitify("Hello World,I-am code"));

// Make a sentence
function sentensify(str) {
  return str.split(/\W/).join(" ");
}
console.log(sentensify("May-the-force-be-with-you"));

var blogTitle = " Winter  Is Coming";

// UrlSlug
function urlSlug(title) {
  return title.toLowerCase().split(" ").filter((a) => a !== "").join("-");
}

var winterComing = urlSlug(blogTitle);
console.log(winterComing);

// Use every() method
function checkPositive(arr) {
  return arr.every((val) => val >= 0);
}
console.log(checkPositive([1, 2, 3, -4, 5]));

// Use some() method
function somePositive(arr) {
  return arr.some((val) => val >= 0);
}
console.log(somePositive([1, 2, 3, -4, 5]));

// Introduction to Currying and Partial Application
function addThem(x) {
  return function(y){
    return function(z){
      return x + y + z;
    }
  }
}
console.log(addThem(10)(20)(30));