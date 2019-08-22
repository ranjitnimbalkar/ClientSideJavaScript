// document.querySelector('.clear-tasks').addEventListener('click',function(addEventListener){
//     console.log('Hello World');

//     event.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){
    //console.log('Hello World');
    let val;

    val = e;

    //Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    val = e.type;

    //coordinants relative to the window
    val = e.clientY;
    val = e.clientX;

    //coordinates relative to element
    val = e.offsetX;
    val = e.offsetY;
    
    console.log(val);
    e.preventDefault();
}