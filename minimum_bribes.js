const inputArray = [1, 2, 5, 3, 7, 8, 6, 4];

// This solution came from a youtube video
function minimumBribes(q) {
  let total = 0;
  for (let current_pos = 0; current_pos < q.length; current_pos++) {
    const original_pos = q[current_pos] - 1;

    const diff = original_pos - current_pos;

    if (diff > 2) return console.log("Too chaotic");

    if (diff <= 0) {
      for (let i = Math.max(0, original_pos - 1); i < current_pos; i++) {
        const start_pos_of_forward_person = q[i] - 1;

        if (start_pos_of_forward_person > original_pos) {
          total++;
        }
      }
    }
  }
  console.log(total);
}

// console.log(minimumBribes(inputArray));

// This was the solution I came up with on my own
// It didn't pass a few test cases
function minimumBribesJoe(q) {
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    console.log("index", i);
    const value = q[i];
    console.log("value", value);

    const position = i + 1;
    console.log("position", position);

    let difference = value - position;
    console.log("difference", difference);

    if (difference > 2) {
      console.log("Too chaotic");
      return;
    } else {
      if (value > position) {
        bribes += difference;
        console.log("bribes", bribes);
      }
    }
  }
  console.log(bribes);
}

console.log(minimumBribesJoe(inputArray));
