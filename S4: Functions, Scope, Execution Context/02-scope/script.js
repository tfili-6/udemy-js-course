// alert('Hello');
// console.log(window.innerWidth);

const x = 100;

if (true) {
  const y = 200;
  console.log(x + y);
}
// console.log(x+y);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i);

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}
//console.log(a);
//console.log(b);
console.log(c); //var is still function scoped, but you can access it with other blocks like if statements

function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  second();
}

first();

// Function Declaration
function addDollarSign(value) {
  return '$' + value;
}
console.log(addDollarSign(100));

// Function Expression
const addPlusSign = function (value) {
  return '+' + value;
};
console.log(addPlusSign(100));

// Arrow Function
function add(a, b) {
  return a + b;
}
console.log(1, 2);

//arrow syntax
const addition = (a, b) => {
  return a + b;
};
//implicit return for one liners
const substract = (a, b) => a - b;

//base case
const createObject = () => ({
  name: 'Brad',
});

const double = (a) => a * 2;
console.log(double(5));
console.log(substract(10, 5));
console.log(substract(10, 5));

console.log(createObject());
