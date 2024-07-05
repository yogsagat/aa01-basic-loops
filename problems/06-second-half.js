/*
Define a function called `secondHalf` that takes in a string
parameter. The function should return a new string containing only the second
half of characters in the string parameter.
*/

/* old code for referance
function firstHalf(str) {
let result = '';
let halfLength = Math.floor(str.length / 2);

  for (let i = 0; i <= halfLength; i++ ) {

    result += str[i];
  }
  return result;
}

*/


function secondHalf(str) {
  let result = '';
  let halfLength = Math.ceil(str.length / 2);

  for (let index = halfLength; index < str.length ; index++ ) {

    result += str[index];
  }
  return result;
}

 console.log(secondHalf('academy')); // 'emy'
 console.log(secondHalf('planet'));  // 'net'
 console.log(secondHalf('sport'));   // 'rt'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = secondHalf;
