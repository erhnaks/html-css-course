//double quoted strings.... you can use \" or start a string with a single qoute ' ' or use a back thicks ``.....

var myString = 'I am a "double quoted strings in a "double quoted String..."""';
console.log(myString);

// new tabs and new lines... \n new line \t tab....

var myString1 = "First Line \n\tSecond Line\n\t\tThird Line";

console.log(myString1);

// Concatenate in JS

var str1 = "Hello my name is ";
var str2 = "Erhan Aksu, Nice to meet you!";

console.log(str1 + str2);
//or....

var str3 = "Hello this is the first sentence. ";

str3 += str1 + str2;

console.log(str3);

//Finding the length of a String;

var stringLength = "Hello World";

stringLength = stringLength.length;
console.log(stringLength);

var firstName = "Erhan";
var lastName = "Aksu";

lastName = lastName.length;
console.log(lastName);

firstName = firstName[2]; //printing the third index of firstName which is h.
console.log(firstName);

var lastLetterOfLastName = lastName[lastName.length - 2]; // counting backwards of letter of lastName;
console.log(lastLetterOfLastName);
