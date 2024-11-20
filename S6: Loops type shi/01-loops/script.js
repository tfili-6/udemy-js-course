//for ([inital expression]; [condiion expression]; [increment expression])

for (let i = 0; i <= 10; i++) {
  //i can not be const as it changes every iteration
  console.log(`Number ${i}`);
}

//Nest loops
for (let i = 0; i <= 10; i++) {
  console.log(i);
  for (let j = 0; j <= 10; j++) {
    console.log(`${i} time ${j} is ${i * j}`);
  }
}

//Loop Through Array
const names = ['name1', 'name2', 'name3'];

for (let i = 0; i < names.length; i++) {
  console.log(`Names: ${names[i]}`);

  if (i === 1) {
    console.log('Break points');
    break;
  }
}

//Continue
for (let i = 0; i < 20; i++) {
  console.log(i);

  if (i === 13) {
    console.log('Skipping 13');
    continue;
  }

  console.log(i);
}

//While: use when the number of times the loop will run is unknown
let d = 0;

while (d <= 20) {
  console.log(`Number + ${i}`);
  d++;
}

const arr = [10, 20, 30, 40];

let n = 0;
while (n < arr.length) {
  console.log(arr[n]);
  n++;
}

// Do While: this will always run once, regardless of the condition (even if it is out of range)
// While: will not run, unless condition is met
do {
  console.log('Number: ' + i);
  i++;
} while (i <= 20);

//For Of Loop:
const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];
// for (let i = 0; i < items.lenght; i++) {
//   console.log(items[i]);
// }
s;
for (const items of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user.name);
}

//Loop Over Strings and any iterable object
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'green',
};

//For In Loops
for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArr) {
  console.log(colorArr[key]);
}
