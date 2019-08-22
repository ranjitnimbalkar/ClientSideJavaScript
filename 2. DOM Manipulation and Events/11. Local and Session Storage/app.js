//set to local storage
//localStorage.setItem('name','Rajveer');

//get from local storage
// const name = localStorage.getItem('name');

// //clear from local storage
// localStorage.clear();

// console.log(name);

document.querySelector('form').addEventListener('submit', function(e){
    
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.preventDefault();
});