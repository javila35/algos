// https://leetcode.com/problems/palindrome-number/

function isPalindrome(x) {
  const str = x.toString();
  let start = 0,
    end = str.length - 1;
  while (start !== end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
    if (start > end) break;
  }
  return true;
}

console.log("121 === true", isPalindrome(121));
console.log("-121 === false", isPalindrome(-121));
console.log("10 === false", isPalindrome(10));
console.log("-101 === false", isPalindrome(-101));
console.log("11 === true", isPalindrome(11));
