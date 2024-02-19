//check strict mode::::::::::::::::::::::::::::::::::::::::::::::::::
function mergeStrings(s1: string, s2: string) {
  //Count occurrences of characters in each string
  const countStr1: {      [key: string]: number } = getCount(s1);
  const countStr2: { [key: string]: number } = getCount(s2);
  let result = "";
  // Merge strings based on merge function rules
  let i = 0,
    j = 0;
  while (i < s1.length && j < s2.length) {
    const char1 = s1[i];
    const char2 = s2[j];

    const count1: number = countStr1[char1];
    const count2: number = countStr2[char2];

    if (count1 < count2 || (count1 === count2 && char1 <= char2)) {
      result += char1;
      i++;
    } else {
      result += char2;
      j++;
    }
  }

  // Append the remaining characters from s1 and s2
  result += s1.substring(i) + s2.substring(j);
  return result;
}

//count the occurrences of charactor in the string
function getCount(str: string): { [key: string]: number } {
  const countNum: { [key: string]: number } = {};
  for (const char of str) {
    if (countNum[char]) {
      countNum[char]++;
    } else {
      countNum[char] = 1;
    }
  }
  // console.log("countNum :", countNum)
  return countNum;
}

const s1 = "dce";
const s2 = "cccbd";
console.log(mergeStrings(s1, s2));
