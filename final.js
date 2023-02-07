/*
=================================
Problem 1: Let’s play a mind game
=================================
তোমাকে একটা function দেওয়া হবে called mindGame
(” যা ইনপুট হিসেবে একটা positive number নিবে।")

এখন তোমার task : তোমাকে সেই 
নাম্বার এর সাথে 3 গুন করে, 
তারপর 10 যোগ করে, 
তারপর 2 দিয়ে ভাগ করে, 
তারপর 5 বিয়োগ করে, 
যা আউটপুট আসবে তা return করতে হবে

Sample Input & Output

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




/*
=============================================================================================
------------------------------- Problem 2: Finding even or odd ------------------------------
=============================================================================================
তোমাকে একটা function দেওয়া হবে called evenOdd(). 
এটা ইনপুট হিসেবে একটা string নিবে। 

এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। 
আউটপুট হবে ‘even’ অথবা ‘odd’।

Sample Input & Output:

Input: ‘Phero’
Output: odd

Input: ‘Batch7’
Output: even

Input: ‘chatgpt’
Output: odd
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





/*
=============================================================================================
-------------------------- Problem 3: Is Less or Greater than seven -------------------------
=============================================================================================
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. 
এটা ইনপুট হিসেবে একটা number নিবে।  

এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। 
যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল।
নাহলে তোমাকে return করতে হবে double of the input।
মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

Input: 6
Output: -1

Input: -15
Output: -22

Input: 15
Output: 30
*/
function isLGSeven(num) {
    const diffBet7 = num - 7;
    if (typeof num != "number") {
        return "Please type a valid number";
    }
    if (diffBet7 < 7) {
        return diffBet7;
    } return num * 2;
}

// console.log(isLGSeven(6)); // output --> -1
// console.log(isLGSeven(-15)); // output --> -22
// console.log(isLGSeven(15)); // output --> 30
// console.log(isLGSeven("6")); // output --> Please type a valid number
// console.log(isLGSeven([12, 13])); // output --> Please type a valid number






/*
=============================================================================================
-------------------------------- Problem 4: Finding Bad data --------------------------------
=============================================================================================
তোমাকে একটা function দেওয়া হবে called findingBadData(). 
এটা ইনপুট হিসেবে একটা array নিবে। 
array তে যেকোনো সংখ্যক কতগুলো number থাকবে। 
number গুলো negative number (less than zero) ও হতে পারে, 
আবার positive number (greater than or equal to zero) ও হতে পারে। 
কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. 
কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 

এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে 
এবং সেই নাম্বার টা return করতে হবে।

Sample Input & Output:-

Input: [ 1,2,5 ]
Output: 0

Input: [ 2, -5, -7, -13 ]
Output: 3

Input: [ -4, -9, -5, -33, -55 ]
Output: 5
*/
function findingBadData(numArray) {
    let numOfBadData = 0;
    for (let i = 0; i < numArray.length; i++) {
        const element = numArray[i];
        if (typeof numArray != "object" || typeof element != "number") {
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
// console.log(findingBadData([1, 2, 5])); // output --> 0
// console.log(findingBadData([2, -5, -7, -13])); // output --> 3
// console.log(findingBadData([-4, -9, -5, -33, -55])); // output --> 5
// console.log(findingBadData([-4, -9, -5, "33", -55])); // output --> Please type a valid numbers array
// console.log(findingBadData("2, -5, -7, -13")); // output --> Please type a valid numbers array





/*
=============================================================================================
------------------------- Problem 5: Convert your gems into diamond -------------------------
=============================================================================================
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). 
এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। 
total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় 
সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, 
ততগুলো তোমরা পাবে।

Sample Input & Output:-

Input: 1, 1, 1
Output: 96

Input: 20, 200, 50
Output: 6970

Input: 100, 5, 1
Output: 303
*/
function gemsToDiamond(fnd1Gems, fnd2Gems, fnd3Gems) {
    const fnd1GemsPower = 21;
    const fnd2GemsPower = 32;
    const fnd3GemsPower = 43;

    const fnd1Diamond = fnd1Gems * fnd1GemsPower;
    const fnd2Diamond = fnd2Gems * fnd2GemsPower;
    const fnd3Diamond = fnd3Gems * fnd3GemsPower;

    const totalDiamond = fnd1Diamond + fnd2Diamond + fnd3Diamond;

    if (typeof fnd1Gems != "number" || typeof fnd2Gems != "number" || typeof fnd3Gems != "number") {
        return "Please type valid number";
    } else if (totalDiamond > 1000 * 2) {
        return totalDiamond - 2000;
    } return totalDiamond;
}

console.log(gemsToDiamond(1, 1, 1)); // output --> 96
console.log(gemsToDiamond(20, 200, 50)); // output --> 6970
console.log(gemsToDiamond(100, 5, 1)); // output --> 303
console.log(gemsToDiamond(100, "5", 1)); // output --> Please type valid number
console.log(gemsToDiamond([-4, -9, -5])); // output --> Please type valid number