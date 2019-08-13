const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Click
//clearBtn.addEventListener('click',runEvent);
//double click
//clearBtn.addEventListener('dblclick',runEvent);
//mouse down
//clearBtn.addEventListener('mousedown',runEvent);
//clearBtn.addEventListener('mouseup',runEvent);
//mouse enter
// card.addEventListener('mouseenter',runEvent);
// //mouseleave
// card.addEventListener('mouseleave',runEvent);
// //mouse over
// card.addEventListener('mouseover',runEvent);
// //mouse our
// card.addEventListener('mouseout',runEvent);
card.addEventListener('mousemove',runEvent);

//Event Handler
function runEvent(e){
    console.log(`Even Type : ${e.type}`);
    heading.textContent = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 60)`;
    e.preventDefault();
}

