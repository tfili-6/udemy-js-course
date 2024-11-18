let x;
x = 5 + '5'; //implicitly changed 5 to string, and then concatenated
x = 5 + Number('5');
x = 5 * '5'; //gives 25 as a number

x = 5 + null;
x = Number(null);
x = Number(true);
x = Number(false);
x = 5 + undefined;

console.log(x, typeof x);
