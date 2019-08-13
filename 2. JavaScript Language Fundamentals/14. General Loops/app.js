//For loop
// for(let i = 0; i < 10; i++){
//     //console.log(i);
//     if(i === 2){
//         console.log('Two is my favorite number');
//         continue;
//     }
//     if(i === 5){
//         break;
//     }
//     console.log(i);
// }


//while loop
let i = 1000;

// while(i < 10){
//     console.log(i);
//     i++;
// }


//do while
// do {
//     console.log(i);
//     i++;
// } while(i < 10);

const cars = ['Ford','Chevy','Honda','Toyata'];

cars.forEach(function(car,index){
    console.log(car + ' ' + index);
});

const users = [
    {id:1, name:'Rajveer'},
    {id:2, name:'Ranjit'},
    {id:3, name:'Ashvini'}
];

const ids = users.map(function(user){
    return user.id;
})

console.log(ids);

const user = {
    firstName : 'Rajveer',
    lastName : 'Nimbalkar',
    age : 3
}

for(let prop in user){
    console.log(user[`${prop}`]);
}
