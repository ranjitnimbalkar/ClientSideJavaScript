const firstName = 'Rajveer';
const lastName = 'Nimbalkar';
const age = 3;
const courses = 'Web design, Java Programming, Jave Script';

let val;

val = firstName + lastName;

//Concatenation
val = firstName + " " + lastName;

//Append
val = 'Ranjit ';
val += 'Nimbalkar';

//With Sting concatenation
//val = 'Hello, my name is ' + firstName + ' and I am ' + age;

//with string template
val = `Hello, my name is ${firstName} and I am ${age}`;

//Escaping
val = 'That\'s awesome , I can\'t wait';

val = firstName.length;

//concat
val = firstName.concat(' ',lastName);

//to upser case and lower case
val = val.toUpperCase();
val = val.toLowerCase();

//indexing string
val = firstName[3];
val = firstName.indexOf('v');
val = firstName.lastIndexOf('e');
val = firstName.charAt(3);
val = firstName.charAt(firstName.length - 1);

//substring
val = firstName.substring(2,6);

//slice() - firstName = Rajveer 
val = firstName.slice(-3,6);

//spilt
val = courses.split(',');

val.forEach((course,index,courses) => {
  courses[index] = course.trim();
});

console.log(val);