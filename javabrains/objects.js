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
var Mechanic = function(firstName, lastName){
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