/*
Define a function logBetween that takes in two number parameters. The first
number parameter represents a low number and the second represents a high
number. The function should print every number from the low number to the
high number, inclusive. Inclusive means that the range includes the low and
high numbers.
*/

/*  1. name: logBetween2. 
    2. two number parameters. lowNum: low number highNum: high number
    3. prints every number from the low number to high number, inclusive. 

    let index = 0;

// this is the condition that will be checked every time this loop is run
while (index < 10) {
  console.log("The number is " + index);
  // this is common shorthand for index = index + 1
  index++;
}
*/
function logBetween(lowNum, highNum) {
    for (let index = lowNum; index <= highNum; index += 1) {
        console.log("The number is " + index);

    }


}

logBetween(-1, 2);
/* prints out:
-1
0
1
2
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = logBetween;
