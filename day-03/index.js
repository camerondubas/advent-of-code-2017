let input = 289326;

// ==============
// === Part 1 ===
// ==============


let output = (input) =>  {
  let x = 0
  let y = 0
  let size = 1;
  let direction = 1;
  let counter = 1;

  while(true) {
    for (let i=1; i<size+1; i++) {
      counter++;

      if (direction === 1) {
        x++;
      }

      if (direction === 3) {
        x--;
      }

      if (direction === 2) {
        y++;
      }

      if (direction === 4) {
        y--;
      }


      if (counter === input) {
        return Math.abs(x) + Math.abs(y)
      }
    }

    if (direction === 4) {
      direction === 1;
    } else {
      direction++;
    }

    if ((direction===1) || (direction===3))  {
      size++;
    }
  }
};
