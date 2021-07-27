// const inputArray = [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97],
//   inputRotate = 13;

const inputArray = [1, 2, 3, 4, 5],
  inputRotate = 4;

function rotateLeft(array, rotationNumber) {
  const elementCount = array.length;
  const output = new Array(elementCount);

  // the number of spaces to move each element
  const rotation = elementCount - rotationNumber;

  for (let i = 0; i < elementCount; i++) {
    // index of the element + the number of units to move
    let newIndex = i + rotation;
    if (newIndex >= elementCount) {
      newIndex = i - rotationNumber;
    }

    output[newIndex] = array[i];
  }

  return output;
}

console.log(rotateLeft(inputArray, inputRotate));
