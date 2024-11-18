// If else statements
if (true) {
  console.log('This is true');
}

const x = 10;
const y = 5;

if (x > y) {
  console.log(`x is greather than y`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is not equal to ${y}`);
}

if (x !== y) {
  const z = 20;
  console.log(`${y} is 20`);
}

// if, else if, else

const d = new Date(10, 30, 2022, 8, 0, 0);
const hour = d.getHours();

console.log(hour);

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

// Nested If Statements
if (hour < 12) {
  console.log('Good Morning');
  if (hour === 6) {
    console.log('Wake Up');
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');

  if (hour >= 20) {
    console.log('zzzzzzzz');
  }
}

if (hour >= 7 && hour < 15) {
  //&& operator
  console.log('It is work time!');
}

if (hour === 6 || hour === 20) {
  // || operator
  console.log('Brush your teeth!');
}

// However, if you begin to nest a lot, use a switch
