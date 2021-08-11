// https://leetcode.com/problems/buddy-strings/

// Didn't finish this one yet

function buddyStrings(s, goal) {
  let found = false,
    foundIndex = 0;

  for (let i = 0; i < s.length; i++) {
    if (goal[i] !== s[i]) {
      if (found) {
        const current = s[i],
          last = s[foundIndex];
        s[i] = last;
        s[foundIndex] = current;
        console.log(s);
        if (s === goal) return true;
      }
      found = true;
      foundIndex = i;
    }
  }
}

console.log(true, buddyStrings("ab", "ba"));
console.log(false, buddyStrings("ab", "ab"));
console.log(true, buddyStrings("aa", "aa"));
console.log(true, buddyStrings("aaaaaaabc", "aaaaaaacb"));
console.log(false, buddyStrings("ab", "ab"));
