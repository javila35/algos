const input = 6;

function buildStairs(count) {
  let size = 1;
  for (let i = 0; i < count; i++) {
    const spaceStr = " ".repeat(count - size);
    const stairStr = "#".repeat(i + 1);
    console.log(spaceStr + stairStr);
    size++;
  }
}

console.log(buildStairs(input));
