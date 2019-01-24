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