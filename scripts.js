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
