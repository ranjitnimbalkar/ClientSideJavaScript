// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;

  list.appendChild(row);
}

UI.prototype.showAlert = function(msg, className){
  //Create element
  const div = document.createElement('div');
  //add class names
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(msg));
  //get a parent
  const container = document.querySelector('.container');
  const form = document.querySelector("#book-form");
  container.insertBefore(div,form); 

  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000);
}

UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  if(title === '' || author === '' || isbn === ''){
    ui.showAlert('Plesae fill in all thel fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);
  }
  //show sucess
  ui.showAlert('Book Added!!','success');
  // Clear fields
  ui.clearFields();

  e.preventDefault();
});

//Event listener for delete
document.getElementById('book-list').addEventListener('click',function(e){
  // Instantiate UI
  const ui = new UI();
  ui.deleteBook(e.target);
  //show alert'
  ui.showAlert('Book Remove!!','success');
  e.preventDefault();
});