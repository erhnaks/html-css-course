// this functions are reusable everytime they are called;

function reusableFuntion() {
  console.log("Hi, Did you called me?");
}

function reuse2() {
  console.log("My name is JavaScript");
}

reusableFuntion(); // return; Hi, Did you called me? // it printed because declared function has been called!

reuse2(); //return; My name is JavaScript

// Passing Values to Functions with Arguments;

function additionArgs(a, b) {
  console.log(a + b);
}

additionArgs(3, 4); //returns 7!
