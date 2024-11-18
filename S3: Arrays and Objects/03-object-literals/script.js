let x;
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  adress: {
    street: '123 Main Street',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'books'],
};

x = person.name;
x = person['age'];
x = person.adress.state;
x = person.hobbies[0];

person.name = 'Jane Doe';
person.isAdmin = false;

delete person.age;
person.hasChildren = true; // adding

person.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};

//person.greet();

//x = console.log(person);

//------------------------------------------------------------------------//

//Nesting Objects and Spread Operator
let y;
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

const person1 = {
  adress: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};
y = person1.adress.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

x = obj4;

//Objects in Arrays
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup bread' },
  { id: 3, name: 'Take out trash' },
];

x = todos[0].name; //access name in object

x = Object.keys(todo); //take keys and puts them in an array

x = Object.keys(todo).length; //length

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('name');
x = todo.hasOwnProperty('false');

console.log(x);
