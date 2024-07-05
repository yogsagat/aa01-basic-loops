/*
Define a function called countVowels, that takes in a lowercased word parameter
and returns the number of vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u".


*/
function countVowels(str) {
let vowelCounter = 0; 

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];

        if (letter === "a" ||
            letter === "e" || 
            letter === "i" || 
            letter === "o" || 
            letter === "u") {
                vowelCounter += 1; 
            }
            
    }
        
        return vowelCounter;
}


// Your code here 

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple"));    // => 2
console.log(countVowels("pizza"));    // => 2
console.log(countVowels("try"));      // => 0

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = countVowels;
