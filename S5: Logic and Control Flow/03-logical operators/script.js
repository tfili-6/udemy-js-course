//Ternary Operator
const age = 19;
//using an if statement
if (age >= 18) {
  console.log('YOu can vote');
} else {
  console.log('You can not vote');
}

// Using ternary operator: ?
age >= 18 ? console.log(`You can vote!`) : console.log('You can not vote!');

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? `You can vote` : `You can note vote`;

console.log(canVote);
console.log(canVote2);

//Multiple Statements
const auth = true;
let redirect;

if (auth) {
  alert('Welcome to the dashboard');
  redirect = '/dashboard';
} else {
  alert('Access denied');
  redirect = '/login';
}
console.log(redirect);

const redirect1 = auth
  ? (alert('Welcome to the dashboard'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect1);

auth ? console.log('Welcome to the dashboard') : null;
