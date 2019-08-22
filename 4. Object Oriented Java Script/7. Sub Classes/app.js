class Person {

    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`
    }
}

class Customer extends Person {

    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershiCost(){
        return 500;
    }
    
}

const raj = new Customer('Raj', 'Nimbalkar', '1234567890', 'Standard');

console.log(Customer.getMembershiCost());