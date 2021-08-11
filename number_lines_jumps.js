// https://www.hackerrank.com/challenges/kangaroo/problem

/**
 * @param x1 => Kangaroo 1 starting position
 * @param v1 => Kangaroo 1 jump distance
 * @param x2 => Kangaroo 2 starting position
 * @param v2 => Kangaroo 2 jump distance
 */
function kangaroo(x1, v1, x2, v2) {
  if (v1 > v2) {
    if ((x2 - x1) % (v1 - v2) === 0) {
      return "YES";
    } else {
      return "NO";
    }
  }
  return "NO";
}

console.log("Yes", kangaroo(0, 3, 4, 2));
console.log("Yes", kangaroo(14, 4, 98, 2));
console.log("No", kangaroo(0, 2, 5, 3));
