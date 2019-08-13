//Create element
const li = document.createElement('li');
    //Add Class
    li.className = 'collection-item';
    //Add id
    li.id = 'new-item';
    //add attribute
    li.setAttribute('title','New Item');
//Create text and append
li.appendChild(document.createTextNode('JS Created Item'));

//Create new link element
const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
//Append to li
li.appendChild(link);

const ul = document.querySelector('ul.collection').appendChild(li);

console.log(li);