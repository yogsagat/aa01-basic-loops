/*
Define a function called `validHexCode` that returns `true` if its string
parameter is a valid hex code.

A valid hex code must begin with a pound key `#` followed by 6 characters.
Each character must be a digit from 0-9 or an alphabetic character from A-F.
All alphabetic characters may be uppercase or lowercase.
*/

function validHexCode(hex) {
  // check if hex code starts with #
  if (hex.charAt(0) !== '#') {
    return false; 
  }
  if (hex.length !== 7) {
    return false;
  }
  for (let i = 1; i < hex.length; i++) {
    let char = hex.charAt(i);
    if (!(/[0-9A-Fa-f]/.test(char))) {
      return false; 
    }
  }
  return true;
}

console.log(validHexCode("#123456"));  // true
console.log(validHexCode("!123456"));  // false
console.log(validHexCode("#123"));     // false
console.log(validHexCode("#1234567")); // false
console.log(validHexCode("1234567"));  // false
console.log(validHexCode("123456"));   // false
console.log(validHexCode("#ABCDEF"));  // true
console.log(validHexCode("#abcDEF"));  // true
console.log(validHexCode("#88ef29"));  // true
console.log(validHexCode("#222!E4"));  // false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
try {
  module.exports = validHexCode;
} catch {}
