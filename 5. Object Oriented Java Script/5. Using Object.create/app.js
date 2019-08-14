const personPrototypes = {
    gretting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

//Create object 
const raj = Object.create(personPrototypes);

raj.firstName = 'Ash';
raj.lastName = 'Deshmukh';
raj.age = 30;
raj.getsMarried('Nimbalkar');


console.log(raj.gretting());

//Create object
const ran = Object.create(personPrototypes, {
    firstName: {value: 'Ranjit'},
    lastName: {value: 'Nimbalkar'},
    age: {value: 30}
});

console.log(ran.gretting());



