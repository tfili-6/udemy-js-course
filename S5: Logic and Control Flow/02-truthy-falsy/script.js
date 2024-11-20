//Falsy Values:
// - false
// - 0
// - "" or '' (Empty Shirt)
// - null
// - undefined
// - NaN

// Truthy is anything opposite, any number, space, word, etc

const x = false;

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 2;

if (children != undefined) {
  //say undefined otherwise it will evluate 0 as a falsy, not as 0 children
  console.log(`You have ${children} children`);
} else {
  console.log(`Please enter number of childre`);
}

// Checking for empty arrays
const posts = [];

if (posts.length > 0) {
  console.log(`List Posts`);
} else {
  console.log(`No Posts to List`);
}

// Checking for empty objects
const user = {};

if (Object.keys(user).length > 0) {
  console.log('List user');
} else {
  console.log('No user');
}

// Loose equality (==)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);

console.log(false === 0);
console.log('' === 0);
