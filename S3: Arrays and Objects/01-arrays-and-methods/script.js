let x;

//Array Literal
const numbers = [1, 2, 3, 4, 5];

//Array Constructor
const fruits = new Array('apple', 'grape', 'orange');
x = numbers[0];
x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

//Array Length
x = numbers.length;

//Changing Values
fruits[2] = 'pear';
// fruits.length = 2;

fruits[fruits.length] = 'strawberry';

//console.log(fruits);

//METHODS FOR ARRAYS
const arr = [34, 95, 16, 20];

//Push - add to end
arr.push(100);
//Pop - remove of end
arr.pop();
//Unfshit - add to front
arr.unshift(99);
//Shift - remove from front
arr.shift(99);
//Reverse
arr.reverse();
//Includes returns T or F
x = arr.includes(20);
//IndexOf
x = arr.indexOf(16);

//Slice and Splice
// x = arr.slice(1, 4); //leaves original array unchanged
// x = arr.splice(1, 3); //changes the original array by deleting 3 elements

//Chaining Methods
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x, arr);
