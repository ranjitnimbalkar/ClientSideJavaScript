//document.getElementById()

// console.log(document.getElementById('task-title'));

// const taskTitle = document.getElementById('task-title');

// //change style
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '#5px';

// //change content
// taskTitle.textContent = 'Tasks List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

//document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

//document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'red';

//CSS pseudo classes
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Rajveer';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
