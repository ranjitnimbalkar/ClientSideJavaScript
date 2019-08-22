//String
const name1 = 'Rajveer';
const name2 = new String('Rajveer');
//can add properties to build in objects
name2.foo = 'far';
//console.log(typeof name2);

// if('Rajveer' === name1)
//  console.log('litteral True');
// else 
//  console.log('litteral false');

//  if('Rajveer' === name2)
//   console.log('Object true');
//  else 
//   console.log('Object false');

//Number
const num1 = 5;
const num2 = new Number(5);
//console.log(typeof num2);

//boolean
const bool1 = true;
const bool2 = new Boolean(true);

//console.log(bool2);

//function
const getSum1 = function(x,y){
    return x+y;
}

const getSum2 = new Function('x','y','return 1+1;');

// console.log(getSum1(3,3));
// console.log(getSum2(4+4));

//Object
const obj1 = {
    name: 'Rajveer'
};

const obj2 = new Object({name: 'Rajveer'});

// console.log(obj1);
// console.log(obj2);

//Arrays
const arr1 = [1,2,3];
const arr2 = new Array(1,2,3);

// console.log(arr1);
// console.log(arr2);






