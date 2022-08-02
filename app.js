let rabbit = Math.floor(Math.random() * 100 + 1);
console.log("Initial rabbit position: ", rabbit);

function search(rabbit) {
  let i;

  for (i = 1; i < 101; i++) {
    let changePosRandom = Math.floor(Math.random() * 10);

    console.log("current is", i);
    console.log("rabbit at", rabbit);
    console.log("changePosRandom", changePosRandom);

    if (i == rabbit) {
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

      console.log("current is", i);
      console.log("rabbit at", rabbit);
      console.log("changePosRandom", changePosRandom);

      if (i == rabbit) {
        return i;
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
  : document.write(`Rabbit was hidding in the hole number: ${result}`);
