const input = [3, 2, 1, 3, 5, 4, 1, 2, 3];

function birthdayCakeCandles(candles) {
  let maxValue = 0,
    maxCount = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > maxValue) {
      maxValue = candles[i];
      maxCount = 1;
    } else if (candles[i] === maxValue) {
      maxCount++;
    }
  }

  return maxCount;
}

console.log(birthdayCakeCandles(input));
