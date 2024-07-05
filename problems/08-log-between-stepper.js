/*
Define a function logBetweenStepper that takes in 3 numbers as parameters. The
function should print out numbers between a minimum number and a maximum number
at defined intervals. The first parameter should represent the minimum number.
The second parameter should represent the maximum number. The third parameter
should represent the interval.

HINT: This function only needs to print using console.log it does not need to
return anything.
*/
/*
1. name: logBetweenStepper
2. 3 number parameters, minimumNum, maximumNum, and interval
3. hint says we need to console.log maybe needs to be a while statement? 


*/
// Your code here 
function logBetweenStepper(minimum, maximum, interval) {
let index = minimum; 

while (index <= maximum) {

    console.log( index );
    index += interval; 
}
}
logBetweenStepper(5, 9, 1);
/* prints out:
5
6
7
8
9
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = logBetweenStepper;
