// var, let and const
// var is not common

let firstName = 'Tudor';
let lastName = 'Filimon';
let age = 18;

console.log(firstName, lastName, age);

let nameOne = 'Brad';

//Re-assigning variables

age = 30;
console.log(age);

let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

const array = [1, 2, 3, 4];
array.push(5);
console.log(array);

const person = {
  name: 'Brad',
};
person.name = 'John';

person.email = 'brad@gmail.com';
console.log(person);

//Declare multiples variables at once
let a, b, c;
const d = 10,
  e = 20,
  f = 30;
console.log(d);
console.log(a);
