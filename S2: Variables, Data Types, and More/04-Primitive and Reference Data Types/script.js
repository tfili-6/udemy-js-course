//PRIMITIVE TYPES - stored in the stack
// String
const firstName = 'Tudor';

// Number
const age1 = 30;

//Boolean
const hasKids = true;

//Null
const apartment = null;

//Undefined
//let score;
const score = undefined;

//Symbol
const id = Symbol('id');

//Big Int
const n = 90230993275690265092650923n;

//REFERENCE TYPES - stored in the heap and accessed by reference (can have multiple pointers to it)
const numbers = [1, 2, 3, 4, 5];
const person1 = {
  name: 'Brad',
};
function sayHello() {
  console.log('hello');
}

sayHello();

const output = n;
console.log(output, typeof output);
