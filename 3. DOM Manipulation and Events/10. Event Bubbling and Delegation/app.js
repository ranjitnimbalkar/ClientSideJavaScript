// //Event Bubbling
// document.querySelector('.card-title').addEventListener('click',function (e){
//     console.log('Card Title');
// });

// document.querySelector('.card-content').addEventListener('click',function (e){
//     console.log('Card Content');
// });

// document.querySelector('.card').addEventListener('click',function (e){
//     console.log('Card');
// });

// document.querySelector('.col').addEventListener('click', function (e){
//     console.log('Col');
// });

//const delItem = document.querySelector('.delete-item');

//delItem.addEventListener('click', deleteItem);

document.querySelector('.collection').addEventListener('click',deleteItem);

function deleteItem(e){
    if(e.target.classList.contains('fa-remove')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}