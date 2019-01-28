// Closures in depth - JavaBrains
let a = 10;
function outer(){
  let b = 20;
  var inner = function(){ // Remember functions are objects in JS
    a++;
    b++;
    console.log(a);
    console.log(b);
  };
  return inner;
}

var innerFn1 = outer();
console.dir(innerFn1);
innerFn1();

var innerFn2 = outer(); // This will create a new variable b
console.dir(innerFn2);
innerFn2();

console.log(a);


// Now this function should make more sense
function score(){ // Closure
  var scr = 0;
  var update = function(correct){
    if(correct){
      scr++;
    }
    return scr;
  }
  return update;
}

var storeScore = score();
console.log(storeScore(true));
console.log(storeScore(false));
console.log(storeScore(true));

console.dir(storeScore);
/* Notice that each time storeScore gets called, the value of scr gets updated. */

/* HOWEVER, When we assign a new variable such as updateScore, the scr now has
nothing to do with the previous one.... It's whole new closure...
In other words, it will start over */
var updateScore = score();
console.log(updateScore(true));
console.log(updateScore(true));

// Closures in callbacks
var x = 15;

var fn = function(){
  console.log(x);
}
// Wait for 3 seconds
setTimeout(fn, 3000);

/* ******* The Module Pattern  ****** */
// First consider this object
var person1 = {
  "firstName": "John", // Public
  "lastName": "Smith", // Public
  "getFirstName": function(){
    return this.firstName;
  },
  "getLastName": function(){
    return this.lastName;
  }
};
console.log(person1.firstName); // will print John
console.log(person1.getFirstName()); // will print John as well
/* Note that the prop firstName is accessible directly from outside the person1 scope so if you do: person1.firstName you will get John.
- So what if you want to make those properties private?
Here where closures come handy */

// Now consider this
function newStudent(){
  let school = "UNL"; // Private
  let major = "Computer Science"; // Private

  var student = {
    "getSchool": function(){
      return school;
    },
    "getMajor": function(){
      return major;
    },
    "setSchool": function(x){
      school = x;
    },
    "setMajor": function(x){
      major = x;
    }
  };
  return student;
}

let ahmad = newStudent();
console.log(ahmad.getSchool());
// console.log(ahmad.school); This will print undefined
ahmad.setSchool("UNO");
console.log(ahmad.getSchool()); // prints UNO

let jane = newStudent();
console.log(jane.getSchool()); // will print UNL not UNO

