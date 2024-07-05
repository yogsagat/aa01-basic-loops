/*
Write a function sillyString that accepts a word as an argument. The functions
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".
*/


// Your code here 
function sillyString(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let sillyWord = '';

    for (let i = 0; i < word.length; i++) {
        let currentChar = word[i].toLowerCase();

        if (vowels.includes(currentChar)) {
            sillyWord += currentChar + 'b' + currentChar;
        } else {
            sillyWord += currentChar;
        }
    }

    return sillyWord;
}

 console.log(sillyString('stop'));       // stobop
 console.log(sillyString('that'));       // thabat
 console.log(sillyString('can'));        // caban
 console.log(sillyString('cats'));       // cabats
 console.log(sillyString('italy'));      // ibitabaly
 console.log(sillyString('scooter'));    // scobooboteber

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sillyString;
