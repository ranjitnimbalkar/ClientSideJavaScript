//Person contructor
function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;    
}

Person.prototype.gretting = function(){
    return 'Person gretting';
}

const person = new Person('Rajveer','Nimbalkar');

console.log(person.gretting());

//Customer constructor
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

//Inherite the Person prototype methods
Customer.prototype = Object.create(Person.prototype);
//Make Customer.prototype return customer
Customer.prototype.constructor = Customer;

const cust1 = new Customer('Rajveer','Nimbalkar','99217382793','Gold');

//Override the prototype methods
Customer.prototype.gretting = function(){
    return `Cutomer gretting`;
}

console.log(cust1);

console.log(cust1.gretting());