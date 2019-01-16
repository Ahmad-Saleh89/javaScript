// PART I
// Chapter 1
console.log(typeof NaN); // NaN is a number.... cool right?
console.log(NaN == NaN); // returns false
// Ternary Operator: ?
console.log(true ? 1 : 2); // returns 1
console.log(false ? 1 : 2); // returns 2
console.log(null == undefined); // returns true
console.log(null === undefined); // returns false

// Chapter 2
// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " + theNumber * theNumber);

// Breaking out of a loop @@@ IMPORTANT
for (let i = 10; ; i++){
  if(i % 7 == 0){
    console.log(i);
    break;
  }
}

// Exercises page 37
// Looping a triabgle
let sharp = "#";
for(let x = 0; x < 7; x++){
  console.log(sharp);
  sharp = sharp+ "#";
}

// FizzBuzz
let fizzBuzz = [];
for(let i = 1; i <= 16; i++){
  if(i % 5 != 0 && i % 3 == 0){
    fizzBuzz.push("Fizz");
  }else if(i % 3 != 0 && i % 5 == 0){
    fizzBuzz.push("Buzz");
  }else if(i % 3 == 0 && i % 5 == 0){
    fizzBuzz.push("FizzBuzz");
  }else{
    fizzBuzz.push(i);
  }
}
console.log(fizzBuzz);

// Chess Board
function makeChess(height, width){
  for(let j = 0; j < height; j++){
    let chess = "";
    for(let k = 0; k < width; k++){
      if(k % 2 == 0){
        chess = chess + "#";
      }else{
        chess = chess + " ";
      }
    }
    if(j % 2 == 0){
      console.log(" " + chess);
    }else{
      console.log(chess);
    }
  }
}
makeChess(8,8);

// Chapter 3
// var vs let
if(true){
  let xxx = "Only visible here";
  var vvv = "Visible every where";
  console.log(xxx + " "+ vvv);
}
console.log(vvv);
// console.log(xxx); will through an error

// Optional Arguments: Review page 47
function minus(a, b){
  if(b === undefined){
    return -a;
  }
  return a - b;
}
console.log(minus(5));
console.log(minus(8,3));
console.log(minus(2,9));

// Closure
function multiplier(factor){
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(4));
let triple = multiplier(3);
console.log(triple(4));

// Recursion
function power(base, exponent){
  if(exponent == 0){
    return 1;
  }else{
    return base * power(base, exponent - 1);
  }
}
console.log(power(2,4));

// Growing Functions
/* Generate 3 digits starting with 0 */
function zeroPad(number, width){
  let num = String(number);
  while(num.length < width){
    num = "0" + num;
  }
  return num;
}
function farmInventory(cows, chicken, pigs){
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chicken, 3)} Chicken`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

farmInventory(7,16,3);