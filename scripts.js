// Function Constructor

var john = {
  name: 'John',
  yearOfBirth: 1989,
  job: 'teacher'
};

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
    return 2018 - val;
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