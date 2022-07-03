var myArray = [
  ["John", "Doe", 32],
  ["Alice", "Alisson", 28],
];

console.log(myArray);

//finding indexes in Arrays

var nums = [20, 30, 40, 50];

var indexnum = nums[0];
console.log(indexnum); //result is 20 because it is index 0 and 30 is index of 1;

//Modify Arrays with index

var modifyArray = [10, 20, 30, 50]; //lets modify 50 and insert 40;

modifyArray[3] = 40;

console.log(modifyArray); // return; [ 10, 20, 30, 40 ]

//Three layer deep Arrays;

var deepArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

var myData = deepArray[2][1]; // return; 8
/*this line of code will give 8
because 8 is in the second index and it is in the first index of the second index */

console.log(myData);

//Push function in Arrays

var pushArray = ["Simson", "j", "cat"];
pushArray.push(["happy", "joy"]);

console.log(pushArray); // Array is now equal to [ 'Simson', 'j', 'cat', [ 'happy', 'joy' ] ]

// Shift and unshift in Arrays; Shift will remove first index and pop will remove last index;

var shiftArray = ["John", "doe", 22];

shiftArray.shift(); //This line will remove the first index John;

shiftArray.unshift("Hello"); //This line will insert Simon to first index;

console.log(shiftArray); //return; [ 'Hello', 'doe', 22 ]
