const person = {
    firstName : 'Rajveer',
    lastName : 'Nimbalkar',
    age: 3,
    email : 'rajveer@gmail.com',
    hobbies : ['Music','Sport'],
    address : {
        city : 'Pune',
        state : 'MH'
    },
    getBirthYear: function(){
        return new Date().getFullYear() - this.age;
    }
}

let val;

val = person;

//access object properties
val = person.firstName;
val = person['lastName'];
val = person.hobbies[1];
val = person.address.city;

val = person.getBirthYear();

console.log(val);

const people = [
  {name : 'Rajveer', age : 3},
  {name : 'Ashvini', age : 29},
  {name : 'Ranjit', age : 32}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}