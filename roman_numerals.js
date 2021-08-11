// https://leetcode.com/problems/roman-to-integer/

const map = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

function romanToInt(s) {
  s = s.toUpperCase();

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]];
    let next;
    if (s[i + 1]) {
      next = map[s[i + 1]];
    }
    if (next && curr < next) {
      const compoud = `${s[i]}${s[i + 1]}`;
      sum += map[compoud];
      i++;
    } else {
      sum += curr;
    }
  }

  return sum;
}

console.log(romanToInt("DIX"));
console.log(romanToInt("dix"));
