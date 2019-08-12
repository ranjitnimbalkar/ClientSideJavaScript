//Person contructor
function Person(name, dob){
    this.name = name;
    //this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        console.log(diff);
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const rajveer = new Person('rajveer','7-4-2016');

console.log(rajveer.calculateAge());