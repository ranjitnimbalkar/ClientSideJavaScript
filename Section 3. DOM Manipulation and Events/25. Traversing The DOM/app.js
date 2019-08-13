let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
val = listItem;
val = list;

//Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

//get children element nodes (recomended instead of childNodes)
val = list.children;
val = list.children[0];
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

//Get Parent node
val = listItem.parentElement;
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

//get next Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

//get next Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);