/**
 * let - within the block only (local declaration)
 * const - constant variable
 * var - global declration
 */

var b = 20;

const c = 30;

function myFunc() {
  let a = 10;
  console.log(a);
  console.log(b);
}

// console.log(a);
console.log(b);

myFunc();

