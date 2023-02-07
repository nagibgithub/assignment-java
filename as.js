/*
====================
Problem 1: mind game
====================
The function gets a parameter that will be a positive number.
Then the function multiplies the number by 3, then adds 10, and then divides by 2, then subtracts 5, and finally returns the output.
*/
function mindGame(positiveNum) {
    if (positiveNum < 1 || typeof positiveNum != "number") { // if the parameter is less than 1 or type of parameter is not a number.
        return "Please type a valid positive number";
    }
    const numMul3 = positiveNum * 3;
    const numAdd10 = numMul3 + 10;
    const numDiv2 = numAdd10 / 2;
    const numSub5 = numDiv2 - 5;
    return numSub5;
}

/*
==============================
Problem 2: Finding even or odd
==============================
It will take a string as a parameter. 
If the number of parameter length will even then the function returns “even” otherwise return “odd”.
*/
function evenOdd(stringName) {
    const nameLength = stringName.length;
    if (typeof stringName != "string") { // if the type of parameter is not a string
        return "Please type a valid string"
    }
    if (nameLength % 2 == 0) { // if the division of 2 remains 0. the number is even.
        return "even";
    } return "odd";
}

/*
========================================
Problem 3: Is Less or Greater than seven
========================================
It will take a number as input. 
The function will find the difference between the input value and 7. If this difference is smaller than 7, 
the function returns the subtraction. Otherwise, it will return double the input.
*/
function isLGSeven(num) {
    const diffBet7 = num - 7;
    if (typeof num != "number") { // if the type of input is not a number.
        return "Please type a valid number";
    }
    if (diffBet7 < 7) {
        return diffBet7;
    } return num * 2;
}

/*
===========================
Problem 4: Finding Bad data
===========================
It will take a bunch of numbers array as input. 
And the function will count the number of negative numbers as Bad Data, and return the number. 
*/
function findingBadData(numArray) {
    let numOfBadData = 0;
    for (let i = 0; i < numArray.length; i++) {
        const element = numArray[i];
        if (typeof numArray != "object" || typeof element != "number") { // if input is not an array or any element of the array is not a number
        return "Please type a valid numbers array";
        }
    }
    for (let i = 0; i < numArray.length; i++) {
        const element = numArray[i];
        if (element < 0) {
            numOfBadData++;
        }
    }
    return numOfBadData;
}

/*
====================================
Problem 5: Convert gems into diamond
====================================
It will take three numbers as input.
The function will multiply the 1st, 2nd and 3rd number by 21, 32 and 43. Then add the three outputs. 
If the total output is more than 2000 then the function substructs the output by 2000 and returns the answer. 
Otherwise, the function returns the total output.
*/
function gemsToDiamond(fnd1Gems, fnd2Gems, fnd3Gems) {
    const fnd1GemsPower = 21;
    const fnd2GemsPower = 32;
    const fnd3GemsPower = 43;

    const fnd1Diamond = fnd1Gems * fnd1GemsPower;
    const fnd2Diamond = fnd2Gems * fnd2GemsPower;
    const fnd3Diamond = fnd3Gems * fnd3GemsPower;

    const totalDiamond = fnd1Diamond + fnd2Diamond + fnd3Diamond;

    if (typeof fnd1Gems != "number" || typeof fnd2Gems != "number" || typeof fnd3Gems != "number") { // if type of any number of three numbers is not a number
        return "Please type valid number";
    } else if (totalDiamond > 1000 * 2) {
        return totalDiamond - 2000;
    } return totalDiamond;
}