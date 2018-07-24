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