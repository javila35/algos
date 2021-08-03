const inputArray = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function findDiagonalDifference(arr) {
  let leftSum = 0,
    rightSum = 0,
    max = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i][i];
    rightSum += arr[i][max];
    max--;
  }
  let difference = leftSum - rightSum;
  if (difference < 0) difference = difference * -1;
  return difference;
}

console.log(findDiagonalDifference(inputArray));
