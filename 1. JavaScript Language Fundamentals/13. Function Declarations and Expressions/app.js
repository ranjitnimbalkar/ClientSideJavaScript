//Function Declaration

function greet(){
    console.log('Function with name!!!');
}
greet();


//Function Expression
let f1 = function (firstName = 'firstName', lastName = 'lastName') {
    // if(typeof firstName === 'undefined') 
    //     firstName = 'firstName';
    // if(typeof lastName === 'undefined')
    //     lastName = 'lastName';
    console.log('Hello ' + firstName + ' ' + lastName);
}
f1();

//Imidiately invocable functon expression (IIFE)
(function (name){
    console.log('Hello ' + name)
})('Rajveer');

//Property Method
const todo = {
    add : function(){
        console.log('Add called');
    }
}

todo.add();