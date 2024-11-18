let x;

const name = 'John';
const age = 30;

x = 'Hello my name is ' + name + ' and I am ' + 30 + ' years old.';

//Template Literals
x = `Hello my name is ${name} and I am ${age} years old.`;

//String Properties and Method
const s = new String('Hello World'); //turns it into a temporary object to use a method on
x = s.length; //properties do not use brackets
x = typeof s;

//Idexing by key
x = s[0];
x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(4);
x = s.indexOf('H');

x = s.substring(0, 4);
x = s.substring(7);

x = s.slice(0, 5);
x = s.slice(-7, -3);

x = s.trim();
x = s.replace('World', 'John');

x = s.includes('Hell');
x = s.valueOf();

x = s.split('');

console.log(x);
