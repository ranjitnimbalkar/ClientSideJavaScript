// //Iterator
// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < names.length ?
//             { value : names[nextIndex++], done : false} :
//             {done: true}
//         }
//     }    
// }

// // Names array
// const namesArr = ['Rajveer', 'Ranjit', 'Ashvini'];

// //Init iterator and pass names array
// const names = nameIterator(namesArr);

// while(true) {
//     let name = names.next();
//     if(name.done !== true){
//         console.log(name.value);
//     } else {
//         break;
//     }
// }

//Generator Example
// function* sayNames() {
//    yield 'Jack';
//    yield 'John';
//    yield 'Pankaj';
// }

// const names = sayNames();

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

//ID Creator
function* createId() {
    let index = 0;

    while(true) {
        yield index++;
    }
}

const gen = createId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

