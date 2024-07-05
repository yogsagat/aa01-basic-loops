/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.
*/
/*
1. elementsOfOddIndicesReversed = name
2. returns new string containing all elements with odd in the reversed order......



*/
function elementsOfOddIndicesReversed(str) {
let result = '';

// this is for the loop
  for (let index = 1; index < str.length; index += 2) {
// Append characters that are odd
    result = str[index] + result;
  }
// this will reverse the string fed back

// return value
  return result; }


console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'
console.log(elementsOfOddIndicesReversed('planet'));  // 'tnl'
console.log(elementsOfOddIndicesReversed('sport'));   // 'rp'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;
