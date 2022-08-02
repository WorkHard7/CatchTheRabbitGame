let rabbit = Math.floor(Math.random() * 100 + 1);
console.log("Initial rabbit position: ", rabbit);

function search(rabbit) {
  let i;
  let prev;

  for (i = 1, prev = i - 1; i < 101; i++, prev++) {
    let changePosRandom = Math.floor(Math.random() * 10);

    console.log("current is", i);
    console.log("prev is", prev);
    console.log("rabbit at", rabbit);
    console.log("changePosRandom", changePosRandom);

    if (i == rabbit || prev == rabbit) {
      return i;
    } else {
      if (rabbit < 100) {
        if (changePosRandom % 2 == 0) {
          rabbit++;
        } else {
          rabbit--;
        }
      } else {
        continue;
      }
    }
  }
  return -1;
}

// Function call

let result = search(rabbit);
result == -1
  ? document.write("Rabbit escaped! ")
  : document.write("Rabbit was hidding in the hole number: ", result);
