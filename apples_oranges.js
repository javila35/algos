// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0,
    orangeCount = 0;
  const longestArray =
    apples.length > oranges.length ? apples.length : oranges.length;

  function checkLanding(coord) {
    if (coord >= s && coord <= t) return true;
  }

  for (let i = 0; i < longestArray; i++) {
    if (apples[i]) {
      if (checkLanding(a + apples[i])) appleCount++;
    }
    if (oranges[i]) {
      if (checkLanding(b + oranges[i])) orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}

console.log(
  "Case one: ",
  countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
);
