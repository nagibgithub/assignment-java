/*
=============================================================================================
-------------------------------- Problem 4: Finding Bad data --------------------------------
=============================================================================================
তোমাকে একটা function দেওয়া হবে called “findingBadData()”.
এটা ইনপুট হিসেবে একটা array নিবে।
array তে যেকোনো সংখ্যক কতগুলো number থাকবে।
number গুলো negative number (less than zero) ও হতে পারে,
আবার positive number (greater than or equal to zero) ও হতে পারে।
কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”.
কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”.
এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে
এবং সেই নাম্বার টা return করতে হবে।
--------------------------
- Sample Input & Output: -
--------------------------
Input: [1, 2, 5]
Output: 0

Input: [2, -5, -7, -13]
Output: 3

Input: [-4, -9, -5, -33, -55]
Output: 5
*/
function findingBadData(numArray) {
    let numberOfNeg = 0;
    for (let i = 0; i < numArray.length; i++) {
        const element = numArray[i];
        if (typeof numArray != "object" || typeof element != "number") {
        return "Please type a valid numbers array";
        }
    }
    for (let i = 0; i < numArray.length; i++) {
        const element = numArray[i];
        if (element < 0) {
            numberOfNeg++;
        }
    }
    return numberOfNeg;
}
// console.log(findingBadData([1, 2, 5])); // output --> 0
// console.log(findingBadData([2, -5, -7, -13])); // output --> 3
// console.log(findingBadData([-4, -9, -5, -33, -55])); // output --> 5
// console.log(findingBadData([-4, -9, -5, "33", -55])); // output --> Please type a valid numbers array
// console.log(findingBadData("2, -5, -7, -13")); // output --> Please type a valid numbers array