/*
=============================================================================================
----------------------------- Problem 1: Let’s play a mind game -----------------------------
=============================================================================================
তোমাকে একটা function দেওয়া হবে called “mindGame()” যা ইনপুট হিসেবে একটা positive number নিবে। 

এখন তোমার task : তোমাকে 
সেই নাম্বার এর সাথে 3 গুন করে, 
তারপর 10 যোগ করে, 
তারপর 2 দিয়ে ভাগ করে, 
তারপর 5 বিয়োগ করে, 
যা আউটপুট আসবে তা return করতে হবে। 
-------------------------
- Sample Input & Output:-
-------------------------
Input: 5
Output: 7.5

Input: 50
Output: 75

Input: 33
Output: 49.5

*/
function mindGame(positiveNum) {
    if (positiveNum < 1 || typeof positiveNum != "number") {
        return "Please type a valid positive number";
    }
    const numMul3 = positiveNum * 3;
    const numAdd10 = numMul3 + 10;
    const numDiv2 = numAdd10 / 2;
    const numSub5 = numDiv2 - 5;
    return numSub5;
}

// console.log(mindGame(5)); // output --> 7.5
// console.log(mindGame(50)); // output --> 75
// console.log(mindGame(33)); // output --> 49.5
// console.log(mindGame(-33)); // output --> Please type a valid positive number
// console.log(mindGame("5")); // output --> Please type a valid positive number
// console.log(mindGame([3, 4])); // output --> Please type a valid positive number