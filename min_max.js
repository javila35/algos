//www.hackerrank.com/challenges/mini-max-sum/problem
https: const inputArray = [1, 3, 5, 7, 9];

function miniMaxSum(arr) {
  let min = 0,
    max = 0;
  arr.sort().forEach((element, index) => {
    if (index === 0) {
      min += element;
    } else if (index === arr.length - 1) {
      max += element;
    } else {
      min += element;
      max += element;
    }
  });

  console.log(min);
  console.log(max);
}

console.log(miniMaxSum(inputArray));
