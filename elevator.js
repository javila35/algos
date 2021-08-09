/** Not quiet finished with this problem.
 * The queue's aren't being updated or empty
 * You can currently visit an undefined floor
 */

class Elevator {
  constructor(lastFloor) {
    this.floor = 1;
    this.lastFloor = lastFloor;
    this.direction = "up";
    this.upQueue = [];
    this.downQueue = [];
  }

  callElevator(desiredFloor, direction) {
    switch (direction) {
      case "up":
        this.upQueue.push(desiredFloor);
        this.upQueue = this.upQueue.sort();
        this.nextFloor();
        break;
      case "down":
        this.downQueue.push(desiredFloor);
        this.downQueue = this.downQueue.sort().reverse();
        this.nextFloor();
        break;
      default:
        console.log("Wrong direction");
        return;
    }
  }

  nextFloor() {
    if (this.direction === "up") {
      this.floor = this.upQueue.shift();
    } else if (this.direction === "down") {
      this.floor = this.downQueue.shift();
    }
    if (this.floor === this.lastFloor) {
      this.direction = "down";
    } else if (this.floor === 1) {
      this.direction = "up";
    }
    this.print();
  }

  print() {
    console.log("You are on floor " + this.floor);
    console.log("You are going " + this.direction);
    console.log("Next in upQ is " + this.upQueue[0]);
    console.log("Next in downQ is " + this.downQueue[0]);
  }
}

const ele = new Elevator(10);

ele.callElevator(3, "up");
