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
const dte = new Date(2022, 1, 10, 8, 0, 0);
const month = dte.getMonth();

console.log(month);

switch (month) {
  case 1:
    console.log('It is january');
    break;
  case 2:
    console.log('It is february');
    break;
  case 3:
    console.log('It is march');
    break;
  default:
    console.log(`It is not jan, feb, or march.`);
}

switch (true) {
  case hour < 12:
    console.log('Good Morning');
    break;
  case hour < 18:
    console.log('Good afternoon');
  default:
    console.log('Goodnight');
}

function calculator(num1, num2, operator) {
  if (operator === '-') {
    console.log(num1 - num2);
  } else if (opertor === '+') {
    console.log(num1 + num2);
  } else if (operator === '*') {
    console.log(num1 * num2);
  } else if (operator === '/') {
    console.log(num1 / num2);
  } else {
    console.log('Invald input operator');
  }
}

calculator(5, 10, '+');

//Chain map method
const squareRootAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((number) => number * 2);
console.log(squareRootAndDouble);

//OR
const squareRootAndDouble2 = numbers
  .map(function (numbers) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrt * 3;
  });

console.log(squareRootAndDouble2);

// Chaining different methods
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDouble);

//Array.reduce()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Long form
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); //starts at 0, then takes the previous and current, and adds them

//Short form
const sum2 = numbers.reduce((acc, curr) => acc + curr, 10);
console.log(sum2);

//For loop
const sum3 = () => {
  const acc = 0;
  for (const curr of numbers) {
    acc += curr;
  }
};
