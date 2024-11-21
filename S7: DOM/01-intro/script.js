//Document Element Properties
// let output;

// output = document.all;

// output = document.head;
// output = document.body;

// output = document.head.children;

// output = document.doctype;

// output = document.links;

// console.log(output);
// Not Useful ^^^^^^^^^ //

// document.getElementById()
console.log(document.getElementById('app-title')).getAttribute('id');

// Set attributes
document.getElementById('app-title').title = 'Shopping-List';
document.getElementById('app-title').setAttribute('class', 'title');

const title = getElementById('app-title');
console.log(title);

//Get/change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

//Change Styles
title.style.color = 'red';
title.style.backgroundColor = 'red';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));

const secondItem = console.log(document.querySelector('li:nth-child(2)"]'));
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

//Use methods on other elements other than document
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
