/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 

function abbreviate(word) {
let vowels = ['a', 'e', 'i', 'o', 'u'];
let newWord = '';

    for (i = 0; i < word.length; i++) {
      let letter = word[i].toLowerCase();

      if (!vowels.includes(letter)) {
        newWord += word[i];
      }
       

    }
    return newWord;
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
