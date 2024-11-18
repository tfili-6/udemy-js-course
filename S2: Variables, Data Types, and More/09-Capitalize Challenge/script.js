//Capitalize the first letter of the world

const myString = 'developper';
let myNewString;

myNewString = myString[0].toUpperCase();
myNewString = myNewString + myString.slice(1, myString.length);
// or myNewString = myNewString + myString.slice(1);

//Template
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);
