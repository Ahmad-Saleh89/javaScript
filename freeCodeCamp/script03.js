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
    "imdbRating": "8.8"
 },
 {  
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "imdbRating": "8.6"
 },
 {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "imdbRating": "9.0"
 },
 {  
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "imdbRating": "8.3"
 },
 {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
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

// Callback functions
var s = [23, 65, 98, 5];

/* Trying to make a function acts like map() method */
Array.prototype.myMap = function(callback){
  var newArray = [];
// this.forEach(a => newArray.push(callback(a)));
this.forEach(function(x){
  newArray.push(callback(x));
});
  return newArray;
};
var new_s = s.myMap(function(item){
  return item * 2;
});
console.log(new_s);
