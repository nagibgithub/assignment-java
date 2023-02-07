/*
=============================================================================================
------------------------------- Problem 2: Finding even or odd ------------------------------
=============================================================================================
তোমাকে একটা function দেওয়া হবে called “evenOdd()”.
এটা ইনপুট হিসেবে একটা string নিবে। 

এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে।
আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।
-------------------------
- Sample Input & Output:-
-------------------------
Input: ‘Phero’
Output: Odd

Input: ‘Batch7’
Output: Even

Input: ‘chatgpt’
Output: Odd
*/
function evenOdd(stringName) {
    const nameLength = stringName.length;
    if (typeof stringName != "string") {
        return "Please type a valid string"
    }
    if (nameLength % 2 == 0) {
        return "even";
    } return "odd";
}
// console.log(evenOdd("Phero")); // output --> odd
// console.log(evenOdd("Batch7")); // output --> even
// console.log(evenOdd("chatgpt")); // output --> odd
// console.log(evenOdd(45)); // output --> Please type a valid number
// console.log(evenOdd(["Nagib", "Mahfuz"])); // output --> Please type a valid number