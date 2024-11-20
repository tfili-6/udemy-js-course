//FOR EACH
const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];
//console.log(socials.__proto__);

socials.forEach(function (social) {
  console.log(social);
});

socials.forEach((social, index, arr) =>
  console.log(`${index} - ${social}`, arr)
);

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
  { name: 'Twitter', url: 'twitter.com' },
  { name: 'Insta', url: 'insta.com' },
  { name: 'Snap', url: 'snap.com' },
  { name: 'LinkedIn', url: 'linkedin.com' },
];

socialObjs.forEach((item) => console.log(item.url));

//FILTER
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = nums.filter((number) => number % 2 == 0);

//Same with forEach
const evenNumbers1 = [];
numbers.forEach((numbers) => {
  if (number % 2 === 0) {
    evenNumbers1.push(number);
  }
});

// MAP
const numbers1 = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);
//Same with for each
const doubledNumbers2 = [];
numbers.forEach((number) => {
  doubledNumbers2.push(number * 2);
});
