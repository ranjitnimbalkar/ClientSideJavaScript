class Person {

    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastname}`;
    }

    calcualteAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    static addNumbers(x, y){
        return x + y;
    }
}

const raj = new Person('Rajveer','Nimbalkar','4-7-2016');

console.log(raj);
console.log(raj.calcualteAge());
console.log(Person.addNumbers(2,3));