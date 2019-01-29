// function constructor
function Bicycle(cadence, speed, gear, tirePressure){
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  this.tirePressure = tirePressure;
  this.inflateTires = function(x){
    this.tirePressure +=x;
  }
}

var bicycle1 = new Bicycle(50, 20, 4, 25);
/* Let's say that the ideal tire pressure is 28 for bikes */
bicycle1.inflateTires(3);
console.log(bicycle1);
/* The tires pressure of bicycle1 should be 28 now */

bicycle2 = new Bicycle(44, 22, 4, 20);

/* It'd make more sense if we ask a mechanic to inflate our tires */
function Mechanic(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
var mike = new Mechanic("Mike", "Smith");
/* Now if we were to ask Mike to inflate our bicycle2's tires, It would be awsome if Mike can borrow the same inflateTires property from Bicycle Constructor */
mike.inflateTires = bicycle2.inflateTires;
mike.inflateTires.call(bicycle2, 8);
console.log(bicycle2);
/* Note that we had to use the call method because we wanted to inflate bicycle2 tires NOT Mike's tires :) */

// To sum up
/**
 * the this in inflateTires doesn't necessarily refer to a bicycle object. It refers to whatever obj calls it.
 * That's why we had to use the call method
 * Mike object does not have inflateTires prop itself
 */

//  Protoypes *****************************/
function greet(){
  console.log("Hello World!");
}

console.dir(greet);
/* Note that everytime you create a function, JS creates a prototype object refers to that function */
console.log(greet.prototype);

// Back to our Bicycle Constructor and our bicycle1 obj

Bicycle.prototype.test = "This is just a test";
console.log(bicycle1.__proto__.test);
// Or for short
console.log(bicycle1.test);

/**
 * There is something really important to understand
 * if bicycle1 itself has the prop test --> it will return it
 * if NOT it will look further in the __proto__ prop and return that value
 * Check this out:
 */
bicycle1.test = "hello";
console.log(bicycle1.test); // -> "hello"
console.log(bicycle1.__proto__.test); // -> "This is just a test"

/* If you want to know what constructor that created an obj: */
console.log(bicycle1.constructor); // -> Bicycle
console.log(bicycle1.__proto__.constructor); // -> also Bicycle

// Prototype Inheritance

function MotorCycle(speed, engine){
  this.speed = speed;
  this.engine = engine;
}
MotorCycle.prototype.startEngine = function(){
  return "start " + this.engine;
}
var myMotor = new MotorCycle(240, "Yamaha");
console.log(myMotor.startEngine());

// lets develop our bicycle1 by adding a Honda engine to it
bicycle1.engine = "Honda";

bicycle1.__proto__.__proto__ = MotorCycle.prototype;
console.log(bicycle1.startEngine());



// Another Example
function Employee(name, salary){
  this.name = name;
  this.salary = salary;
}
Employee.prototype.getName = function(){
  console.log(this.name);
}
Employee.prototype.getSalary = function(){
  console.log(this.salary);
}
var emp1 = new Employee("Jim", 100);


function Manager(name, dept, salary){
  this.name = name;
  this.dept = dept;
  this.salary = salary;
}
Manager.prototype.getDept = function(){
  console.log(this.dept);
}

var kyle = new Manager("Kyle", "Marketing", 150);

/* What if Kyle wants to get his salary?? */
kyle.__proto__.__proto__  === Object.prototype; // true by default
// So we can do this:
kyle.__proto__.__proto__ = Employee.prototype;
kyle.getName();
kyle.getSalary(); // 150