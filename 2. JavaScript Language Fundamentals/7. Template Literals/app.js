const name = 'Rajveer';
const age = 3;
const job = 'Web Developer';
const city = 'Pune';
let html;

//without template strings(ES5)

html = '<ul>' +
          '<li>Name : ' + name + '</li>' +
          '<li>Age : ' + age + '</li>' +
          '<li>Job : ' + job + '</li>' +
          '<li>City : ' + city + '</li>' 
       '</ul>';

//With template String(ES6)

html = `
      <ul>
         <li>Name : ${name}</li>
         <li>Age : ${age}</li>
         <li>Job : ${job}</li>
         <li>City : ${city}</li>
         <li>${4+3}</li>
         <li>${hello()}</li>
         <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
      </ul>
`;

function hello(){
  return 'Hello';
}

document.body.innerHTML = html;