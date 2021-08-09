// https://leetcode.com/problems/valid-parentheses/

function isValid(s) {
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const list = [];

  for (let char of s) {
    if (pairs[char]) {
      list.push(pairs[char]);
    } else {
      if (list.pop() !== char) return false;
    }
  }

  return !list.length;
}

console.log("() = true", isValid("()"));
console.log("()[]{} = true", isValid("()[]{}"));
console.log("(] = false", isValid("(]"));
console.log("([)] = false", isValid("([)]"));
console.log("{[]} = true", isValid("{[]}"));
console.log("]} = false", isValid("]}"));
