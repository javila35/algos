const inputArray = [3, 7, 2, 9, 4],
  currency = 15;

function findMaxToys(prices, k) {
  for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < prices.length - 1; j++) {
      const curr = prices[j],
        next = prices[j + 1];
      if (curr > next) {
        prices[j] = next;
        prices[j + 1] = curr;
      }
    }
  }
  let maxToyCount = 0;
  let currentCost = k;
  for (let i = 0; i < prices.length; i++) {
    if (currentCost - prices[i] >= 0) {
      maxToyCount++;
      currentCost = currentCost - prices[i];
    }
  }
  return maxToyCount;
}

console.log(findMaxToys(inputArray, currency));
