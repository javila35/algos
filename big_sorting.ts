// https://www.hackerrank.com/challenges/big-sorting/problem

/**
 * Implement bubble sort
 */

const input = [
  "8",
  "1",
  "2",
  "100",
  "12303479849857341718340192371",
  "3084193741082937",
  "3084193741082938",
  "111",
  "200",
];

/**
 * Came up with this simple bubble approach on my own
 * But large data sets fail as the time limit exceeds
 * There was one test case with a wrong answer
 */
// function bigSort(unsorted: string[]) {
//   const outputArray = unsorted;
//   for (let i = 0; i < outputArray.length; i++) {
//     for (let y = 0; y < outputArray.length - 1; y++) {
//       const currAsString = outputArray[y],
//         nextAsString = outputArray[y + 1];
//       if (currAsString.length < nextAsString.length) continue;
//       const curr = parseInt(outputArray[y]),
//         next = parseInt(outputArray[y + 1]);
//       if (curr > next) {
//         outputArray[y] = nextAsString;
//         outputArray[y + 1] = currAsString;
//       }
//     }
//   }

//   return outputArray;
// }

// console.log(bigSort(input));
