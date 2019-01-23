var ageee = 23;
function foo(){
  console.log(ageee);
  var ageee = 33;
}
foo();
// Object Literal
var john = {
  name: 'John',
  yearOfBirth: 1989,
  job: 'teacher'
};

// Function Constructor
var Person = function(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

/* The next method is better than associating the function directly
to the Person Object - It's separate, yet accessible */
Person.prototype.calculateAge = function(){
  console.log(2018 - this.yearOfBirth);
};

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1978, 'Designer');
var mark = new Person('Mark', 1948, 'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();


// Object.create
var personProto = {
  calculateAge: function(){
    console.log(2018 - this.yearOfBirth);
  }
};

// First way to do it:
var ahmad = Object.create(personProto);
ahmad.name = 'Ahmad';
ahmad.yearOfBirth = 1989;
ahmad.job = 'developer';
ahmad.calculateAge();

// Another way to do it:
var maher = Object.create(personProto, 
  {
    name: { value: 'Maher' },
    yearOfBirth: { value: 1990 },
    job: { value: 'programmer' }
  });

  // Primitives vs objects
  // 1- Primitives:
  var a = 23;
  var b = a;
  a = 44;
  console.log(a);
  console.log(b);

  // 2- objects
  var obj1 = {
    name: 'John',
    age: 29
  };
  var obj2 = obj1;
  obj1.age = 33;
  console.log(obj1.age);
  console.log(obj2.age);
  /* obj2 is not a new independent object, (No Copy is created here), However, 
    obj2 creates a new reference points to the same object in memory
  */

  // Functions
  var age = 29;
  var obj = {
    name: 'Ahmad',
    city: 'Lincoln'
  };
  function change(a, b){
    a = 32;
    b.city = 'Damascus';
  }
  change(age, obj);
  console.log(age);
  console.log(obj.city);
  /* when a primitive is passed into a function: it won't 
  affect the original one. However, when we pass an object, 
  it will affect the original */


  // ///////////////////////
  // First calss functions: Passing functions as arguments: 

  var years = [1990, 1988, 2000, 1999, 2004];
  /* arrayCalc is a generic function that will accept an array as
  a first argument as well as another 
  function (callback functions) as a second argument */
  function arrayCalc(arr, func){
    var arrResult = [];
    for (var i = 0; i < arr.length; i++){
      arrResult.push(func(arr[i]));
    }
    return arrResult;
  }
  
// (callback functions)
  function calcAge(val){
    return 2019 - val;
  }
  var ages = arrayCalc(years, calcAge);
  console.log(ages);

  function isAdult(val){
    return val >= 18;
  }
  var adults = arrayCalc(ages, isAdult);
  console.log(adults);

  function maxHeartRate(val){
    if(val >= 18 && val <= 81){
      return Math.round(206.9 - (0.67 * val));
    }else{
      return -1;
    }
  }
  var rates = arrayCalc(ages, maxHeartRate);
  console.log(rates);


  // /////////////
  // First class functions: Functions returning functions
  function interviewQuestion(job){
    if(job === 'designer'){
      return function(name){
        console.log(name + ', can you please explain what UX design is?');
      }
    }else if (job === 'teacher'){
      return function(name){
        console.log('What class do you teach, ' + name + '?');
      }
    }else{
      return function(name){
        console.log('Hello ' + name + ', What do you do?');
      }
    }
  }

  var teacherQuestion = interviewQuestion('teacher');
  teacherQuestion('Ahmad');
  var designerQuestion = interviewQuestion('designer');
  designerQuestion('John');
  designerQuestion('Noha');
  var randomQuestion = interviewQuestion('Pharmacist');
  randomQuestion('Heba');

  /* We can also do it this way: 
  First: the interviewQuestion function gets called,
  then it returns a function and the second function gets
  the second arrgument */
  interviewQuestion('teacher')('Mark');

  // //////////////
  // IIFE: Immediately Invoked Function Expression
  /* JS function that runs as soon as it is defined
    * This prevents accessing variables withen the IIFE scope
    * It also prevents polluting the global scope.
  */
  (function (){ // <--- Anonymous function
    var counter = 10;
    counter++;
    console.log('IFFE counter = ' + counter);
  })(); // <-- () --> invokes the function immediately

// Now notice that the previous IFFE function will not affect the next function
  function someFunc(){
    var counter = 2;
    counter++;
    console.log(counter);
  }
  someFunc();

/* Assigning the IFFE to a variable stores the function's result, 
  not the function itself */
  var result = (function(){
    var name = "Barry";
    return name;
  })();
  console.log(result);


///////////////
/// Closures
/* 
  An inner function has always access to the variables and parameters 
  of its outer funtion, even after the outer function has returned.
*/

function retirement(retirementAge){ // <--- Outer function
  var a = ' years left until retirement.';
  return function(yearOfBirth){ // <-- inner function
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
retirementUS(1990);

var retirementSAR = retirement(60);
retirementSAR(1980);


// Another example for closure
function interview(job){
  return function(name){
    if(job === 'designer'){
      console.log(name + ', can you please explain what UX design is?');
    }else if(job === 'teacher'){
      console.log(name + ', What subject do you teach?');
    }else{
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

interview('teacher')('John');
interview('designer')('Ahmad');

// call, apply, bind
let brittany = {
  name: "Brittany",
  age: 29,
  job: "Web Developer",
  presentation: function(style, timeOfDay){
    if(style == "formal"){
      console.log(`Good ${timeOfDay} ladies and gentlemen! I'm ${this.name}, ${this.age} years old and I'm a ${this.job}. `);
    }else if(style == "casual"){
      console.log(`Hi guys, I'm ${this.name}, ${this.age} years old and I'm a ${this.job}. Have a nice ${timeOfDay}!`)
    }else{
      console.log("Hello every one!");
    }
  }
};
brittany.presentation("casual", "morning");

var emily = {
  name: "Emily",
  age: 34,
  job: "teacher"
};
/* We can call the presentation method of brittany and use it for emily */
brittany.presentation.call(emily, "formal", "night");
// You can also use apply but it only accepts an array as an argument
brittany.presentation.apply(emily, ["casual", "night"]);

// the BIND method : bind returns a function
/* Bind doesn't call a function immediately, however it just binds it to be used later - That's why we need to store in a variable */
// Bind also allows us to preset some parameters
/* Let's say that Emily most of the time speaks casually */
var emilyCasual = brittany.presentation.bind(emily, "casual");
// So now we can only pass the time of the day
emilyCasual("morning");
emilyCasual("afternoon");

// Back to years arrays in line 100 and isAdult function in line 119
/* The adult age varies from country to country */
// I will create a new function adultAge
function adultAge(adult, age){
  return age >= adult;
}
/* Now if we were to use the arrayCalc function, we will have a problem because the second parameter "func" only accepts one argument.
Therefore: We can preset a parameter of adultAge using bind */
/* Let's say you have to be 20 years old in Japan */
// I'm going to use ages array in line 116
console.log(ages);
var adultJap = arrayCalc(ages, adultAge.bind(this, 20));
console.log(adultJap);


// Challenge
(function(){ // --> IFFE
  function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  
  Question.prototype.askQuestion = function(){
    console.log(this.question);
    for(let i = 0; i < this.answers.length; i++){
      console.log(i + ': ' + this.answers[i]);
    }
  }
  
  Question.prototype.checkAnswer = function(ansr, callback){
    let sc; // score
    if(ansr == this.correct){
      console.log("Correct Answer!");
      sc = callback(true);
    }else{
      console.log("Wrong Answer!");
      sc = callback(false);
    }
    // this.displayScore(sc);
    console.log("your score is: " + sc);
  }
  
  // Question.prototype.displayScore = function(score){
  //   console.log("Your current score is: " + score);
  //   console.log("-------------------------");
  // }
  
  let q1 = new Question("How many computers do I have?", [2, 4, 5], 0);
  let q2 = new Question("What is this language", ["Java", "C++", "JavaScript"], 2);
  let q3 = new Question("My car is:", ["Nisan", "Honda", "Volvo", "Jeep"], 1);
  
  let questions = [q1,q2,q3];
  
  function score(){ // Closure
    var scr = 0;
    return function(correct){
      if(correct){
        scr++;
      }
      return scr;
    }
  }

  var storeScore = score();
  // console.dir(storeScore);

  function nextQuestion(){
    var random = Math.floor(Math.random() * questions.length);
  
    questions[random].askQuestion();
    let answer = prompt("Please select the correct answer");
  
    if(answer !== "Exit"){
      questions[random].checkAnswer(parseInt(answer), storeScore);
      nextQuestion();
    }
  
  }
  nextQuestion();
})();


