const input = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];

function findSum(val1, val2, val3, val4, val5, val6, val7) {
  return val1 + val2 + val3 + val4 + val5 + val6 + val7;
}

function hourglassSum(arr) {
  let maxSum = undefined;

  for (let row = 0; row < arr.length; row++) {
    const nextRow = row + 1,
      nextNextRow = row + 2;
    if (nextNextRow < 6) {
      for (let col = 0; col < arr[row].length; col++) {
        const nextCol = col + 1,
          nextNextCol = col + 2;
        if (nextNextCol < 6) {
          const hourglassCoords = {
            x: arr[row][col],
            y: arr[row][nextCol],
            z: arr[row][nextNextCol],
            a: arr[nextRow][nextCol],
            b: arr[nextNextRow][col],
            c: arr[nextNextRow][nextCol],
            d: arr[nextNextRow][nextNextCol],
          };

          const { x, y, z, a, b, c, d } = hourglassCoords;

          const sum = findSum(x, y, z, a, b, c, d);

          if (sum > maxSum) maxSum = sum;
        }
      }
    }
  }
  return maxSum;
}

console.log(hourglassSum(input));
