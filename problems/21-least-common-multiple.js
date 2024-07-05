/*
Write a function leastCommonMultiple(num1, num2) that accepts two numbers as
arguments. The functions should return the smallest number that is divisible by
both num1 and num2.
*/

// Your code here 

function leastCommonMultiple(num1, num2) {
    let multiple = (num1 * num2) ;
    let min = (num1 > num2) ? num1 : num2;

    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            return min;
            break;
        }
        min++;
    }
}

 console.log(leastCommonMultiple(4, 6)); // 12
 console.log(leastCommonMultiple(3, 5)); // 15
 console.log(leastCommonMultiple(2, 10)); // 10

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = leastCommonMultiple;
