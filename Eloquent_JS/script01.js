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