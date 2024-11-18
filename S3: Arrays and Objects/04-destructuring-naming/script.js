//Naming
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName, //if index and key are the same, only keep one
  lastName,
  age,
};

console.log(person.age);

//Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

//const { id, title, user } = todo;

const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(id, title);

//Arrays can be destructured
const numbers = [23, 76, 33, 49];
const [first, second] = numbers;

console.log(first, second, ...rest);
