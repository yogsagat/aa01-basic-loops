/*
Write a function reverb that accepts a word as an argument. The function should
return a new word where all letters that come after the last vowel (including
the vowel itself) are repeated at the end of the word. If the value passed in is
not a string, say someone passes in a number as an argument, then return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 

function reverb(word) {
    // Check if the input is not a string
    if (typeof word !== 'string') {
        return null;
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let lastVowelIndex = -1;

    // Find the index of the last vowel
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i].toLowerCase())) {
            lastVowelIndex = i;
            break;
        }
    }

    // If no vowel is found, return the original word
    if (lastVowelIndex === -1) {
        return word;
    }

    // Construct the reverb word
    let reverbEnding = word.slice(lastVowelIndex); // Extract characters after the last vowel
    let reverbWord = word + reverbEnding;

    return reverbWord;
}

 console.log(reverb('running')); // runninging
 console.log(reverb('FAMILY'));  // FAMILYILY
 console.log(reverb('trash'));   // trashash
 console.log(reverb('DISH'));    // DISHISH
  console.log(reverb('197393'));  // 197393
 console.log(reverb(197393));    // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverb;
