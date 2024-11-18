//This is a single line of code
// Use command forward slash to make a code line

// option + up down will move code lines
// shift + option + up down will duplicate lines
// command + D + up down will highlight stuff to edit all at once
// or command + shift + L

console.log('Hello');
console.log(100);
console.log(20, 'hello', true);

const x = 100;
console.log(x);

console.log('wwdwdwd');

console.error('Alert');

console.warn('Warning');

console.table({ name: 'Brad', email: 'brad@gmail.com' });

console.group('Simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color:green';
console.log('%cHello World', styles);
