/*let d;

d = new Date();
d = d.toString();
d = new Date(2021, 6, 10, 12, 55, 30); //month is 0 based

d = new Date('2021-07-10T12:30');
d = new Date('07/10/2021 12:30:00');

d = Date.now();
d = new Date('7-10-2022 12:30:00');
d = d.getTime();
d = d.valueOf();

d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1731352269749);

d = Math.floor(Date.now() / 1000);

console.log(d);*/

let x;
let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

//INTL API
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleDateString('default', { month: 'short' });

console.log(x);
