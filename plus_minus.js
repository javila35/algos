// https://www.hackerrank.com/challenges/plus-minus/problem

const inputArray = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let posCount = 0,
    negCount = 0,
    zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 1) {
      posCount++;
    } else if (arr[i] <= -1) {
      negCount++;
    } else {
      zeroCount++;
    }
  }

  posCount = posCount / arr.length;
  negCount = negCount / arr.length;
  zeroCount = zeroCount / arr.length;
  console.log(posCount.toFixed(6));
  console.log(negCount.toFixed(6));
  console.log(zeroCount.toFixed(6));
}

console.log(plusMinus(inputArray));
