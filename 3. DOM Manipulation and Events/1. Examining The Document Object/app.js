let val;

val = document;
val = document.all;
val = document.all.length;
val = document.head;
val = document.body;
val = document.URL;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].classList;

val = document.scripts;
//val = document.scripts[2].getAttribute('src');
//convert HTMLCollection to Array
val = Array.from(val);

console.log(val);