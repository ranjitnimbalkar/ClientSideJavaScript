class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    // Add Book To List
addBookToList (book){
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
  
  showAlert(msg, className){
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
  
  deleteBook (target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }
  
  // Clear Fields
  clearFields () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

//local storage class
class Store {
    static getBooks(){
        let books;

        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks(){
        const books = Store.getBooks();
        const ui = new UI();
        books.forEach(function(book){
            ui.addBookToList(book);
        });
    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }   
    
    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach(function(book, index){
            if( book.isbn === isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

//DOM load event
document.addEventListener('DOMContaintLoaded', Store.displayBooks());

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
      //add to local storage
      Store.addBook(book);
      //show sucess
      ui.showAlert('Book Added!!','success');
      // Clear fields
      ui.clearFields();
    }
    
    e.preventDefault();
  });
  
  //Event listener for delete
  document.getElementById('book-list').addEventListener('click',function(e){
    // Instantiate UI
    const ui = new UI();
    ui.deleteBook(e.target);
    //remove from local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    //show alert'
    ui.showAlert('Book Remove!!','success');
    e.preventDefault();
  });