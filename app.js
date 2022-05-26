// function hasOddNumber(arr) {
//   return arr.some(function (num) {
//     return num % 2 !== 0;
//   });
// }
// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenNumbersArray = [1, 2, 4, 6, 8];
// const oddNumbersArray = [1, 3, 5, 7];

// const longNumber = 313415234520734;
// function hasAZero(num) {
//   const numString = num.toString();
//   const numArray = numString.split("");
//   return numArray.some(function (val) {
//     return val == 0;
//   });
// }

// function hasOnlyOddNumbers(arr) {
//   return arr.every(function (val) {
//     return val % 2 !== 0;
//   });
// }

//second try

function hasOddNumber(arr) {
  return arr.some(function (number) {
    return number % 2 !== 0;
  });
}

function hasAZero(number) {
  let str = number.toString();
  let numArray = str.split("");
  return numArray.some(function (digit) {
    return digit === "0";
  });
}

function hasOnlyOddNumbers(arr) {
  return arr.every(function (num) {
    return num % 2 !== 0;
  });
}

function hasNoDuplicates(arr) {
  let numAsString = arr.join("");
  return arr.every(function (num, idx) {
    return numAsString.indexOf(num) === idx;
  }); //is this right?
  // the answer solution says ->
  // return arr.indexOf(val) === arr.lastIndexOf(val)
}

function hasCertainKey(arr, key) {
  return arr.every(function (val) {
    return val[key]; //is this right?
    // the answer solution says "return key in val"
  });
}

function hasCertainValue(arr, key, value) {
  return arr.every(function (obj) {
    return obj[key] === value;
  });
}
