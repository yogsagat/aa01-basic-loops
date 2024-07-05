/*
Write a method caesarCipher(string, num) that takes in a string and a number.
The function should return a new string where every character of the original is
shifted num characters in the alphabet.

Feel free to use this variable: let alphabet = "abcdefghijklmnopqrstuvwxyz";
*/

function caesarCipher(string, num) {
    // Define the alphabet
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = '';

    // Normalize num in case it's negative or greater than 26
    num = num % 26;

    // Iterate through each character in the string
    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        // Check if the character is a lowercase letter
        if (/[a-z]/.test(char)) {
            // Find the current position of the character in the alphabet
            let currentIndex = alphabet.indexOf(char);

            // Calculate the new position by shifting num positions
            let newIndex = (currentIndex + num) % 26;

            // Handle negative indices caused by the modulo operation
            if (newIndex < 0) {
                newIndex += 26;
            }

            // Append the shifted character to the result
            result += alphabet[newIndex];
        } else {
            // If the character is not a lowercase letter, keep it unchanged
            result += char;
        }
    }

    return result;
}

// console.log(caesarCipher("apple", 1)); // "bqqmf"
// console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
// console.log(caesarCipher("zebra", 4)); // "difve"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = caesarCipher;
