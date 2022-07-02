function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";

  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " " +
    "from the pet store very " +
    myAdverb;
  return result;
}

console.log(wordBlanks("dog", "big", "run away", "quickly!"));
