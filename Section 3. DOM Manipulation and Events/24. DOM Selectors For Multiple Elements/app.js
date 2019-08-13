// const items = document.getElementsByClassName('collection-item');
// items[0].style.color = 'red';
// items[3].textContent = 'Rajveer';
// console.log(items);

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

//documents.getElementsByTagName()
// const lis = document.getElementsByTagName('li');
// //console.log(lis);
// //console.log(lis[0]);

// const lisArr = Array.from(lis);
// //lisArr.reverse();

// lisArr.forEach(
//     function (li, index, arr){
//         //console.log(arr);
//         li.textContent = `${index}. Item`;
//     }
// );

// console.log(lisArr);

const items = document.querySelectorAll('ul.collection li.collection-item')
items.forEach(
    function (li, index, arr){
        //console.log(arr);
        li.textContent = `${index}. Item`;
    }
)

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

console.log(liOdd);

liOdd.forEach(function (li) {
        li.style.background = '#ccc';
});

liEven.forEach(function (li) {
    li.style.background = '#f4f4f4';
});

console.log(items);
