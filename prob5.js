/*
=============================================================================================
------------------------- Problem 5: Convert your gems into diamond -------------------------
=============================================================================================
তোমাকে একটা function দেওয়া হবে called “gemsToDiamond()”.
এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে।
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে।
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে।
total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায়
সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
--------------------------
- Sample Input & Output: -
--------------------------
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
// console.log(gemsToDiamond(1,1,1)); // output --> 96
// console.log(gemsToDiamond(20,200,50)); // output --> 6970
// console.log(gemsToDiamond(100,5,1)); // output --> 303
// console.log(gemsToDiamond(100,"5",1)); // output --> Please type valid number
// console.log(gemsToDiamond([-4, -9, -5, -33, -55])); // output --> Please type valid number