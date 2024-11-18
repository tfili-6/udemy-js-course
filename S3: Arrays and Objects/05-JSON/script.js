//JSON - JavaScript Object Notation
//Converting to JSON and viceversa
const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

//Convert to JSON string
const str = JSON.stringify(post);

//Convert JSON string to object: Parse JSON
const obj = JSON.parse(str);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);

console.log(str);

//Step 1
const library = [
  {
    title: '',
    author: '',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: '',
    author: '',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: '',
    author: '',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

//Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

//Step 3
const { title: firstBook } = library;
console.log(firstBook);

//Step 4
libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
