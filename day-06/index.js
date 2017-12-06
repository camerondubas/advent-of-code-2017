let input = '4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5';

// ==============
// === Part 1 ===
// ==============

let output = input => {
  let numbers = input.split('\t').map(Number);
  let history = [numbers.join()];
  let shouldLoop = true;

  while (shouldLoop) {
    let [max, maxIndex] = numbers.reduce((prev, current, idx, self) => {
      return current > prev[0] ? [current, idx] : prev;
    }, [-1,-1]);

    numbers[maxIndex] = 0;
    for (let index = 0; index < max; index++) {
      let position = ((index + 1) + maxIndex) % numbers.length;
      numbers[position]++;
    }

    if (history.includes(numbers.join())) {
      shouldLoop = false;
    } else {
      history.push(numbers.join());
    }
  }

  return history.length
};

// ==============
// === Part 2 ===
// ==============

let output2 = input => {
  let numbers = input.split('\t').map(Number);
  let history = [numbers.join()];
  let history2 = [];
  let shouldLoop = true;

  while (shouldLoop) {
    let [max, maxIndex] = numbers.reduce((prev, current, idx, self) => {
      return current > prev[0] ? [current, idx] : prev;
    }, [-1,-1]);

    numbers[maxIndex] = 0;
    for (let index = 0; index < max; index++) {
      let position = ((index + 1) + maxIndex) % numbers.length;
      numbers[position]++;
    }

    if (history.includes(numbers.join())) {
      if (history2.includes(numbers.join())) {
        shouldLoop = false;
      } else {
        history2.push(numbers.join());
      }
    } else {
      history.push(numbers.join());
    }
  }

  return history2.length;
};
