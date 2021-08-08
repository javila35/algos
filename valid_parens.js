// https://leetcode.com/problems/valid-parentheses/

/** In progress on this one */

function isValid(s) {
  const pairs = s.split("");
  const openPair = "([{",
    closePair = ")]}";
  let standingPair = false;
  if (closePair.includes(s[0])) return false;
  for (let i = 0; i < pairs.length; i++) {}
}

console.log("() = true", isValid("()"));
console.log("()[]{} = true", isValid("()[]{}"));
console.log("(] = false", isValid("(]"));
console.log("([)] = false", isValid("([)]"));
console.log("{[]} = true", isValid("{[]}"));
console.log("]} = false", isValid("]}"));
