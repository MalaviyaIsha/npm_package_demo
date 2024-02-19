"use strict";
function mergeStrings(s1, s2) {
    const countStr1 = getCount(s1);
    const countStr2 = getCount(s2);
    let result = "";
    let i = 0, j = 0;
    while (i < s1.length && j < s2.length) {
        const char1 = s1[i];
        const char2 = s2[j];
        const count1 = countStr1[char1];
        const count2 = countStr2[char2];
        if (count1 < count2 || (count1 === count2 && char1 <= char2)) {
            result += char1;
            i++;
        }
        else {
            result += char2;
            j++;
        }
    }
    result += s1.substring(i) + s2.substring(j);
    return result;
}
function getCount(str) {
    const countNum = {};
    for (const char of str) {
        if (countNum[char]) {
            countNum[char]++;
        }
        else {
            countNum[char] = 1;
        }
    }
    return countNum;
}
const s1 = "dce";
const s2 = "cccbd";
console.log(mergeStrings(s1, s2));
