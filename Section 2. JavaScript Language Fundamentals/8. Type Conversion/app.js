let val;

val = 5;

//Number to String
val = String(555);
val = String(5+4);

//Boolean to String
val = String(true);

//date to string
val = String(new Date());

//Array to string
val = String([1,2,3,4]);

//toString
val = (5).toString();
val = (true).toString();

//String to numbers
val = Number(5444);
val = Number(true); //1
val = Number(false); //0
val = Number(null); //0
val = Number('Hello'); //NaN

val = parseInt('100');
val = parseFloat('100.30');

// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum)