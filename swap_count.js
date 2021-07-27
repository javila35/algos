const inputArray = [6, 4, 1];

function bubbleSortSwapCounter(a) {
  const n = a.length;
  let swapCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      const curr = a[j];
      const next = a[j + 1];
      if (curr > next) {
        a[j] = next;
        a[j+1] = curr;
        swapCount++;
      }
    }
  }
  return `Swap count: ${swapCount}`;
}

console.log(bubbleSortSwapCounter(inputArray));
