const sayHellow = function() {
    console.log('Hello');
}

const sayHollow1 = () => {
    console.log('hello');
}

//one line function does not need braces
const sayHollow2 = () =>  console.log('hello');

//one line function does not need braces and return keyword
const sayHello3 = () => 'Hello';

//Return object
const returnObject = () => ({title: 'This is title'});

//single parameter does not need parantheses
const singleParameter = name => console.log(`Hello ${name}`);
//multiple parameter need parantheses
const multiParameter = (fistName, lastName) => console.log(`Hello ${fistName} ${lastName}`);

const users = ['Nathan', ' John', 'william'];

const nameLenght = users.map(name => name.length);

sayHollow1();
sayHollow2();
console.log(sayHello3());
console.log(returnObject());
singleParameter('Rajveer');
multiParameter('Rajveer', 'Nimbalakar');
console.log(nameLenght);