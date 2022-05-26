function hasOddNumber(arr) {
  return arr.some(function (num) {
    return num % 2 !== 0;
  });
}
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbersArray = [1, 2, 4, 6, 8];
const oddNumbersArray = [1, 3, 5, 7];

const longNumber = 313415234520734;
function hasAZero(num) {
  const numString = num.toString();
  const numArray = numString.split("");
  return numArray.some(function (val) {
    return val == 0;
  });
}

function hasOnlyOddNumbers(arr) {
  return arr.every(function (val) {
    return val % 2 !== 0;
  });
}
