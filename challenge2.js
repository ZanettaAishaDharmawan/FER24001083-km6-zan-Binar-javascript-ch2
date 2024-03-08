function checkTypeNumber(givenNumber) {
  if (givenNumber) {
    if (typeof givenNumber !== "number") {
      return "Error: Invalid data type";
    } else {
      if (givenNumber % 2 === 0) {
        return "GENAP";
      } else {
        return "GANJIL";
      }
    }
  } else {
    return "Error: Bro where is the parameter?";
  }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
