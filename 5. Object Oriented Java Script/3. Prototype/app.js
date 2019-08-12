//Object.prototype
//Person.prototype

//Person contructor
function Person(firstName,lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

//Get Full Name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person.prototype.getsMarried = function(name){
    this.lastName = name;
}

const raj = new Person('Rajveer','Nimbalkar','April 7 2016');
const ash = new Person('Ashvini','Deshmukh','09-13-1991');

console.log(ash.calculateAge());
console.log(ash.getFullName());
ash.getsMarried('Nimbalkar');
console.log(ash.getFullName());
//inhereted methods through prototype
console.log(raj.hasOwnProperty('firstName'));
