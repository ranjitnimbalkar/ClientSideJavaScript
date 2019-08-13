//REPLACE ELEMENT

//Create new element
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

//get old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHeading,oldHeading);

//REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove list item
lis[0].remove();

//remove child element
list.removeChild(lis[3]);

//CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;
//CLASSES
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');

//Attribute
val = link.getAttribute('href');
val = link.setAttribute('href','http://locahost');
link.setAttribute('title','title');
val = link;
val = link.hasAttribute('title');

console.log(val);
