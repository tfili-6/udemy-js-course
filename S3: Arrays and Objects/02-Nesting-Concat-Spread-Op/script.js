let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

//Nested Arrays
// fruits.push(berries);

//Indexing Nested Arrays
// x = fruits[3][1]; //the berries array is at 3, and in the berries array blueberries is at 1

const allFruits = [fruits, berries];
x = allFruits[1][0];

x = fruits.concat(berries); //Added as elements, not nested

//Spread Operator (...) takes the items from arrays
x = [...fruits, ...berries];
x = [...fruits, berries];

//Flatten Arrays
const arr = [1, 2, [3, 4], [5, 6], 7, 8];
x = arr.flat();

//Static Methods on Array Objects
x = Array.isArray(fruits);
x = Array.isArray('hello'); //false

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);

console.log(x);

//CHALLENGE
// const temp = [1, 2, 3, 4, 5];
// const temp1 = [5, 6, 7, 8, 9, 10];
// x = temp.pop();
// x = temp.concat(temp1);
// console.log(x);
