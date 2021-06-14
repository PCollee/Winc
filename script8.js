//take two numbers
//each number will be squared (multiplied with itself)
//the squared numbers will be added together
//this sum will be squared again
//the resulting value is returned

/*
Function declarations
function add(number1, number2) {
  return number1 + number2;
}
add(5, 6); // 11
*/

/*
const add = function (number1, number2) {
    return number1 + number2;
  };
  
  add(5, 6); // 11
  */

  /*
  const add = (number1, number2) => {
    return number1 + number2;
  };
  add(5, 6); // 11
  */

//function declaration  
function calculateNumber1(number1, number2) {
    const sumSquaredNumbers = (number1 * number1) + (number2 * number2);
    const numbersSquaredAgain = sumSquaredNumbers * sumSquaredNumbers;
    const outcome = Math.round(numbersSquaredAgain);
    return outcome;
}
console.log(calculateNumber1(2, 3)); // 169
console.log(calculateNumber1(20, 20)); // 640000

//function expression
const calculateNumber2 = function (
    number1,
    number2
) {
    const sumSquaredNumbers = (number1 * number1) + (number2 * number2);
    const numbersSquaredAgain = sumSquaredNumbers * sumSquaredNumbers;
    const outcome = Math.round(numbersSquaredAgain);
    return outcome;
}
console.log(calculateNumber2(2, 3)); // 169
console.log(calculateNumber2(20, 20)); // 640000

//arrow function
const calculateNumber3 =(number1, number2) => {
    const sumSquaredNumbers = (number1 * number1) + (number2 * number2);
    const numbersSquaredAgain = sumSquaredNumbers * sumSquaredNumbers;
    const outcome = Math.round(numbersSquaredAgain);
    return outcome;
}
console.log(calculateNumber3(2, 3)); // 169
console.log(calculateNumber3(20, 20)); // 640000