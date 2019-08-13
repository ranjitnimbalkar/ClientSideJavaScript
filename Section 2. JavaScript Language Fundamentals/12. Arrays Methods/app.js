// Create some array
const numbers = [43,46,73,22,8];
const numbers2 = new Array(22,45,77,23);

const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Rajveer', true, undefined, null,{a:1,b:3},new Date()];

let val;

val = numbers.length;
val = Array.isArray(numbers); //check whether array or not

//get Single value
val = numbers[2];

//insert into array
numbers[3] = 100;

//find index of value
val = numbers.indexOf(73);

//Mutating Arrays
numbers.push(74);

//add to front
numbers.unshift(16);

//remove from end
numbers.pop();

console.log(numbers);
console.log(val);
