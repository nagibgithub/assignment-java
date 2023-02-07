/*
=============================================================================================
-------------------------- Problem 3: Is Less or Greater than seven -------------------------
=============================================================================================
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”.
এটা ইনপুট হিসেবে একটা number নিবে।  

এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে absolute পার্থক্য বের করতে হবে।
যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই ইনপুটএবং ৭ এর মধ্যে পার্থক্য।
নাহলে তোমাকে return করতে হবে double of their absolute difference.
-------------------------
- Sample Input & Output:-
-------------------------
Input: 6
Output: -1

Input: -15
Output: 44

Input: 13
Output: 6
*/
function isLGSeven(num) {
    const absDiffBet7 = Math.abs(num - 7);
    if (typeof num != "number") {
        return "Please type a valid number";
    }
    if (absDiffBet7 < 7) {
        return num -7;
    } return absDiffBet7 * 2;
}

// console.log(isLGSeven(6)); // output --> -1
// console.log(isLGSeven(-15)); // output --> 44
// console.log(isLGSeven(13)); // output --> 6
// console.log(isLGSeven("6")); // output --> Please type a valid number
// console.log(isLGSeven([12, 13])); // output --> Please type a valid number