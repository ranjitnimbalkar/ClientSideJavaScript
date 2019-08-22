const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
//clear input
taskInput.value = '';

//form.addEventListener('keydown',runEvent);
// taskInput.addEventListener('focus',runEvent);
// taskInput.addEventListener('blur',runEvent);
//taskInput.addEventListener('cut',runEvent);
//taskInput.addEventListener('paste',preventPaste);
//input evetn - type , cust , past
taskInput.addEventListener('input',runEvent);

function runEvent(e){
    console.log(`Event Type : ${e.type}`);
    //console.log(e.target);
    //heading.innerText = e.target.value;
    //e.preventDefault();
}

function preventPaste(e){
    console.log('Paste not allowed');
    e.preventDefault();
}