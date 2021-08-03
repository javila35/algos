// https://leetcode.com/explore/featured/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
const inputArray = [1, 0, 2, 3, 0, 4, 5, 0];

function duplicateZeros(arr) {
  let start = 0,
    next = 0;
  const len = arr.length;
  while (start < len) {
    if (arr[start] === 0) {
      next = arr[start + 1];
      arr[start + 1] = 0;
    }
    if (next) {
      arr[start + 1] = next;
      next = 0;
    }
    start++;
  }

  console.log(arr);
}

console.log(duplicateZeros(inputArray));
