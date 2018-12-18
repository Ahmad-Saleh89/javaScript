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
  this.numLegs = 4;
}
let tata = new Dog("Tata", "brown");

// Verify an Object's Constructor with instanceof
console.log(tata instanceof Dog);

// Understand Own Properties
let ownProp = [];
for (let property in tata){
  if(tata.hasOwnProperty(property)){
    ownProp.push(property);
  }
}
console.log(ownProp);

