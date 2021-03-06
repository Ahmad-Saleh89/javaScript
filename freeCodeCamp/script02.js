/*****  Object Oriented Programming ******/
// Basic JS object
let dog = {
  name: "Bobby",
  numLegs: 4,
  sayLegs: function(){
    return this.name + " has " + this.numLegs + " legs";
  }
}
// Use dot notation to access the properties of an object
console.log(dog.name);
// Create a method on an Object
console.log(dog.sayLegs());

// Define a Constructor Function
/* Constructors are functions that create new objects. they
define properties and behaviors that will belong to the new object.
It is like a blueprint for the creation of new objects.
 */
function myDog(){
  this.name = "Johny";
  this.color = "gray";
  this.numLegs = 4;
}

// Use the previous constructor to create Objects
let grayDog = new myDog();
console.log(grayDog.name);
grayDog.name = "Rupert";
console.log(grayDog.name);

// Extend our Dog constructor to receive Arguments
function Dog(name, color){
  this.name = name;
  this.color = color;
}
// Use Prototype properties to Reduce Duplicated Code
/* Since all dogs have 4 legs, we don't have to include it in the 
Dog Constructor.
* Notice that this.name = name; is own property
However, numLegs is prototype property */

// Change the prototype to a new Object
Dog.prototype = {
  constructor: Dog,
  numEyes: 2,
  eat: function(){
    console.log("nom nom nom");
  }
};

/* Important: the prototype must be declared before creating a new instance */
let tatan = new Dog("Tata", "brown");

console.log(Dog.prototype.isPrototypeOf(tatan));
// Verify an Object's Constructor with instanceof
console.log(tatan instanceof Dog);

/* A prototype is an OBJECT that is shared among ALL instances */
Dog.prototype.numLegs = 4;
/* Now all Dog instances will have access to numLegs porp */
console.log(tatan.numLegs);

// Understand Own Properties
let ownProp = [];
for (let property in tatan){
  if(tatan.hasOwnProperty(property)){
    ownProp.push(property);
  }
}
console.log(ownProp);

// The constructor property
console.log(tatan.constructor);
// Example:
function joinOurDogs(candidate){
  if(candidate.constructor === Dog){
    return true;
  }else{
    return false;
  }
}
console.log(joinOurDogs(tatan));


function Bird(name, color){
  this.name = name;
  this.color = color;
}
Bird.prototype = {
  constructor: Bird,
  numEyes: 2,
  eat: function(){
    return ("ko ko ko");
  }
};
let hamood = new Bird("Hamood");

console.log(Bird.prototype.isPrototypeOf(hamood));
console.log(hamood.eat());

/* Note: Object's prototype itself is also an object. Hence,
A prototype can have its own prototype. */
//  In this case ==>>
console.log(Object.prototype.isPrototypeOf(Bird.prototype)); // => true

// Use Inheritance So You Don't Repeat Yourself
function Animal(){

}
Animal.prototype = {
  constructor: Animal,
  sayName: function(name){
    this.name = name;
    return ("My name is: " + name);
  }
}

// Inherit Behaviors from a Supertype
let duck = Object.create(Animal.prototype);
console.log(duck.sayName("Ducky"));

let bob = Object.create(Animal.prototype);
console.log(bob.sayName("Bob"));
/* bob & duck are new instances of Animal */

// You can set the prototype of the previous subtypes or (children)
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype = Object.create(Animal.prototype);
let frank = new Dog("Frank", "White");
console.log(frank.sayName(frank.name));
console.log(frank.constructor); // => is now Animal @@@@
/* In order to avoid that, you need to set the constructor manually:  */
Dog.prototype.constructor = Dog;
console.log(frank.constructor); // => now it is Dog :)

// Dog can have its own prototype in addition to those inherited from Animal
Dog.prototype.bark = function(){
  return "I am barking";
}
console.log(frank.bark());

// It is possible to override inherited Methods
Dog.prototype.sayName = function(name){
  this.name = name;
  return "I'm the overrided name: " + name;
}
console.log(frank.sayName("Franky"));

function Puppy(){

}
Puppy.prototype = Object.create(Dog.prototype);
Puppy.prototype.constructor = Puppy;
Puppy.prototype.sayName = function(name){
  this.name = name;
  return "I am a cute puppy: " + name;
}
let dedo = new Puppy();
console.log(dedo.sayName("Dedo"));

/* Use a Mixin to add common behavior between unrelated objects */
/* Inheritance does not always work well for unrelated objects like 
Bird and Airplane. They can both fly, but a bird is not a type of
Airplane and vice versa */
// A mixin allows other objects to use a collection of functions
let myBird = {
  name: "Donald",
  numLegs: 2
};
let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj){
  obj.glide = function(){
    return "My name is " + obj.name + " and I can glide on water!";
  };
}
glideMixin(myBird);
glideMixin(boat);

console.log(myBird.glide());
console.log(boat.glide());

// Using Closure to protect properties
function Car(){
  let wheels = 4;
  this.getWheels = function(){
    return wheels;
  }
}
let honda = new Car();
console.log(honda.getWheels());

// Immediately Invoked Function Expression (IIFE)
(function(){
  console.log("A cozy nest is ready");
})();

// Create a Module using IIFE
/* IIFE is often used to group related FUNCTIONALITY into a single 
object or Module. For example, the motion functionality */
let motionModule = (function(){
  return {
    slideMixin: function(obj){
      obj.slide = function(){
        console.log("Yes I can slide!");
      };
    },

    jumpMixin: function(obj){
      obj.jump = function(){
        console.log("Yes I can jump!");
      };
    }
  }
})();
motionModule.slideMixin(boat);
boat.slide();
motionModule.jumpMixin(frank);
frank.jump();