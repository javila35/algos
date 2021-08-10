// https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/614/week-2-august-8th-august-14th/3875/
// Copied solution from: https://stackoverflow.com/a/48155887/5425583

function addStrings(num1, num2) {
  const str1A = num1.split("").reverse(),
    str2A = num2.split("").reverse(),
    longer = Math.max(num1.length, num2.length);
  let output = "",
    carry = false;

  for (let i = 0; i < longer; i++) {
    let result;
    if (str1A[i] && str2A[i]) {
      result = parseInt(str1A[i]) + parseInt(str2A[i]);
    } else if (str1A[i] && !str2A[i]) {
      result = parseInt(str1A[i]);
    } else if (!str1A[i] && str2A[i]) {
      result = parseInt(str2A[i]);
    }

    if (carry) {
      result += 1;
      carry = false;
    }

    if (result >= 10) {
      carry = true;
      output += result.toString()[1];
    } else {
      output += result.toString();
    }
  }
  output = output.split("").reverse().join("");

  if (carry) {
    output = "1" + output;
  }

  return output;
}

console.log("134", addStrings("11", "123"));
console.log("533", addStrings("456", "77"));
console.log("0", addStrings("0", "0"));
console.log(
  "9419584439332250",
  addStrings("9333852702227987", "85731737104263")
);
