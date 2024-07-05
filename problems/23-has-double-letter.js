/*
Write a function hasDoubleLetter(str) that accepts a string. The function should
return a boolean indicating whether the string contains two of the same
character consecutively. If the value passed into the function is not a string,
return null.
*/

// Your code here 

function hasDoubleLetter(str) {
    if (typeof str !== 'string') {
        return null;
    }

    let pattern = /([A-Za-z0-9])\1/gmi

    return pattern.test(str);
    
    
}

console.log(hasDoubleLetter('deer')); // true
 console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
 console.log(hasDoubleLetter('taco')); // false
 console.log(hasDoubleLetter('jumper')); // false
 console.log(hasDoubleLetter(18)); // null
 console.log(hasDoubleLetter(['array'])); // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasDoubleLetter;
