/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function vowelCipher(str) {
    // Define a mapping for vowels to their next vowels
    const vowelMap = {
        'a': 'e',
        'e': 'i',
        'i': 'o',
        'o': 'u',
        'u': 'a'
    };

    // Convert the string to an array of characters
    let chars = str.split('');

    // Iterate through each character and transform vowels
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        // Check if the character is a lowercase vowel
        if (char.match(/[aeiou]/)) {
            // Replace the vowel with its next vowel according to vowelMap
            chars[i] = vowelMap[char];
        }
    }

    // Join the array back into a string and return
    return chars.join('');
}

 console.log(vowelCipher("bootcamp")); // "buutcemp"
 console.log(vowelCipher("paper cup")); // "pepir cap"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;
