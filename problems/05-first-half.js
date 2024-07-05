/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.
*/
/*
1. name first half with string parameter
2. return newstring with half characters in string

*/
/* old code
function firstHalf(str) {
let result = '';
let halfLength = Math.floor(str.length / 2);

  for (let i = 0; i < halfLength; i++) {

    result += str[i];
  }
  return result;
} */

function firstHalf(str) {
  let halfLength = Math.ceil(str.length / 2); // divides length in half.
  return str.slice(0, halfLength); // use slice 
}

 console.log(firstHalf('academy')); // 'acad'
console.log(firstHalf('planet'));  // 'pla'
 console.log(firstHalf('sport'));   // 'spo'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
